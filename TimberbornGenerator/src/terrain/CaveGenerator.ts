import FastNoiseLite from 'fastnoise-lite';
import { VoxelGrid } from '../core/VoxelGrid';
import { GeneratorConfig, Vector3Int, VoxelType } from '../types';

/**
 * CaveGenerator - Creates cave systems using worm tunnels and 3D noise
 *
 * 🔥 WASM CANDIDATE: Cave carving involves intensive 3D iteration and noise sampling.
 * A Rust WASM implementation could provide:
 * - 5-10x faster cave generation
 * - Parallel tunnel carving
 * - SIMD for bulk voxel clearing
 *
 * TypeScript is acceptable for small cave systems.
 * For complex caves or large maps, WASM would be beneficial.
 */
export class CaveGenerator {
  private noise: FastNoiseLite;

  constructor(private config: GeneratorConfig) {
    this.noise = new FastNoiseLite(config.seed + 1000); // Different seed for caves
    this.noise.SetNoiseType(FastNoiseLite.NoiseType.OpenSimplex2);
    this.noise.SetFrequency(0.05);
  }

  /**
   * Generate caves by carving tunnels and caverns
   */
  generate(grid: VoxelGrid): void {
    if (!this.config.generateCaves) {
      console.log('⛰️  Skipping cave generation (disabled)');
      return;
    }

    console.log('🕳️  Generating caves...');
    console.time('caves');

    // Generate worm tunnels
    this.generateWormTunnels(grid);

    // Generate noise-based caverns
    this.generateCaverns(grid);

    console.timeEnd('caves');
    console.log(`  ✓ Caves generated`);
  }

  /**
   * Generate worm-style tunnels that carve through terrain
   */
  private generateWormTunnels(grid: VoxelGrid): void {
    const { caveCount, mapSize, maxHeight } = this.config;
    const random = this.seededRandom(this.config.seed + 2000);

    for (let i = 0; i < caveCount; i++) {
      // Random start position (underground)
      const start: Vector3Int = {
        x: Math.floor(random() * mapSize),
        y: Math.floor(random() * mapSize),
        z: Math.floor(5 + random() * (maxHeight * 0.6))
      };

      this.carveWormTunnel(grid, start, random);
    }
  }

  /**
   * Carve a single worm tunnel
   */
  private carveWormTunnel(grid: VoxelGrid, start: Vector3Int, random: () => number): void {
    const segments = 50 + Math.floor(random() * 50);
    const radius = 2 + Math.floor(random() * 2);

    let pos = { ...start };
    let direction = {
      x: (random() - 0.5) * 2,
      y: (random() - 0.5) * 2,
      z: (random() - 0.5) * 0.5  // Prefer horizontal
    };

    for (let i = 0; i < segments; i++) {
      // Carve sphere at current position
      this.carveSphere(grid, pos, radius);

      // Update direction (smooth random walk)
      direction.x += (random() - 0.5) * 0.5;
      direction.y += (random() - 0.5) * 0.5;
      direction.z += (random() - 0.5) * 0.3;

      // Normalize direction
      const length = Math.sqrt(
        direction.x ** 2 + direction.y ** 2 + direction.z ** 2
      );
      if (length > 0) {
        direction.x /= length;
        direction.y /= length;
        direction.z /= length;
      }

      // Move forward
      pos.x += direction.x * 1.5;
      pos.y += direction.y * 1.5;
      pos.z += direction.z * 1.5;

      // Clamp to bounds
      pos.x = Math.max(1, Math.min(pos.x, grid.width - 2));
      pos.y = Math.max(1, Math.min(pos.y, grid.depth - 2));
      pos.z = Math.max(3, Math.min(pos.z, grid.height - 2));
    }
  }

  /**
   * Carve a sphere (remove voxels)
   */
  private carveSphere(grid: VoxelGrid, center: Vector3Int, radius: number): void {
    const r2 = radius * radius;

    for (let z = -radius; z <= radius; z++) {
      for (let y = -radius; y <= radius; y++) {
        for (let x = -radius; x <= radius; x++) {
          const dist2 = x * x + y * y + z * z;
          if (dist2 <= r2) {
            grid.set({
              x: Math.floor(center.x + x),
              y: Math.floor(center.y + y),
              z: Math.floor(center.z + z)
            }, VoxelType.Air);
          }
        }
      }
    }
  }

  /**
   * Generate noise-based caverns (large open spaces)
   */
  private generateCaverns(grid: VoxelGrid): void {
    const { mapSize, maxHeight, caveThreshold } = this.config;

    // Only check underground voxels (optimization)
    for (let z = 3; z < maxHeight * 0.7; z++) {
      for (let y = 0; y < mapSize; y++) {
        for (let x = 0; x < mapSize; x++) {
          const pos = { x, y, z };

          // Only check solid voxels
          if (!grid.isSolid(pos)) continue;

          // Sample 3D noise
          const noiseValue = this.noise.GetNoise(
            x * 0.1,
            y * 0.1,
            z * 0.1
          );

          // Carve if noise exceeds threshold
          if (noiseValue > caveThreshold) {
            grid.set(pos, VoxelType.Air);
          }
        }
      }
    }
  }

  /**
   * Simple seeded random number generator
   */
  private seededRandom(seed: number): () => number {
    let state = seed;
    return () => {
      state = (state * 1664525 + 1013904223) % 2 ** 32;
      return state / 2 ** 32;
    };
  }
}
