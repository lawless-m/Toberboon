#!/bin/bash
# QUICKSTART: Build and Run Hybrid WASM Generator
# Run this on your local machine with internet access

set -e

echo "🚀 Timberborn Hybrid Generator - Quickstart"
echo "==========================================="
echo ""

# Step 1: Check prerequisites
echo "📋 Step 1: Checking prerequisites..."
echo ""

if ! command -v rustc &> /dev/null; then
    echo "❌ Rust not found!"
    echo ""
    echo "Install Rust:"
    echo "  curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh"
    echo ""
    exit 1
fi

if ! command -v cargo &> /dev/null; then
    echo "❌ Cargo not found!"
    exit 1
fi

if ! command -v npm &> /dev/null; then
    echo "❌ npm not found!"
    echo ""
    echo "Install Node.js from: https://nodejs.org/"
    echo ""
    exit 1
fi

echo "✅ Rust installed: $(rustc --version)"
echo "✅ Cargo installed: $(cargo --version)"
echo "✅ npm installed: $(npm --version)"
echo ""

# Step 2: Install wasm-pack
echo "📦 Step 2: Installing wasm-pack..."
echo ""

if ! command -v wasm-pack &> /dev/null; then
    echo "Installing wasm-pack (this may take a few minutes)..."
    cargo install wasm-pack
    echo "✅ wasm-pack installed!"
else
    echo "✅ wasm-pack already installed: $(wasm-pack --version)"
fi
echo ""

# Step 3: Install npm dependencies
echo "📦 Step 3: Installing npm dependencies..."
echo ""
npm install
echo "✅ npm dependencies installed!"
echo ""

# Step 4: Build WASM module
echo "🔧 Step 4: Building Rust WASM module..."
echo ""
cd wasm
wasm-pack build --target web --out-dir ./pkg
cd ..
echo ""
echo "✅ WASM module built successfully!"
echo ""

# Check WASM file size
if [ -f "wasm/pkg/timberborn_wasm_bg.wasm" ]; then
    SIZE=$(du -h wasm/pkg/timberborn_wasm_bg.wasm | cut -f1)
    echo "📊 WASM bundle size: $SIZE"
    echo ""
fi

# Step 5: Start dev server
echo "🌐 Step 5: Starting development server..."
echo ""
echo "✨ SUCCESS! The hybrid generator is ready!"
echo ""
echo "The server will start on http://localhost:5173"
echo ""
echo "Look for this in the browser console:"
echo "  ✅ WASM module loaded successfully"
echo "  🔥 Using WASM for hot paths"
echo ""
echo "The badge should show 'WASM READY' in green."
echo ""
echo "Press Ctrl+C to stop the server when done."
echo ""

npm run dev
