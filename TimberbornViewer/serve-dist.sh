#!/bin/bash
# Quick test server for TimberbornViewer

echo "🌲 Starting Timberborn Viewer test server..."
echo ""
echo "This serves the BUILT files from dist/"
echo ""

cd "$(dirname "$0")/dist"

if [ ! -f "index.html" ]; then
    echo "❌ Error: dist/index.html not found!"
    echo "Run 'npm run build' first"
    exit 1
fi

echo "📂 Serving from: $(pwd)"
echo "🌐 Open in browser: http://localhost:8080"
echo ""
echo "Press Ctrl+C to stop"
echo ""

python3 -m http.server 8080
