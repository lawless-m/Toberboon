// Shared type definitions for Timberborn map format

export interface Vector3Int {
  x: number;
  y: number;
  z: number;
}

export enum VoxelType {
  Air = 0,
  Solid = 1
}

export interface GeneratorConfig {
  mapSize: number;        // Width and depth (e.g., 128)
  maxHeight: number;      // Maximum terrain height (e.g., 50)
  seed: number;           // Random seed
  outputName: string;     // Output filename

  // Feature flags
  generateCaves: boolean;
  generateOverhangs: boolean;

  // Terrain settings
  noiseScale: number;     // Base noise scale (0.01 = smooth, 0.1 = rough)
  octaves: number;        // Noise detail layers
  persistence: number;    // Amplitude falloff per octave
  lacunarity: number;     // Frequency multiplier per octave

  // Cave settings
  caveCount: number;      // Number of worm tunnels
  caveThreshold: number;  // Noise threshold for caverns (0.0-1.0)

  // Entity settings
  waterSourceCount: number;
  treeDensity: number;    // Trees per 100 blocks
  bushDensity: number;    // Bushes per 100 blocks
}

export const DEFAULT_CONFIG: GeneratorConfig = {
  mapSize: 128,
  maxHeight: 50,
  seed: Date.now(),
  outputName: 'ProceduralMap',

  generateCaves: true,
  generateOverhangs: true,

  noiseScale: 0.02,
  octaves: 4,
  persistence: 0.5,
  lacunarity: 2.0,

  caveCount: 5,
  caveThreshold: 0.5,

  waterSourceCount: 3,
  treeDensity: 2.0,
  bushDensity: 1.0
};

// Timberborn map format types
export interface Coordinates {
  X: number;
  Y: number;
  Z: number;
}

export interface Entity {
  Id: string;
  Template: string;
  Components: Record<string, any>;
}

export interface MapData {
  GameVersion: string;
  Timestamp: string;
  Singletons: {
    MapSize: {
      Size: { X: number; Y: number };
    };
    TerrainMap: {
      Voxels: {
        Array: string;  // Space-separated "0" and "1"
      };
    };
    WaterMapNew: {
      Levels: number;
      WaterColumns: { Array: string };
      ColumnOutflows: { Array: string };
    };
    WaterEvaporationMap: {
      Levels: number;
      EvaporationModifiers: { Array: string };
    };
    SoilMoistureSimulator: {
      Size: number;
      MoistureLevels: { Array: string };
    };
    SoilContaminationSimulator: {
      Size: number;
      ContaminationCandidates: { Array: string };
      ContaminationLevels: { Array: string };
    };
    HazardousWeatherHistory: {
      HistoryData: any[];
    };
    MapThumbnailCameraMover: {
      CurrentConfiguration: {
        Position: { X: number; Y: number; Z: number };
        Rotation: { X: number; Y: number; Z: number; W: number };
        ShadowDistance: number;
      };
    };
  };
  Entities: Entity[];
}
