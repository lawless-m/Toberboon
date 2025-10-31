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
        // Build voxels array (space-separated)
        string voxelsArray = BuildVoxelsArray(grid);

        // Build water and moisture arrays (space-separated zeros for dry terrain)
        int arraySize = grid.Width * grid.Depth;
        string waterArray = string.Join(" ", Enumerable.Repeat("0", arraySize));
        string moistureArray = string.Join(" ", Enumerable.Repeat("0", arraySize));
        string contaminationArray = string.Join(" ", Enumerable.Repeat("0", arraySize));
        string evaporationArray = string.Join(" ", Enumerable.Repeat("1", arraySize)); // 1 = normal evaporation

        // Water outflows format: "0|0:0|0:0|0:0|0" (down|north:east|south:west)
        string outflowsArray = string.Join(" ", Enumerable.Repeat("0|0:0|0:0|0:0|0", arraySize));

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
                    Voxels = new VoxelsArray
                    {
                        Array = voxelsArray
                    }
                },
                WaterMapNew = new WaterMapNew
                {
                    Levels = 1,
                    WaterColumns = new WaterArray { Array = waterArray },
                    ColumnOutflows = new WaterArray { Array = outflowsArray }
                },
                WaterEvaporationMap = new WaterEvaporationMap
                {
                    Levels = 1,
                    EvaporationModifiers = new WaterArray { Array = evaporationArray }
                },
                SoilMoistureSimulator = new SoilMoistureSimulator
                {
                    MoistureLevels = new MoistureArray { Array = moistureArray }
                },
                SoilContaminationSimulator = new SoilContaminationSimulator
                {
                    ContaminationLevels = new ContaminationArray { Array = contaminationArray }
                },
                HazardousWeatherHistory = new HazardousWeatherHistory
                {
                    HistoryData = []
                },
                MapThumbnailCameraMover = new MapThumbnailCameraMover
                {
                    Position = new Position
                    {
                        X = config.MapSize / 2.0f,
                        Y = 0,
                        Z = config.MapSize / 2.0f
                    },
                    ZoomLevel = 0.5f,
                    HorizontalAngle = 45.0f,
                    VerticalAngle = 45.0f
                }
            },
            Entities = entities // No TerrainBlock entities - terrain is in Voxels array
        };
    }

    private string BuildVoxelsArray(VoxelGrid grid)
    {
        var values = new List<string>();

        // Voxels array is space-separated: "1" for solid, "0" for air
        // Order: iterate through Y (height), then Z (depth), then X (width)
        for (int y = 0; y < grid.Height; y++)
        for (int z = 0; z < grid.Depth; z++)
        for (int x = 0; x < grid.Width; x++)
        {
            var voxel = grid[new Vector3Int(x, y, z)];
            values.Add(voxel == VoxelType.Solid ? "1" : "0");
        }

        return string.Join(" ", values);
    }

}
