#!/bin/bash
# Validate a .timber map file for array size issues

if [ "$#" -ne 1 ]; then
    echo "Usage: $0 <map.timber>"
    exit 1
fi

MAP_FILE="$1"

if [ ! -f "$MAP_FILE" ]; then
    echo "Error: File not found: $MAP_FILE"
    exit 1
fi

echo "=== Validating $MAP_FILE ==="
echo

# Extract world.json temporarily
TEMP_DIR=$(mktemp -d)
unzip -q -o "$MAP_FILE" -d "$TEMP_DIR"

# Use node to parse and validate
node -e "
const fs = require('fs');
const data = JSON.parse(fs.readFileSync('$TEMP_DIR/world.json', 'utf8'));
const mapSize = data.Singletons.MapSize.Size;
const width = mapSize.X;
const height = mapSize.Y;

console.log('Map Size: ' + width + 'x' + height);
console.log('');

// Check voxels
const voxels = data.Singletons.TerrainMap.Voxels.Array.trim().split(/\s+/);
const expectedVoxels = width * height * 23;
console.log('Voxels:');
console.log('  Expected: ' + expectedVoxels + ' (' + width + ' × ' + height + ' × 23)');
console.log('  Actual:   ' + voxels.length);
console.log('  Status:   ' + (voxels.length === expectedVoxels ? '✓ OK' : '✗ MISMATCH'));
console.log('');

// Check water columns
const water = data.Singletons.WaterMapNew.WaterColumns.Array.trim().split(/\s+/);
const expectedSurface = width * height;
console.log('Water Columns:');
console.log('  Expected: ' + expectedSurface + ' (' + width + ' × ' + height + ')');
console.log('  Actual:   ' + water.length);
console.log('  Status:   ' + (water.length === expectedSurface ? '✓ OK' : '✗ MISMATCH'));
console.log('');

// Check outflows
const outflows = data.Singletons.WaterMapNew.ColumnOutflows.Array.trim().split(/\s+/);
console.log('Water Outflows:');
console.log('  Expected: ' + expectedSurface);
console.log('  Actual:   ' + outflows.length);
console.log('  Status:   ' + (outflows.length === expectedSurface ? '✓ OK' : '✗ MISMATCH'));
console.log('');

// Check evaporation
const evap = data.Singletons.WaterEvaporationMap.EvaporationModifiers.Array.trim().split(/\s+/);
console.log('Evaporation Modifiers:');
console.log('  Expected: ' + expectedSurface);
console.log('  Actual:   ' + evap.length);
console.log('  Status:   ' + (evap.length === expectedSurface ? '✓ OK' : '✗ MISMATCH'));
console.log('');

// Check moisture
const moisture = data.Singletons.SoilMoistureSimulator.MoistureLevels.Array.trim().split(/\s+/);
console.log('Moisture Levels:');
console.log('  Expected: ' + expectedSurface);
console.log('  Actual:   ' + moisture.length);
console.log('  Status:   ' + (moisture.length === expectedSurface ? '✓ OK' : '✗ MISMATCH'));
console.log('');

// Check contamination
const contam = data.Singletons.SoilContaminationSimulator.ContaminationLevels.Array.trim().split(/\s+/);
console.log('Contamination Levels:');
console.log('  Expected: ' + expectedSurface);
console.log('  Actual:   ' + contam.length);
console.log('  Status:   ' + (contam.length === expectedSurface ? '✓ OK' : '✗ MISMATCH'));
console.log('');

// Check entity coordinates
console.log('Entity Coordinates:');
let invalidEntities = 0;
data.Entities.forEach(entity => {
    if (entity.Components.BlockObject) {
        const coords = entity.Components.BlockObject.Coordinates;
        if (coords.X < 0 || coords.X >= width ||
            coords.Y < 0 || coords.Y >= height ||
            coords.Z < 0 || coords.Z >= 23) {
            console.log('  ✗ Invalid: ' + entity.Template + ' at (' + coords.X + ', ' + coords.Y + ', ' + coords.Z + ')');
            invalidEntities++;
        }
    }
});
if (invalidEntities === 0) {
    console.log('  ✓ All entity coordinates valid');
}
console.log('');

// Summary
const issues = [
    voxels.length !== expectedVoxels,
    water.length !== expectedSurface,
    outflows.length !== expectedSurface,
    evap.length !== expectedSurface,
    moisture.length !== expectedSurface,
    contam.length !== expectedSurface,
    invalidEntities > 0
].filter(x => x).length;

if (issues > 0) {
    console.log('=== VALIDATION FAILED ===');
    console.log(issues + ' issue(s) found');
    process.exit(1);
} else {
    console.log('=== VALIDATION PASSED ===');
}
"

# Cleanup
rm -rf "$TEMP_DIR"
