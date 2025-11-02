#!/bin/bash
# Build WASM module with wasm-pack

set -e

echo "🔧 Building Rust WASM module..."

# Check if wasm-pack is installed
if ! command -v wasm-pack &> /dev/null; then
    echo "❌ wasm-pack not found!"
    echo "Install with: cargo install wasm-pack"
    echo "Or visit: https://rustwasm.github.io/wasm-pack/installer/"
    exit 1
fi

# Build WASM module
wasm-pack build --target web --out-dir ./pkg

echo "✅ WASM module built successfully!"
echo "📦 Output: wasm/pkg/"
echo ""
echo "File sizes:"
ls -lh pkg/*.wasm | awk '{print "  " $9 ": " $5}'
