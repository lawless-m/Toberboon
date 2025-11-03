import { VoxelGrid } from '../core/VoxelGrid';
import { WasmVoxelGrid } from '../core/WasmVoxelGrid';
import { GeneratorConfig, Vector3Int, VoxelType, Entity } from '../types';

/**
 * WaterwayGenerator - Creates natural winding rivers through terrain erosion
 *
 * Generates realistic waterways by:
 * 1. Starting at high elevation
 * 2. Following terrain downhill with meandering
 * 3. Carving a channel through the terrain
 * 4. Placing water sources along the path
 */
export class WaterwayGenerator {
  private random: () => number;

  constructor(private config: GeneratorConfig) {
    this.random = this.seededRandom(config.seed + 3000);
  }

  /**
   * Generate waterways through the terrain
   */
  generate(grid: VoxelGrid | WasmVoxelGrid): Entity[] {
    if (!this.config.generateWaterways) {
      console.log('💧 Skipping waterway generation (disabled)');
      return [];
    }

    console.log('💧 Generating waterways...');
    console.time('waterways');

    const waterSources: Entity[] = [];

    for (let i = 0; i < this.config.waterwayCount; i++) {
      const sources = this.generateSingleWaterway(grid, i);
      waterSources.push(...sources);
    }

    console.timeEnd('waterways');
    console.log(`  ✓ Generated ${this.config.waterwayCount} waterways with ${waterSources.length} water sources`);

    return waterSources;
  }

  /**
   * Generate a single waterway from high to low elevation
   */
  private generateSingleWaterway(grid: VoxelGrid | WasmVoxelGrid, index: number): Entity[] {
    // Find a high starting point
    const startPos = this.findHighStartPoint(grid);
    if (!startPos) {
      console.warn('  ⚠️ Could not find suitable starting point for waterway');
      return [];
    }

    // Find a low ending point (opposite side of map or low elevation)
    const endPos = this.findLowEndPoint(grid, startPos);
    if (!endPos) {
      console.warn('  ⚠️ Could not find suitable ending point for waterway');
      return [];
    }

    console.log(`  Carving waterway ${index + 1} from (${startPos.x}, ${startPos.y}) to (${endPos.x}, ${endPos.y})`);

    // Generate path using improved algorithm
    const path = this.generateWaterwayPath(grid, startPos, endPos);

    if (path.length === 0) {
      console.warn('  ⚠️ Could not generate waterway path');
      return [];
    }

    // Carve the channel FIRST, then place water sources at the carved depth
    this.carveChannel(grid, path);

    // Place water sources along the carved path
    const waterSources: Entity[] = [];
    const spacing = Math.max(30, this.config.waterwayWaterSourceSpacing); // At least 30 blocks apart
    for (let i = 0; i < path.length; i += spacing) {
      const pos = path[i];
      // Find the new surface height after carving
      const carvedHeight = this.findSurfaceHeight(grid, pos.x, pos.y);
      // Place water source one block above the carved surface
      const safeZ = Math.min(carvedHeight + 1, grid.height - 1);
      waterSources.push(this.createWaterSource(pos.x, pos.y, safeZ));
    }

    return waterSources;
  }

  /**
   * Find a low point to end the waterway (opposite side or edge)
   */
  private findLowEndPoint(grid: VoxelGrid | WasmVoxelGrid, startPos: Vector3Int): Vector3Int | null {
    const { mapSize } = this.config;

    // Try to find a point on the opposite side of the map at low elevation
    const targets: Vector3Int[] = [];

    // Sample points along edges
    const edgePoints = 20;
    for (let i = 0; i < edgePoints; i++) {
      const t = i / edgePoints;

      // Try all four edges
      const candidates = [
        { x: 0, y: Math.floor(t * mapSize) },                    // Left edge
        { x: mapSize - 1, y: Math.floor(t * mapSize) },          // Right edge
        { x: Math.floor(t * mapSize), y: 0 },                    // Top edge
        { x: Math.floor(t * mapSize), y: mapSize - 1 },          // Bottom edge
      ];

      for (const pos of candidates) {
        const surfaceHeight = this.findSurfaceHeight(grid, pos.x, pos.y);
        // Prefer low points that are far from start
        const distance = Math.abs(pos.x - startPos.x) + Math.abs(pos.y - startPos.y);
        if (distance > mapSize * 0.5) {
          targets.push({ x: pos.x, y: pos.y, z: surfaceHeight });
        }
      }
    }

    if (targets.length === 0) return null;

    // Pick the lowest target
    targets.sort((a, b) => a.z - b.z);
    return targets[0];
  }

  /**
   * Generate waterway path using simplified flow algorithm
   */
  private generateWaterwayPath(
    grid: VoxelGrid | WasmVoxelGrid,
    start: Vector3Int,
    end: Vector3Int
  ): Vector3Int[] {
    const path: Vector3Int[] = [];
    let current = { ...start };
    const maxSteps = this.config.mapSize * 3;

    for (let step = 0; step < maxSteps; step++) {
      path.push({ ...current });

      // Stop if we reached the end area
      const distToEnd = Math.abs(current.x - end.x) + Math.abs(current.y - end.y);
      if (distToEnd < 3) {
        break;
      }

      // Find best next position (prefer moving toward end while going downhill)
      const next = this.findBestNextPosition(grid, current, end);
      if (!next) {
        break; // Can't continue
      }

      current = next;
    }

    return path;
  }

  /**
   * Find the best next position balancing downhill flow and target direction
   */
  private findBestNextPosition(
    grid: VoxelGrid | WasmVoxelGrid,
    current: Vector3Int,
    target: Vector3Int
  ): Vector3Int | null {
    const candidates: Array<{ pos: Vector3Int; score: number }> = [];

    const directions = [
      { dx: 1, dy: 0 }, { dx: -1, dy: 0 },
      { dx: 0, dy: 1 }, { dx: 0, dy: -1 },
      { dx: 1, dy: 1 }, { dx: -1, dy: 1 },
      { dx: 1, dy: -1 }, { dx: -1, dy: -1 },
    ];

    const currentHeight = this.findSurfaceHeight(grid, current.x, current.y);

    for (const dir of directions) {
      const newX = current.x + dir.dx;
      const newY = current.y + dir.dy;

      if (newX < 0 || newX >= grid.width || newY < 0 || newY >= grid.depth) {
        continue;
      }

      const surfaceHeight = this.findSurfaceHeight(grid, newX, newY);
      const newPos = { x: newX, y: newY, z: surfaceHeight };

      // Score based on: going downhill + moving toward target + meandering
      const heightScore = (currentHeight - surfaceHeight) * 3; // Prefer downhill (strongest)
      const distCurrent = Math.abs(current.x - target.x) + Math.abs(current.y - target.y);
      const distNew = Math.abs(newX - target.x) + Math.abs(newY - target.y);
      const targetScore = (distCurrent - distNew) * 0.5; // Weak preference for target (allow wandering)
      const meander = (this.random() - 0.5) * this.config.waterwayMeandering * 4; // Bidirectional randomness

      const score = heightScore + targetScore + meander;
      candidates.push({ pos: newPos, score });
    }

    if (candidates.length === 0) return null;

    // Sort by score and pick from top candidates
    candidates.sort((a, b) => b.score - a.score);
    const topCandidates = candidates.slice(0, Math.min(3, candidates.length));
    return topCandidates[Math.floor(this.random() * topCandidates.length)].pos;
  }

  /**
   * Find a high point to start the waterway
   */
  private findHighStartPoint(grid: VoxelGrid | WasmVoxelGrid): Vector3Int | null {
    const { mapSize } = this.config;
    // Use actual grid height, not config maxHeight (which may be higher than terrain)
    const TIMBERBORN_MAX_HEIGHT = 22;
    const minStartHeight = TIMBERBORN_MAX_HEIGHT * 0.5; // Start in upper half of terrain

    // Try random positions until we find a high one
    for (let attempt = 0; attempt < 100; attempt++) {
      const x = Math.floor(this.random() * mapSize);
      const y = Math.floor(this.random() * mapSize);

      // Find surface height at this position
      const surfaceHeight = this.findSurfaceHeight(grid, x, y);

      if (surfaceHeight >= minStartHeight) {
        return { x, y, z: surfaceHeight };
      }
    }

    return null;
  }


  /**
   * Carve a channel through the terrain along the waterway path
   */
  private carveChannel(grid: VoxelGrid | WasmVoxelGrid, path: Vector3Int[]) {
    const { waterwayWidth, waterwayDepth } = this.config;

    for (let i = 0; i < path.length; i++) {
      const point = path[i];

      // Vary width and depth along the path for natural variation
      const progressRatio = i / path.length;
      const variation = Math.sin(progressRatio * Math.PI * 3) * 0.3; // Sine wave variation
      const widthMultiplier = 0.8 + variation + this.random() * 0.4; // 0.8 to 1.5x
      const depthMultiplier = 0.7 + this.random() * 0.6; // 0.7 to 1.3x

      const localWidth = Math.max(1, Math.floor(waterwayWidth * widthMultiplier));
      const localDepth = Math.max(1, Math.floor(waterwayDepth * depthMultiplier));

      // Carve area around this point with local dimensions
      for (let dz = 0; dz < localDepth; dz++) {
        for (let dy = -localWidth; dy <= localWidth; dy++) {
          for (let dx = -localWidth; dx <= localWidth; dx++) {
            // Distance from center (for rounded channel)
            const dist = Math.sqrt(dx * dx + dy * dy);
            if (dist > localWidth) continue;

            const x = point.x + dx;
            const y = point.y + dy;
            const z = point.z - dz;

            if (grid.isInBounds({ x, y, z })) {
              grid.set({ x, y, z }, VoxelType.Air);
            }
          }
        }
      }
    }
  }

  /**
   * Find surface height at x, y
   */
  private findSurfaceHeight(grid: VoxelGrid | WasmVoxelGrid, x: number, y: number): number {
    for (let z = grid.height - 1; z >= 0; z--) {
      if (grid.isSolid({ x, y, z })) {
        return z;
      }
    }
    return 0;
  }

  /**
   * Create a water source entity
   */
  private createWaterSource(x: number, y: number, z: number): Entity {
    return {
      Id: this.generateGuid(),
      Template: 'WaterSource',
      Components: {
        BlockObject: {
          Coordinates: { X: x, Y: y, Z: z },
          Orientation: 'Cw0'
        },
        WaterSource: {
          SpecifiedStrength: 1.0,
          CurrentStrength: 1.0
        }
      }
    };
  }

  private generateGuid(): string {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (c) => {
      const r = (this.random() * 16) | 0;
      const v = c === 'x' ? r : (r & 0x3) | 0x8;
      return v.toString(16);
    });
  }

  private seededRandom(seed: number): () => number {
    let state = seed;
    return () => {
      state = (state * 1664525 + 1013904223) % 2 ** 32;
      return state / 2 ** 32;
    };
  }
}
