# Timberborn Terrain Generator (TypeScript + WASM Proof-of-Concept)

A hybrid TypeScript/WebAssembly proof-of-concept for browser-based Timberborn terrain generation.

## 🎯 Architecture Overview

This is a **hybrid architecture** that demonstrates:

1. **Pure TypeScript implementation** (current state)
2. **Clear WASM optimization paths** (marked with 🔥 in code)
3. **Performance measurement** to guide WASM decisions

### Component Breakdown

| Component | Language | Performance | WASM Candidate | Rationale |
|-----------|----------|-------------|----------------|-----------|
| **VoxelGrid** | TypeScript | Memory-intensive | 🔥 **HIGH** | 3D array operations, frequent access |
| **HeightmapGenerator** | TypeScript | CPU-intensive | 🔥 **HIGH** | Noise sampling, tight loops |
| **CaveGenerator** | TypeScript | CPU-intensive | 🔥 **MEDIUM** | 3D iteration, noise evaluation |
| **EntityPlacer** | TypeScript | Fast | ✅ **LOW** | Few entities, complex logic |
| **TimberbornExporter** | TypeScript | Fast | ✅ **NONE** | JSZip already optimized |
| **UI** | TypeScript | N/A | ✅ **NONE** | DOM manipulation |

## 🚀 Quick Start

### Installation

```bash
cd TimberbornGenerator
npm install
```

### Development

```bash
npm run dev
# Open http://localhost:5173
```

### Build

```bash
npm run build
# Output in dist/
```

## 📊 Performance Testing

The generator includes **built-in performance measurement**:

```typescript
// Automatic logging after each generation
📊 Performance Metrics:
  Map size: 128×128
  Total time: 2.34s
  Voxels: 234,567
  File size: 1.23 MB

🔥 WASM Evaluation:
  Performance: ✅ Good
  Recommendation: TypeScript is sufficient
```

### Benchmark Guidelines

| Map Size | Expected Time (TS) | WASM Benefit | Recommendation |
|----------|-------------------|--------------|----------------|
| 32×32 | <0.5s | Minimal (~1.3x) | Stay TypeScript |
| 64×64 | 0.5-1s | Moderate (~2x) | Profile first |
| 128×128 | 1-3s | Good (~3x) | Consider WASM |
| 256×256 | 5-15s | Excellent (~5x) | **Use WASM** |

## 🔥 WASM Migration Path

### Option 1: Rust WASM (Recommended)

**When to migrate**: 128×128 maps take >3 seconds

```rust
// src-wasm/lib.rs
#[wasm_bindgen]
pub struct VoxelGrid {
    data: Vec<u8>,
    width: usize,
    height: usize,
    depth: usize
}

#[wasm_bindgen]
impl VoxelGrid {
    pub fn new(width: usize, height: usize, depth: usize) -> Self {
        // Fast native array instead of Map
    }

    pub fn fill_from_heightmap(&mut self, heightmap: &[f32]) {
        // SIMD-accelerated bulk operations
    }

    pub fn to_voxel_array(&self) -> String {
        // Optimized string building
    }
}
```

**Usage in TypeScript**:
```typescript
import init, { VoxelGrid } from './wasm/terrain_gen.js';

await init();
const grid = VoxelGrid.new(128, 23, 128);
grid.fill_from_heightmap(heightmap);
const voxels = grid.to_voxel_array();
```

### Option 2: Incremental WASM

Only port the hot paths:

```typescript
// Keep TypeScript orchestration
class TerrainGenerator {
  async generate() {
    // Use WASM for heavy lifting
    const grid = await wasmModule.generateVoxels(config);

    // TypeScript for everything else
    const entities = this.entityPlacer.placeAll(grid);
    return this.exporter.exportToTimber(grid, entities);
  }
}
```

### Option 3: Blazor WebAssembly

Reuse C# code directly (if 2.5MB runtime is acceptable):

```csharp
@page "/generate"
@inject IJSRuntime JS

<button @onclick="Generate">Generate</button>

@code {
    async Task Generate() {
        var generator = new TerrainGenerator(config);
        var result = generator.Generate();
        await JS.InvokeVoidAsync("downloadFile", result);
    }
}
```

## 📁 Project Structure

```
TimberbornGenerator/
├── src/
│   ├── core/
│   │   └── VoxelGrid.ts           🔥 WASM candidate
│   ├── terrain/
│   │   ├── HeightmapGenerator.ts  🔥 WASM candidate
│   │   └── CaveGenerator.ts       🔥 WASM candidate
│   ├── entities/
│   │   └── EntityPlacer.ts        ✅ TypeScript
│   ├── export/
│   │   └── TimberbornExporter.ts  ✅ TypeScript
│   ├── types/
│   │   └── index.ts               ✅ Shared types
│   ├── TerrainGenerator.ts        ✅ Orchestrator
│   └── main.ts                    ✅ UI entry
├── package.json
├── tsconfig.json
├── vite.config.ts
└── README.md
```

## 🎮 Features

- ✅ Browser-based generation (no .NET required)
- ✅ Procedural heightmap terrain
- ✅ Cave systems (worm tunnels + 3D noise)
- ✅ Automatic entity placement
- ✅ Direct .timber export
- ✅ Performance monitoring
- ✅ Progress feedback
- 🔥 WASM-ready architecture

## 🔧 Configuration

```typescript
const config: GeneratorConfig = {
  mapSize: 128,           // 32-256
  maxHeight: 50,          // 10-100
  seed: 12345,            // Random seed
  outputName: 'MyMap',

  generateCaves: true,
  generateOverhangs: true,

  // Noise settings
  noiseScale: 0.02,       // 0.01-0.1
  octaves: 4,             // 1-8
  persistence: 0.5,       // 0-1
  lacunarity: 2.0,        // 1-4

  // Features
  caveCount: 5,
  waterSourceCount: 3,
  treeDensity: 2.0,
  bushDensity: 1.0
};
```

## 📈 Performance Comparison

Based on estimated performance:

### 128×128 Map Generation

| Implementation | Time | Memory | Bundle Size |
|----------------|------|--------|-------------|
| Pure TypeScript | ~2s | ~50MB | **100KB** |
| TS + Rust WASM | ~0.6s | ~20MB | **400KB** |
| Blazor WASM | ~1s | ~100MB | **2.5MB** |
| Native C# | ~0.4s | ~30MB | N/A |

### 256×256 Map Generation

| Implementation | Time | Memory | Bundle Size |
|----------------|------|--------|-------------|
| Pure TypeScript | ~12s | ~200MB | **100KB** |
| TS + Rust WASM | ~2.5s | ~80MB | **400KB** |
| Blazor WASM | ~4s | ~400MB | **2.5MB** |

## 🎓 Learning Resources

### For Rust WASM:
- [wasm-pack](https://rustwasm.github.io/wasm-pack/)
- [wasm-bindgen](https://rustwasm.github.io/wasm-bindgen/)
- [Rust WASM Book](https://rustwasm.github.io/docs/book/)

### For Blazor WASM:
- [Blazor WebAssembly](https://dotnet.microsoft.com/apps/aspnet/web-apps/blazor)
- [Blazor WASM Guide](https://docs.microsoft.com/en-us/aspnet/core/blazor/)

## 🚦 Decision Tree

```
Generate test maps → Measure performance
                    ↓
      ┌─────────────┴──────────────┐
      ↓                            ↓
  < 3 seconds?              > 3 seconds?
      ↓                            ↓
  ✅ Keep TypeScript        🔥 Consider WASM
                                  ↓
                    ┌─────────────┴──────────────┐
                    ↓                            ↓
            Prefer Rust?                  Prefer C#?
                    ↓                            ↓
          Port to Rust WASM              Use Blazor WASM
          (~1 week effort)               (~2 days effort)
```

## 🎯 Next Steps

1. **Test current TypeScript implementation**
   - Generate 32×32, 64×64, 128×128, 256×256 maps
   - Record actual performance on target hardware

2. **Profile hot paths**
   - Use browser DevTools Performance tab
   - Identify exact bottlenecks

3. **Make WASM decision**
   - If <3s for 128×128: Stay TypeScript
   - If 3-10s: Port hot paths to Rust WASM
   - If >10s: Consider full WASM or hybrid

4. **Optional: Integrate with viewer**
   - Share types with TimberbornViewer
   - Generate → View pipeline
   - Real-time preview

## 📝 License

This project is provided as-is for the Timberborn modding community.

## 🙏 Credits

- FastNoiseLite (JS port) - https://github.com/Auburn/FastNoiseLite
- JSZip - https://github.com/Stuk/jszip
- Timberborn by Mechanistry - https://timberborn.com/
