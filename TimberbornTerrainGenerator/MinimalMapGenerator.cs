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

        var entities = new List<Entity>();
        int entityId = 1;

        // Create a 4x4 grid with 3 layers of terrain
        for (int x = 0; x < 4; x++)
        for (int z = 0; z < 4; z++)
        for (int y = 0; y < 3; y++)
        {
            entities.Add(new Entity
            {
                Id = $"terrain-{entityId++}",
                Template = "TerrainBlock",
                Components =
                [
                    new BlockObjectComponent
                    {
                        BlockObject = new BlockObject
                        {
                            Coordinates = new Coordinates(x, y, z),
                            Orientation = new Orientation(0)
                        }
                    }
                ]
            });
        }

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
                    Heights = new HeightsArray
                    {
                        Array = new string('0', 16) // 4x4 = 16 positions, all height 0
                    }
                },
                CameraComponent = new CameraComponent
                {
                    CameraState = new CameraState
                    {
                        Target = new Target { X = 2, Y = 0, Z = 2 }
                    }
                }
            },
            Entities = entities
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
        Console.WriteLine($"  Entities: {entities.Count} (all TerrainBlock)");
        Console.WriteLine($"  File size: {new FileInfo(timberPath).Length / 1024.0:F1} KB");
    }
}
