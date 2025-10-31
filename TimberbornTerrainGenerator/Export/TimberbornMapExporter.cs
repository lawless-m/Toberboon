using System.IO.Compression;
using System.Text;
using Newtonsoft.Json;
using TimberbornTerrainGenerator.Config;
using TimberbornTerrainGenerator.Export.Models;
using TimberbornTerrainGenerator.Terrain;
using TimberbornTerrainGenerator.Utils;

namespace TimberbornTerrainGenerator.Export;

public class TimberbornMapExporter
{
    public void Export(VoxelGrid grid, List<Entity> entities, GeneratorConfig config, string outputPath)
    {
        // Build MapData
        var mapData = BuildMapData(grid, entities, config);

        // Serialize to JSON using Newtonsoft.Json for compatibility with Timberborn
        var settings = new JsonSerializerSettings
        {
            Formatting = Formatting.None, // Compact JSON
            NullValueHandling = NullValueHandling.Include
        };

        string json = JsonConvert.SerializeObject(mapData, settings);

        // Create ZIP archive (.timber file)
        string timberPath = Path.Combine(outputPath, $"{config.OutputName}.timber");

        if (File.Exists(timberPath))
            File.Delete(timberPath);

        using var archive = ZipFile.Open(timberPath, ZipArchiveMode.Create);
        var entry = archive.CreateEntry("world.json");

        using (var writer = new StreamWriter(entry.Open()))
        {
            writer.Write(json);
        }

        Console.WriteLine($"Map exported: {timberPath}");
    }

    private MapData BuildMapData(VoxelGrid grid, List<Entity> entities, GeneratorConfig config)
    {
        // Build base heightmap array
        string heightsArray = BuildHeightsArray(grid);

        // Build water and moisture arrays (all zeros for dry terrain)
        int arraySize = grid.Width * grid.Depth;
        string waterArray = new string('0', arraySize);
        string moistureArray = new string('0', arraySize);

        // Build terrain block entities
        var terrainEntities = BuildTerrainBlockEntities(grid);

        // Combine all entities
        var allEntities = new List<Entity>();
        allEntities.AddRange(terrainEntities);
        allEntities.AddRange(entities);

        return new MapData
        {
            Singletons = new Singletons
            {
                MapSize = new MapSize
                {
                    Size = new Size
                    {
                        X = config.MapSize,
                        Y = config.MapSize
                    }
                },
                TerrainMap = new TerrainMap
                {
                    Heights = new HeightsArray
                    {
                        Array = heightsArray
                    }
                },
                WaterMap = new WaterMap
                {
                    WaterDepths = new WaterArray { Array = waterArray },
                    Outflows = new WaterArray { Array = waterArray }
                },
                SoilMoistureSimulator = new SoilMoistureSimulator
                {
                    MoistureLevels = new MoistureArray { Array = moistureArray }
                },
                CameraComponent = new CameraComponent
                {
                    CameraState = new CameraState
                    {
                        Target = new Target
                        {
                            X = config.MapSize / 2.0f,
                            Y = 0,
                            Z = config.MapSize / 2.0f
                        }
                    }
                }
            },
            Entities = allEntities
        };
    }

    private string BuildHeightsArray(VoxelGrid grid)
    {
        var sb = new StringBuilder(grid.Width * grid.Depth);

        // Heights array is legacy 2D terrain - we use TerrainBlocks for 3D voxel terrain
        // Set to 0 for all positions since we're using full 3D TerrainBlock entities
        for (int z = 0; z < grid.Depth; z++)
        for (int x = 0; x < grid.Width; x++)
        {
            sb.Append('0');
        }

        return sb.ToString();
    }

    private List<Entity> BuildTerrainBlockEntities(VoxelGrid grid)
    {
        var entities = new List<Entity>();
        int entityId = 1;

        foreach (var pos in grid.GetAllSolidVoxels())
        {
            entities.Add(new Entity
            {
                Id = $"terrain-{entityId++}",
                Template = "TerrainBlock",
                Components = new List<object>
                {
                    new BlockObjectComponent
                    {
                        BlockObject = new BlockObject
                        {
                            Coordinates = new Coordinates(pos.X, pos.Y, pos.Z),
                            Orientation = new Orientation(0)
                        }
                    }
                }
            });
        }

        return entities;
    }
}
