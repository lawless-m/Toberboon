using TimberbornTerrainGenerator.Config;
using TimberbornTerrainGenerator.Export.Models;
using TimberbornTerrainGenerator.Terrain;
using TimberbornTerrainGenerator.Utils;

namespace TimberbornTerrainGenerator.Entities;

public class StartingLocationPlacer
{
    public Entity PlaceStartingLocation(VoxelGrid grid, GeneratorConfig config)
    {
        // Find a good flat location near the center of the map
        var centerX = grid.Width / 2;
        var centerZ = grid.Depth / 2;

        // Search for a flat area in expanding circles from center
        // Prioritize locations that won't be clamped (height <= 21 so entity at height+1 = 22 max)
        var location = FindFlatLocation(grid, centerX, centerZ, searchRadius: 20, maxHeight: 21);

        if (location == null)
        {
            // Try again with a larger search radius and allow any height
            location = FindFlatLocation(grid, centerX, centerZ, searchRadius: grid.Width / 2, maxHeight: int.MaxValue);
        }

        if (location == null)
        {
            // Final fallback: scan entire map for ANY flat area
            location = FindAnyFlatLocation(grid);
        }

        if (location == null)
        {
            // Last resort: just use center regardless of flatness, clamped to safe height
            int surfaceY = Math.Min(grid.GetSurfaceHeight(centerX, centerZ), 21);
            location = new Vector3Int(centerX, surfaceY + 1, centerZ);
        }

        return new Entity
        {
            Id = Guid.NewGuid().ToString(),
            Template = "StartingLocation",
            Components = new Dictionary<string, object>
            {
                ["BlockObject"] = new Dictionary<string, object>
                {
                    ["Coordinates"] = new Dictionary<string, int>
                    {
                        ["X"] = location.Value.X,
                        ["Y"] = location.Value.Z,  // Timberborn Y is our Z
                        ["Z"] = Math.Min(location.Value.Y, 22)   // Timberborn Z is our Y (height), clamped to max 22
                    }
                }
            }
        };
    }

    private Vector3Int? FindFlatLocation(VoxelGrid grid, int centerX, int centerZ, int searchRadius, int maxHeight)
    {
        // Try to find a flat 3x3 area
        for (int radius = 0; radius < searchRadius; radius++)
        {
            for (int dx = -radius; dx <= radius; dx++)
            for (int dz = -radius; dz <= radius; dz++)
            {
                // Only check points on the current radius circle
                if (Math.Abs(dx) != radius && Math.Abs(dz) != radius)
                    continue;

                int x = centerX + dx;
                int z = centerZ + dz;

                if (x < 3 || x >= grid.Width - 3 || z < 3 || z >= grid.Depth - 3)
                    continue;

                // Check if this location and surrounding area is relatively flat
                if (IsFlatArea(grid, x, z, size: 3))
                {
                    int surfaceY = grid.GetSurfaceHeight(x, z);

                    // Skip if height is too high (entity would be placed at surfaceY + 1)
                    if (surfaceY > maxHeight)
                        continue;

                    return new Vector3Int(x, surfaceY + 1, z);
                }
            }
        }

        return null;
    }

    private Vector3Int? FindAnyFlatLocation(VoxelGrid grid)
    {
        // Scan entire map for ANY flat 3x3 area, prioritizing lower heights
        for (int targetHeight = 0; targetHeight <= 21; targetHeight++)
        {
            for (int x = 3; x < grid.Width - 3; x += 2) // Sample every 2 blocks for performance
            for (int z = 3; z < grid.Depth - 3; z += 2)
            {
                int surfaceY = grid.GetSurfaceHeight(x, z);

                // Only check areas at the current target height
                if (surfaceY != targetHeight)
                    continue;

                if (IsFlatArea(grid, x, z, size: 3))
                {
                    return new Vector3Int(x, surfaceY + 1, z);
                }
            }
        }

        return null;
    }

    private bool IsFlatArea(VoxelGrid grid, int centerX, int centerZ, int size)
    {
        int halfSize = size / 2;
        int centerHeight = grid.GetSurfaceHeight(centerX, centerZ);

        // Check all positions in the area
        for (int x = centerX - halfSize; x <= centerX + halfSize; x++)
        for (int z = centerZ - halfSize; z <= centerZ + halfSize; z++)
        {
            if (x < 0 || x >= grid.Width || z < 0 || z >= grid.Depth)
                return false;

            int height = grid.GetSurfaceHeight(x, z);

            // Allow max 1 block height difference
            if (Math.Abs(height - centerHeight) > 1)
                return false;

            // Make sure ground is solid
            if (grid[new Vector3Int(x, height, z)] != VoxelType.Solid)
                return false;
        }

        return true;
    }
}
