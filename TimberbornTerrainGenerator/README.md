# Timberborn 3D Voxel Terrain Generator

A standalone C# console application that generates procedurally-generated 3D voxel terrain maps for Timberborn, including caves, overhangs, arches, water sources, and natural resources.

## Features

- **3D Voxel Terrain**: Full 3D terrain with caves, overhangs, and arches
- **Cave Systems**: Worm-based tunnels with natural caverns
- **Overhangs & Cliffs**: Natural-looking cliff faces with overhangs (up to 3 blocks)
- **Water Sources**: Procedurally placed water sources at high elevations
- **Vegetation**: Trees and bushes distributed naturally across the terrain
- **Configurable**: Command-line options for map size, seed, and features

## Requirements

- .NET 8.0 SDK or later
- Timberborn Update 7+ (for 3D terrain support)

## Installation

1. Install [.NET 8.0 SDK](https://dotnet.microsoft.com/download/dotnet/8.0)
2. Clone this repository
3. Navigate to the project directory

## Building

```bash
cd TimberbornTerrainGenerator
dotnet build
```

## Usage

### Basic Usage

```bash
dotnet run
```

This generates a 128x128 map with default settings and saves it to `Documents/Timberborn/Maps/`.

### Advanced Usage

```bash
dotnet run -- --size 256 --name MyAwesomeMap --seed 12345 --height 60
```

### Command-Line Options

- `--size <n>`: Map size (32-384, default: 128)
- `--height <n>`: Max height (10-100, default: 50)
- `--name <name>`: Output file name (default: ProceduralCaveMap)
- `--seed <n>`: Random seed for reproducible generation
- `--no-caves`: Disable cave generation
- `--no-overhangs`: Disable overhang generation
- `--help`: Show help message

### Examples

Generate a large map with caves:
```bash
dotnet run -- --size 256 --name LargeCaveMap
```

Generate a flat-ish map without caves or overhangs:
```bash
dotnet run -- --size 128 --name FlatMap --no-caves --no-overhangs
```

Generate a reproducible map with a specific seed:
```bash
dotnet run -- --seed 42 --name SeededMap
```

## Output

Maps are saved as `.timber` files (ZIP archives containing `world.json`) in:
- `Documents/Timberborn/Maps/` (Windows)
- `~/Documents/Timberborn/Maps/` (Linux/Mac)

If the Documents folder is not available, maps are saved to `./output/`.

## Project Structure

```
TimberbornTerrainGenerator/
├── Program.cs                          # Entry point, CLI interface
├── Config/
│   └── GeneratorConfig.cs              # Configuration settings
├── Noise/
│   └── FastNoiseLite.cs                # Single-file noise library
├── Terrain/
│   ├── VoxelGrid.cs                    # 3D voxel storage
│   ├── TerrainGenerator.cs             # Main generation orchestrator
│   ├── HeightmapGenerator.cs           # 2D heightmap generation
│   ├── CaveGenerator.cs                # 3D cave system generation
│   ├── OverhangGenerator.cs            # Cliff overhangs and arches
│   └── StructuralValidator.cs          # Support chain validation
├── Entities/
│   ├── EntityPlacer.cs                 # Entity placement orchestrator
│   ├── WaterSourcePlacer.cs            # Water source placement
│   └── VegetationPlacer.cs             # Tree and bush placement
├── Export/
│   ├── TimberbornMapExporter.cs        # Main export orchestrator
│   └── Models/                         # JSON data models
└── Utils/
    ├── Vector3Int.cs                   # 3D integer vector
    └── MathHelpers.cs                  # Utility math functions
```

## How It Works

### Generation Pipeline

1. **Heightmap Generation**: Uses FastNoiseLite to create a base 2D heightmap with multi-octave noise
2. **Voxel Grid Filling**: Converts the heightmap into a 3D voxel grid
3. **Cave Generation**:
   - Worm-based tunnels carve through the terrain
   - 3D cellular noise creates natural caverns
   - Cave entrances are automatically created
4. **Overhang Generation**: Adds cliff overhangs and arches at steep terrain transitions
5. **Structural Validation**: Ensures no floating blocks (max 3-block overhang support)
6. **Entity Placement**:
   - Water sources placed at high elevations with full support to ground
   - Trees and bushes distributed naturally on valid terrain
7. **Export**: Generates Timberborn-compatible `.timber` file (ZIP with `world.json`)

### Timberborn Map Format

The generator outputs `.timber` files which are ZIP archives containing a `world.json` file. The JSON structure includes:

- **Singletons**: Map metadata (size, base terrain heights, camera position)
- **Entities**: All terrain blocks, water sources, trees, and other objects

Each voxel is represented as a `TerrainBlock` entity with 3D coordinates (X, Y, Z) where:
- Y=0 is ground level
- Maximum overhang distance is 3 blocks
- Water sources require continuous support to Y=0

## Configuration

The generator includes several configuration presets:

- **Terrain Settings**: Noise scale, amplitude, octaves, persistence, lacunarity
- **Cave Settings**: Worm count, radius, length, noise threshold, min depth
- **Overhang Settings**: Generation chance, min cliff height
- **Entity Settings**: Water source count/strength, vegetation density

These can be modified in `Config/GeneratorConfig.cs`.

## Dependencies

- **FastNoiseLite**: Single-file C# noise library (MIT License)
- **System.Text.Json**: .NET built-in JSON serialization
- **System.IO.Compression**: .NET built-in ZIP file creation

No external NuGet packages required!

## License

This project is provided as-is for the Timberborn modding community.

FastNoiseLite is licensed under the MIT License (see `Noise/FastNoiseLite.cs`).

## Credits

- FastNoiseLite by Jordan Peck - https://github.com/Auburn/FastNoiseLite
- Timberborn by Mechanistry - https://timberborn.com/

## Troubleshooting

### "No such file or directory" when running

Make sure you've built the project first:
```bash
dotnet build
dotnet run
```

### Generated maps don't load in Timberborn

- Ensure you're running Timberborn Update 7 or later (3D terrain support)
- Check that the `.timber` file is in `Documents/Timberborn/Maps/`
- Try generating with smaller map sizes first (--size 64 or --size 128)

### Floating blocks or structural issues

The generator includes automatic structural validation, but if you encounter issues:
- Try disabling caves with `--no-caves`
- Reduce overhang generation with `--no-overhangs`

## Future Enhancements

Potential features for future versions:
- Biome support (different tree types by region)
- Underground ruins
- Custom preset files
- Interactive configuration mode
- Map preview/visualization

## Contributing

This is a community project for Timberborn modding. Feel free to fork, modify, and share your improvements!
