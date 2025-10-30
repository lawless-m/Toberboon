# Timberborn 3D Voxel Terrain Generator - Technical Specification

## Project Overview

Create a standalone C# console application that generates procedurally-generated 3D voxel terrain maps for Timberborn, including caves, overhangs, arches, water sources, and natural resources (trees, bushes). Output as `.timber` files (ZIP archives containing `world.json`).

## Target Environment

- **Language:** C# 12
- **Framework:** .NET 9.0
- **Output Format:** Timberborn `.timber` files (ZIP containing `world.json`)
- **Game Version Compatibility:** Update 7+ (3D terrain support with full 3D voxel terrain)
- **Map Size:** 32x32 to 384x384 (user configurable, square maps)
- **Output Directory:** User's `Documents/Timberborn/Maps/` folder

## Project Structure

```
TimberbornTerrainGenerator/
├── TimberbornTerrainGenerator.csproj
├── Program.cs                          // Entry point, CLI interface
├── Config/
│   ├── GeneratorConfig.cs              // Configuration settings
│   └── TerrainPresets.cs               // Pre-configured terrain profiles
├── Noise/
│   ├── FastNoiseLite.cs                // Single-file noise library
│   └── NoiseLayerConfig.cs             // Noise configuration
├── Terrain/
│   ├── VoxelGrid.cs                    // 3D voxel storage and operations
│   ├── TerrainGenerator.cs             // Main terrain generation orchestrator
│   ├── HeightmapGenerator.cs           // 2D heightmap generation
│   ├── CaveGenerator.cs                // 3D cave system generation
│   ├── OverhangGenerator.cs            // Cliff overhangs and arches
│   └── StructuralValidator.cs          // Support chain validation
├── Entities/
│   ├── EntityPlacer.cs                 // Places water sources, trees, etc.
│   ├── WaterSourcePlacer.cs            // Water source placement logic
│   ├── VegetationPlacer.cs             // Tree and bush placement
│   └── RuinPlacer.cs                   // Underground ruins (optional)
├── Export/
│   ├── TimberbornMapExporter.cs        // Main export orchestrator
│   ├── JsonBuilder.cs                  // JSON structure builder
│   └── Models/                         // JSON data models
│       ├── MapData.cs
│       ├── Entity.cs
│       ├── Component.cs
│       └── Coordinates.cs
└── Utils/
    ├── Vector3Int.cs                   // 3D integer vector
    └── MathHelpers.cs                  // Utility math functions
```

## Dependencies

Add to `.csproj`:

```xml
<Project Sdk="Microsoft.NET.Sdk">
  <PropertyGroup>
    <OutputType>Exe</OutputType>
    <TargetFramework>net9.0</TargetFramework>
    <LangVersion>12.0</LangVersion>
    <Nullable>enable</Nullable>
    <ImplicitUsings>enable</ImplicitUsings>
  </PropertyGroup>

  <ItemGroup>
    <!-- No external dependencies needed - use built-in libraries -->
  </ItemGroup>
</Project>
```

**Required Namespaces:**
- `System.Text.Json` - JSON serialization (.NET built-in)
- `System.IO.Compression` - ZIP file creation (.NET built-in)

**Include as Source:**
- **FastNoiseLite.cs** - Single-file C# noise library from https://github.com/Auburn/FastNoiseLite

## Timberborn Map File Format

### File Structure
```
MapName.timber (ZIP Archive)
└── world.json
```

### JSON Schema

```json
{
  "GameVersion": "0.7.0.0",
  "Timestamp": "2025-10-30T12:00:00Z",
  "Singletons": {
    "MapSize": {
      "Size": {"X": 128, "Y": 128}
    },
    "TerrainMap": {
      "Heights": {
        "Array": "0123456789..." // Comma-less string: base terrain heights
      }
    },
    "CameraComponent": {
      "CameraState": {
        "Target": {"X": 64.0, "Y": 0.0, "Z": 64.0},
        "ZoomLevel": 0.5,
        "HorizontalAngle": 45.0,
        "VerticalAngle": 45.0
      }
    }
  },
  "Entities": [
    {
      "Id": "entity-1",
      "Template": "TerrainBlock",
      "Components": [
        {
          "BlockObject": {
            "Coordinates": {"X": 50, "Y": 10, "Z": 75},
            "Orientation": {"Value": 0}
          }
        }
      ]
    },
    {
      "Id": "entity-2",
      "Template": "WaterSource",
      "Components": [
        {
          "BlockObject": {
            "Coordinates": {"X": 100, "Y": 25, "Z": 100},
            "Orientation": {"Value": 0}
          }
        },
        {
          "WaterSource": {
            "SpecifiedStrength": 2.0
          }
        }
      ]
    },
    {
      "Id": "entity-3",
      "Template": "Pine",
      "Components": [
        {
          "BlockObject": {
            "Coordinates": {"X": 45, "Y": 3, "Z": 67},
            "Orientation": {"Value": 0}
          }
        },
        {
          "Growable": {
            "GrowthProgress": 1.0
          }
        }
      ]
    },
    {
      "Id": "entity-4",
      "Template": "NaturalOverhang",
      "Components": [
        {
          "BlockObject": {
            "Coordinates": {"X": 80, "Y": 15, "Z": 90},
            "Orientation": {"Value": 0}
          }
        }
      ]
    }
  ]
}
```

### Key Constraints

1. **TerrainMap Heights Array:**
   - Comma-less string of integers (0-9)
   - Index = `z * width + x` (row-major order)
   - Represents base ground level only
   - For full 3D terrain, use TerrainBlock entities

2. **TerrainBlock Entities:**
   - Template: `"TerrainBlock"`
   - Each block is a 1x1x1 voxel
   - Y=0 is ground level
   - Maximum 3 blocks of unsupported overhang
   - Water sources and ruins require continuous support to Y=0

3. **Water Sources:**
   - Template: `"WaterSource"`
   - SpecifiedStrength: 0.5 to 8.0 (cubic meters per second)
   - Negative values create drains/absorption
   - Must be supported from bottom of map (Update 7+)
   - Place at high elevations for natural flow

4. **Trees:**
   - Templates: `"Pine"`, `"Birch"`, `"Maple"`, `"ChestnutTree"`, `"MangroveTree"`
   - Must be on solid ground (not water)
   - GrowthProgress: 0.0 to 1.0 (0=seedling, 1=mature)

5. **Bushes:**
   - Templates: `"BlueberryBush"`, `"Dandelion"`

6. **Natural Overhangs (Optional):**
   - Template: `"NaturalOverhang"`
   - Pre-made decorative overhangs
   - Can coexist with TerrainBlock overhangs

## Core Data Structures

### Vector3Int
```csharp
public readonly record struct Vector3Int(int X, int Y, int Z)
{
    public static Vector3Int Zero => new(0, 0, 0);
    public static Vector3Int Up => new(0, 1, 0);
    public static Vector3Int Down => new(0, -1, 0);
    
    public static Vector3Int operator +(Vector3Int a, Vector3Int b) 
        => new(a.X + b.X, a.Y + b.Y, a.Z + b.Z);
    
    public static Vector3Int operator -(Vector3Int a, Vector3Int b) 
        => new(a.X - b.X, a.Y - b.Y, a.Z - b.Z);
    
    public static Vector3Int operator *(Vector3Int v, int s) 
        => new(v.X * s, v.Y * s, v.Z * s);
    
    public float Magnitude => MathF.Sqrt(X * X + Y * Y + Z * Z);
    
    public int ManhattanDistance(Vector3Int other) 
        => Math.Abs(X - other.X) + Math.Abs(Y - other.Y) + Math.Abs(Z - other.Z);
}
```

### VoxelGrid
```csharp
public class VoxelGrid
{
    private readonly Dictionary<Vector3Int, VoxelType> _voxels = new();
    public int Width { get; init; }
    public int Height { get; init; } // Max Y coordinate
    public int Depth { get; init; }
    
    public VoxelType this[Vector3Int pos]
    {
        get => _voxels.GetValueOrDefault(pos, VoxelType.Air);
        set
        {
            if (value == VoxelType.Air)
                _voxels.Remove(pos);
            else
                _voxels[pos] = value;
        }
    }
    
    public bool IsInBounds(Vector3Int pos) =>
        pos.X >= 0 && pos.X < Width &&
        pos.Y >= 0 && pos.Y < Height &&
        pos.Z >= 0 && pos.Z < Depth;
    
    public IEnumerable<Vector3Int> GetAllSolidVoxels() =>
        _voxels.Where(kv => kv.Value == VoxelType.Solid).Select(kv => kv.Key);
    
    public IEnumerable<Vector3Int> GetNeighbors(Vector3Int pos)
    {
        Vector3Int[] directions = [
            new(1, 0, 0), new(-1, 0, 0),
            new(0, 1, 0), new(0, -1, 0),
            new(0, 0, 1), new(0, 0, -1)
        ];
        
        foreach (var dir in directions)
        {
            var neighbor = pos + dir;
            if (IsInBounds(neighbor))
                yield return neighbor;
        }
    }
}

public enum VoxelType
{
    Air,
    Solid,
    Water
}
```

### GeneratorConfig
```csharp
public record GeneratorConfig
{
    // Map Settings
    public int MapSize { get; init; } = 128;
    public int MaxHeight { get; init; } = 50;
    public string OutputName { get; init; } = "ProceduralMap";
    
    // Terrain Settings
    public TerrainSettings Terrain { get; init; } = new();
    
    // Cave Settings
    public CaveSettings Caves { get; init; } = new();
    
    // Overhang Settings
    public OverhangSettings Overhangs { get; init; } = new();
    
    // Entity Settings
    public EntitySettings Entities { get; init; } = new();
    
    // Noise Seed
    public int Seed { get; init; } = Random.Shared.Next();
}

public record TerrainSettings
{
    public float BaseScale { get; init; } = 0.02f;
    public float BaseAmplitude { get; init; } = 20.0f;
    public int Octaves { get; init; } = 4;
    public float Persistence { get; init; } = 0.5f;
    public float Lacunarity { get; init; } = 2.0f;
}

public record CaveSettings
{
    public bool Generate { get; init; } = true;
    public int WormCount { get; init; } = 15;
    public float WormRadius { get; init; } = 3.0f;
    public int WormLength { get; init; } = 50;
    public float CaveNoiseThreshold { get; init; } = 0.4f;
    public int MinCaveDepth { get; init; } = 5; // Min blocks below surface
}

public record OverhangSettings
{
    public bool Generate { get; init; } = true;
    public float OverhangChance { get; init; } = 0.3f; // Probability at cliffs
    public int MinCliffHeight { get; init; } = 5;
}

public record EntitySettings
{
    public WaterSourceSettings WaterSources { get; init; } = new();
    public VegetationSettings Vegetation { get; init; } = new();
}

public record WaterSourceSettings
{
    public int Count { get; init; } = 3;
    public float MinStrength { get; init; } = 1.0f;
    public float MaxStrength { get; init; } = 3.0f;
    public int MinElevation { get; init; } = 15; // Prefer high ground
}

public record VegetationSettings
{
    public int TreeDensityPercent { get; init; } = 30; // % of valid tiles
    public int BushDensityPercent { get; init; } = 15;
    public Dictionary<string, float> TreeTypes { get; init; } = new()
    {
        ["Pine"] = 0.4f,
        ["Birch"] = 0.3f,
        ["Maple"] = 0.2f,
        ["ChestnutTree"] = 0.1f
    };
}
```

## Generation Algorithm

### Phase 1: Base Heightmap Generation

```csharp
public class HeightmapGenerator
{
    public float[,] Generate(GeneratorConfig config)
    {
        var noise = new FastNoiseLite(config.Seed);
        var heightmap = new float[config.MapSize, config.MapSize];
        var settings = config.Terrain;
        
        for (int z = 0; z < config.MapSize; z++)
        for (int x = 0; x < config.MapSize; x++)
        {
            float amplitude = settings.BaseAmplitude;
            float frequency = settings.BaseScale;
            float height = 0;
            
            // Multi-octave noise
            for (int octave = 0; octave < settings.Octaves; octave++)
            {
                float sampleX = x * frequency;
                float sampleZ = z * frequency;
                
                float noiseValue = noise.GetNoise(sampleX, sampleZ);
                height += noiseValue * amplitude;
                
                amplitude *= settings.Persistence;
                frequency *= settings.Lacunarity;
            }
            
            // Clamp to valid range
            heightmap[x, z] = Math.Clamp(height, 0, config.MaxHeight - 1);
        }
        
        return heightmap;
    }
}
```

### Phase 2: Fill Voxel Grid from Heightmap

```csharp
public void FillFromHeightmap(VoxelGrid grid, float[,] heightmap)
{
    for (int x = 0; x < grid.Width; x++)
    for (int z = 0; z < grid.Depth; z++)
    {
        int surfaceHeight = (int)Math.Floor(heightmap[x, z]);
        
        // Fill from ground (Y=0) to surface
        for (int y = 0; y <= surfaceHeight; y++)
        {
            grid[new Vector3Int(x, y, z)] = VoxelType.Solid;
        }
    }
}
```

### Phase 3: Cave Generation

#### 3.1 Worm-Based Cave Tunnels

```csharp
public class CaveGenerator
{
    private readonly FastNoiseLite _noise;
    
    public void GenerateCaveSystem(VoxelGrid grid, GeneratorConfig config)
    {
        var settings = config.Caves;
        if (!settings.Generate) return;
        
        var random = new Random(config.Seed);
        
        // Generate worm tunnels
        for (int i = 0; i < settings.WormCount; i++)
        {
            GenerateWorm(grid, random, settings, config.MaxHeight);
        }
        
        // Apply 3D noise for cavern chambers
        ApplyCavernNoise(grid, config);
    }
    
    private void GenerateWorm(VoxelGrid grid, Random random, 
                             CaveSettings settings, int maxHeight)
    {
        // Start point: underground, random X/Z
        var position = new Vector3(
            random.Next(grid.Width),
            random.Next(settings.MinCaveDepth, maxHeight / 2),
            random.Next(grid.Depth)
        );
        
        // Random initial direction (mostly horizontal)
        var direction = new Vector3(
            random.NextSingle() * 2 - 1,
            (random.NextSingle() - 0.5f) * 0.3f, // Less vertical
            random.NextSingle() * 2 - 1
        ).Normalized();
        
        for (int step = 0; step < settings.WormLength; step++)
        {
            // Carve sphere at current position
            CarveSphere(grid, position, settings.WormRadius);
            
            // Smoothly vary direction
            direction = RotateRandomly(direction, random, 15f);
            position += direction * (settings.WormRadius * 0.6f);
            
            // Keep within bounds
            if (!IsValidWormPosition(grid, position, settings.MinCaveDepth))
                break;
        }
    }
    
    private void CarveSphere(VoxelGrid grid, Vector3 center, float radius)
    {
        int iRadius = (int)Math.Ceiling(radius);
        var centerInt = new Vector3Int(
            (int)Math.Round(center.X),
            (int)Math.Round(center.Y),
            (int)Math.Round(center.Z)
        );
        
        for (int dx = -iRadius; dx <= iRadius; dx++)
        for (int dy = -iRadius; dy <= iRadius; dy++)
        for (int dz = -iRadius; dz <= iRadius; dz++)
        {
            var offset = new Vector3Int(dx, dy, dz);
            if (offset.Magnitude <= radius)
            {
                var pos = centerInt + offset;
                if (grid.IsInBounds(pos))
                    grid[pos] = VoxelType.Air;
            }
        }
    }
    
    private Vector3 RotateRandomly(Vector3 direction, Random random, float maxAngle)
    {
        // Apply random rotation (simplified)
        float angle = (random.NextSingle() * 2 - 1) * maxAngle * MathF.PI / 180f;
        
        // Rotate around a random axis perpendicular to direction
        // (Simplified: just add noise)
        var noise = new Vector3(
            (random.NextSingle() - 0.5f) * 0.3f,
            (random.NextSingle() - 0.5f) * 0.2f,
            (random.NextSingle() - 0.5f) * 0.3f
        );
        
        return (direction + noise).Normalized();
    }
    
    private bool IsValidWormPosition(VoxelGrid grid, Vector3 position, int minDepth)
    {
        return position.X >= 0 && position.X < grid.Width &&
               position.Y >= minDepth && position.Y < grid.Height &&
               position.Z >= 0 && position.Z < grid.Depth;
    }
    
    private void ApplyCavernNoise(VoxelGrid grid, GeneratorConfig config)
    {
        var noise = new FastNoiseLite(config.Seed + 1000);
        noise.SetNoiseType(FastNoiseLite.NoiseType.Cellular);
        noise.SetFrequency(0.05f);
        
        var settings = config.Caves;
        
        for (int x = 0; x < grid.Width; x++)
        for (int y = settings.MinCaveDepth; y < config.MaxHeight - 3; y++)
        for (int z = 0; z < grid.Depth; z++)
        {
            var pos = new Vector3Int(x, y, z);
            if (grid[pos] != VoxelType.Solid) continue;
            
            float noiseValue = noise.GetNoise(x, y, z);
            if (noiseValue > settings.CaveNoiseThreshold)
            {
                grid[pos] = VoxelType.Air;
            }
        }
    }
}

// Helper struct
public record struct Vector3(float X, float Y, float Z)
{
    public Vector3 Normalized()
    {
        float mag = MathF.Sqrt(X * X + Y * Y + Z * Z);
        return mag > 0 ? new(X / mag, Y / mag, Z / mag) : this;
    }
    
    public static Vector3 operator +(Vector3 a, Vector3 b) 
        => new(a.X + b.X, a.Y + b.Y, a.Z + b.Z);
    
    public static Vector3 operator *(Vector3 v, float s) 
        => new(v.X * s, v.Y * s, v.Z * s);
}
```

#### 3.2 Cave Entrance Generation

```csharp
public void CreateCaveEntrances(VoxelGrid grid)
{
    // Find cave openings near surface
    var entrances = new List<Vector3Int>();
    
    for (int x = 0; x < grid.Width; x++)
    for (int z = 0; z < grid.Depth; z++)
    {
        // Scan downward from top
        for (int y = grid.Height - 1; y > 0; y--)
        {
            var pos = new Vector3Int(x, y, z);
            var below = new Vector3Int(x, y - 1, z);
            
            // Found transition from solid to cave
            if (grid[pos] == VoxelType.Solid && grid[below] == VoxelType.Air)
            {
                // Remove ceiling blocks to create entrance
                grid[pos] = VoxelType.Air;
                entrances.Add(pos);
                break;
            }
        }
    }
}
```

### Phase 4: Overhang Generation

```csharp
public class OverhangGenerator
{
    public void GenerateOverhangs(VoxelGrid grid, GeneratorConfig config)
    {
        var settings = config.Overhangs;
        if (!settings.Generate) return;
        
        var random = new Random(config.Seed + 2000);
        
        // Find cliff faces (steep height changes)
        var cliffs = FindCliffs(grid, settings.MinCliffHeight);
        
        foreach (var cliff in cliffs)
        {
            if (random.NextSingle() < settings.OverhangChance)
            {
                GenerateOverhangAt(grid, cliff, random);
            }
        }
    }
    
    private List<Vector3Int> FindCliffs(VoxelGrid grid, int minHeight)
    {
        var cliffs = new List<Vector3Int>();
        
        for (int x = 1; x < grid.Width - 1; x++)
        for (int z = 1; z < grid.Depth - 1; z++)
        {
            int centerHeight = GetSurfaceHeight(grid, x, z);
            
            // Check neighbors for significant drop
            foreach (var (dx, dz) in new[] { (1, 0), (-1, 0), (0, 1), (0, -1) })
            {
                int neighborHeight = GetSurfaceHeight(grid, x + dx, z + dz);
                if (centerHeight - neighborHeight >= minHeight)
                {
                    cliffs.Add(new Vector3Int(x, centerHeight, z));
                    break;
                }
            }
        }
        
        return cliffs;
    }
    
    private void GenerateOverhangAt(VoxelGrid grid, Vector3Int cliff, Random random)
    {
        // Extend blocks outward (max 3 blocks overhang)
        int overhangLength = random.Next(1, 4);
        
        // Determine overhang direction (toward lower ground)
        var direction = FindOverhangDirection(grid, cliff);
        
        for (int dist = 1; dist <= overhangLength; dist++)
        {
            var overhangPos = cliff + direction * dist;
            
            if (grid.IsInBounds(overhangPos))
            {
                // Check if supported (max 3 blocks from support)
                if (IsValidOverhang(grid, overhangPos, dist))
                {
                    grid[overhangPos] = VoxelType.Solid;
                    
                    // Randomly add blocks below for organic look
                    if (random.NextSingle() > 0.5f && dist < overhangLength)
                    {
                        var below = overhangPos + Vector3Int.Down;
                        if (grid.IsInBounds(below))
                            grid[below] = VoxelType.Solid;
                    }
                }
            }
        }
    }
    
    private Vector3Int FindOverhangDirection(VoxelGrid grid, Vector3Int cliff)
    {
        // Find direction with lowest neighbor
        Vector3Int[] directions = [
            new(1, 0, 0), new(-1, 0, 0),
            new(0, 0, 1), new(0, 0, -1)
        ];
        
        int lowestHeight = int.MaxValue;
        Vector3Int bestDir = directions[0];
        
        foreach (var dir in directions)
        {
            var neighbor = new Vector3Int(cliff.X + dir.X, 0, cliff.Z + dir.Z);
            int height = GetSurfaceHeight(grid, neighbor.X, neighbor.Z);
            if (height < lowestHeight)
            {
                lowestHeight = height;
                bestDir = new Vector3Int(dir.X, 0, dir.Z);
            }
        }
        
        return bestDir;
    }
    
    private bool IsValidOverhang(VoxelGrid grid, Vector3Int pos, int distanceFromSupport)
    {
        // Maximum 3 blocks overhang
        return distanceFromSupport <= 3;
    }
    
    private int GetSurfaceHeight(VoxelGrid grid, int x, int z)
    {
        for (int y = grid.Height - 1; y >= 0; y--)
        {
            if (grid[new Vector3Int(x, y, z)] == VoxelType.Solid)
                return y;
        }
        return 0;
    }
}
```

### Phase 5: Structural Validation

```csharp
public class StructuralValidator
{
    public void ValidateAndFix(VoxelGrid grid)
    {
        var unsupportedBlocks = new HashSet<Vector3Int>();
        
        // Check all solid blocks for support
        foreach (var pos in grid.GetAllSolidVoxels().ToList())
        {
            if (!HasValidSupport(grid, pos))
            {
                unsupportedBlocks.Add(pos);
            }
        }
        
        // Remove unsupported blocks
        foreach (var pos in unsupportedBlocks)
        {
            grid[pos] = VoxelType.Air;
        }
        
        // Iteratively check until stable
        if (unsupportedBlocks.Count > 0)
        {
            ValidateAndFix(grid); // Recursive until stable
        }
    }
    
    private bool HasValidSupport(VoxelGrid grid, Vector3Int pos)
    {
        // Blocks at Y=0 are always supported
        if (pos.Y == 0) return true;
        
        // Check for support chain to ground
        return HasSupportChain(grid, pos, 0, new HashSet<Vector3Int>());
    }
    
    private bool HasSupportChain(VoxelGrid grid, Vector3Int pos, 
                                 int overhangCount, HashSet<Vector3Int> visited)
    {
        if (pos.Y == 0) return true;
        if (overhangCount > 3) return false; // Overhang limit
        if (visited.Contains(pos)) return false;
        
        visited.Add(pos);
        
        var below = pos + Vector3Int.Down;
        
        // Supported directly below
        if (grid[below] == VoxelType.Solid)
        {
            return HasSupportChain(grid, below, 0, visited);
        }
        
        // Check adjacent blocks for support (diagonal/lateral)
        foreach (var neighbor in grid.GetNeighbors(pos))
        {
            if (neighbor.Y <= pos.Y && grid[neighbor] == VoxelType.Solid)
            {
                int newOverhangCount = neighbor.Y == pos.Y ? overhangCount + 1 : 0;
                if (HasSupportChain(grid, neighbor, newOverhangCount, visited))
                    return true;
            }
        }
        
        return false;
    }
}
```

### Phase 6: Entity Placement

#### 6.1 Water Source Placement

```csharp
public class WaterSourcePlacer
{
    public List<Entity> PlaceWaterSources(VoxelGrid grid, GeneratorConfig config)
    {
        var sources = new List<Entity>();
        var settings = config.Entities.WaterSources;
        var random = new Random(config.Seed + 3000);
        
        // Find high elevation candidates
        var candidates = FindHighGroundLocations(grid, settings.MinElevation);
        
        // Shuffle and take requested count
        var selected = candidates.OrderBy(_ => random.Next())
                                 .Take(settings.Count)
                                 .ToList();
        
        int entityId = 1;
        foreach (var pos in selected)
        {
            float strength = settings.MinStrength + 
                           (float)random.NextDouble() * 
                           (settings.MaxStrength - settings.MinStrength);
            
            sources.Add(new Entity
            {
                Id = $"watersource-{entityId++}",
                Template = "WaterSource",
                Components = new List<object>
                {
                    new BlockObjectComponent
                    {
                        BlockObject = new BlockObject
                        {
                            Coordinates = new Coordinates(pos.X, pos.Y, pos.Z),
                            Orientation = new Orientation(0)
                        }
                    },
                    new WaterSourceComponent
                    {
                        WaterSource = new WaterSourceData
                        {
                            SpecifiedStrength = strength
                        }
                    }
                }
            });
        }
        
        return sources;
    }
    
    private List<Vector3Int> FindHighGroundLocations(VoxelGrid grid, int minElevation)
    {
        var locations = new List<Vector3Int>();
        
        for (int x = 5; x < grid.Width - 5; x += 10) // Sample grid
        for (int z = 5; z < grid.Depth - 5; z += 10)
        {
            int surfaceY = GetSurfaceHeight(grid, x, z);
            if (surfaceY >= minElevation)
            {
                var pos = new Vector3Int(x, surfaceY + 1, z);
                
                // Ensure supported all the way down
                if (IsSupportedToGround(grid, pos))
                {
                    locations.Add(pos);
                }
            }
        }
        
        return locations;
    }
    
    private int GetSurfaceHeight(VoxelGrid grid, int x, int z)
    {
        for (int y = grid.Height - 1; y >= 0; y--)
        {
            if (grid[new Vector3Int(x, y, z)] == VoxelType.Solid)
                return y;
        }
        return 0;
    }
    
    private bool IsSupportedToGround(VoxelGrid grid, Vector3Int pos)
    {
        for (int y = pos.Y - 1; y >= 0; y--)
        {
            if (grid[new Vector3Int(pos.X, y, pos.Z)] != VoxelType.Solid)
                return false;
        }
        return true;
    }
}
```

#### 6.2 Vegetation Placement

```csharp
public class VegetationPlacer
{
    public List<Entity> PlaceVegetation(VoxelGrid grid, GeneratorConfig config)
    {
        var entities = new List<Entity>();
        var settings = config.Entities.Vegetation;
        var random = new Random(config.Seed + 4000);
        
        // Find valid planting locations (solid ground, not water)
        var validLocations = FindValidPlantingLocations(grid);
        
        // Calculate tree count
        int treeCount = (int)(validLocations.Count * settings.TreeDensityPercent / 100.0);
        int bushCount = (int)(validLocations.Count * settings.BushDensityPercent / 100.0);
        
        // Place trees
        var selectedTrees = validLocations.OrderBy(_ => random.Next())
                                          .Take(treeCount)
                                          .ToList();
        
        int entityId = 1;
        foreach (var pos in selectedTrees)
        {
            string treeType = SelectTreeType(random, settings.TreeTypes);
            entities.Add(CreateTree(pos, treeType, entityId++));
        }
        
        // Place bushes
        var availableForBushes = validLocations.Except(selectedTrees).ToList();
        var selectedBushes = availableForBushes.OrderBy(_ => random.Next())
                                                .Take(bushCount)
                                                .ToList();
        
        foreach (var pos in selectedBushes)
        {
            string bushType = random.NextSingle() > 0.5f ? "BlueberryBush" : "Dandelion";
            entities.Add(CreateBush(pos, bushType, entityId++));
        }
        
        return entities;
    }
    
    private List<Vector3Int> FindValidPlantingLocations(VoxelGrid grid)
    {
        var locations = new List<Vector3Int>();
        
        for (int x = 0; x < grid.Width; x++)
        for (int z = 0; z < grid.Depth; z++)
        {
            int surfaceY = GetSurfaceHeight(grid, x, z);
            if (surfaceY > 0)
            {
                var groundPos = new Vector3Int(x, surfaceY, z);
                var plantPos = new Vector3Int(x, surfaceY + 1, z);
                
                // Check if solid ground and air above
                if (grid[groundPos] == VoxelType.Solid && 
                    grid[plantPos] == VoxelType.Air)
                {
                    locations.Add(plantPos);
                }
            }
        }
        
        return locations;
    }
    
    private int GetSurfaceHeight(VoxelGrid grid, int x, int z)
    {
        for (int y = grid.Height - 1; y >= 0; y--)
        {
            if (grid[new Vector3Int(x, y, z)] == VoxelType.Solid)
                return y;
        }
        return 0;
    }
    
    private string SelectTreeType(Random random, Dictionary<string, float> treeTypes)
    {
        float roll = random.NextSingle();
        float cumulative = 0f;
        
        foreach (var (type, probability) in treeTypes)
        {
            cumulative += probability;
            if (roll <= cumulative)
                return type;
        }
        
        return treeTypes.Keys.First();
    }
    
    private Entity CreateTree(Vector3Int pos, string treeType, int id)
    {
        return new Entity
        {
            Id = $"tree-{id}",
            Template = treeType,
            Components = new List<object>
            {
                new BlockObjectComponent
                {
                    BlockObject = new BlockObject
                    {
                        Coordinates = new Coordinates(pos.X, pos.Y, pos.Z),
                        Orientation = new Orientation(0)
                    }
                },
                new GrowableComponent
                {
                    Growable = new GrowableData
                    {
                        GrowthProgress = 1.0f // Fully grown
                    }
                }
            }
        };
    }
    
    private Entity CreateBush(Vector3Int pos, string bushType, int id)
    {
        return new Entity
        {
            Id = $"bush-{id}",
            Template = bushType,
            Components = new List<object>
            {
                new BlockObjectComponent
                {
                    BlockObject = new BlockObject
                    {
                        Coordinates = new Coordinates(pos.X, pos.Y, pos.Z),
                        Orientation = new Orientation(0)
                    }
                },
                new GrowableComponent
                {
                    Growable = new GrowableData
                    {
                        GrowthProgress = 1.0f
                    }
                }
            }
        };
    }
}
```

### Phase 7: JSON Export

#### 7.1 Data Models

```csharp
// Use System.Text.Json attributes for serialization
using System.Text.Json.Serialization;

public record MapData
{
    [JsonPropertyName("GameVersion")]
    public string GameVersion { get; init; } = "0.7.0.0";
    
    [JsonPropertyName("Timestamp")]
    public string Timestamp { get; init; } = DateTime.UtcNow.ToString("o");
    
    [JsonPropertyName("Singletons")]
    public Singletons Singletons { get; init; } = new();
    
    [JsonPropertyName("Entities")]
    public List<Entity> Entities { get; init; } = [];
}

public record Singletons
{
    [JsonPropertyName("MapSize")]
    public MapSize MapSize { get; init; } = new();
    
    [JsonPropertyName("TerrainMap")]
    public TerrainMap TerrainMap { get; init; } = new();
    
    [JsonPropertyName("CameraComponent")]
    public CameraComponent CameraComponent { get; init; } = new();
}

public record MapSize
{
    [JsonPropertyName("Size")]
    public Size Size { get; init; } = new();
}

public record Size
{
    [JsonPropertyName("X")]
    public int X { get; init; }
    
    [JsonPropertyName("Y")]
    public int Y { get; init; }
}

public record TerrainMap
{
    [JsonPropertyName("Heights")]
    public HeightsArray Heights { get; init; } = new();
}

public record HeightsArray
{
    [JsonPropertyName("Array")]
    public string Array { get; init; } = "";
}

public record CameraComponent
{
    [JsonPropertyName("CameraState")]
    public CameraState CameraState { get; init; } = new();
}

public record CameraState
{
    [JsonPropertyName("Target")]
    public Target Target { get; init; } = new();
    
    [JsonPropertyName("ZoomLevel")]
    public float ZoomLevel { get; init; } = 0.5f;
    
    [JsonPropertyName("HorizontalAngle")]
    public float HorizontalAngle { get; init; } = 45.0f;
    
    [JsonPropertyName("VerticalAngle")]
    public float VerticalAngle { get; init; } = 45.0f;
}

public record Target
{
    [JsonPropertyName("X")]
    public float X { get; init; }
    
    [JsonPropertyName("Y")]
    public float Y { get; init; }
    
    [JsonPropertyName("Z")]
    public float Z { get; init; }
}

public record Entity
{
    [JsonPropertyName("Id")]
    public string Id { get; init; } = "";
    
    [JsonPropertyName("Template")]
    public string Template { get; init; } = "";
    
    [JsonPropertyName("Components")]
    public List<object> Components { get; init; } = [];
}

public record BlockObjectComponent
{
    [JsonPropertyName("BlockObject")]
    public BlockObject BlockObject { get; init; } = new();
}

public record BlockObject
{
    [JsonPropertyName("Coordinates")]
    public Coordinates Coordinates { get; init; } = new();
    
    [JsonPropertyName("Orientation")]
    public Orientation Orientation { get; init; } = new();
}

public record Coordinates(
    [property: JsonPropertyName("X")] int X,
    [property: JsonPropertyName("Y")] int Y,
    [property: JsonPropertyName("Z")] int Z
);

public record Orientation(
    [property: JsonPropertyName("Value")] int Value
);

public record WaterSourceComponent
{
    [JsonPropertyName("WaterSource")]
    public WaterSourceData WaterSource { get; init; } = new();
}

public record WaterSourceData
{
    [JsonPropertyName("SpecifiedStrength")]
    public float SpecifiedStrength { get; init; }
}

public record GrowableComponent
{
    [JsonPropertyName("Growable")]
    public GrowableData Growable { get; init; } = new();
}

public record GrowableData
{
    [JsonPropertyName("GrowthProgress")]
    public float GrowthProgress { get; init; }
}
```

#### 7.2 Export Implementation

```csharp
using System.IO.Compression;
using System.Text.Json;
using System.Text;

public class TimberbornMapExporter
{
    public void Export(VoxelGrid grid, List<Entity> entities, 
                      GeneratorConfig config, string outputPath)
    {
        // Build MapData
        var mapData = BuildMapData(grid, entities, config);
        
        // Serialize to JSON
        var options = new JsonSerializerOptions
        {
            WriteIndented = false, // Compact JSON
            DefaultIgnoreCondition = JsonIgnoreCondition.Never
        };
        
        string json = JsonSerializer.Serialize(mapData, options);
        
        // Create ZIP archive (.timber file)
        string timberPath = Path.Combine(outputPath, $"{config.OutputName}.timber");
        
        if (File.Exists(timberPath))
            File.Delete(timberPath);
        
        using var archive = ZipFile.Open(timberPath, ZipArchiveMode.Create);
        var entry = archive.CreateEntry("world.json");
        
        using (var writer = new StreamWriter(entry.Open()))
        {
            writer.Write(json);
        }
        
        Console.WriteLine($"Map exported: {timberPath}");
    }
    
    private MapData BuildMapData(VoxelGrid grid, List<Entity> entities, 
                                 GeneratorConfig config)
    {
        // Build base heightmap array
        string heightsArray = BuildHeightsArray(grid);
        
        // Build terrain block entities
        var terrainEntities = BuildTerrainBlockEntities(grid);
        
        // Combine all entities
        var allEntities = new List<Entity>();
        allEntities.AddRange(terrainEntities);
        allEntities.AddRange(entities);
        
        return new MapData
        {
            Singletons = new Singletons
            {
                MapSize = new MapSize
                {
                    Size = new Size
                    {
                        X = config.MapSize,
                        Y = config.MapSize
                    }
                },
                TerrainMap = new TerrainMap
                {
                    Heights = new HeightsArray
                    {
                        Array = heightsArray
                    }
                },
                CameraComponent = new CameraComponent
                {
                    CameraState = new CameraState
                    {
                        Target = new Target
                        {
                            X = config.MapSize / 2.0f,
                            Y = 0,
                            Z = config.MapSize / 2.0f
                        }
                    }
                }
            },
            Entities = allEntities
        };
    }
    
    private string BuildHeightsArray(VoxelGrid grid)
    {
        var sb = new StringBuilder(grid.Width * grid.Depth);
        
        // Row-major order: z * width + x
        for (int z = 0; z < grid.Depth; z++)
        for (int x = 0; x < grid.Width; x++)
        {
            // Find surface height (highest solid block)
            int surfaceY = 0;
            for (int y = 0; y < grid.Height; y++)
            {
                if (grid[new Vector3Int(x, y, z)] == VoxelType.Solid)
                    surfaceY = y;
            }
            
            // Clamp to single digit (0-9)
            int heightValue = Math.Min(surfaceY, 9);
            sb.Append(heightValue);
        }
        
        return sb.ToString();
    }
    
    private List<Entity> BuildTerrainBlockEntities(VoxelGrid grid)
    {
        var entities = new List<Entity>();
        int entityId = 1;
        
        foreach (var pos in grid.GetAllSolidVoxels())
        {
            entities.Add(new Entity
            {
                Id = $"terrain-{entityId++}",
                Template = "TerrainBlock",
                Components = new List<object>
                {
                    new BlockObjectComponent
                    {
                        BlockObject = new BlockObject
                        {
                            Coordinates = new Coordinates(pos.X, pos.Y, pos.Z),
                            Orientation = new Orientation(0)
                        }
                    }
                }
            });
        }
        
        return entities;
    }
}
```

## Program Entry Point

```csharp
class Program
{
    static void Main(string[] args)
    {
        Console.WriteLine("=== Timberborn 3D Voxel Terrain Generator ===\n");
        
        // Get configuration (from CLI args or interactive)
        var config = GetConfiguration(args);
        
        Console.WriteLine($"Generating map: {config.OutputName}");
        Console.WriteLine($"Size: {config.MapSize}x{config.MapSize}");
        Console.WriteLine($"Seed: {config.Seed}\n");
        
        // Generate terrain
        var generator = new TerrainGenerator();
        var grid = generator.Generate(config);
        
        Console.WriteLine("Terrain generation complete.");
        Console.WriteLine($"Total voxels: {grid.GetAllSolidVoxels().Count()}");
        
        // Place entities
        var placer = new EntityPlacer();
        var entities = placer.PlaceAll(grid, config);
        
        Console.WriteLine($"Entities placed: {entities.Count}");
        
        // Export
        var exporter = new TimberbornMapExporter();
        string outputPath = Path.Combine(
            Environment.GetFolderPath(Environment.SpecialFolder.MyDocuments),
            "Timberborn", "Maps"
        );
        
        Directory.CreateDirectory(outputPath);
        exporter.Export(grid, entities, config, outputPath);
        
        Console.WriteLine("\nGeneration complete!");
    }
    
    static GeneratorConfig GetConfiguration(string[] args)
    {
        // Parse command line args or use defaults
        return new GeneratorConfig
        {
            MapSize = 128,
            MaxHeight = 50,
            OutputName = "ProceduralCaveMap",
            Seed = Random.Shared.Next()
        };
    }
}

// TerrainGenerator orchestrator
public class TerrainGenerator
{
    public VoxelGrid Generate(GeneratorConfig config)
    {
        Console.WriteLine("Generating heightmap...");
        var heightmapGen = new HeightmapGenerator();
        var heightmap = heightmapGen.Generate(config);
        
        Console.WriteLine("Filling voxel grid...");
        var grid = new VoxelGrid
        {
            Width = config.MapSize,
            Height = config.MaxHeight,
            Depth = config.MapSize
        };
        
        FillFromHeightmap(grid, heightmap);
        
        if (config.Caves.Generate)
        {
            Console.WriteLine("Generating caves...");
            var caveGen = new CaveGenerator();
            caveGen.GenerateCaveSystem(grid, config);
            caveGen.CreateCaveEntrances(grid);
        }
        
        if (config.Overhangs.Generate)
        {
            Console.WriteLine("Generating overhangs...");
            var overhangGen = new OverhangGenerator();
            overhangGen.GenerateOverhangs(grid, config);
        }
        
        Console.WriteLine("Validating structure...");
        var validator = new StructuralValidator();
        validator.ValidateAndFix(grid);
        
        return grid;
    }
    
    private void FillFromHeightmap(VoxelGrid grid, float[,] heightmap)
    {
        for (int x = 0; x < grid.Width; x++)
        for (int z = 0; z < grid.Depth; z++)
        {
            int surfaceHeight = (int)Math.Floor(heightmap[x, z]);
            
            for (int y = 0; y <= surfaceHeight; y++)
            {
                grid[new Vector3Int(x, y, z)] = VoxelType.Solid;
            }
        }
    }
}

// EntityPlacer orchestrator
public class EntityPlacer
{
    public List<Entity> PlaceAll(VoxelGrid grid, GeneratorConfig config)
    {
        var entities = new List<Entity>();
        
        Console.WriteLine("Placing water sources...");
        var waterPlacer = new WaterSourcePlacer();
        entities.AddRange(waterPlacer.PlaceWaterSources(grid, config));
        
        Console.WriteLine("Placing vegetation...");
        var vegPlacer = new VegetationPlacer();
        entities.AddRange(vegPlacer.PlaceVegetation(grid, config));
        
        return entities;
    }
}
```

## Testing Strategy

1. **Unit Tests:**
   - Vector3Int math operations
   - Noise generation determinism (same seed = same output)
   - Support chain validation logic

2. **Integration Tests:**
   - Full map generation with known seed
   - JSON serialization/deserialization
   - ZIP archive creation

3. **Validation Tests:**
   - Load generated maps in Timberborn
   - Verify no floating blocks
   - Verify water sources work
   - Verify trees appear correctly

## Performance Considerations

1. **Memory:**
   - Use sparse storage (Dictionary) for voxels
   - Only store solid blocks (air = absent)
   - Expected memory: ~100-200 MB for 256x256x50 map

2. **Generation Speed:**
   - Target: < 30 seconds for 128x128 map
   - Consider parallel processing for heightmap generation

3. **Optimization:**
   - Cache noise calculations where possible
   - Batch entity creation

## Implementation Priority

1. **Phase 1 - Core Foundation:**
   - Vector3Int, VoxelGrid
   - FastNoiseLite integration
   - HeightmapGenerator
   - Basic export to .timber

2. **Phase 2 - Cave Generation:**
   - CaveGenerator with worm tunnels
   - Cave entrance creation
   - Test caves in-game

3. **Phase 3 - Structural Features:**
   - OverhangGenerator
   - StructuralValidator
   - Test overhangs in-game

4. **Phase 4 - Entities:**
   - WaterSourcePlacer
   - VegetationPlacer
   - Test full maps in-game

5. **Phase 5 - Polish:**
   - CLI improvements
   - Configuration presets
   - Performance optimization

## Success Criteria

Generated maps should:
- ✓ Load successfully in Timberborn Update 7+
- ✓ Have no floating/unsupported blocks
- ✓ Contain playable terrain with caves and overhangs
- ✓ Have functioning water sources at high elevations
- ✓ Include vegetation distributed naturally
- ✓ Be visually interesting and varied

---

## Notes for Claude Code

- Start with basic heightmap + export to verify file format works
- Test each phase in Timberborn before moving to next phase
- Download FastNoiseLite.cs from GitHub (single file, MIT license)
- The JSON structure is critical - match it exactly
- Use .NET 9 features where appropriate (collection expressions, etc.)
- Focus on correctness first, then optimize performance
