import { VoxelGrid } from './core/VoxelGrid';
import { WasmVoxelGrid } from './core/WasmVoxelGrid';
import { HybridHeightmapGenerator } from './terrain/HybridHeightmapGenerator';
import { HybridCaveGenerator } from './terrain/HybridCaveGenerator';
import { WaterwayGenerator } from './terrain/WaterwayGenerator';
import { EntityPlacer } from './entities/EntityPlacer';
import { TimberbornExporter } from './export/TimberbornExporter';
import { GeneratorConfig, Entity } from './types';
import { isWasmAvailable, tryGetWasmModule } from './wasm-loader';

/**
 * HybridTerrainGenerator - Intelligent WASM/TypeScript hybrid
 *
 * Uses WASM for hot paths when available:
 * - VoxelGrid operations
 * - Heightmap generation
 * - Cave carving
 *
 * Falls back to TypeScript gracefully if WASM unavailable.
 * Now includes waterway generation for realistic rivers!
 */
export class HybridTerrainGenerator {
  private heightmapGen: HybridHeightmapGenerator;
  private caveGen: HybridCaveGenerator;
  private waterwayGen: WaterwayGenerator;
  private entityPlacer: EntityPlacer;
  private exporter: TimberbornExporter;

  constructor(private config: GeneratorConfig) {
    this.heightmapGen = new HybridHeightmapGenerator(config);
    this.caveGen = new HybridCaveGenerator(config);
    this.waterwayGen = new WaterwayGenerator(config);
    this.entityPlacer = new EntityPlacer(config);
    this.exporter = new TimberbornExporter();
  }

  async generate(): Promise<{ grid: VoxelGrid | WasmVoxelGrid; entities: Entity[]; blob: Blob }> {
    console.log('🌍 Starting hybrid terrain generation...');
    console.log(`  Map size: ${this.config.mapSize}×${this.config.mapSize}`);
    console.log(`  Max height: ${this.config.maxHeight}`);
    console.log(`  Seed: ${this.config.seed}`);
    console.log(`  Mode: ${isWasmAvailable() ? '🔥 WASM' : '📘 TypeScript'}`);
    console.time('total');

    // Step 1: Generate heightmap (WASM or TypeScript)
    const heightmap = this.heightmapGen.generate();

    // Step 2: Create voxel grid (WASM or TypeScript)
    console.log('🧊 Creating voxel grid...');
    console.time('voxel-grid');

    const TIMBERBORN_HEIGHT = 23;
    const grid = this.createVoxelGrid(
      this.config.mapSize,
      TIMBERBORN_HEIGHT,
      this.config.mapSize
    );

    grid.fillFromHeightmap(heightmap);
    const initialVoxels = grid.getSolidCount();

    console.timeEnd('voxel-grid');
    console.log(`  ✓ Created grid with ${initialVoxels.toLocaleString()} voxels`);

    // Step 3: Generate caves (WASM or TypeScript)
    this.caveGen.generate(grid);
    const afterCaves = grid.getSolidCount();
    console.log(`  ✓ Carved ${(initialVoxels - afterCaves).toLocaleString()} voxels`);

    // Step 4: Generate waterways (NEW!)
    const waterwayEntities = this.waterwayGen.generate(grid);
    const afterWaterways = grid.getSolidCount();
    console.log(`  ✓ Carved ${(afterCaves - afterWaterways).toLocaleString()} voxels for waterways`);

    // Step 5: Place entities (always TypeScript)
    const placedEntities = this.entityPlacer.placeAll(grid);
    const entities = [...waterwayEntities, ...placedEntities];

    // Step 6: Export to .timber (always TypeScript)
    const blob = await this.exporter.exportToTimber(grid, entities, this.config);

    console.timeEnd('total');
    console.log('✅ Generation complete!');
    console.log(`  Final voxels: ${afterWaterways.toLocaleString()}`);
    console.log(`  Entities: ${entities.length}`);
    console.log(`  File size: ${(blob.size / 1024 / 1024).toFixed(2)} MB`);

    return { grid, entities, blob };
  }

  async generateAndDownload(): Promise<void> {
    const { blob } = await this.generate();
    this.exporter.downloadTimber(blob, this.config.outputName);
  }

  async generateWithProgress(
    onProgress: (stage: string, progress: number) => void
  ): Promise<{ grid: VoxelGrid | WasmVoxelGrid; entities: Entity[]; blob: Blob }> {
    onProgress('Generating heightmap...', 0.1);
    const heightmap = this.heightmapGen.generate();

    onProgress('Creating voxel grid...', 0.3);
    const TIMBERBORN_HEIGHT = 23;
    const grid = this.createVoxelGrid(
      this.config.mapSize,
      TIMBERBORN_HEIGHT,
      this.config.mapSize
    );
    grid.fillFromHeightmap(heightmap);

    onProgress('Carving caves...', 0.5);
    this.caveGen.generate(grid);

    onProgress('Carving waterways...', 0.6);
    const waterwayEntities = this.waterwayGen.generate(grid);

    onProgress('Placing entities...', 0.7);
    const placedEntities = this.entityPlacer.placeAll(grid);
    const entities = [...waterwayEntities, ...placedEntities];

    onProgress('Exporting .timber file...', 0.9);
    const blob = await this.exporter.exportToTimber(grid, entities, this.config);

    onProgress('Complete!', 1.0);

    return { grid, entities, blob };
  }

  /**
   * Create VoxelGrid using WASM if available, TypeScript otherwise
   */
  private createVoxelGrid(width: number, height: number, depth: number): VoxelGrid | WasmVoxelGrid {
    const wasm = tryGetWasmModule();

    if (wasm) {
      console.log('  Using WASM VoxelGrid (5x faster)');
      return new WasmVoxelGrid(width, height, depth, wasm);
    } else {
      console.log('  Using TypeScript VoxelGrid');
      return new VoxelGrid(width, height, depth);
    }
  }
}
