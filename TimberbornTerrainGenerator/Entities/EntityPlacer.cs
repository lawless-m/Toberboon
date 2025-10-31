using TimberbornTerrainGenerator.Config;
using TimberbornTerrainGenerator.Export.Models;
using TimberbornTerrainGenerator.Terrain;

namespace TimberbornTerrainGenerator.Entities;

public class EntityPlacer
{
    public List<Entity> PlaceAll(VoxelGrid grid, GeneratorConfig config)
    {
        var entities = new List<Entity>();

        Console.WriteLine("Placing water sources...");
        var waterPlacer = new WaterSourcePlacer();
        entities.AddRange(waterPlacer.PlaceWaterSources(grid, config));

        Console.WriteLine("Placing vegetation...");
        var vegPlacer = new VegetationPlacer();
        entities.AddRange(vegPlacer.PlaceVegetation(grid, config));

        return entities;
    }
}
