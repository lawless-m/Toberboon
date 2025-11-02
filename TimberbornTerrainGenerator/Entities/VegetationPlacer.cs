using TimberbornTerrainGenerator.Config;
using TimberbornTerrainGenerator.Export.Models;
using TimberbornTerrainGenerator.Terrain;
using TimberbornTerrainGenerator.Utils;

namespace TimberbornTerrainGenerator.Entities;

public class VegetationPlacer
{
    public List<Entity> PlaceVegetation(VoxelGrid grid, GeneratorConfig config, Entity startingLocation)
    {
        var entities = new List<Entity>();
        var settings = config.Entities.Vegetation;
        var random = new Random(config.Seed + 4000);

        // Get StartingLocation coordinates
        var startCoords = GetEntityCoordinates(startingLocation);

        // Find valid planting locations (solid ground, not water, not near StartingLocation)
        var validLocations = FindValidPlantingLocations(grid, startCoords);

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

    private (int X, int Z) GetEntityCoordinates(Entity entity)
    {
        var blockObject = (Dictionary<string, object>)entity.Components["BlockObject"];
        var coordinates = (Dictionary<string, int>)blockObject["Coordinates"];
        return (coordinates["X"], coordinates["Y"]); // Timberborn Y is grid Z (depth)
    }

    private List<Vector3Int> FindValidPlantingLocations(VoxelGrid grid, (int X, int Z) startingLocation)
    {
        var locations = new List<Vector3Int>();
        const int EXCLUSION_RADIUS = 4; // Keep 4 blocks clear around StartingLocation

        for (int x = 0; x < grid.Width; x++)
        for (int z = 0; z < grid.Depth; z++)
        {
            // Skip locations near StartingLocation (Manhattan distance)
            int distanceToStart = Math.Abs(x - startingLocation.X) + Math.Abs(z - startingLocation.Z);
            if (distanceToStart < EXCLUSION_RADIUS)
                continue;

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
                        ["Z"] = Math.Min(pos.Y, 22)   // Grid Y (height) -> Timberborn Z (height), clamped to max 22
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
                        ["Z"] = Math.Min(pos.Y, 22)   // Grid Y (height) -> Timberborn Z (height), clamped to max 22
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
