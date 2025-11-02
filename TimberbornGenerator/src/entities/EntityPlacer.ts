import { VoxelGrid } from '../core/VoxelGrid';
import { GeneratorConfig, Entity, Vector3Int } from '../types';

/**
 * EntityPlacer - Places game entities (water sources, trees, bushes)
 *
 * ✅ TypeScript is fine here - entity placement is not performance-critical.
 * This runs after voxel generation and involves relatively few entities.
 */
export class EntityPlacer {
  private random: () => number;

  constructor(private config: GeneratorConfig) {
    this.random = this.seededRandom(config.seed + 5000);
  }

  /**
   * Place all entities on the terrain
   */
  placeAll(grid: VoxelGrid): Entity[] {
    console.log('🎯 Placing entities...');
    console.time('entities');

    const entities: Entity[] = [];

    // Place starting location (critical!)
    entities.push(this.placeStartingLocation(grid));

    // Place water sources
    entities.push(...this.placeWaterSources(grid));

    // Place vegetation
    entities.push(...this.placeVegetation(grid));

    console.timeEnd('entities');
    console.log(`  ✓ Placed ${entities.length} entities`);

    return entities;
  }

  /**
   * Place starting location on flat terrain
   */
  private placeStartingLocation(grid: VoxelGrid): Entity {
    console.log('  Finding flat area for starting location...');

    const flatArea = this.findFlatArea(grid, 6);

    if (!flatArea) {
      console.warn('  ⚠️  No perfectly flat area found, using fallback');
      // Fallback: center of map at reasonable height
      const centerX = Math.floor(grid.width / 2);
      const centerY = Math.floor(grid.depth / 2);
      const z = this.findSurfaceHeight(grid, centerX, centerY);

      return this.createStartingLocation(centerX, centerY, z + 1);
    }

    console.log(`  ✓ Starting location at (${flatArea.x}, ${flatArea.y}, ${flatArea.z})`);

    return this.createStartingLocation(flatArea.x, flatArea.y, flatArea.z + 1);
  }

  /**
   * Find a flat 6x6 area for starting location
   */
  private findFlatArea(grid: VoxelGrid, size: number): Vector3Int | null {
    const { width, depth } = grid;

    // Start from center and spiral outward
    const centerX = Math.floor(width / 2);
    const centerY = Math.floor(depth / 2);

    for (let radius = 0; radius < Math.min(width, depth) / 2; radius += 5) {
      for (let angle = 0; angle < Math.PI * 2; angle += 0.5) {
        const x = Math.floor(centerX + Math.cos(angle) * radius);
        const y = Math.floor(centerY + Math.sin(angle) * radius);

        if (this.isAreaFlat(grid, x, y, size)) {
          const z = this.findSurfaceHeight(grid, x, y);
          return { x, y, z };
        }
      }
    }

    return null;
  }

  /**
   * Check if an area is flat (all blocks at same height)
   */
  private isAreaFlat(grid: VoxelGrid, startX: number, startY: number, size: number): boolean {
    const baseHeight = this.findSurfaceHeight(grid, startX, startY);

    for (let dy = 0; dy < size; dy++) {
      for (let dx = 0; dx < size; dx++) {
        const x = startX + dx;
        const y = startY + dy;

        if (x >= grid.width || y >= grid.depth) return false;

        const height = this.findSurfaceHeight(grid, x, y);
        if (Math.abs(height - baseHeight) > 0) return false;

        // Check for air above (no overhangs)
        for (let z = height + 1; z < Math.min(height + 4, grid.height); z++) {
          if (grid.isSolid({ x, y, z })) return false;
        }
      }
    }

    return true;
  }

  /**
   * Find surface height at x, y
   */
  private findSurfaceHeight(grid: VoxelGrid, x: number, y: number): number {
    for (let z = grid.height - 1; z >= 0; z--) {
      if (grid.isSolid({ x, y, z })) {
        return z;
      }
    }
    return 0;
  }

  /**
   * Place water sources at high elevations
   */
  private placeWaterSources(grid: VoxelGrid): Entity[] {
    const sources: Entity[] = [];
    const { waterSourceCount, mapSize } = this.config;

    console.log(`  Placing ${waterSourceCount} water sources...`);

    for (let i = 0; i < waterSourceCount; i++) {
      const x = Math.floor(this.random() * mapSize);
      const y = Math.floor(this.random() * mapSize);
      const z = this.findSurfaceHeight(grid, x, y);

      // Only place on high terrain
      if (z > this.config.maxHeight * 0.5) {
        sources.push(this.createWaterSource(x, y, z + 1, 1.0));
      }
    }

    return sources;
  }

  /**
   * Place trees and bushes
   */
  private placeVegetation(grid: VoxelGrid): Entity[] {
    const entities: Entity[] = [];
    const { mapSize, treeDensity, bushDensity } = this.config;

    const treeCount = Math.floor((mapSize * mapSize) * treeDensity / 100);
    const bushCount = Math.floor((mapSize * mapSize) * bushDensity / 100);

    console.log(`  Placing ${treeCount} trees and ${bushCount} bushes in clusters...`);

    const treeTypes = ['Pine', 'Birch', 'Maple'];
    const bushTypes = ['BlueberryBush'];

    // Place trees in species-specific clusters
    entities.push(...this.placeTreesInClusters(grid, treeCount, treeTypes));

    // Place bushes in clusters
    entities.push(...this.placeBushesInClusters(grid, bushCount, bushTypes));

    return entities;
  }

  /**
   * Place trees in natural clusters by species
   */
  private placeTreesInClusters(grid: VoxelGrid, totalCount: number, treeTypes: string[]): Entity[] {
    const entities: Entity[] = [];
    const { mapSize } = this.config;

    // Calculate how many trees per species
    const treesPerSpecies = Math.floor(totalCount / treeTypes.length);
    const remainder = totalCount % treeTypes.length;

    for (let speciesIndex = 0; speciesIndex < treeTypes.length; speciesIndex++) {
      const species = treeTypes[speciesIndex];
      const count = treesPerSpecies + (speciesIndex < remainder ? 1 : 0);

      // Create 2-4 cluster centers for this species
      const clusterCount = Math.max(2, Math.min(4, Math.floor(count / 10)));
      const clusters: Vector3Int[] = [];

      for (let i = 0; i < clusterCount; i++) {
        clusters.push({
          x: Math.floor(this.random() * mapSize),
          y: Math.floor(this.random() * mapSize),
          z: 0 // Will be updated when placing
        });
      }

      // Place trees around cluster centers
      for (let i = 0; i < count; i++) {
        // Pick a random cluster center
        const cluster = clusters[Math.floor(this.random() * clusters.length)];

        // Cluster radius: 5-15 blocks
        const radius = 5 + this.random() * 10;
        const angle = this.random() * Math.PI * 2;
        const distance = this.random() * radius;

        const x = Math.floor(cluster.x + Math.cos(angle) * distance);
        const y = Math.floor(cluster.y + Math.sin(angle) * distance);

        // Bounds check
        if (x < 0 || x >= mapSize || y < 0 || y >= mapSize) {
          continue;
        }

        const z = this.findSurfaceHeight(grid, x, y);

        // Skip if underwater or too low
        if (z < this.config.maxHeight * 0.2) {
          continue;
        }

        entities.push(this.createTree(x, y, z + 1, species));
      }
    }

    return entities;
  }

  /**
   * Place bushes in small clusters
   */
  private placeBushesInClusters(grid: VoxelGrid, totalCount: number, bushTypes: string[]): Entity[] {
    const entities: Entity[] = [];
    const { mapSize } = this.config;

    // Bushes in smaller, more numerous clusters
    const clusterCount = Math.max(5, Math.floor(totalCount / 5));
    const bushesPerCluster = Math.floor(totalCount / clusterCount);

    for (let i = 0; i < clusterCount; i++) {
      const bushType = bushTypes[Math.floor(this.random() * bushTypes.length)];

      // Cluster center
      const centerX = Math.floor(this.random() * mapSize);
      const centerY = Math.floor(this.random() * mapSize);

      // Place bushes in tight cluster (2-4 block radius)
      for (let j = 0; j < bushesPerCluster; j++) {
        const radius = 2 + this.random() * 2;
        const angle = this.random() * Math.PI * 2;
        const distance = this.random() * radius;

        const x = Math.floor(centerX + Math.cos(angle) * distance);
        const y = Math.floor(centerY + Math.sin(angle) * distance);

        if (x < 0 || x >= mapSize || y < 0 || y >= mapSize) {
          continue;
        }

        const z = this.findSurfaceHeight(grid, x, y);

        // Skip if too low
        if (z < this.config.maxHeight * 0.2) {
          continue;
        }

        entities.push(this.createBush(x, y, z + 1, bushType));
      }
    }

    return entities;
  }

  // Entity creation helpers
  private createStartingLocation(x: number, y: number, z: number): Entity {
    return {
      Id: this.generateGuid(),
      Template: 'StartingLocation',
      Components: {
        BlockObject: {
          Coordinates: { X: x, Y: y, Z: z },
          Orientation: 'Cw0'
        }
      }
    };
  }

  private createWaterSource(x: number, y: number, z: number, strength: number): Entity {
    return {
      Id: this.generateGuid(),
      Template: 'WaterSource',
      Components: {
        BlockObject: {
          Coordinates: { X: x, Y: y, Z: z },
          Orientation: 'Cw0'
        },
        WaterSource: {
          SpecifiedStrength: strength,
          CurrentStrength: strength
        }
      }
    };
  }

  private createTree(x: number, y: number, z: number, type: string): Entity {
    return {
      Id: this.generateGuid(),
      Template: type,
      Components: {
        BlockObject: {
          Coordinates: { X: x, Y: y, Z: z }
        },
        Growable: {
          GrowthProgress: 1.0
        }
      }
    };
  }

  private createBush(x: number, y: number, z: number, type: string): Entity {
    return {
      Id: this.generateGuid(),
      Template: type,
      Components: {
        BlockObject: {
          Coordinates: { X: x, Y: y, Z: z }
        },
        Growable: {
          GrowthProgress: 1.0
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
