// Timberborn map data structure types

export interface Coordinates {
  X: number;
  Y: number;
  Z: number;
}

export interface Orientation {
  Value: number;
}

export interface BlockObject {
  Coordinates: Coordinates;
  Orientation: Orientation;
}

export interface BlockObjectComponent {
  BlockObject: BlockObject;
}

export interface WaterSourceData {
  SpecifiedStrength: number;
}

export interface WaterSourceComponent {
  WaterSource: WaterSourceData;
}

export interface GrowableData {
  GrowthProgress: number;
}

export interface GrowableComponent {
  Growable: GrowableData;
}

export type EntityComponent =
  | BlockObjectComponent
  | WaterSourceComponent
  | GrowableComponent;

export interface Entity {
  Id: string;
  Template: string;
  Components: { [key: string]: any };  // Components is a dictionary/object, not an array
}

export interface Size {
  X: number;
  Y: number;
}

export interface MapSize {
  Size: Size;
}

export interface VoxelsArray {
  Array: string;  // Space-separated string of "1" (solid) and "0" (air)
}

export interface TerrainMap {
  Voxels: VoxelsArray;
}

export interface Vector3 {
  X: number;
  Y: number;
  Z: number;
}

export interface Quaternion {
  X: number;
  Y: number;
  Z: number;
  W: number;
}

export interface CameraConfiguration {
  Position: Vector3;
  Rotation: Quaternion;
  ShadowDistance: number;
}

export interface MapThumbnailCameraMover {
  CurrentConfiguration: CameraConfiguration;
}

export interface Singletons {
  MapSize: MapSize;
  TerrainMap: TerrainMap;
  MapThumbnailCameraMover?: MapThumbnailCameraMover;  // Optional for backward compatibility
}

export interface MapData {
  GameVersion: string;
  Timestamp: string;
  Singletons: Singletons;
  Entities: Entity[];
}

// Parsed data for rendering
export interface ParsedMapData {
  mapSize: { x: number; y: number };
  terrainBlocks: Coordinates[];
  waterSources: Array<{ coords: Coordinates; strength: number }>;
  trees: Array<{ coords: Coordinates; type: string }>;
  bushes: Array<{ coords: Coordinates; type: string }>;
  stats: {
    terrainBlocks: number;
    waterSources: number;
    trees: number;
    bushes: number;
  };
}
