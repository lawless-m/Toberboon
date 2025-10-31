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
  Components: EntityComponent[];
}

export interface Size {
  X: number;
  Y: number;
}

export interface MapSize {
  Size: Size;
}

export interface HeightsArray {
  Array: string;
}

export interface TerrainMap {
  Heights: HeightsArray;
}

export interface Target {
  X: number;
  Y: number;
  Z: number;
}

export interface CameraState {
  Target: Target;
  ZoomLevel: number;
  HorizontalAngle: number;
  VerticalAngle: number;
}

export interface CameraComponent {
  CameraState: CameraState;
}

export interface Singletons {
  MapSize: MapSize;
  TerrainMap: TerrainMap;
  CameraComponent: CameraComponent;
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
