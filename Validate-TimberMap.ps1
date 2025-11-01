param(
    [Parameter(Mandatory=$true)]
    [string]$MapFile
)

if (-not (Test-Path $MapFile)) {
    Write-Error "File not found: $MapFile"
    exit 1
}

Write-Host "=== Validating $MapFile ===" -ForegroundColor Cyan
Write-Host ""

# Create temp directory
$tempDir = New-Item -ItemType Directory -Path (Join-Path $env:TEMP ([System.Guid]::NewGuid()))

try {
    # Extract ZIP (.timber files are actually ZIP archives)
    # PowerShell's Expand-Archive doesn't like .timber extension, so we'll use .NET
    Add-Type -AssemblyName System.IO.Compression.FileSystem
    [System.IO.Compression.ZipFile]::ExtractToDirectory($MapFile, $tempDir)

    # Load and parse world.json
    $worldJson = Get-Content (Join-Path $tempDir "world.json") -Raw | ConvertFrom-Json

    $width = $worldJson.Singletons.MapSize.Size.X
    $height = $worldJson.Singletons.MapSize.Size.Y

    Write-Host "Map Size: $width x $height"
    Write-Host ""

    $issues = 0

    # Check voxels
    $voxels = $worldJson.Singletons.TerrainMap.Voxels.Array.Trim() -split '\s+'
    $expectedVoxels = $width * $height * 23
    Write-Host "Voxels:"
    Write-Host "  Expected: $expectedVoxels ($width x $height x 23)"
    Write-Host "  Actual:   $($voxels.Length)"
    if ($voxels.Length -eq $expectedVoxels) {
        Write-Host "  Status:   OK" -ForegroundColor Green
    } else {
        Write-Host "  Status:   MISMATCH (Diff: $($voxels.Length - $expectedVoxels))" -ForegroundColor Red
        $issues++
    }
    Write-Host ""

    # Check water columns
    $expectedSurface = $width * $height
    $water = $worldJson.Singletons.WaterMapNew.WaterColumns.Array.Trim() -split '\s+'
    Write-Host "Water Columns:"
    Write-Host "  Expected: $expectedSurface ($width x $height)"
    Write-Host "  Actual:   $($water.Length)"
    if ($water.Length -eq $expectedSurface) {
        Write-Host "  Status:   OK" -ForegroundColor Green
    } else {
        Write-Host "  Status:   MISMATCH (Diff: $($water.Length - $expectedSurface))" -ForegroundColor Red
        $issues++
    }
    Write-Host ""

    # Check outflows
    $outflows = $worldJson.Singletons.WaterMapNew.ColumnOutflows.Array.Trim() -split '\s+'
    Write-Host "Water Outflows:"
    Write-Host "  Expected: $expectedSurface"
    Write-Host "  Actual:   $($outflows.Length)"
    if ($outflows.Length -eq $expectedSurface) {
        Write-Host "  Status:   OK" -ForegroundColor Green
    } else {
        Write-Host "  Status:   MISMATCH (Diff: $($outflows.Length - $expectedSurface))" -ForegroundColor Red
        $issues++
    }
    Write-Host ""

    # Check evaporation
    $evap = $worldJson.Singletons.WaterEvaporationMap.EvaporationModifiers.Array.Trim() -split '\s+'
    Write-Host "Evaporation Modifiers:"
    Write-Host "  Expected: $expectedSurface"
    Write-Host "  Actual:   $($evap.Length)"
    if ($evap.Length -eq $expectedSurface) {
        Write-Host "  Status:   OK" -ForegroundColor Green
    } else {
        Write-Host "  Status:   MISMATCH (Diff: $($evap.Length - $expectedSurface))" -ForegroundColor Red
        $issues++
    }
    Write-Host ""

    # Check moisture
    $moisture = $worldJson.Singletons.SoilMoistureSimulator.MoistureLevels.Array.Trim() -split '\s+'
    Write-Host "Moisture Levels:"
    Write-Host "  Expected: $expectedSurface"
    Write-Host "  Actual:   $($moisture.Length)"
    if ($moisture.Length -eq $expectedSurface) {
        Write-Host "  Status:   OK" -ForegroundColor Green
    } else {
        Write-Host "  Status:   MISMATCH (Diff: $($moisture.Length - $expectedSurface))" -ForegroundColor Red
        $issues++
    }
    Write-Host ""

    # Check contamination
    $contam = $worldJson.Singletons.SoilContaminationSimulator.ContaminationLevels.Array.Trim() -split '\s+'
    Write-Host "Contamination Levels:"
    Write-Host "  Expected: $expectedSurface"
    Write-Host "  Actual:   $($contam.Length)"
    if ($contam.Length -eq $expectedSurface) {
        Write-Host "  Status:   OK" -ForegroundColor Green
    } else {
        Write-Host "  Status:   MISMATCH (Diff: $($contam.Length - $expectedSurface))" -ForegroundColor Red
        $issues++
    }
    Write-Host ""

    # Check entity coordinates
    Write-Host "Entity Coordinates:"
    $invalidEntities = 0
    foreach ($entity in $worldJson.Entities) {
        if ($entity.Components.BlockObject) {
            $coords = $entity.Components.BlockObject.Coordinates
            if ($coords.X -lt 0 -or $coords.X -ge $width -or
                $coords.Y -lt 0 -or $coords.Y -ge $height -or
                $coords.Z -lt 0 -or $coords.Z -ge 23) {
                Write-Host "  Invalid: $($entity.Template) at ($($coords.X), $($coords.Y), $($coords.Z))" -ForegroundColor Red
                $invalidEntities++
            }
        }
    }
    if ($invalidEntities -eq 0) {
        Write-Host "  All entity coordinates valid ($($worldJson.Entities.Length) entities checked)" -ForegroundColor Green
    } else {
        $issues += $invalidEntities
    }
    Write-Host ""

    # Summary
    if ($issues -gt 0) {
        Write-Host "=== VALIDATION FAILED ===" -ForegroundColor Red
        Write-Host "$issues issue(s) found" -ForegroundColor Red
        exit 1
    } else {
        Write-Host "=== VALIDATION PASSED ===" -ForegroundColor Green
    }

} finally {
    # Cleanup
    Remove-Item -Path $tempDir -Recurse -Force -ErrorAction SilentlyContinue
}
