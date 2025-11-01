# Example Timberborn Terrain Maps

This folder contains example `.timber` terrain maps for testing and reference.

## Reference Maps (Official)

### 4x4.timber
- **Source:** Official Timberborn Map Editor
- **Size:** 4×4
- **Purpose:** Minimal reference map for format validation

### Created.timber
- **Source:** Official Timberborn Map Editor
- **Size:** 32×32
- **Purpose:** Full-featured reference map for format validation

## Generated Maps

The following maps are generated using the TimberbornTerrainGenerator with the corrected format:

### SimpleHills.timber (5.3 KB)
- **Size:** 32×32
- **Seed:** 1000
- **Max Height:** 30
- **Terrain Blocks:** 15,236
- **Entities:** 462 (water sources, trees, bushes)
- **Features:** Basic heightmap terrain, no caves
- **Description:** Simple rolling hills for testing basic terrain generation. Great for tutorials and learning the generator.

### CaveWorld.timber (22 KB)
- **Size:** 64×64
- **Seed:** 12345
- **Max Height:** 45
- **Terrain Blocks:** 101,476
- **Entities:** 1,845 (water sources, trees, bushes)
- **Features:** Caves, overhangs, water sources, vegetation
- **Description:** Full-featured terrain with extensive cave systems. Perfect for exploring underground construction.

### LargeMap.timber (74 KB)
- **Size:** 128×128
- **Seed:** 42
- **Max Height:** 50
- **Terrain Blocks:** 506,186
- **Entities:** 7,375 (water sources, trees, bushes)
- **Features:** All terrain features enabled - caves, overhangs, varied elevation
- **Description:** Large-scale procedural terrain showcase with complex 3D structures. Ideal for long-term gameplay and large settlements.

## How to Use

### In Timberborn Game

1. Copy the `.timber` file to your Timberborn Maps folder:
   - **Windows:** `Documents\Timberborn\Maps\`
   - **Linux:** `~/.config/unity3d/Mechanistry/Timberborn/Maps/`

2. Launch Timberborn

3. Select "Custom Game" → "Custom Maps"

4. Choose the map from the list

### In TimberbornViewer

1. Start the viewer:
   ```bash
   cd TimberbornViewer
   npm run dev
   ```

2. Open `http://localhost:5173`

3. Click "Load .timber file" and select a map from this folder

## Generating Your Own Maps

You can generate custom maps with the TimberbornTerrainGenerator:

```bash
cd TimberbornTerrainGenerator

# Recreate SimpleHills
dotnet run -- --size 32 --name SimpleHills --seed 1000 --height 30 --no-caves --no-overhangs

# Recreate CaveWorld
dotnet run -- --size 64 --name CaveWorld --seed 12345 --height 45

# Recreate LargeMap
dotnet run -- --size 128 --name LargeMap --seed 42 --height 50

# Generate custom variations
dotnet run -- --size 96 --name Hills --seed 999 --no-caves
dotnet run -- --size 256 --name Massive --height 60

# Generate minimal 8x8 test map
dotnet run -- --minimal
```

See [TimberbornTerrainGenerator README](../TimberbornTerrainGenerator/README.md) for all options.

## Technical Details

All generated maps are compatible with:
- **Timberborn:** Update 7+ (3D terrain support)
- **Format:** ZIP archive containing world.json, map_metadata.json, version.txt, map_thumbnail.jpg
- **Coordinate System:** X,Y horizontal, Z vertical (height)
- **Voxels:** Always exactly 23 vertical layers
- **Validation:** All blocks structurally validated (no floating blocks)

See [TIMBERBORN_FORMAT.md](../TIMBERBORN_FORMAT.md) for complete format specification.

---

**Generated with TimberbornTerrainGenerator** 🌲
