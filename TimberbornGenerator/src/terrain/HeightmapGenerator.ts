import FastNoiseLite from 'fastnoise-lite';
import { GeneratorConfig } from '../types';

/**
 * HeightmapGenerator - Creates 2D heightmap using multi-octave noise
 *
 * 🔥 WASM CANDIDATE: Noise generation is CPU-intensive.
 * FastNoiseLite has a C++ version that could be compiled to WASM for ~3x speedup.
 *
 * Current JS implementation is acceptable for maps up to 128×128.
 * For larger maps or real-time generation, WASM would help significantly.
 */
export class HeightmapGenerator {
  private noise: FastNoiseLite;

  constructor(private config: GeneratorConfig) {
    this.noise = new FastNoiseLite(config.seed);
    this.noise.SetNoiseType(FastNoiseLite.NoiseType.OpenSimplex2);
    this.noise.SetFractalType(FastNoiseLite.FractalType.FBm);
    this.noise.SetFractalOctaves(config.octaves);
    this.noise.SetFractalLacunarity(config.lacunarity);
    this.noise.SetFractalGain(config.persistence);
  }

  /**
   * Generate a 2D heightmap
   * Returns: heightmap[y][x] = height value (0 to maxHeight)
   */
  generate(): number[][] {
    console.log('🏔️ Generating heightmap...');
    console.time('heightmap');

    const { mapSize, maxHeight, noiseScale } = this.config;
    const heightmap: number[][] = [];

    for (let y = 0; y < mapSize; y++) {
      heightmap[y] = [];
      for (let x = 0; x < mapSize; x++) {
        // Get noise value (-1 to 1)
        const noiseValue = this.noise.GetNoise(
          x * noiseScale,
          y * noiseScale
        );

        // Convert to height (0 to maxHeight)
        // Add base height to avoid flat areas at 0
        const baseHeight = maxHeight * 0.3;
        const height = baseHeight + ((noiseValue + 1) / 2) * (maxHeight - baseHeight);

        heightmap[y][x] = Math.max(1, Math.min(height, maxHeight));
      }
    }

    console.timeEnd('heightmap');
    console.log(`  ✓ Generated ${mapSize}×${mapSize} heightmap`);

    return heightmap;
  }

  /**
   * Apply gradient to create more interesting terrain
   * (Optional enhancement)
   */
  applyGradient(heightmap: number[][]): number[][] {
    const size = heightmap.length;
    const center = size / 2;
    const maxDist = Math.sqrt(2) * center;

    for (let y = 0; y < size; y++) {
      for (let x = 0; x < size; x++) {
        // Distance from center
        const dx = x - center;
        const dy = y - center;
        const dist = Math.sqrt(dx * dx + dy * dy);

        // Gradient falloff (edges lower than center)
        const falloff = 1 - Math.min(dist / maxDist, 1) ** 2;

        heightmap[y][x] *= 0.5 + falloff * 0.5;
      }
    }

    return heightmap;
  }
}
