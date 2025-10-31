using System.IO.Compression;
using Newtonsoft.Json;
using TimberbornTerrainGenerator.Export.Models;

namespace TimberbornTerrainGenerator;

/// <summary>
/// Generates an absolutely minimal Timberborn map for testing
/// - 4x4 map
/// - 3 layers of terrain blocks
/// - No water, no vegetation
/// - Just basic structure
/// </summary>
public class MinimalMapGenerator
{
    public static void Generate(string outputPath)
    {
        Console.WriteLine("Generating minimal 4x4x3 test map...");

        // Build voxels array: 4x4x3 = 48 voxels
        // First 3 layers (y=0,1,2) all solid, rest air
        var voxels = new List<string>();
        for (int y = 0; y < 3; y++)  // 3 layers high
        for (int z = 0; z < 4; z++)  // 4 deep
        for (int x = 0; x < 4; x++)  // 4 wide
        {
            voxels.Add("1"); // All solid for first 3 layers
        }

        string voxelsArray = string.Join(" ", voxels);

        // Water and moisture arrays for 4x4 surface
        int surfaceSize = 16; // 4x4
        string waterArray = string.Join(" ", Enumerable.Repeat("0", surfaceSize));
        string moistureArray = string.Join(" ", Enumerable.Repeat("0", surfaceSize));
        string contaminationArray = string.Join(" ", Enumerable.Repeat("0", surfaceSize));
        string evaporationArray = string.Join(" ", Enumerable.Repeat("1", surfaceSize));
        string outflowsArray = string.Join(" ", Enumerable.Repeat("0|0:0|0:0|0:0|0", surfaceSize));

        // Build minimal map data
        var mapData = new MapData
        {
            GameVersion = "0.7.10.0",
            Timestamp = DateTime.UtcNow.ToString("o"),
            Singletons = new Singletons
            {
                MapSize = new MapSize
                {
                    Size = new Size { X = 4, Y = 4 }
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
                    Position = new Position { X = 2, Y = 0, Z = 2 },
                    ZoomLevel = 0.5f,
                    HorizontalAngle = 45.0f,
                    VerticalAngle = 45.0f
                }
            },
            Entities = [] // No TerrainBlock entities - terrain is in Voxels array
        };

        // Serialize to JSON using Newtonsoft.Json for compatibility with Timberborn
        var settings = new JsonSerializerSettings
        {
            Formatting = Formatting.None,
            NullValueHandling = NullValueHandling.Include
        };

        string json = JsonConvert.SerializeObject(mapData, settings);

        // Create ZIP archive
        string timberPath = Path.Combine(outputPath, "UltraMinimal.timber");
        if (File.Exists(timberPath))
            File.Delete(timberPath);

        using var archive = ZipFile.Open(timberPath, ZipArchiveMode.Create);
        var entry = archive.CreateEntry("world.json");

        using (var writer = new StreamWriter(entry.Open()))
        {
            writer.Write(json);
        }

        Console.WriteLine($"✓ Created minimal map: {timberPath}");
        Console.WriteLine($"  Size: 4x4x3");
        Console.WriteLine($"  Voxels: 48 (all solid)");
        Console.WriteLine($"  Entities: 0 (terrain defined in Voxels array)");
        Console.WriteLine($"  File size: {new FileInfo(timberPath).Length / 1024.0:F1} KB");
    }
}
