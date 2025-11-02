# Timberborn Map Generation Guide

## Overview

This tool generates procedural Timberborn maps with terrain, caves, overhangs, and vegetation. All generated maps include a **StartingLocation** entity and are guaranteed to have a viable flat starting area.

## Starting Location

### Guaranteed Flat Areas

The generator uses a multi-tier approach to ensure a playable starting area:

1. **Preferred**: 6x6 flat area at height ≤21 within 30 blocks of center
2. **Fallback 1**: 4x4 flat area at height ≤21 within map radius
3. **Fallback 2**: 3x3 flat area at any height
4. **Fallback 3**: Full map scan for any flat area (6x6 → 4x4 → 3x3)
5. **Last Resort**: Creates a 6x6 flat platform at map center by flattening terrain

### What "Flat" Means

**CRITICAL for visibility in-game:**
- **Completely flat** - No height variation at all (zero tolerance)
- **Solid ground** at all positions
- **Clear air space** above (3+ blocks minimum, prevents cliffs/overhangs from blocking)
- **Vegetation exclusion zone** - 4-block radius around StartingLocation kept clear of trees

### StartingLocation Placement

- Always placed at the center of the found/created flat area
- Z coordinate clamped to max 22 (Timberborn's height limit)
- Includes required `Orientation` field for in-game visibility
- Logged during generation: `StartingLocation placed at (X, Z) height=Y`

## Water Placement

### Current State

The generator places **WaterSource** entities at elevated locations (configured in settings), but these are decorative and don't create actual flowing water in-game.

### Manual Water Addition Required

To create viable maps, you'll need to manually add water using the Timberborn map editor:

1. Load the generated map in Timberborn
2. Open the map editor
3. Place water sources or lakes near the starting location
4. Save the map

### Water Placement Tips

For a playable map, consider:

- **Water proximity**: Place water within 20-30 blocks of StartingLocation
- **Elevation**: Water sources on hills create natural flow
- **Accessibility**: Ensure beavers can path to water
- **Multiple sources**: 2-3 water sources provide gameplay variety

### Water Source Entities (Generated)

The tool places decorative water source entities:
- **Count**: Configurable (default: 3)
- **Strength**: 1.0-3.0 (currently cosmetic)
- **Placement**: High elevation preferred (min elevation: 15)
- **Template**: `WaterSource`

These entities serve as suggested locations but don't actually produce water in current Timberborn versions.

## Configuration Options

### Basic Settings

```bash
dotnet run -- --size 128 --name MyMap --seed 42
```

- `--size <n>`: Map size (32-384, default: 128)
- `--height <n>`: Max terrain height (10-100, default: 50)
- `--name <name>`: Output filename
- `--seed <n>`: Random seed for reproducibility

### Feature Toggles

- `--no-caves`: Disable underground cave generation
- `--no-overhangs`: Disable cliff overhang generation

### Advanced Configuration

Edit [GeneratorConfig.cs](TimberbornTerrainGenerator/Config/GeneratorConfig.cs) for fine-tuning:

**Terrain Settings**:
- `BaseScale`: Noise scale (default: 0.02)
- `BaseAmplitude`: Height variation (default: 20.0)
- `Octaves`: Noise layers (default: 4)
- `Persistence`: Height detail (default: 0.5)
- `Lacunarity`: Noise frequency (default: 2.0)

**Cave Settings**:
- `WormCount`: Number of cave tunnels (default: 15)
- `WormRadius`: Tunnel thickness (default: 3.0)
- `WormLength`: Tunnel length (default: 50)
- `MinCaveDepth`: Minimum depth below surface (default: 5)

**Vegetation Settings**:
- `TreeDensityPercent`: Tree coverage (default: 30%)
- `BushDensityPercent`: Bush coverage (default: 15%)
- `TreeTypes`: Distribution of tree species

## Validation

Use the provided PowerShell scripts to validate maps before loading in Timberborn:

### Validate-TimberMap.ps1

```powershell
.\Validate-TimberMap.ps1 "path\to\map.timber"
```

Checks:
- Voxel array size (width × height × 23)
- Water/moisture/contamination arrays (width × height)
- Entity coordinate bounds (X: 0-width, Y: 0-height, Z: 0-22)

### Check-StartingLocation.ps1

```powershell
.\Check-StartingLocation.ps1 "path\to\map.timber"
```

Shows:
- StartingLocation coordinates
- Voxel state at Z=19-22 (terrain vs air)

## Troubleshooting

### Map crashes on load

Run validation scripts to check for:
- Entity coordinates > 22 (Z axis)
- Mismatched array sizes
- Missing required entities

### No StartingLocation visible

- Check if Z coordinate is embedded in terrain
- Use Check-StartingLocation.ps1 to verify Z=22 is AIR
- Try regenerating with different seed

### Terrain too steep

- Reduce `BaseAmplitude` in config (lower = flatter)
- Increase `BaseScale` (higher = smoother)
- Use `--no-overhangs` flag

### Too many caves

- Reduce `WormCount` (fewer tunnels)
- Reduce `WormRadius` (thinner tunnels)
- Use `--no-caves` flag

## Example Maps

### SimpleHills (32×32)
```bash
dotnet run -- --size 32 --name SimpleHills --seed 100 --no-caves --height 30
```
- **Small starter map** - Perfect for learning
- Rolling hills with moderate elevation
- No caves, some overhangs for variety
- StartingLocation at height 16
- ~450 entities with vegetation

### RollingPlains (48×48)
```bash
dotnet run -- --size 48 --name RollingPlains --seed 5555 --no-caves --no-overhangs --height 15
```
- **Gentle terrain** - Very flat and easy
- Minimal height variation for simple building
- No caves or overhangs
- StartingLocation at height 8
- ~1,025 entities with abundant vegetation

### CaveWorld (64×64)
```bash
dotnet run -- --size 64 --name CaveWorld --seed 1234 --height 35
```
- **Medium cave-heavy map** - Exploration focused
- Complex underground cave systems
- Moderate terrain with accessible areas
- StartingLocation at height 18
- ~1,835 entities (includes vegetation)

### GentleValley (64×64)
```bash
dotnet run -- --size 64 --name GentleValley --seed 7777 --no-caves --no-overhangs --height 20
```
- **Smooth valley terrain** - Relaxed gameplay
- Gentle slopes, no extreme features
- No caves or overhangs
- StartingLocation at height 10
- ~1,830 entities with lush vegetation

### MountainPeak (96×96)
```bash
dotnet run -- --size 96 --name MountainPeak --seed 3333 --height 45 --no-caves
```
- **Dramatic elevation changes** - Challenging
- High peaks and deep valleys
- Overhangs but no caves
- StartingLocation at height 22
- ~4,140 entities

### LargeMap (128×128)
```bash
dotnet run -- --size 128 --name LargeMap --seed 5678 --height 40
```
- **Large exploration map** - Epic scale
- Full features (caves + overhangs + vegetation)
- Varied terrain with accessible areas
- StartingLocation at height 19
- ~7,364 entities

### DeepCaverns (80×80)
```bash
dotnet run -- --size 80 --name DeepCaverns --seed 9999 --height 40
```
- **Underground focus** - Cave exploration
- Extensive cave networks
- Moderate surface with overhangs
- StartingLocation at height 22
- ~2,870 entities

### Recommended Settings

For best results:
- **Max Height**: 30-40 (prevents excessive steep terrain)
- **Seeds**: Test different seeds to find interesting layouts
- **Small maps**: Use `--no-caves` for simpler terrain
- **Flat areas**: The generator will automatically find or create 6x6 starting platforms

## Best Practices

1. **Always validate** maps before loading in Timberborn
2. **Start small** (32x32 or 64x64) for testing
3. **Use seeds** for reproducible generation
4. **Document seeds** for interesting maps
5. **Add water manually** in editor for playable maps
6. **Test accessibility** - ensure beavers can reach resources
7. **Consider performance** - large maps (256+) may lag

## File Locations

Generated maps are saved to:
- **Windows**: `Documents\Timberborn\Maps\`
- **Fallback**: `./output/` in current directory

Maps use the `.timber` format (ZIP archive containing):
- `world.json` - Terrain and entity data
- `map_metadata.json` - Map dimensions
- `version.txt` - Timberborn version (0.7.10.0)
- `map_thumbnail.jpg` - Preview image (placeholder)

## Next Steps

After generating a map:

1. Run validation: `.\Validate-TimberMap.ps1 "path\to\map.timber"`
2. Load in Timberborn to verify it works
3. Open in map editor
4. Add water sources/lakes as needed
5. Place any additional decorations
6. Save and play!
