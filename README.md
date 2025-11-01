# Toberboon - Timberborn Procedural Map Generator

A C# tool for generating procedural terrain maps for the game Timberborn, with support for caves, overhangs, vegetation, and guaranteed viable starting locations.

## Features

- **Procedural 3D voxel terrain** using multi-octave Perlin noise
- **Cave systems** with worm-based tunnel generation
- **Cliff overhangs** for interesting terrain features
- **Automatic vegetation placement** (trees and bushes)
- **Guaranteed 6x6 flat starting area** with multi-tier fallback system
- **Water source placement** (decorative, manual editing required for actual water)
- **Full Timberborn .timber format** compatibility (v0.7.10.0)

## Quick Start

```bash
cd TimberbornTerrainGenerator
dotnet build
dotnet run -- --size 64 --name MyMap
```

Generated maps will be saved to `Documents\Timberborn\Maps\`

## Documentation

- **[Map Generation Guide](MAP_GENERATION_GUIDE.md)** - Comprehensive guide to generating and customizing maps
- **[Timberborn Format Specification](TIMBERBORN_FORMAT.md)** - Technical details of the .timber file format

## Example Maps

Three example maps are included in the `examples/` folder:

- **SimpleHills.timber** (32×32) - Small starter map with rolling hills
- **CaveWorld.timber** (64×64) - Medium map with extensive cave systems
- **LargeMap.timber** (128×128) - Large exploration map with all features

## Validation Tools

PowerShell scripts for validating maps before loading in Timberborn:

```powershell
# Comprehensive validation
.\Validate-TimberMap.ps1 "path\to\map.timber"

# Check StartingLocation placement
.\Check-StartingLocation.ps1 "path\to\map.timber"
```

## Configuration

Basic options via command line:
- `--size <n>` - Map size (32-384, default: 128)
- `--name <name>` - Output filename
- `--seed <n>` - Random seed for reproducibility
- `--no-caves` - Disable cave generation
- `--no-overhangs` - Disable cliff overhangs

Advanced configuration in [GeneratorConfig.cs](TimberbornTerrainGenerator/Config/GeneratorConfig.cs)

## Requirements

- .NET 8.0 SDK
- PowerShell (for validation scripts)

## License

MIT
