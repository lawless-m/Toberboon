# 🚀 QUICKSTART: Get WASM Hybrid Running

**Goal**: See the hybrid TypeScript/WASM generator working in your browser.

## ⚡ Super Quick (5 minutes)

```bash
cd TimberbornGenerator
./quickstart.sh
```

That's it! The script does everything and opens the browser.

## 📋 Manual Steps (if you prefer)

### 1. Install Rust (one-time, ~2 minutes)

```bash
curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh
source $HOME/.cargo/env  # Reload PATH
```

### 2. Install wasm-pack (one-time, ~3 minutes)

```bash
cargo install wasm-pack
```

### 3. Build WASM module (~1 minute)

```bash
cd TimberbornGenerator
npm install
npm run build:wasm
```

You should see:
```
🔧 Building Rust WASM module...
   Compiling timberborn-wasm v0.1.0
    Finished release [optimized] target(s)
✅ WASM module built successfully!
📦 Output: wasm/pkg/
```

### 4. Start dev server

```bash
npm run dev
```

### 5. Open browser

Go to **http://localhost:5173**

## ✅ How to Know WASM is Working

### In the Browser

1. **Badge color**:
   - 🟢 **Green "WASM READY"** = WASM loaded ✅
   - 🟠 **Orange "TypeScript"** = Fallback mode

2. **Browser console** (press F12):
   ```
   ✅ WASM module loaded successfully
      Using Rust for hot paths:
      • VoxelGrid operations (~5x faster)
      • Heightmap generation (~3x faster)
      • Cave carving (~4x faster)
   ```

3. **Generate a map** (any size):
   ```
   🌍 Starting hybrid terrain generation...
     Mode: 🔥 WASM
   🔥 Using WASM for heightmap generation
   wasm-heightmap: 145.12ms
     Using WASM VoxelGrid (5x faster)
   🔥 Using WASM for cave generation
   wasm-caves: 289.34ms
   ```

### Expected Performance

| Map Size | Time with WASM |
|----------|----------------|
| 64×64    | ~0.3s ⚡      |
| 128×128  | ~0.7s ⚡      |
| 256×256  | ~2.5s ⚡      |

## 🐛 Troubleshooting

### "wasm-pack: command not found"

```bash
cargo install wasm-pack
# Wait for it to compile (~3 min)
# Then retry: npm run build:wasm
```

### "WASM module not available, falling back to TypeScript"

This means WASM didn't build. Check:

```bash
# Should exist:
ls -lh wasm/pkg/timberborn_wasm_bg.wasm

# If missing, rebuild:
cd wasm
wasm-pack build --target web --out-dir ./pkg
cd ..
```

### Badge shows "TypeScript" (orange)

1. Check browser console for errors
2. Verify `wasm/pkg/` directory exists with `.wasm` file
3. Hard refresh browser (Ctrl+Shift+R)
4. Rebuild: `npm run build:wasm`

### Build errors

```bash
# Update Rust
rustup update

# Clean and rebuild
cd wasm
cargo clean
wasm-pack build --target web --out-dir ./pkg
```

## 🎯 What You'll See

### Without WASM (fallback)
```
🌍 Starting terrain generation...
  Mode: 📘 TypeScript
📘 Using TypeScript for heightmap generation
heightmap: 450ms
  Using TypeScript VoxelGrid
voxel-grid: 234ms
📘 Using TypeScript for cave generation
caves: 1123ms
Total: 2834ms
```

### With WASM (accelerated)
```
🌍 Starting terrain generation...
  Mode: 🔥 WASM
🔥 Using WASM for heightmap generation
wasm-heightmap: 145ms
  Using WASM VoxelGrid (5x faster)
voxel-grid: 67ms
🔥 Using WASM for cave generation
wasm-caves: 289ms
Total: 723ms
```

**~4x faster!** 🎉

## 📁 Files Created by Build

```
wasm/pkg/
├── timberborn_wasm_bg.wasm      (~300-400 KB)
├── timberborn_wasm.js           (WASM loader)
├── timberborn_wasm_bg.wasm.d.ts (TypeScript types)
└── package.json                  (package info)
```

## 🎮 Try It Out

1. Generate a **128×128 map** with caves
2. Watch the console logs
3. Check generation time
4. Compare TypeScript vs WASM performance

## 💡 Tips

**Fast iteration**: Keep WASM compiled, hot-reload works for TypeScript changes:
```bash
# Terminal 1 (one time)
npm run build:wasm

# Terminal 2 (keeps running)
npm run dev
```

**Rebuild WASM** only when you change Rust code in `wasm/src/lib.rs`

**Pure TypeScript mode**: Just run `npm run dev` without building WASM (useful for UI development)

## 📊 Performance Comparison

Generate the same map twice:

**First**: Comment out WASM import to force TypeScript
**Second**: With WASM enabled

You'll see the difference immediately in console logs!

## ✨ Success Checklist

- [ ] Rust installed (`rustc --version`)
- [ ] wasm-pack installed (`wasm-pack --version`)
- [ ] WASM built (`ls wasm/pkg/*.wasm`)
- [ ] Dev server running (`npm run dev`)
- [ ] Badge shows "WASM READY" (green)
- [ ] Console shows "WASM module loaded successfully"
- [ ] Generation logs show "🔥 Using WASM for..."
- [ ] Map generates in ~0.7s (128×128)

## 🎉 You're Done!

The hybrid generator is now running with WASM acceleration.

Generate some maps and enjoy the speed! 🚀
