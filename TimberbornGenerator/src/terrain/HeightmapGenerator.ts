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

    const { mapSize } = this.config;
    const heightmap: number[][] = [];

    // CRITICAL: Timberborn has exactly 23 vertical layers (0-22)
    const TIMBERBORN_MAX_HEIGHT = 22;

    // Use multiple noise octaves for dramatic terrain
    // Base terrain (large features)
    const largeNoise = new FastNoiseLite(this.config.seed);
    largeNoise.SetNoiseType(FastNoiseLite.NoiseType.OpenSimplex2);
    largeNoise.SetFractalType(FastNoiseLite.FractalType.FBm);
    largeNoise.SetFractalOctaves(3);
    largeNoise.SetFrequency(0.015); // Large features

    // Mountain peaks (sharp features)
    const peakNoise = new FastNoiseLite(this.config.seed + 1000);
    peakNoise.SetNoiseType(FastNoiseLite.NoiseType.OpenSimplex2);
    peakNoise.SetFractalType(FastNoiseLite.FractalType.Ridged); // Ridged for mountains
    peakNoise.SetFractalOctaves(4);
    peakNoise.SetFrequency(0.03); // Medium features

    // Detail noise (small variations)
    const detailNoise = new FastNoiseLite(this.config.seed + 2000);
    detailNoise.SetNoiseType(FastNoiseLite.NoiseType.OpenSimplex2);
    detailNoise.SetFrequency(0.08); // Fine detail

    for (let y = 0; y < mapSize; y++) {
      heightmap[y] = [];
      for (let x = 0; x < mapSize; x++) {
        // Get multiple noise layers
        const large = (largeNoise.GetNoise(x, y) + 1) / 2; // 0-1
        const peak = (peakNoise.GetNoise(x, y) + 1) / 2; // 0-1
        const detail = (detailNoise.GetNoise(x, y) + 1) / 2; // 0-1

        // Combine layers with different weights
        // Use power function to create more dramatic peaks
        const baseTerrain = Math.pow(large, 1.2); // Slight exaggeration
        const mountains = Math.pow(peak, 2.0); // Dramatic peaks
        const variations = detail * 0.15; // Small bumps

        // Mix layers: 60% base + 30% mountains + 10% detail
        let combined = baseTerrain * 0.6 + mountains * 0.3 + variations;

        // Apply terracing effect for interesting plateaus (optional)
        const terraceSteps = 6;
        const terraceStrength = 0.3;
        const terraced = Math.floor(combined * terraceSteps) / terraceSteps;
        combined = combined * (1 - terraceStrength) + terraced * terraceStrength;

        // Map to height range with dramatic variation
        // Keep valleys low (min 2) and peaks high (max 22)
        const minHeight = 2;
        const maxHeight = TIMBERBORN_MAX_HEIGHT;
        const height = minHeight + combined * (maxHeight - minHeight);

        heightmap[y][x] = Math.max(minHeight, Math.min(Math.floor(height), maxHeight));
      }
    }

    console.timeEnd('heightmap');
    console.log(`  ✓ Generated ${mapSize}×${mapSize} heightmap with dramatic terrain (height: 2-${TIMBERBORN_MAX_HEIGHT})`);

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
