# Toberboon - Timberborn Terrain Tools

Complete toolkit for generating and visualizing procedural 3D voxel terrain maps for Timberborn.

## 🎯 Project Overview

This project consists of two main components:

1. **TimberbornTerrainGenerator** - C# console application that generates `.timber` map files
2. **TimberbornViewer** - TypeScript/Three.js web viewer for visualizing maps in 3D

## 📦 Components

### 1. TimberbornTerrainGenerator (C# / .NET 8.0)

A standalone console application that procedurally generates 3D voxel terrain maps for Timberborn.

**Location:** `TimberbornTerrainGenerator/`

**Features:**
- ✨ 3D voxel terrain generation using FastNoiseLite
- 🕳️ Cave systems with worm-based tunnels and cellular noise caverns
- 🏔️ Natural cliff overhangs and arches (max 3-block support)
- 🏗️ Structural validation to prevent floating blocks
- 💧 Water source placement at high elevations
- 🌲 Vegetation (Pine, Birch, Maple, Chestnut trees + bushes)
- 📦 Export to `.timber` format (ZIP with world.json)

**Quick Start:**
```bash
cd TimberbornTerrainGenerator
dotnet build
dotnet run -- --size 128 --name MyMap --seed 42
```

**Example Output:**
- Map sizes: 32×32 to 384×384
- 500K+ voxels for 128×128 maps
- 3-8 water sources per map
- Thousands of trees and bushes
- Output: `.timber` files in `Documents/Timberborn/Maps/`

### 2. TimberbornViewer (TypeScript / Three.js)

A web-based 3D viewer for visualizing generated terrain maps before loading them in Timberborn.

**Location:** `TimberbornViewer/`

**Features:**
- 📦 Load `.timber` files directly in browser
- 🎮 Interactive 3D visualization with orbit controls
- 🌍 Efficient voxel rendering using instanced meshes
- 💧 Water sources with particle effects
- 🌲 Color-coded trees by species
- 📊 Real-time statistics display

**Quick Start:**
```bash
cd TimberbornViewer
npm install
npm run dev
# Open http://localhost:5173
```

**Controls:**
- Left Click + Drag: Rotate camera
- Right Click + Drag: Pan camera
- Mouse Wheel: Zoom
- Arrow Keys: Move camera

## 🚀 Complete Workflow

### 1. Generate Terrain

```bash
cd TimberbornTerrainGenerator
dotnet run -- --size 128 --name MyCaveMap --seed 12345 --height 60
```

Output: `output/MyCaveMap.timber`

### 2. Preview in Viewer

```bash
cd ../TimberbornViewer
npm run dev
```

Then load the `.timber` file from the generator's output folder.

### 3. Play in Timberborn

Copy the `.timber` file to your Timberborn Maps folder:
- **Windows:** `Documents/Timberborn/Maps/`
- **Linux:** `~/.config/unity3d/Mechanistry/Timberborn/Maps/`
- **Mac:** `~/Library/Application Support/Mechanistry/Timberborn/Maps/`

## 📊 Example Maps Generated

| Map Name | Size | Terrain Blocks | Trees | Water Sources | File Size |
|----------|------|----------------|-------|---------------|-----------|
| TestMap | 64×64 | 75,225 | ~1,230 | 3 | 369 KB |
| ExampleMap | 128×128 | 506,186 | 4,915 | 3 | 2.5 MB |
| CaveWorld | 128×128 | 670,763 | 4,915 | 3 | 3.2 MB |
| RollingHills | 96×96 | 225,428 | 2,764 | 3 | 1.1 MB |

## 🎨 Visual Features

### Terrain Colors (Viewer)

| Element | Color | Hex |
|---------|-------|-----|
| Terrain | Brown | #8B7355 |
| Water | Blue | #1E90FF |
| Pine | Forest Green | #228B22 |
| Birch | Light Green | #90EE90 |
| Maple | Tomato | #FF6347 |
| Chestnut | Lime Green | #32CD32 |
| Blueberry Bush | Royal Blue | #4169E1 |
| Dandelion | Gold | #FFD700 |

## 🔧 Technical Details

### Generator Architecture

```
TimberbornTerrainGenerator/
├── Config/          - Configuration and presets
├── Terrain/         - Voxel grid, generators, validators
│   ├── HeightmapGenerator.cs
│   ├── CaveGenerator.cs
│   ├── OverhangGenerator.cs
│   └── StructuralValidator.cs
├── Entities/        - Water and vegetation placement
├── Export/          - JSON models and .timber exporter
└── Utils/          - Vector math and helpers
```

**Generation Pipeline:**
1. Heightmap generation (multi-octave noise)
2. Voxel grid filling
3. Cave carving (worm tunnels + cellular noise)
4. Overhang generation at cliffs
5. Structural validation (remove floating blocks)
6. Entity placement (water, trees, bushes)
7. Export to .timber (ZIP with world.json)

### Viewer Architecture

```
TimberbornViewer/
├── src/
│   ├── types.ts      - TypeScript type definitions
│   ├── loader.ts     - .timber file loader (ZIP + JSON)
│   ├── renderer.ts   - Three.js 3D renderer
│   └── main.ts       - Application entry point
└── index.html        - UI and controls
```

**Rendering Pipeline:**
1. File input → JSZip extraction
2. JSON parsing → TypeScript types
3. Entity categorization (terrain, water, trees, bushes)
4. Three.js scene creation
5. Instanced mesh rendering (performance)
6. Camera controls and lighting

## 📚 Documentation

- [Generator README](TimberbornTerrainGenerator/README.md) - Full generator documentation
- [Viewer README](TimberbornViewer/README.md) - Viewer features and architecture
- [Viewer Usage Guide](TimberbornViewer/USAGE.md) - Quick start guide
- [Technical Spec](timberborn-voxel-terrain-generator-spec.md) - Detailed implementation spec

## 🎮 Use Cases

### For Players
1. **Quick Map Generation** - Generate playable maps in seconds
2. **Reproducible Seeds** - Share seeds for consistent terrain
3. **Preview Before Play** - View terrain in 3D before loading in-game

### For Modders
1. **Terrain Testing** - Quickly iterate on terrain generation parameters
2. **Custom Biomes** - Modify configuration for different terrain styles
3. **Entity Placement** - Test vegetation density and water placement

### For Content Creators
1. **Screenshot Generation** - Use viewer for promotional screenshots
2. **Map Sharing** - Generate interesting seeds to share with community
3. **Tutorial Content** - Show terrain generation process

## 🛠️ Technology Stack

### Generator
- **C# 12** - Modern language features
- **.NET 8.0** - Cross-platform runtime
- **FastNoiseLite** - Procedural noise generation
- **System.Text.Json** - Built-in JSON serialization
- **System.IO.Compression** - Built-in ZIP creation

### Viewer
- **TypeScript** - Type-safe JavaScript
- **Three.js** - 3D graphics library
- **JSZip** - ZIP file extraction
- **Vite** - Fast development and bundling

## 🔮 Future Enhancements

### Generator
- [ ] Custom biome support
- [ ] Biome-specific vegetation
- [ ] Underground ruins generation
- [ ] Advanced water networks
- [ ] Preset configuration files
- [ ] Batch generation mode

### Viewer
- [ ] Screenshot/export functionality
- [ ] Layer visibility toggles
- [ ] Height slicing viewer
- [ ] Minimap view
- [ ] Water flow animation
- [ ] Terrain analytics (height distribution)
- [ ] Side-by-side map comparison
- [ ] VR support

## 📄 License

This project is provided as-is for the Timberborn modding community.

## 🙏 Credits

- **FastNoiseLite** by Jordan Peck - https://github.com/Auburn/FastNoiseLite
- **Three.js** - https://threejs.org/
- **Timberborn** by Mechanistry - https://timberborn.com/

## 🐛 Known Issues

### Generator
- Maps larger than 384×384 may have performance issues
- Very tall terrain (height > 80) may have structural validation issues

### Viewer
- Large maps (256×256+) require modern GPU
- Safari may have WebGL performance issues

## 📞 Support

For issues or questions:
- Check the documentation in each component's README
- Review the technical specification document
- Check browser console for errors (F12) in viewer

---

**Generated with Claude Code** 🤖

Happy terraforming! 🌲🦫
