param([string]$MapFile)

Add-Type -AssemblyName System.IO.Compression.FileSystem
$tempDir = New-Item -ItemType Directory -Path (Join-Path $env:TEMP ([System.Guid]::NewGuid()))

try {
    [System.IO.Compression.ZipFile]::ExtractToDirectory($MapFile, $tempDir)
    $data = Get-Content (Join-Path $tempDir "world.json") -Raw | ConvertFrom-Json

    # Find StartingLocation
    $startLoc = $data.Entities | Where-Object { $_.Template -eq "StartingLocation" } | Select-Object -First 1

    if ($startLoc) {
        $coords = $startLoc.Components.BlockObject.Coordinates
        Write-Host "StartingLocation at: ($($coords.X), $($coords.Y), $($coords.Z))" -ForegroundColor Cyan

        # Get voxel array
        $voxels = $data.Singletons.TerrainMap.Voxels.Array.Trim() -split '\s+'
        $mapSize = $data.Singletons.MapSize.Size

        # Check voxels around the starting location
        # Timberborn coords: X,Y are horizontal, Z is height
        # Voxel order: for Z, for Y, for X

        for ($z = 19; $z -le 22; $z++) {
            $index = $z * $mapSize.X * $mapSize.Y + $coords.Y * $mapSize.X + $coords.X
            if ($index -lt $voxels.Length) {
                $voxel = $voxels[$index]
                $type = if ($voxel -eq "1") { "SOLID" } else { "AIR" }
                Write-Host "  Z=$z : $type"
            }
        }
    } else {
        Write-Host "No StartingLocation found!" -ForegroundColor Red
    }
} finally {
    Remove-Item -Recurse -Force $tempDir -ErrorAction SilentlyContinue
}
