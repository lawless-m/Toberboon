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

    console.log(`  Carving waterway ${index + 1} from (${startPos.x}, ${startPos.y}, ${startPos.z})`);

    const path: Vector3Int[] = [];
    const waterSources: Entity[] = [];

    // Trace path downhill with meandering
    let currentPos = { ...startPos };
    let currentHeight = startPos.z;
    const maxLength = this.config.waterwayLength;
    let steps = 0;

    while (steps < maxLength) {
      path.push({ ...currentPos });

      // Place water source every N steps
      if (steps % this.config.waterwayWaterSourceSpacing === 0) {
        waterSources.push(this.createWaterSource(currentPos.x, currentPos.y, currentPos.z + 1));
      }

      // Find next position downhill with meandering
      const nextPos = this.findNextWaterwayPosition(grid, currentPos, currentHeight);
      if (!nextPos) {
        break; // Reached bottom or edge
      }

      currentPos = nextPos;
      currentHeight = nextPos.z;
      steps++;
    }

    // Carve the channel along the path
    this.carveChannel(grid, path);

    return waterSources;
  }

  /**
   * Find a high point to start the waterway
   */
  private findHighStartPoint(grid: VoxelGrid | WasmVoxelGrid): Vector3Int | null {
    const { mapSize, maxHeight } = this.config;
    const minStartHeight = maxHeight * 0.6; // Start in upper 40% of terrain

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
   * Find the next position in the waterway path
   * Combines downhill flow with meandering for natural curves
   */
  private findNextWaterwayPosition(
    grid: VoxelGrid | WasmVoxelGrid,
    current: Vector3Int,
    currentHeight: number
  ): Vector3Int | null {
    const candidates: Array<{ pos: Vector3Int; height: number; score: number }> = [];

    // Check all 8 horizontal directions
    const directions = [
      { dx: 1, dy: 0 },   // East
      { dx: -1, dy: 0 },  // West
      { dx: 0, dy: 1 },   // South
      { dx: 0, dy: -1 },  // North
      { dx: 1, dy: 1 },   // SE
      { dx: -1, dy: 1 },  // SW
      { dx: 1, dy: -1 },  // NE
      { dx: -1, dy: -1 }, // NW
    ];

    for (const dir of directions) {
      const newX = current.x + dir.dx;
      const newY = current.y + dir.dy;

      // Check bounds
      if (newX < 1 || newX >= grid.width - 1 || newY < 1 || newY >= grid.depth - 1) {
        continue;
      }

      const surfaceHeight = this.findSurfaceHeight(grid, newX, newY);

      // Prefer going downhill, but allow slight uphill with meandering
      const heightDelta = currentHeight - surfaceHeight;
      const meander = this.random() * this.config.waterwayMeandering;

      // Score: prefer downhill, add randomness for curves
      const score = heightDelta + meander;

      candidates.push({
        pos: { x: newX, y: newY, z: surfaceHeight },
        height: surfaceHeight,
        score
      });
    }

    if (candidates.length === 0) {
      return null;
    }

    // Sort by score (highest = best)
    candidates.sort((a, b) => b.score - a.score);

    // Pick from top candidates with some randomness
    const topCandidates = candidates.slice(0, 3);
    const chosen = topCandidates[Math.floor(this.random() * topCandidates.length)];

    return chosen.pos;
  }

  /**
   * Carve a channel through the terrain along the waterway path
   */
  private carveChannel(grid: VoxelGrid | WasmVoxelGrid, path: Vector3Int[]) {
    const { waterwayWidth, waterwayDepth } = this.config;

    for (const point of path) {
      // Carve area around each point
      for (let dz = 0; dz < waterwayDepth; dz++) {
        for (let dy = -waterwayWidth; dy <= waterwayWidth; dy++) {
          for (let dx = -waterwayWidth; dx <= waterwayWidth; dx++) {
            // Distance from center (for rounded channel)
            const dist = Math.sqrt(dx * dx + dy * dy);
            if (dist > waterwayWidth) continue;

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
