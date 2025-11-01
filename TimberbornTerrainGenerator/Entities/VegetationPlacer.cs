using TimberbornTerrainGenerator.Config;
using TimberbornTerrainGenerator.Export.Models;
using TimberbornTerrainGenerator.Terrain;
using TimberbornTerrainGenerator.Utils;

namespace TimberbornTerrainGenerator.Entities;

public class VegetationPlacer
{
    public List<Entity> PlaceVegetation(VoxelGrid grid, GeneratorConfig config)
    {
        var entities = new List<Entity>();
        var settings = config.Entities.Vegetation;
        var random = new Random(config.Seed + 4000);

        // Find valid planting locations (solid ground, not water)
        var validLocations = FindValidPlantingLocations(grid);

        // Calculate tree count
        int treeCount = (int)(validLocations.Count * settings.TreeDensityPercent / 100.0);
        int bushCount = (int)(validLocations.Count * settings.BushDensityPercent / 100.0);

        // Place trees
        var selectedTrees = validLocations.OrderBy(_ => random.Next())
                                          .Take(treeCount)
                                          .ToList();

        int entityId = 1;
        foreach (var pos in selectedTrees)
        {
            string treeType = SelectTreeType(random, settings.TreeTypes);
            entities.Add(CreateTree(pos, treeType, entityId++));
        }

        // Place bushes
        var availableForBushes = validLocations.Except(selectedTrees).ToList();
        var selectedBushes = availableForBushes.OrderBy(_ => random.Next())
                                                .Take(bushCount)
                                                .ToList();

        foreach (var pos in selectedBushes)
        {
            // Only use BlueberryBush - it's the main valid bush type in Timberborn
            string bushType = "BlueberryBush";
            entities.Add(CreateBush(pos, bushType, entityId++));
        }

        return entities;
    }

    private List<Vector3Int> FindValidPlantingLocations(VoxelGrid grid)
    {
        var locations = new List<Vector3Int>();

        for (int x = 0; x < grid.Width; x++)
        for (int z = 0; z < grid.Depth; z++)
        {
            int surfaceY = grid.GetSurfaceHeight(x, z);
            if (surfaceY > 0)
            {
                var groundPos = new Vector3Int(x, surfaceY, z);
                var plantPos = new Vector3Int(x, surfaceY + 1, z);

                // Check if solid ground and air above
                if (grid[groundPos] == VoxelType.Solid &&
                    grid[plantPos] == VoxelType.Air)
                {
                    locations.Add(plantPos);
                }
            }
        }

        return locations;
    }

    private string SelectTreeType(Random random, Dictionary<string, float> treeTypes)
    {
        float roll = random.NextSingle();
        float cumulative = 0f;

        foreach (var (type, probability) in treeTypes)
        {
            cumulative += probability;
            if (roll <= cumulative)
                return type;
        }

        return treeTypes.Keys.First();
    }

    private Entity CreateTree(Vector3Int pos, string treeType, int id)
    {
        return new Entity
        {
            Id = Guid.NewGuid().ToString(),
            Template = treeType,
            Components = new Dictionary<string, object>
            {
                ["BlockObject"] = new Dictionary<string, object>
                {
                    ["Coordinates"] = new Dictionary<string, int>
                    {
                        // Coordinate conversion: Grid (X,Y,Z) where Y=height -> Timberborn (X,Y,Z) where Z=height
                        ["X"] = pos.X,  // Grid X -> Timberborn X
                        ["Y"] = pos.Z,  // Grid Z -> Timberborn Y
                        ["Z"] = pos.Y   // Grid Y (height) -> Timberborn Z (height)
                    }
                },
                ["Growable"] = new Dictionary<string, float>
                {
                    ["GrowthProgress"] = 1.0f // Fully grown
                }
            }
        };
    }

    private Entity CreateBush(Vector3Int pos, string bushType, int id)
    {
        return new Entity
        {
            Id = Guid.NewGuid().ToString(),
            Template = bushType,
            Components = new Dictionary<string, object>
            {
                ["BlockObject"] = new Dictionary<string, object>
                {
                    ["Coordinates"] = new Dictionary<string, int>
                    {
                        // Coordinate conversion: Grid (X,Y,Z) where Y=height -> Timberborn (X,Y,Z) where Z=height
                        ["X"] = pos.X,  // Grid X -> Timberborn X
                        ["Y"] = pos.Z,  // Grid Z -> Timberborn Y
                        ["Z"] = pos.Y   // Grid Y (height) -> Timberborn Z (height)
                    }
                },
                ["Growable"] = new Dictionary<string, float>
                {
                    ["GrowthProgress"] = 1.0f
                }
            }
        };
    }
}
