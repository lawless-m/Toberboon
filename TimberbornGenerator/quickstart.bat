@echo off
REM Windows Quickstart Script for WASM Hybrid Generator

echo ======================================
echo Timberborn Hybrid Generator Quickstart
echo ======================================
echo.

REM Check for Rust
where rustc >nul 2>nul
if %errorlevel% neq 0 (
    echo [ERROR] Rust not found!
    echo.
    echo Install Rust from: https://rustup.rs/
    echo Then restart this script.
    pause
    exit /b 1
)

REM Check for npm
where npm >nul 2>nul
if %errorlevel% neq 0 (
    echo [ERROR] npm not found!
    echo.
    echo Install Node.js from: https://nodejs.org/
    pause
    exit /b 1
)

echo [OK] Rust installed
echo [OK] npm installed
echo.

REM Check for wasm-pack
where wasm-pack >nul 2>nul
if %errorlevel% neq 0 (
    echo Installing wasm-pack...
    cargo install wasm-pack
    if %errorlevel% neq 0 (
        echo [ERROR] Failed to install wasm-pack
        pause
        exit /b 1
    )
)

echo [OK] wasm-pack installed
echo.

REM Install npm dependencies
echo Installing npm dependencies...
call npm install
if %errorlevel% neq 0 (
    echo [ERROR] npm install failed
    pause
    exit /b 1
)

echo [OK] npm dependencies installed
echo.

REM Build WASM
echo Building WASM module...
cd wasm
call wasm-pack build --target web --out-dir ./pkg
if %errorlevel% neq 0 (
    echo [ERROR] WASM build failed
    cd ..
    pause
    exit /b 1
)
cd ..

echo.
echo ======================================
echo SUCCESS! WASM module built!
echo ======================================
echo.
echo Starting development server...
echo.
echo Look for:
echo   - Green "WASM READY" badge
echo   - Console message: "WASM module loaded successfully"
echo.
echo Press Ctrl+C to stop the server
echo.

call npm run dev
