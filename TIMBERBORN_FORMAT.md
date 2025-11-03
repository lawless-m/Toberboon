# Timberborn .timber Map Format Reference

**Complete specification based on reverse-engineering Timberborn 0.7.10.13**

This document contains the definitive format for `.timber` map files that successfully load and run in Timberborn.

---

## Table of Contents

1. [File Structure](#file-structure)
2. [Coordinate System](#coordinate-system)
3. [Voxels Array](#voxels-array)
4. [Singletons](#singletons)
5. [Entities](#entities)
6. [Complete Example](#complete-example)

---

## File Structure

A `.timber` file is a **ZIP archive** containing exactly 4 files:

```
map.timber (ZIP archive)
├── world.json          # Main map data (singletons + entities)
├── map_metadata.json   # Map metadata (size, description)
├── version.txt         # Game version string
└── map_thumbnail.jpg   # Thumbnail image (JPEG)
```

### world.json

Main map data with this top-level structure:

```json
{
  "GameVersion": "0.7.10.0",
  "Timestamp": "2025-11-01 20:30:45",
  "Singletons": { ... },
  "Entities": [ ... ]
}
```

**Key Requirements:**
- `GameVersion`: String format "X.Y.Z.W" (e.g., "0.7.10.0")
- `Timestamp`: Format "YYYY-MM-DD HH:mm:ss" (**NOT** ISO 8601)
- `Singletons`: Object containing all map singletons
- `Entities`: Array of game entities

### map_metadata.json

```json
{
  "Width": 8,
  "Height": 8,
  "MapNameLocKey": "",
  "MapDescriptionLocKey": "",
  "MapDescription": "",
  "IsRecommended": false,
  "IsDev": false
}
```

### version.txt

Simple text file containing game version (e.g., `0.7.10.0`)

### map_thumbnail.jpg

Any valid JPEG image (can be minimal 1x1 pixel)

---

## Coordinate System

**CRITICAL:** Timberborn uses a specific coordinate system:

```
X: Horizontal (width)    →
Y: Horizontal (depth)    ↓
Z: Vertical (height)     ↑
```

### Important Notes

- **X and Y are horizontal** - they define the 2D map grid
- **Z is vertical** - it represents height/elevation
- Origin (0,0,0) is at the bottom corner
- Maximum Z height is **23** (layers 0-22)

### Coordinate Mapping

If your internal system uses different conventions:

| Timberborn | Your System (typical) |
|------------|----------------------|
| X (width)  | X (width)           |
| Y (depth)  | Z (depth)           |
| Z (height) | Y (height)          |

---

## Voxels Array

**THE MOST CRITICAL PART OF THE FORMAT**

### Structure

The terrain is defined by a **space-separated** string of voxel values:

```json
"TerrainMap": {
  "Voxels": {
    "Array": "1 1 1 0 0 0 1 1 1 0 0 0 ..."
  }
}
```

- `"1"` = Solid block (terrain)
- `"0"` = Air (empty space)
- Values separated by **single spaces**

### Size Requirements

**CRITICAL:** The array MUST contain exactly:

```
width × depth × 23 voxels
```

**Always 23 vertical layers**, regardless of actual terrain height!

Examples:
- 4×4 map: 4 × 4 × 23 = **368 voxels**
- 8×8 map: 8 × 8 × 23 = **1,472 voxels**
- 32×32 map: 32 × 32 × 23 = **23,552 voxels**

### Iteration Order

**CRITICAL:** Voxels must be ordered as:

```
for Z from 0 to 22 (height)
  for Y from 0 to depth-1 (horizontal depth)
    for X from 0 to width-1 (horizontal width)
      add voxel at (X, Y, Z)
```

**Example for 2×2 map:**
```
Index | X Y Z | Description
------|-------|-------------
0     | 0 0 0 | Bottom corner, layer 0
1     | 1 0 0 |
2     | 0 1 0 |
3     | 1 1 0 |
4     | 0 0 1 | Layer 1
5     | 1 0 1 |
...
```

### Code Example (C#)

```csharp
const int TIMBERBORN_HEIGHT = 23;
var values = new List<string>();

for (int z = 0; z < TIMBERBORN_HEIGHT; z++)      // Z = Timberborn height
for (int y = 0; y < mapDepth; y++)               // Y = Timberborn depth
for (int x = 0; x < mapWidth; x++)               // X = Timberborn width
{
    bool isSolid = /* your terrain logic */;
    values.Add(isSolid ? "1" : "0");
}

string voxelsArray = string.Join(" ", values);
```

---

## Singletons

All required singletons in `world.json`:

### Complete Singleton List

```json
"Singletons": {
  "MapSize": { ... },
  "TerrainMap": { ... },
  "WaterMapNew": { ... },
  "WaterEvaporationMap": { ... },
  "SoilMoistureSimulator": { ... },
  "SoilContaminationSimulator": { ... },
  "HazardousWeatherHistory": { ... },
  "MapThumbnailCameraMover": { ... }
}
```

### MapSize

```json
"MapSize": {
  "Size": {
    "X": 8,
    "Y": 8
  }
}
```

### TerrainMap

```json
"TerrainMap": {
  "Voxels": {
    "Array": "1 1 1 0 0 0 ..."  // Space-separated
  }
}
```

### WaterMapNew

**Note:** Called `WaterMapNew`, not `WaterMap`!

```json
"WaterMapNew": {
  "Levels": 1,
  "WaterColumns": {
    "Array": "0 0 0 ..."  // width × depth values
  },
  "ColumnOutflows": {
    "Array": "0|0:0|0:0|0:0|0 0|0:0|0:0|0:0|0 ..."  // Special format
  }
}
```

**Outflows format:** `down|north:east|south:west` (e.g., `0|0:0|0:0|0:0|0`)

### WaterEvaporationMap

```json
"WaterEvaporationMap": {
  "Levels": 1,
  "EvaporationModifiers": {
    "Array": "1 1 1 ..."  // width × depth values (1 = normal evaporation)
  }
}
```

### SoilMoistureSimulator

**CRITICAL:** Must include `"Size"` property!

```json
"SoilMoistureSimulator": {
  "Size": 1,
  "MoistureLevels": {
    "Array": "0 0 0 ..."  // width × depth values
  }
}
```

### SoilContaminationSimulator

**CRITICAL:** Requires THREE properties:

```json
"SoilContaminationSimulator": {
  "Size": 1,
  "ContaminationCandidates": {
    "Array": "0 0 0 ..."  // width × depth values
  },
  "ContaminationLevels": {
    "Array": "0 0 0 ..."  // width × depth values
  }
}
```

### HazardousWeatherHistory

```json
"HazardousWeatherHistory": {
  "HistoryData": []
}
```

### MapThumbnailCameraMover

**CRITICAL:** Uses `CurrentConfiguration`, not the old camera format!

```json
"MapThumbnailCameraMover": {
  "CurrentConfiguration": {
    "Position": {
      "X": 4.0,
      "Y": 5.14,
      "Z": -2.13
    },
    "Rotation": {
      "X": 0.342020124,
      "Y": 0.0,
      "Z": 0.0,
      "W": 0.9396926
    },
    "ShadowDistance": 150.0
  }
}
```

**Rotation is a quaternion** (X, Y, Z, W)

---

## Entities

Entities use a **dictionary-based** component structure:

### Structure

```json
"Entities": [
  {
    "Id": "unique-guid-here",
    "Template": "EntityTemplateName",
    "Components": {
      "ComponentName": {
        "Property": "value"
      }
    }
  }
]
```

**CRITICAL:** Components is a **dictionary/object**, not an array!

### StartingLocation

**CRITICAL:** StartingLocation requires specific placement for visibility in-game!

```json
{
  "Id": "dc535af8-3cea-43f6-8d8e-166daaa5a30c",
  "Template": "StartingLocation",
  "Components": {
    "BlockObject": {
      "Coordinates": {
        "X": 2,
        "Y": 2,
        "Z": 3
      },
      "Orientation": "Cw0"
    }
  }
}
```

**Required for Visibility:**
1. **Orientation field** - MUST be present in BlockObject (e.g., `"Cw0"`, `"Cw90"`, `"Cw180"`, `"Cw270"`)
2. **Completely flat terrain** - All blocks in a 6×6 area around the location MUST be at the exact same height (no height variation)
3. **Clear air space** - At least 3 blocks of air above the entire 6×6 area (prevents cliffs/overhangs from blocking visibility)
4. **Proper placement** - Entity Z coordinate must be ONE block above solid ground (if ground is at Z=17, entity goes at Z=18)

### WaterSource

```json
{
  "Id": "078d1897-1d7f-498c-840b-ce8dfaebb1e6",
  "Template": "WaterSource",
  "Components": {
    "WaterSource": {
      "SpecifiedStrength": 1.0,
      "CurrentStrength": 1.0
    },
    "BlockObject": {
      "Coordinates": {
        "X": 6,
        "Y": 6,
        "Z": 3
      },
      "Orientation": "Cw0"
    }
  }
}
```

**Orientation values:** `"Cw0"`, `"Cw90"`, `"Cw180"`, `"Cw270"`

### Vegetation (Trees/Bushes)

```json
{
  "Id": "tree-123",
  "Template": "Pine",  // Or: Birch, Maple, ChestnutTree, BlueberryBush, etc.
  "Components": {
    "BlockObject": {
      "Coordinates": {
        "X": 5,
        "Y": 3,
        "Z": 3
      }
    },
    "Growable": {
      "GrowthProgress": 1.0  // 0.0 to 1.0 (1.0 = fully grown)
    }
  }
}
```

---

## Complete Example

### Minimal Working 8×8 Map

```json
{
  "GameVersion": "0.7.10.0",
  "Timestamp": "2025-11-01 20:30:45",
  "Singletons": {
    "MapSize": {
      "Size": { "X": 8, "Y": 8 }
    },
    "TerrainMap": {
      "Voxels": {
        "Array": "1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0"
      }
    },
    "WaterMapNew": {
      "Levels": 1,
      "WaterColumns": { "Array": "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0" },
      "ColumnOutflows": { "Array": "0|0:0|0:0|0:0|0 0|0:0|0:0|0:0|0 0|0:0|0:0|0:0|0 0|0:0|0:0|0:0|0 0|0:0|0:0|0:0|0 0|0:0|0:0|0:0|0 0|0:0|0:0|0:0|0 0|0:0|0:0|0:0|0 0|0:0|0:0|0:0|0 0|0:0|0:0|0:0|0 0|0:0|0:0|0:0|0 0|0:0|0:0|0:0|0 0|0:0|0:0|0:0|0 0|0:0|0:0|0:0|0 0|0:0|0:0|0:0|0 0|0:0|0:0|0:0|0 0|0:0|0:0|0:0|0 0|0:0|0:0|0:0|0 0|0:0|0:0|0:0|0 0|0:0|0:0|0:0|0 0|0:0|0:0|0:0|0 0|0:0|0:0|0:0|0 0|0:0|0:0|0:0|0 0|0:0|0:0|0:0|0 0|0:0|0:0|0:0|0 0|0:0|0:0|0:0|0 0|0:0|0:0|0:0|0 0|0:0|0:0|0:0|0 0|0:0|0:0|0:0|0 0|0:0|0:0|0:0|0 0|0:0|0:0|0:0|0 0|0:0|0:0|0:0|0 0|0:0|0:0|0:0|0 0|0:0|0:0|0:0|0 0|0:0|0:0|0:0|0 0|0:0|0:0|0:0|0 0|0:0|0:0|0:0|0 0|0:0|0:0|0:0|0 0|0:0|0:0|0:0|0 0|0:0|0:0|0:0|0 0|0:0|0:0|0:0|0 0|0:0|0:0|0:0|0 0|0:0|0:0|0:0|0 0|0:0|0:0|0:0|0 0|0:0|0:0|0:0|0 0|0:0|0:0|0:0|0 0|0:0|0:0|0:0|0 0|0:0|0:0|0:0|0 0|0:0|0:0|0:0|0 0|0:0|0:0|0:0|0 0|0:0|0:0|0:0|0 0|0:0|0:0|0:0|0 0|0:0|0:0|0:0|0 0|0:0|0:0|0:0|0 0|0:0|0:0|0:0|0 0|0:0|0:0|0:0|0 0|0:0|0:0|0:0|0 0|0:0|0:0|0:0|0 0|0:0|0:0|0:0|0 0|0:0|0:0|0:0|0 0|0:0|0:0|0:0|0 0|0:0|0:0|0:0|0 0|0:0|0:0|0:0|0 0|0:0|0:0|0:0|0" }
    },
    "WaterEvaporationMap": {
      "Levels": 1,
      "EvaporationModifiers": { "Array": "1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1" }
    },
    "SoilMoistureSimulator": {
      "MoistureLevels": { "Array": "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0" }
    },
    "SoilContaminationSimulator": {
      "Size": 1,
      "ContaminationCandidates": { "Array": "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0" },
      "ContaminationLevels": { "Array": "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0" }
    },
    "HazardousWeatherHistory": {
      "HistoryData": []
    },
    "MapThumbnailCameraMover": {
      "CurrentConfiguration": {
        "Position": { "X": 4.0, "Y": 5.14, "Z": -2.13 },
        "Rotation": { "X": 0.342020124, "Y": 0.0, "Z": 0.0, "W": 0.9396926 },
        "ShadowDistance": 150.0
      }
    }
  },
  "Entities": [
    {
      "Id": "start-1",
      "Template": "StartingLocation",
      "Components": {
        "BlockObject": {
          "Coordinates": { "X": 2, "Y": 2, "Z": 3 }
        }
      }
    },
    {
      "Id": "water-1",
      "Template": "WaterSource",
      "Components": {
        "WaterSource": {
          "SpecifiedStrength": 1.0,
          "CurrentStrength": 1.0
        },
        "BlockObject": {
          "Coordinates": { "X": 6, "Y": 6, "Z": 3 },
          "Orientation": "Cw0"
        }
      }
    }
  ]
}
```

---

## Key Discoveries & Gotchas

### 1. **Coordinate System Confusion**

The biggest source of errors! Remember:
- Timberborn: X,Y horizontal, Z vertical
- Many systems: X,Z horizontal, Y vertical
- **Always verify your coordinate mapping!**

### 2. **Voxels Array Must Be Exactly 23 Layers**

Not 20, not 30, exactly **23 vertical layers** (Z=0 to Z=22), regardless of actual terrain height.

### 3. **Space-Separated Values**

NOT comma-separated, NOT packed. Every array value separated by a single space:
- ✅ `"1 1 0 0"`
- ❌ `"1,1,0,0"`
- ❌ `"1100"`

### 4. **Component Structure is Dictionary/Object**

Entities use `Components: { ... }` (object), not `Components: [ ... ]` (array).

### 5. **Property Names Matter**

- `WaterMapNew` not `WaterMap`
- `CurrentConfiguration` not `CameraState`
- `ContaminationCandidates` required (can't omit)

### 6. **Timestamp Format**

Use `"YYYY-MM-DD HH:mm:ss"`, NOT ISO 8601:
- ✅ `"2025-11-01 20:30:45"`
- ❌ `"2025-11-01T20:30:45Z"`

### 7. **Entity Placement**

Entities must be placed on **air blocks** (voxel = 0), not inside solid terrain!

### 8. **StartingLocation Visibility Requirements**

StartingLocation won't appear in-game unless ALL of these are met:
- ✅ `"Orientation"` field present in BlockObject (e.g., `"Cw0"`)
- ✅ Completely flat 6×6 area (no height differences at all)
- ✅ Clear air space (3+ blocks) above entire starting area
- ✅ No cliffs, overhangs, or terrain blocking the location

### 9. **SoilMoistureSimulator Size Field**

**CRITICAL:** Both soil simulators MUST include `"Size": 1`:

```json
// Correct format:
"SoilMoistureSimulator": {
  "Size": 1,  // Required!
  "MoistureLevels": { "Array": "..." }
},
"SoilContaminationSimulator": {
  "Size": 1,  // Required!
  "ContaminationCandidates": { "Array": "..." },
  "ContaminationLevels": { "Array": "..." }
}
```

Missing the `Size` field will cause `IndexOutOfRangeException` when loading the map.

---

## For TypeScript Viewer Updates

When updating the Three.js viewer, remember:

1. **Voxel iteration order** has changed - update parsing to match Z,Y,X order
2. **Coordinate system** - Z is now vertical (up), not Y
3. **Entity positions** - Update entity placement to use correct coordinates
4. **Space-separated parsing** - Arrays use spaces, not commas

---

## Testing Checklist

✅ Map loads without errors
✅ Terrain renders correctly
✅ StartingLocation is visible
✅ WaterSource is visible and functional
✅ Map size matches specification
✅ All singletons present
✅ Timestamp in correct format

---

## Reference Files

- `examples/UltraMinimal.timber` - Minimal 8×8 working map
- `examples/4x4.timber` - Official 4×4 map from Timberborn editor
- `examples/Created.timber` - Official 32×32 map from Timberborn editor

---

**Document Version:** 1.0
**Timberborn Version:** 0.7.10.13
**Last Updated:** 2025-11-01
**Status:** ✅ Verified Working
