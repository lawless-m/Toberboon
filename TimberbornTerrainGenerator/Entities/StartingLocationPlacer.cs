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

        // Search for a 6x6 flat area in expanding circles from center
        // Prioritize locations that won't be clamped (height <= 21 so entity at height+1 = 22 max)
        var location = FindFlatLocation(grid, centerX, centerZ, searchRadius: 30, maxHeight: 21, size: 6);

        if (location == null)
        {
            // Try smaller 4x4 area with larger search radius
            location = FindFlatLocation(grid, centerX, centerZ, searchRadius: grid.Width / 2, maxHeight: 21, size: 4);
        }

        if (location == null)
        {
            // Try 3x3 area (minimum for StartingLocation)
            location = FindFlatLocation(grid, centerX, centerZ, searchRadius: grid.Width / 2, maxHeight: int.MaxValue, size: 3);
        }

        if (location == null)
        {
            // Final fallback: scan entire map for ANY flat 6x6 area
            location = FindAnyFlatLocation(grid, size: 6);
        }

        if (location == null)
        {
            // Try 4x4 scan
            location = FindAnyFlatLocation(grid, size: 4);
        }

        if (location == null)
        {
            // Try 3x3 scan
            location = FindAnyFlatLocation(grid, size: 3);
        }

        if (location == null)
        {
            // Last resort: CREATE a 6x6 flat area at center by flattening terrain
            Console.WriteLine("  No suitable flat area found - creating 6x6 platform at center");
            int targetY = Math.Min(grid.GetSurfaceHeight(centerX, centerZ), 20); // Leave room for entity
            location = CreateFlatPlatform(grid, centerX, centerZ, size: 6, targetHeight: targetY);
        }

        Console.WriteLine($"  StartingLocation placed at ({location.Value.X}, {location.Value.Z}) height={location.Value.Y}");

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
                    },
                    ["Orientation"] = "Cw0"
                }
            }
        };
    }

    private Vector3Int? FindFlatLocation(VoxelGrid grid, int centerX, int centerZ, int searchRadius, int maxHeight, int size)
    {
        // Try to find a flat area of given size
        int margin = size / 2 + 1;

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

                if (x < margin || x >= grid.Width - margin || z < margin || z >= grid.Depth - margin)
                    continue;

                // Check if this location and surrounding area is relatively flat
                if (IsFlatArea(grid, x, z, size))
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

    private Vector3Int? FindAnyFlatLocation(VoxelGrid grid, int size)
    {
        // Scan entire map for ANY flat area of given size, prioritizing lower heights
        int margin = size / 2 + 1;

        for (int targetHeight = 0; targetHeight <= 21; targetHeight++)
        {
            for (int x = margin; x < grid.Width - margin; x += 2) // Sample every 2 blocks for performance
            for (int z = margin; z < grid.Depth - margin; z += 2)
            {
                int surfaceY = grid.GetSurfaceHeight(x, z);

                // Only check areas at the current target height
                if (surfaceY != targetHeight)
                    continue;

                if (IsFlatArea(grid, x, z, size))
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

            // Require completely flat (no height difference) for StartingLocation
            if (height != centerHeight)
                return false;

            // Make sure ground is solid
            if (grid[new Vector3Int(x, height, z)] != VoxelType.Solid)
                return false;

            // Ensure air space above (at least 3 blocks clear)
            for (int y = height + 1; y <= Math.Min(height + 3, grid.Height - 1); y++)
            {
                if (grid[new Vector3Int(x, y, z)] != VoxelType.Air)
                    return false;
            }
        }

        return true;
    }

    private Vector3Int CreateFlatPlatform(VoxelGrid grid, int centerX, int centerZ, int size, int targetHeight)
    {
        // Create a flat platform by modifying the terrain minimally
        int halfSize = size / 2;

        for (int x = centerX - halfSize; x <= centerX + halfSize; x++)
        for (int z = centerZ - halfSize; z <= centerZ + halfSize; z++)
        {
            if (x < 0 || x >= grid.Width || z < 0 || z >= grid.Depth)
                continue;

            int currentHeight = grid.GetSurfaceHeight(x, z);

            // Only modify if height differs from target
            if (currentHeight < targetHeight)
            {
                // Fill up to target height
                for (int y = currentHeight + 1; y <= targetHeight; y++)
                {
                    grid[new Vector3Int(x, y, z)] = VoxelType.Solid;
                }
            }
            else if (currentHeight > targetHeight)
            {
                // Remove blocks down to target height
                for (int y = targetHeight + 1; y <= currentHeight && y < grid.Height; y++)
                {
                    grid[new Vector3Int(x, y, z)] = VoxelType.Air;
                }
            }

            // Clear air space above platform (5 blocks for building)
            for (int y = targetHeight + 1; y <= Math.Min(targetHeight + 5, grid.Height - 1); y++)
            {
                grid[new Vector3Int(x, y, z)] = VoxelType.Air;
            }
        }

        // Return the center position for entity placement (one block above ground)
        return new Vector3Int(centerX, targetHeight + 1, centerZ);
    }
}
