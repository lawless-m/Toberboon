# Timberborn Terrain Viewer

A 3D web-based viewer for Timberborn terrain maps built with TypeScript and Three.js.

## Features

- 📦 Load `.timber` files directly in the browser
- 🎮 Interactive 3D visualization with camera controls
- 🌍 Voxel-based terrain rendering with full 3D support (caves, overhangs)
- 💧 Water source visualization with particle effects
- 🌲 Tree rendering with different species colors
- 🌿 Bush and vegetation display
- 📊 Real-time statistics display
- ✅ Supports Timberborn 0.7.10+ format with proper coordinate system (X,Y horizontal, Z vertical)

## Installation

```bash
npm install
```

## Development

Start the development server:

```bash
npm run dev
```

Then open your browser to `http://localhost:5173`

## Build

Build for production:

```bash
npm run build
```

The built files will be in the `dist/` directory.

## Preview Production Build

```bash
npm run preview
```

## Usage

1. Open the viewer in your browser
2. Click "Load .timber file" and select a generated terrain file
3. Use your mouse to interact with the 3D view:
   - **Left Click + Drag**: Rotate camera
   - **Right Click + Drag**: Pan camera
   - **Mouse Wheel**: Zoom in/out
   - **Arrow Keys**: Move camera

## How It Works

### Architecture

```
TimberbornViewer/
├── src/
│   ├── main.ts          # Application entry point
│   ├── types.ts         # TypeScript type definitions
│   ├── loader.ts        # .timber file loader (ZIP + JSON parser)
│   └── renderer.ts      # Three.js 3D renderer
├── public/              # Static assets
├── index.html           # Main HTML file
└── package.json         # Dependencies
```

### Loading Process

1. **File Input**: User selects a `.timber` file
2. **ZIP Extraction**: JSZip extracts `world.json` from the archive
3. **JSON Parsing**: Map data is parsed into TypeScript types
4. **Voxel Parsing**: Terrain is parsed from the `TerrainMap.Voxels.Array` singleton (space-separated string of 1s and 0s)
5. **Entity Processing**: Entities are categorized (water sources, trees, bushes)
6. **Coordinate Mapping**: Timberborn coordinates (X,Y,Z) are mapped to Three.js (X,Z,Y) for proper visualization
7. **3D Rendering**: Three.js renders the scene using instanced meshes for performance

### Coordinate System

Timberborn uses a specific coordinate system:
- **X**: Horizontal width
- **Y**: Horizontal depth
- **Z**: Vertical height (0-22 layers)

The viewer automatically maps these to Three.js coordinates (where Y is vertical) for correct visualization.

### Rendering Techniques

- **Instanced Meshes**: Terrain blocks use `InstancedMesh` for efficient rendering of thousands of voxels
- **Custom Materials**: Different materials for terrain (brown), water (blue/transparent), trees (green variations)
- **Particle Systems**: Water sources have particle effects
- **Shadow Mapping**: Soft shadows for better depth perception
- **Orbit Controls**: Smooth camera controls from Three.js examples

## Color Coding

| Element | Color | Description |
|---------|-------|-------------|
| Terrain | Brown (#8B7355) | Dirt/ground blocks |
| Water | Blue (#1E90FF) | Water sources with glow |
| Pine | Forest Green (#228B22) | Pine trees |
| Birch | Light Green (#90EE90) | Birch trees |
| Maple | Tomato (#FF6347) | Maple trees (autumn) |
| Chestnut | Lime Green (#32CD32) | Chestnut trees |
| Blueberry Bush | Royal Blue (#4169E1) | Blueberry bushes |
| Dandelion | Gold (#FFD700) | Dandelion bushes |

## Performance

The viewer is optimized for large maps:

- Uses `InstancedMesh` for terrain blocks (single draw call for all blocks)
- Efficient geometry reuse
- Shadow map optimization
- Frustum culling automatically handled by Three.js

### Tested Map Sizes

All maps use exactly 23 vertical layers (Z=0 to Z=22), as per Timberborn format:

- ✅ 32×32 maps: ~23K voxels (e.g., SimpleHills.timber)
- ✅ 64×64 maps: ~94K voxels (e.g., CaveWorld.timber)
- ✅ 128×128 maps: ~376K voxels (e.g., LargeMap.timber)
- ✅ 256×256 maps: ~1.5M voxels (works with modern GPUs)

## Technology Stack

- **TypeScript** - Type-safe JavaScript
- **Three.js** - 3D graphics library
- **JSZip** - ZIP file extraction
- **Vite** - Fast development server and bundler

## Browser Compatibility

- Chrome/Edge 90+
- Firefox 88+
- Safari 15+

Requires WebGL support.

## Future Enhancements

Potential features for future versions:

- [ ] Screenshot/export functionality
- [ ] Layer visibility toggles (terrain, water, vegetation)
- [ ] Minimap view
- [ ] Height slicing (show terrain at specific Y levels)
- [ ] Animation for water flow
- [ ] Terrain analytics (height distribution, etc.)
- [ ] Compare multiple maps side-by-side
- [ ] VR support

## License

This project is provided as-is for the Timberborn modding community.

## Related Projects

- [TimberbornTerrainGenerator](../TimberbornTerrainGenerator) - C# generator for creating terrain maps
