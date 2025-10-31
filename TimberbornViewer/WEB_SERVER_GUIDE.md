# Serving TimberbornViewer from a Web Server

If you're serving the viewer from your own web server (not using `npm run dev`), follow these steps:

## Step 1: Build the Production Files

Always rebuild after pulling changes:

```bash
cd TimberbornViewer
npm run build
```

This creates the production files in the `dist/` folder.

## Step 2: Serve the `dist/` Folder

Point your web server to serve the `TimberbornViewer/dist/` directory.

### Files in dist/:
```
dist/
├── index.html                    # Main HTML file
└── assets/
    └── index-B2Fyazgs.js        # Bundled JavaScript (includes debugging)
```

### Example Web Server Configurations:

#### Apache (.htaccess in dist/)
```apache
# Enable CORS for loading .timber files
<IfModule mod_headers.c>
    Header set Access-Control-Allow-Origin "*"
</IfModule>

# Handle client-side routing
<IfModule mod_rewrite.c>
    RewriteEngine On
    RewriteBase /
    RewriteRule ^index\.html$ - [L]
    RewriteCond %{REQUEST_FILENAME} !-f
    RewriteCond %{REQUEST_FILENAME} !-d
    RewriteRule . /index.html [L]
</IfModule>
```

#### Nginx
```nginx
server {
    listen 80;
    server_name your-domain.com;

    root /path/to/TimberbornViewer/dist;
    index index.html;

    # Enable CORS
    add_header Access-Control-Allow-Origin *;

    location / {
        try_files $uri $uri/ /index.html;
    }
}
```

#### Simple Python HTTP Server (for testing)
```bash
cd TimberbornViewer/dist
python3 -m http.server 8080
# Open http://localhost:8080
```

## Step 3: Open in Browser with Console

1. Navigate to your web server URL
2. **Open browser console (F12) BEFORE loading any files**
3. You should see initialization logs:

```
🎨 Initializing TerrainRenderer...
✓ Scene created
✓ Camera created at position: Vector3 {x: 50, y: 50, z: 50}
✓ WebGL renderer created
...
```

## Step 4: Load a .timber File

1. Click "Load .timber file"
2. Select a file (try `examples/TestMap.timber` first)
3. Watch the console for detailed logs:

```
📦 Loading .timber file: TestMap.timber (0.36 MB)
  Unzipping file...
  ✓ ZIP loaded, files: ["world.json"]
  ...
```

## Important Notes

### File Access

When loading `.timber` files from your local system:

- **Modern browsers have file access restrictions**
- The viewer uses the HTML5 File API, which works from any web server
- You don't need CORS for loading files via file input
- CORS is only needed if you try to fetch files via HTTP

### Cache Issues

If you don't see changes after rebuilding:

1. **Hard refresh:** `Ctrl+Shift+R` (Windows/Linux) or `Cmd+Shift+R` (Mac)
2. **Clear cache:** Browser settings → Clear browsing data
3. **Check file timestamp:** Verify `dist/index.html` is recent

### Debugging

If something doesn't work:

1. **Check console (F12)** - All debugging info is there
2. **Verify build:** Check that `dist/assets/index-*.js` was recently modified
3. **Check web server logs** - Look for any 404 or permission errors
4. **Try different browser** - Chrome/Edge work best

## Quick Rebuild & Deploy

```bash
# Pull latest changes
cd /path/to/Toberboon
git pull

# Rebuild viewer
cd TimberbornViewer
npm run build

# Verify build succeeded
ls -lh dist/
# Should show recent timestamp on files

# If using rsync to deploy:
rsync -av dist/ /var/www/html/timberborn-viewer/
```

## Automatic Rebuild (Optional)

Create a simple script to rebuild on changes:

```bash
#!/bin/bash
# rebuild.sh

cd "$(dirname "$0")"
npm run build

if [ $? -eq 0 ]; then
    echo "✓ Build successful"
    echo "Files ready in dist/"
    ls -lh dist/
else
    echo "✗ Build failed"
    exit 1
fi
```

Make it executable:
```bash
chmod +x rebuild.sh
./rebuild.sh
```

## Verify Build Has Debugging

After building, check that debugging is included:

```bash
# Search for console.log in the built JavaScript
grep -o "console.log" dist/assets/index-*.js | wc -l
# Should show many matches (we added lots of logging)
```

## Troubleshooting Web Server Issues

### 404 on assets

**Problem:** `index.html` loads but JavaScript gives 404

**Solution:** Check that web server can serve files from `assets/` subdirectory

### Blank page

**Problem:** Page loads but shows nothing

**Solutions:**
1. Check browser console for JavaScript errors
2. Verify `dist/index.html` exists and is recent
3. Hard refresh (Ctrl+Shift+R)
4. Check web server error logs

### "Module not found" errors

**Problem:** JavaScript errors about missing modules

**Solution:** Rebuild with `npm run build` (build wasn't completed)

## Production Checklist

Before serving to users:

- [ ] Run `npm run build` to create production files
- [ ] Verify `dist/` folder has recent files
- [ ] Test in browser with console open (F12)
- [ ] See initialization logs (🎨 Initializing...)
- [ ] Successfully load an example .timber file
- [ ] Verify terrain renders in 3D
- [ ] Test on different browsers (Chrome, Firefox, Safari)

---

**Current build:** 2025-10-31 with comprehensive debugging logs

The `dist/` folder is now ready to serve from your web server!
