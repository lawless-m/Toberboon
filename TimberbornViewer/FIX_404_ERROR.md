# 🚨 WEB SERVER CONFIGURATION ERROR - SOLUTION

## Problem

You're getting: `main.ts:1 Failed to load resource: the server responded with a status of 404`

This means your web server is serving the **wrong index.html file**.

## Root Cause

❌ **Wrong:** Your web server is pointing to `TimberbornViewer/`
✅ **Correct:** It should point to `TimberbornViewer/dist/`

## The Two index.html Files

### Development version (DON'T serve this)
```
TimberbornViewer/index.html
└── References: /src/main.ts (TypeScript source - causes 404!)
```

### Production version (SERVE THIS)
```
TimberbornViewer/dist/index.html
└── References: ./assets/index-B2Fyazgs.js (Built JavaScript - works!)
```

## Solution

Change your web server configuration to point to the **dist/** folder:

### Apache

```apache
DocumentRoot "/home/user/Toberboon/TimberbornViewer/dist"

<Directory "/home/user/Toberboon/TimberbornViewer/dist">
    Options Indexes FollowSymLinks
    AllowOverride All
    Require all granted
</Directory>
```

### Nginx

```nginx
server {
    root /home/user/Toberboon/TimberbornViewer/dist;

    location / {
        try_files $uri $uri/ /index.html;
    }
}
```

### Python Test Server

```bash
cd /home/user/Toberboon/TimberbornViewer/dist
python3 -m http.server 8080
```

Or use the provided script:
```bash
cd /home/user/Toberboon/TimberbornViewer
./serve-dist.sh
```

## Quick Test

To verify your web server is serving the correct files:

1. Open your viewer URL
2. Press F12 → Network tab
3. Refresh page
4. Look for the first JavaScript file loaded

**If you see:**
- ❌ `main.ts` → Wrong! Serving from root folder
- ✅ `index-B2Fyazgs.js` → Correct! Serving from dist/

## Directory Structure Reference

```
TimberbornViewer/
├── index.html              ← DEV version (don't serve this)
├── src/                    ← TypeScript source (don't serve this)
│   ├── main.ts
│   ├── renderer.ts
│   └── loader.ts
└── dist/                   ← PRODUCTION BUILD (serve this!)
    ├── index.html          ← This is the correct file
    └── assets/
        └── index-B2Fyazgs.js  ← Built JavaScript
```

## After Fixing

Once your web server points to `dist/`, you should see in the console:

```
🎨 Initializing TerrainRenderer...
✓ Scene created
✓ Camera created at position: Vector3 {x: 50, y: 50, z: 50}
✓ WebGL renderer created
...
```

No more 404 errors!

## Rebuilding After Changes

Whenever you pull changes from git:

```bash
cd /home/user/Toberboon/TimberbornViewer
npm run build
# Your web server will automatically serve the updated dist/ files
```

---

**TL;DR:** Change your web server to serve `TimberbornViewer/dist/` instead of `TimberbornViewer/`
