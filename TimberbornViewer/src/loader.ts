import JSZip from 'jszip';
import type { MapData, ParsedMapData, Entity, Coordinates, BlockObjectComponent, WaterSourceComponent } from './types';

export async function loadTimberFile(file: File): Promise<ParsedMapData> {
  // Load ZIP file
  const zip = new JSZip();
  const zipData = await zip.loadAsync(file);

  // Extract world.json
  const worldJsonFile = zipData.file('world.json');
  if (!worldJsonFile) {
    throw new Error('world.json not found in .timber file');
  }

  const worldJsonText = await worldJsonFile.async('text');
  const mapData: MapData = JSON.parse(worldJsonText);

  // Parse the data
  return parseMapData(mapData);
}

function parseMapData(mapData: MapData): ParsedMapData {
  const terrainBlocks: Coordinates[] = [];
  const waterSources: Array<{ coords: Coordinates; strength: number }> = [];
  const trees: Array<{ coords: Coordinates; type: string }> = [];
  const bushes: Array<{ coords: Coordinates; type: string }> = [];

  const treeTemplates = new Set(['Pine', 'Birch', 'Maple', 'ChestnutTree', 'MangroveTree']);
  const bushTemplates = new Set(['BlueberryBush', 'Dandelion']);

  // Process entities
  for (const entity of mapData.Entities) {
    const coords = getEntityCoordinates(entity);
    if (!coords) continue;

    if (entity.Template === 'TerrainBlock') {
      terrainBlocks.push(coords);
    } else if (entity.Template === 'WaterSource') {
      const strength = getWaterSourceStrength(entity);
      waterSources.push({ coords, strength });
    } else if (treeTemplates.has(entity.Template)) {
      trees.push({ coords, type: entity.Template });
    } else if (bushTemplates.has(entity.Template)) {
      bushes.push({ coords, type: entity.Template });
    }
  }

  return {
    mapSize: {
      x: mapData.Singletons.MapSize.Size.X,
      y: mapData.Singletons.MapSize.Size.Y
    },
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

function getEntityCoordinates(entity: Entity): Coordinates | null {
  for (const component of entity.Components) {
    if ('BlockObject' in component) {
      const blockComponent = component as BlockObjectComponent;
      return blockComponent.BlockObject.Coordinates;
    }
  }
  return null;
}

function getWaterSourceStrength(entity: Entity): number {
  for (const component of entity.Components) {
    if ('WaterSource' in component) {
      const waterComponent = component as WaterSourceComponent;
      return waterComponent.WaterSource.SpecifiedStrength;
    }
  }
  return 1.0; // Default strength
}
