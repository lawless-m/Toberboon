import JSZip from 'jszip';
import { VoxelGrid } from '../core/VoxelGrid';
import { GeneratorConfig, Entity, MapData } from '../types';

/**
 * TimberbornExporter - Exports voxel grid and entities to .timber format
 *
 * ✅ TypeScript is perfect here - JSZip and JSON.stringify are well-optimized.
 * Export happens once at the end, so performance is not critical.
 */
export class TimberbornExporter {
  /**
   * Export to .timber file (ZIP archive with world.json)
   */
  async exportToTimber(
    grid: VoxelGrid,
    entities: Entity[],
    config: GeneratorConfig
  ): Promise<Blob> {
    console.log('📦 Exporting to .timber format...');
    console.time('export');

    // Build MapData structure
    const mapData = this.buildMapData(grid, entities, config);

    // Create ZIP archive
    const zip = new JSZip();

    // Add world.json
    const worldJson = JSON.stringify(mapData);
    zip.file('world.json', worldJson);

    // Add map_metadata.json
    const metadata = {
      Width: config.mapSize,
      Height: config.mapSize,
      MapNameLocKey: '',
      MapDescriptionLocKey: '',
      MapDescription: `Generated map: ${config.mapSize}×${config.mapSize}, seed ${config.seed}`,
      IsRecommended: false,
      IsDev: false
    };
    zip.file('map_metadata.json', JSON.stringify(metadata));

    // Add version.txt
    zip.file('version.txt', '0.7.10.0');

    // Add minimal map_thumbnail.jpg (1x1 black pixel)
    const minimalJpeg = this.createMinimalJpeg();
    zip.file('map_thumbnail.jpg', minimalJpeg);

    // Generate ZIP blob
    const blob = await zip.generateAsync({ type: 'blob' });

    console.timeEnd('export');
    console.log(`  ✓ Exported ${(blob.size / 1024 / 1024).toFixed(2)} MB .timber file`);

    return blob;
  }

  /**
   * Build MapData structure following Timberborn format
   */
  private buildMapData(
    grid: VoxelGrid,
    entities: Entity[],
    config: GeneratorConfig
  ): MapData {
    const { mapSize } = config;

    // Convert voxel grid to space-separated string
    const voxelsArray = grid.toVoxelArray();

    // Build water columns (all zeros for now - no pre-placed water)
    const waterColumns = new Array(mapSize * mapSize).fill('0').join(' ');
    const outflowPattern = '0|0:0|0:0|0:0|0';
    const columnOutflows = new Array(mapSize * mapSize).fill(outflowPattern).join(' ');

    // Build soil arrays
    const soilArray = new Array(mapSize * mapSize).fill('0').join(' ');

    // Calculate camera position (looking at center of map)
    const centerX = mapSize / 2;
    const centerY = mapSize / 2;
    const centerZ = config.maxHeight / 2;

    return {
      GameVersion: '0.7.10.0',
      Timestamp: new Date().toISOString().replace('T', ' ').split('.')[0],
      Singletons: {
        MapSize: {
          Size: { X: mapSize, Y: mapSize }
        },
        TerrainMap: {
          Voxels: {
            Array: voxelsArray
          }
        },
        WaterMapNew: {
          Levels: 1,
          WaterColumns: { Array: waterColumns },
          ColumnOutflows: { Array: columnOutflows }
        },
        WaterEvaporationMap: {
          Levels: 1,
          EvaporationModifiers: { Array: new Array(mapSize * mapSize).fill('1').join(' ') }
        },
        SoilMoistureSimulator: {
          Size: 1,
          MoistureLevels: { Array: soilArray }
        },
        SoilContaminationSimulator: {
          Size: 1,
          ContaminationCandidates: { Array: soilArray },
          ContaminationLevels: { Array: soilArray }
        },
        HazardousWeatherHistory: {
          HistoryData: []
        },
        MapThumbnailCameraMover: {
          CurrentConfiguration: {
            Position: { X: centerX, Y: centerY + 5, Z: centerZ - 2 },
            Rotation: { X: 0.342020124, Y: 0.0, Z: 0.0, W: 0.9396926 },
            ShadowDistance: 150.0
          }
        }
      },
      Entities: entities
    };
  }

  /**
   * Create minimal valid JPEG (1x1 black pixel)
   */
  private createMinimalJpeg(): Uint8Array {
    return new Uint8Array([
      0xFF, 0xD8, 0xFF, 0xE0, 0x00, 0x10, 0x4A, 0x46, 0x49, 0x46, 0x00, 0x01,
      0x01, 0x01, 0x00, 0x48, 0x00, 0x48, 0x00, 0x00, 0xFF, 0xDB, 0x00, 0x43,
      0x00, 0xFF, 0xFF, 0xFF, 0xFF, 0xFF, 0xFF, 0xFF, 0xFF, 0xFF, 0xFF, 0xFF,
      0xFF, 0xFF, 0xFF, 0xFF, 0xFF, 0xFF, 0xFF, 0xFF, 0xFF, 0xFF, 0xFF, 0xFF,
      0xFF, 0xFF, 0xFF, 0xFF, 0xFF, 0xFF, 0xFF, 0xFF, 0xFF, 0xFF, 0xFF, 0xFF,
      0xFF, 0xFF, 0xFF, 0xFF, 0xFF, 0xFF, 0xFF, 0xFF, 0xFF, 0xFF, 0xFF, 0xFF,
      0xFF, 0xFF, 0xFF, 0xFF, 0xFF, 0xFF, 0xFF, 0xFF, 0xFF, 0xFF, 0xFF, 0xFF,
      0xFF, 0xFF, 0xFF, 0xFF, 0xFF, 0xFF, 0xFF, 0xFF, 0xC0, 0x00, 0x0B, 0x08,
      0x00, 0x01, 0x00, 0x01, 0x01, 0x01, 0x11, 0x00, 0xFF, 0xC4, 0x00, 0x14,
      0x00, 0x01, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00,
      0x00, 0x00, 0x00, 0x00, 0x00, 0x03, 0xFF, 0xC4, 0x00, 0x14, 0x10, 0x01,
      0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00,
      0x00, 0x00, 0x00, 0x00, 0xFF, 0xDA, 0x00, 0x08, 0x01, 0x01, 0x00, 0x00,
      0x3F, 0x00, 0x37, 0xFF, 0xD9
    ]);
  }

  /**
   * Trigger browser download of .timber file
   */
  downloadTimber(blob: Blob, filename: string): void {
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${filename}.timber`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);

    console.log(`✓ Download started: ${filename}.timber`);
  }
}
