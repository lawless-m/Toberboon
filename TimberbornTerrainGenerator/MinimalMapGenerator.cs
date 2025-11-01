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
        Console.WriteLine("Generating minimal 4x4 test map...");

        // Build voxels array: 4x4x23 = 368 voxels (Timberborn always expects height 23)
        // First 3 layers (y=0,1,2) all solid, rest air (y=3-22)
        const int TIMBERBORN_HEIGHT = 23;
        const int TERRAIN_HEIGHT = 3;
        var voxels = new List<string>();

        for (int y = 0; y < TIMBERBORN_HEIGHT; y++)  // All 23 layers
        for (int z = 0; z < 4; z++)  // 4 deep
        for (int x = 0; x < 4; x++)  // 4 wide
        {
            voxels.Add(y < TERRAIN_HEIGHT ? "1" : "0"); // Solid for first 3 layers, air above
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
            Timestamp = DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss"),
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
                    CurrentConfiguration = new CameraConfiguration
                    {
                        Position = new Position
                        {
                            X = 2.0f,
                            Y = 2.5711503f,
                            Z = -1.064178f
                        },
                        Rotation = new Rotation
                        {
                            X = 0.342020124f,
                            Y = 0.0f,
                            Z = 0.0f,
                            W = 0.9396926f
                        },
                        ShadowDistance = 150.0f
                    }
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

        string worldJson = JsonConvert.SerializeObject(mapData, settings);

        // Build metadata
        var metadata = new MapMetadata
        {
            Width = 4,
            Height = 4
        };
        string metadataJson = JsonConvert.SerializeObject(metadata, settings);

        // Create ZIP archive
        string timberPath = Path.Combine(outputPath, "UltraMinimal.timber");
        if (File.Exists(timberPath))
            File.Delete(timberPath);

        using var archive = ZipFile.Open(timberPath, ZipArchiveMode.Create);

        // Add world.json
        var worldEntry = archive.CreateEntry("world.json");
        using (var writer = new StreamWriter(worldEntry.Open()))
        {
            writer.Write(worldJson);
        }

        // Add map_metadata.json
        var metadataEntry = archive.CreateEntry("map_metadata.json");
        using (var writer = new StreamWriter(metadataEntry.Open()))
        {
            writer.Write(metadataJson);
        }

        // Add version.txt
        var versionEntry = archive.CreateEntry("version.txt");
        using (var writer = new StreamWriter(versionEntry.Open()))
        {
            writer.Write("0.7.10.0");
        }

        // Add placeholder map_thumbnail.jpg (1x1 pixel JPEG)
        var thumbnailEntry = archive.CreateEntry("map_thumbnail.jpg");
        using (var stream = thumbnailEntry.Open())
        {
            // Minimal valid JPEG (1x1 black pixel)
            byte[] minimalJpeg = new byte[] {
                0xFF, 0xD8, 0xFF, 0xE0, 0x00, 0x10, 0x4A, 0x46, 0x49, 0x46, 0x00, 0x01,
                0x01, 0x01, 0x00, 0x48, 0x00, 0x48, 0x00, 0x00, 0xFF, 0xDB, 0x00, 0x43,
                0x00, 0xFF, 0xFF, 0xFF, 0xFF, 0xFF, 0xFF, 0xFF, 0xFF, 0xFF, 0xFF, 0xFF,
                0xFF, 0xFF, 0xFF, 0xFF, 0xFF, 0xFF, 0xFF, 0xFF, 0xFF, 0xFF, 0xFF, 0xFF,
                0xFF, 0xFF, 0xFF, 0xFF, 0xFF, 0xFF, 0xFF, 0xFF, 0xFF, 0xFF, 0xFF, 0xFF,
                0xFF, 0xFF, 0xFF, 0xFF, 0xFF, 0xFF, 0xFF, 0xFF, 0xFF, 0xFF, 0xFF, 0xFF,
                0xFF, 0xFF, 0xFF, 0xFF, 0xFF, 0xFF, 0xFF, 0xFF, 0xFF, 0xFF, 0xFF, 0xFF,
                0xFF, 0xFF, 0xFF, 0xFF, 0xFF, 0xFF, 0xC0, 0x00, 0x0B, 0x08, 0x00, 0x01,
                0x00, 0x01, 0x01, 0x01, 0x11, 0x00, 0xFF, 0xC4, 0x00, 0x14, 0x00, 0x01,
                0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00,
                0x00, 0x00, 0x00, 0x03, 0xFF, 0xC4, 0x00, 0x14, 0x10, 0x01, 0x00, 0x00,
                0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00,
                0x00, 0x00, 0xFF, 0xDA, 0x00, 0x08, 0x01, 0x01, 0x00, 0x00, 0x3F, 0x00,
                0x37, 0xFF, 0xD9
            };
            stream.Write(minimalJpeg, 0, minimalJpeg.Length);
        }

        Console.WriteLine($"✓ Created minimal map: {timberPath}");
        Console.WriteLine($"  Size: 4x4 (height 23 - Timberborn standard)");
        Console.WriteLine($"  Voxels: 368 total (48 solid terrain, 320 air)");
        Console.WriteLine($"  Entities: 0 (terrain defined in Voxels array)");
        Console.WriteLine($"  File size: {new FileInfo(timberPath).Length / 1024.0:F1} KB");
    }
}
