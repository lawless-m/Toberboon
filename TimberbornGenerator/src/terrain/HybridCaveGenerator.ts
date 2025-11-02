import { GeneratorConfig } from '../types';
import { tryGetWasmModule } from '../wasm-loader';
import { CaveGenerator } from './CaveGenerator';
import { VoxelGrid } from '../core/VoxelGrid';
import { WasmVoxelGrid } from '../core/WasmVoxelGrid';

/**
 * HybridCaveGenerator - Uses WASM if available, falls back to TypeScript
 */
export class HybridCaveGenerator {
  private tsGenerator: CaveGenerator;

  constructor(private config: GeneratorConfig) {
    this.tsGenerator = new CaveGenerator(config);
  }

  generate(grid: VoxelGrid | WasmVoxelGrid): void {
    if (!this.config.generateCaves) {
      console.log('⛰️  Skipping cave generation (disabled)');
      return;
    }

    const wasm = tryGetWasmModule();

    if (wasm && grid instanceof WasmVoxelGrid) {
      this.generateWithWasm(wasm, grid);
    } else {
      this.generateWithTypeScript(grid as VoxelGrid);
    }
  }

  private generateWithWasm(wasm: any, grid: WasmVoxelGrid): void {
    console.log('🔥 Using WASM for cave generation');
    console.time('wasm-caves');

    const { caveCount, caveThreshold, maxHeight, seed } = this.config;

    // Call WASM cave carving function
    wasm.carve_caves(
      grid.getWasmGrid(),  // Pass WASM grid directly
      seed + 1000,
      caveCount,
      caveThreshold,
      maxHeight
    );

    console.timeEnd('wasm-caves');
    console.log('  ✓ Caves generated (WASM)');
  }

  private generateWithTypeScript(grid: VoxelGrid): void {
    console.log('📘 Using TypeScript for cave generation');
    this.tsGenerator.generate(grid);
  }
}
