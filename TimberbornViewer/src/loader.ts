import JSZip from 'jszip';
import type { MapData, ParsedMapData, Entity, Coordinates } from './types';

export async function loadTimberFile(file: File): Promise<ParsedMapData> {
  console.log('📦 Loading .timber file:', file.name, `(${(file.size / 1024 / 1024).toFixed(2)} MB)`);

  // Load ZIP file
  console.log('  Unzipping file...');
  const zip = new JSZip();
  const zipData = await zip.loadAsync(file);
  console.log('  ✓ ZIP loaded, files:', Object.keys(zipData.files));

  // Extract world.json
  const worldJsonFile = zipData.file('world.json');
  if (!worldJsonFile) {
    console.error('  ✗ world.json not found in ZIP!');
    throw new Error('world.json not found in .timber file');
  }

  console.log('  Extracting world.json...');
  const worldJsonText = await worldJsonFile.async('text');
  console.log(`  ✓ world.json extracted (${(worldJsonText.length / 1024 / 1024).toFixed(2)} MB)`);

  console.log('  Parsing JSON...');
  const mapData: MapData = JSON.parse(worldJsonText);
  console.log('  ✓ JSON parsed successfully');
  console.log('    Game version:', mapData.GameVersion);
  console.log('    Map size:', mapData.Singletons.MapSize.Size);
  console.log('    Total entities:', mapData.Entities.length);

  // Parse the data
  console.log('  Processing entities...');
  const parsed = parseMapData(mapData);
  console.log('  ✓ Data parsed successfully');

  return parsed;
}

function parseMapData(mapData: MapData): ParsedMapData {
  const waterSources: Array<{ coords: Coordinates; strength: number }> = [];
  const trees: Array<{ coords: Coordinates; type: string }> = [];
  const bushes: Array<{ coords: Coordinates; type: string }> = [];

  const treeTemplates = new Set(['Pine', 'Birch', 'Maple', 'ChestnutTree', 'MangroveTree']);
  const bushTemplates = new Set(['BlueberryBush', 'Dandelion']);

  // Parse terrain from Voxels array in TerrainMap singleton
  const mapSize = {
    x: mapData.Singletons.MapSize.Size.X,
    y: mapData.Singletons.MapSize.Size.Y
  };
  const terrainBlocks = parseVoxelsToBlocks(mapData.Singletons.TerrainMap.Voxels.Array, mapSize.x, mapSize.y);

  // Process entities
  for (const entity of mapData.Entities) {
    const coords = getEntityCoordinates(entity);
    if (!coords) continue;

    if (entity.Template === 'WaterSource') {
      const strength = getWaterSourceStrength(entity);
      waterSources.push({ coords, strength });
    } else if (treeTemplates.has(entity.Template)) {
      trees.push({ coords, type: entity.Template });
    } else if (bushTemplates.has(entity.Template)) {
      bushes.push({ coords, type: entity.Template });
    }
  }

  return {
    mapSize,
    terrainBlocks,
    waterSources,
    trees,
    bushes,
    stats: {
      terrainBlocks: terrainBlocks.length,
      waterSources: waterSources.length,
      trees: trees.length,
      bushes: bushes.length
    }
  };
}

function parseVoxelsToBlocks(voxelsString: string, width: number, depth: number): Coordinates[] {
  // Parse space-separated voxels array
  const voxels = voxelsString.split(' ').map(v => v === '1');
  const blocks: Coordinates[] = [];

  const TIMBERBORN_HEIGHT = 23;

  // Voxels are ordered: Z (height 0-22), Y (depth), X (width)
  let index = 0;
  for (let z = 0; z < TIMBERBORN_HEIGHT; z++) {
    for (let y = 0; y < depth; y++) {
      for (let x = 0; x < width; x++) {
        if (index < voxels.length && voxels[index]) {
          blocks.push({ X: x, Y: y, Z: z });
        }
        index++;
      }
    }
  }

  return blocks;
}

function getEntityCoordinates(entity: Entity): Coordinates | null {
  // Components is now a dictionary/object, not an array
  if (entity.Components.BlockObject) {
    return entity.Components.BlockObject.Coordinates;
  }
  return null;
}

function getWaterSourceStrength(entity: Entity): number {
  // Components is now a dictionary/object, not an array
  if (entity.Components.WaterSource) {
    return entity.Components.WaterSource.SpecifiedStrength;
  }
  return 1.0; // Default strength
}
