import { GeneratorConfig } from '../types';
import { tryGetWasmModule } from '../wasm-loader';
import { HeightmapGenerator } from './HeightmapGenerator';

/**
 * HybridHeightmapGenerator - Uses WASM if available, falls back to TypeScript
 *
 * This demonstrates the hybrid approach:
 * - Try WASM first for performance
 * - Fall back to TypeScript if WASM unavailable
 * - Same interface either way
 */
export class HybridHeightmapGenerator {
  private tsGenerator: HeightmapGenerator;

  constructor(private config: GeneratorConfig) {
    this.tsGenerator = new HeightmapGenerator(config);
  }

  generate(): number[][] {
    const wasm = tryGetWasmModule();

    if (wasm) {
      return this.generateWithWasm(wasm);
    } else {
      return this.generateWithTypeScript();
    }
  }

  private generateWithWasm(wasm: any): number[][] {
    console.log('🔥 Using WASM for heightmap generation');
    console.time('wasm-heightmap');

    const { mapSize, maxHeight, noiseScale, octaves, persistence, lacunarity, seed } = this.config;

    // Call WASM function
    const flat = wasm.generate_heightmap(
      mapSize,      // width
      mapSize,      // depth
      seed,
      noiseScale,
      octaves,
      persistence,
      lacunarity,
      maxHeight
    );

    // Convert flat array to 2D
    const heightmap: number[][] = [];
    for (let y = 0; y < mapSize; y++) {
      heightmap[y] = [];
      for (let x = 0; x < mapSize; x++) {
        heightmap[y][x] = flat[y * mapSize + x];
      }
    }

    console.timeEnd('wasm-heightmap');
    console.log(`  ✓ Generated ${mapSize}×${mapSize} heightmap (WASM)`);

    return heightmap;
  }

  private generateWithTypeScript(): number[][] {
    console.log('📘 Using TypeScript for heightmap generation');
    return this.tsGenerator.generate();
  }

  applyGradient(heightmap: number[][]): number[][] {
    // Gradient is simple enough to keep in TypeScript
    return this.tsGenerator.applyGradient(heightmap);
  }
}
