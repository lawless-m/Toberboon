import { VoxelGrid } from './core/VoxelGrid';
import { HeightmapGenerator } from './terrain/HeightmapGenerator';
import { CaveGenerator } from './terrain/CaveGenerator';
import { EntityPlacer } from './entities/EntityPlacer';
import { TimberbornExporter } from './export/TimberbornExporter';
import { GeneratorConfig, Entity } from './types';

/**
 * TerrainGenerator - Main orchestrator for map generation
 *
 * This class coordinates the generation pipeline:
 * 1. Heightmap generation (WASM candidate)
 * 2. Voxel grid creation (WASM candidate)
 * 3. Cave carving (WASM candidate)
 * 4. Entity placement (TypeScript)
 * 5. Export (TypeScript)
 */
export class TerrainGenerator {
  private heightmapGen: HeightmapGenerator;
  private caveGen: CaveGenerator;
  private entityPlacer: EntityPlacer;
  private exporter: TimberbornExporter;

  constructor(private config: GeneratorConfig) {
    this.heightmapGen = new HeightmapGenerator(config);
    this.caveGen = new CaveGenerator(config);
    this.entityPlacer = new EntityPlacer(config);
    this.exporter = new TimberbornExporter();
  }

  /**
   * Generate complete terrain map
   * Returns: { grid, entities, blob }
   */
  async generate(): Promise<{ grid: VoxelGrid; entities: Entity[]; blob: Blob }> {
    console.log('🌍 Starting terrain generation...');
    console.log(`  Map size: ${this.config.mapSize}×${this.config.mapSize}`);
    console.log(`  Max height: ${this.config.maxHeight}`);
    console.log(`  Seed: ${this.config.seed}`);
    console.time('total');

    // Step 1: Generate heightmap
    const heightmap = this.heightmapGen.generate();

    // Step 2: Create voxel grid
    console.log('🧊 Creating voxel grid...');
    console.time('voxel-grid');

    const TIMBERBORN_HEIGHT = 23;
    const grid = new VoxelGrid(
      this.config.mapSize,
      TIMBERBORN_HEIGHT,
      this.config.mapSize
    );

    grid.fillFromHeightmap(heightmap);
    const initialVoxels = grid.getSolidCount();

    console.timeEnd('voxel-grid');
    console.log(`  ✓ Created grid with ${initialVoxels.toLocaleString()} voxels`);

    // Step 3: Generate caves
    this.caveGen.generate(grid);
    const afterCaves = grid.getSolidCount();
    console.log(`  ✓ Carved ${(initialVoxels - afterCaves).toLocaleString()} voxels`);

    // Step 4: Place entities
    const entities = this.entityPlacer.placeAll(grid);

    // Step 5: Export to .timber
    const blob = await this.exporter.exportToTimber(grid, entities, this.config);

    console.timeEnd('total');
    console.log('✅ Generation complete!');
    console.log(`  Final voxels: ${afterCaves.toLocaleString()}`);
    console.log(`  Entities: ${entities.length}`);
    console.log(`  File size: ${(blob.size / 1024 / 1024).toFixed(2)} MB`);

    return { grid, entities, blob };
  }

  /**
   * Generate and download .timber file
   */
  async generateAndDownload(): Promise<void> {
    const { blob } = await this.generate();
    this.exporter.downloadTimber(blob, this.config.outputName);
  }

  /**
   * Generate with progress callback
   */
  async generateWithProgress(
    onProgress: (stage: string, progress: number) => void
  ): Promise<{ grid: VoxelGrid; entities: Entity[]; blob: Blob }> {
    onProgress('Generating heightmap...', 0.1);
    const heightmap = this.heightmapGen.generate();

    onProgress('Creating voxel grid...', 0.3);
    const TIMBERBORN_HEIGHT = 23;
    const grid = new VoxelGrid(
      this.config.mapSize,
      TIMBERBORN_HEIGHT,
      this.config.mapSize
    );
    grid.fillFromHeightmap(heightmap);

    onProgress('Carving caves...', 0.5);
    this.caveGen.generate(grid);

    onProgress('Placing entities...', 0.7);
    const entities = this.entityPlacer.placeAll(grid);

    onProgress('Exporting .timber file...', 0.9);
    const blob = await this.exporter.exportToTimber(grid, entities, this.config);

    onProgress('Complete!', 1.0);

    return { grid, entities, blob };
  }
}
