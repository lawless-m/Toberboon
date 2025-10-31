# TimberbornViewer - Debugging Guide

## If Nothing Happens When Loading a File

The viewer now includes comprehensive console logging to help diagnose issues.

### Step 1: Open Browser Developer Console

**Before loading any file**, open the browser console:

- **Chrome/Edge:** Press `F12` or `Ctrl+Shift+I` (Windows/Linux) / `Cmd+Option+I` (Mac)
- **Firefox:** Press `F12` or `Ctrl+Shift+K` (Windows/Linux) / `Cmd+Option+K` (Mac)
- **Safari:** Enable Developer menu first (Preferences → Advanced → Show Developer menu), then `Cmd+Option+C`

### Step 2: Check Initial Logs

You should see these messages when the page loads:

```
🎨 Initializing TerrainRenderer...
✓ Scene created
✓ Camera created at position: Vector3 {x: 50, y: 50, z: 50}
✓ WebGL renderer created
✓ Orbit controls initialized
✓ Lights added
✓ Grid helper added
✓ Animation loop started
🎨 TerrainRenderer initialization complete!
🌲 Timberborn Viewer initialized
Please load a .timber file to view the terrain
```

**If you don't see these messages:**
- WebGL might not be supported → Try a different browser (Chrome/Edge recommended)
- JavaScript errors → Check the Console tab for red error messages

### Step 3: Load a File and Watch Console

When you select a `.timber` file, you should see:

```
Loading file: ExampleMap.timber
📦 Loading .timber file: ExampleMap.timber (2.50 MB)
  Unzipping file...
  ✓ ZIP loaded, files: ["world.json"]
  Extracting world.json...
  ✓ world.json extracted (10.63 MB)
  Parsing JSON...
  ✓ JSON parsed successfully
    Game version: 0.7.0.0
    Map size: {X: 128, Y: 128}
    Total entities: 513561
  Processing entities...
  ✓ Data parsed successfully
Map data loaded: {mapSize: {…}, terrainBlocks: Array(506186), waterSources: Array(3), trees: Array(4915), bushes: Array(2457), …}
🌍 Loading terrain...
  Map size: 128×128
  Terrain blocks: 506186
  Water sources: 3
  Trees: 4915
  Bushes: 2457
  Clearing existing terrain...
  Rendering terrain blocks...
  Rendering water sources...
  Rendering trees...
  Rendering bushes...
  Centering camera at: (64, 10, 64)
✓ Terrain loaded successfully!
Terrain rendered successfully
```

## Common Issues

### Issue: File loads but nothing renders

**Symptoms:** Logs show success but screen stays empty

**Solutions:**
1. **Try zooming out:** Scroll mouse wheel backward
2. **Try moving camera:** Right-click and drag to pan
3. **Check if grid is visible:** You should see a grid on the ground
4. **GPU issue:** Try a simpler/smaller map first (TestMap.timber)

### Issue: "world.json not found" error

**Symptoms:** Error message about world.json

**Solutions:**
- File might be corrupted → Try regenerating the map
- Wrong file format → Ensure it's a `.timber` file from TimberbornTerrainGenerator

### Issue: JSON parsing error

**Symptoms:** Error during JSON parsing

**Solutions:**
- File corrupted during copy → Regenerate the map
- Disk I/O issue → Check file integrity

### Issue: Out of memory / Slow performance

**Symptoms:** Browser becomes slow or crashes

**Solutions:**
1. **Try a smaller map:** Start with TestMap.timber (64×64)
2. **Close other tabs:** Free up GPU memory
3. **Reduce browser zoom:** Set page zoom to 100%
4. **Update graphics drivers:** Ensure GPU drivers are current

### Issue: Black screen

**Symptoms:** Page loads but shows black screen

**Solutions:**
1. **Check WebGL support:** Visit https://get.webgl.org/
2. **Enable hardware acceleration:**
   - Chrome: Settings → System → Use hardware acceleration
3. **Try different browser:** Edge/Chrome work best

## Debug Mode

### Enable Verbose Logging

The viewer already includes detailed logging. To see even more:

1. Open `src/renderer.ts`
2. Add `console.log()` statements where needed
3. Rebuild: `npm run build`

### Check Scene Contents

In the console, after loading a file, type:

```javascript
// Check if terrain loaded
renderer.scene.children.length  // Should show many objects

// Check camera position
renderer.camera.position  // Should show coordinates

// Check controls target
renderer.controls.target  // Should be centered on map
```

## Test With Example Maps

Try loading example maps in this order:

1. **TestMap.timber** (smallest, 369 KB)
   - If this works → GPU is fine, try larger maps
   - If this fails → Check console for errors

2. **RollingHills.timber** (medium, 1.1 MB)
   - No caves, simpler geometry
   - Good middle-ground test

3. **ExampleMap.timber** (large, 2.5 MB)
   - Full features test

4. **CaveWorld.timber** (largest, 3.2 MB)
   - Most complex geometry

## Browser Compatibility

### Recommended

- ✅ **Chrome 90+** - Best performance
- ✅ **Edge 90+** - Best performance

### Supported

- ⚠️ **Firefox 88+** - Good but slightly slower
- ⚠️ **Safari 15+** - Works but may have performance issues

### Requirements

- WebGL 2.0 support (check at https://get.webgl.org/)
- Modern GPU (integrated graphics OK for small maps)
- 4GB+ RAM recommended

## Still Having Issues?

### Get Detailed Error Info

1. Open Console (F12)
2. Reproduce the issue
3. Copy all console output
4. Check for red error messages
5. Look for stack traces

### Common Error Messages

**"TypeError: Cannot read property..."**
- JavaScript error in code
- Report with full error message

**"WebGL context lost"**
- GPU crashed or out of memory
- Try smaller map or restart browser

**"Failed to fetch"**
- File access issue
- Ensure file is accessible

## Performance Tips

### For Large Maps (256×256+)

1. **Close other applications** using GPU
2. **Set page zoom to 100%**
3. **Disable browser extensions** temporarily
4. **Use production build:** `npm run build` then `npm run preview`

### FPS Issues

If framerate is low:
- Reduce shadow quality (edit `renderer.ts`)
- Disable particles (comment out water particles)
- Use simpler materials

## Reporting Issues

When reporting issues, include:

1. **Browser name and version**
2. **Operating system**
3. **Map file being loaded**
4. **Console output** (full log)
5. **Screenshot** if possible

---

## Quick Checklist

Before asking for help, verify:

- [ ] Browser console is open (F12)
- [ ] Initialization logs appear
- [ ] File loads without errors in console
- [ ] WebGL is supported (visit get.webgl.org)
- [ ] Tried with TestMap.timber (smallest file)
- [ ] Camera controls work (left-click + drag)
- [ ] Tried zooming in/out (mouse wheel)
- [ ] Other browsers tested

---

**Updated:** 2025-10-31 with comprehensive debugging logs
