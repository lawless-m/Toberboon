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
        var location = FindFlatLocation(grid, centerX, centerZ, searchRadius: 20);

        if (location == null)
        {
            // Fallback: just use center regardless of flatness
            int surfaceY = grid.GetSurfaceHeight(centerX, centerZ);
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
                        ["Z"] = location.Value.Y   // Timberborn Z is our Y (height)
                    }
                }
            }
        };
    }

    private Vector3Int? FindFlatLocation(VoxelGrid grid, int centerX, int centerZ, int searchRadius)
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
