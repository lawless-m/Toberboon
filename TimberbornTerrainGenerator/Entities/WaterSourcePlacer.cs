using TimberbornTerrainGenerator.Config;
using TimberbornTerrainGenerator.Export.Models;
using TimberbornTerrainGenerator.Terrain;
using TimberbornTerrainGenerator.Utils;

namespace TimberbornTerrainGenerator.Entities;

public class WaterSourcePlacer
{
    public List<Entity> PlaceWaterSources(VoxelGrid grid, GeneratorConfig config)
    {
        var sources = new List<Entity>();
        var settings = config.Entities.WaterSources;
        var random = new Random(config.Seed + 3000);

        // Find high elevation candidates
        var candidates = FindHighGroundLocations(grid, settings.MinElevation);

        // Shuffle and take requested count
        var selected = candidates.OrderBy(_ => random.Next())
                                 .Take(settings.Count)
                                 .ToList();

        foreach (var pos in selected)
        {
            float strength = settings.MinStrength +
                           (float)random.NextDouble() *
                           (settings.MaxStrength - settings.MinStrength);

            sources.Add(new Entity
            {
                Id = Guid.NewGuid().ToString(),
                Template = "WaterSource",
                Components = new Dictionary<string, object>
                {
                    ["WaterSource"] = new Dictionary<string, float>
                    {
                        ["SpecifiedStrength"] = strength,
                        ["CurrentStrength"] = strength
                    },
                    ["BlockObject"] = new Dictionary<string, object>
                    {
                        ["Coordinates"] = new Dictionary<string, int>
                        {
                            // Coordinate conversion: Grid (X,Y,Z) where Y=height -> Timberborn (X,Y,Z) where Z=height
                            ["X"] = pos.X,  // Grid X -> Timberborn X
                            ["Y"] = pos.Z,  // Grid Z -> Timberborn Y
                            ["Z"] = pos.Y   // Grid Y (height) -> Timberborn Z (height)
                        },
                        ["Orientation"] = "Cw0"
                    }
                }
            });
        }

        return sources;
    }

    private List<Vector3Int> FindHighGroundLocations(VoxelGrid grid, int minElevation)
    {
        var locations = new List<Vector3Int>();

        for (int x = 5; x < grid.Width - 5; x += 10) // Sample grid
        for (int z = 5; z < grid.Depth - 5; z += 10)
        {
            int surfaceY = grid.GetSurfaceHeight(x, z);
            if (surfaceY >= minElevation)
            {
                var pos = new Vector3Int(x, surfaceY + 1, z);

                // Ensure supported all the way down
                if (IsSupportedToGround(grid, pos))
                {
                    locations.Add(pos);
                }
            }
        }

        return locations;
    }

    private bool IsSupportedToGround(VoxelGrid grid, Vector3Int pos)
    {
        for (int y = pos.Y - 1; y >= 0; y--)
        {
            if (grid[new Vector3Int(pos.X, y, pos.Z)] != VoxelType.Solid)
                return false;
        }
        return true;
    }
}
