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
        Console.WriteLine("Generating minimal 8x8 test map...");

        // Build voxels array: 8x8x23 = 1472 voxels (Timberborn always expects height 23)
        // Timberborn coordinates: X,Y are horizontal, Z is vertical (height)
        // First 3 layers (z=0,1,2) all solid, rest air (z=3-22)
        const int TIMBERBORN_HEIGHT = 23;
        const int TERRAIN_HEIGHT = 3;
        const int MAP_SIZE = 8;
        var voxels = new List<string>();

        for (int z = 0; z < TIMBERBORN_HEIGHT; z++)  // Z is height (0-22)
        for (int y = 0; y < MAP_SIZE; y++)           // Y is horizontal depth (0-7)
        for (int x = 0; x < MAP_SIZE; x++)           // X is horizontal width (0-7)
        {
            voxels.Add(z < TERRAIN_HEIGHT ? "1" : "0"); // Solid for first 3 height layers, air above
        }

        string voxelsArray = string.Join(" ", voxels);

        // Water and moisture arrays for 8x8 surface
        int surfaceSize = 64; // 8x8
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
                    Size = new Size { X = 8, Y = 8 }
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
                    Size = 1,
                    ContaminationCandidates = new ContaminationArray { Array = contaminationArray },
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
                            X = 4.0f,  // Center of 8x8 map
                            Y = 5.1423f,  // Scaled for 8x8
                            Z = -2.128f   // Scaled for 8x8
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
            Entities =
            [
                // Starting location on top of terrain - placed with room to expand
                // Timberborn coordinates: X,Y are horizontal (map grid), Z is vertical (height)
                // Terrain is solid at Z=0,1,2 so entities go at Z=3
                new Entity
                {
                    Id = Guid.NewGuid().ToString(),
                    Template = "StartingLocation",
                    Components = new Dictionary<string, object>
                    {
                        ["BlockObject"] = new Dictionary<string, object>
                        {
                            ["Coordinates"] = new Dictionary<string, int>
                            {
                                ["X"] = 2,  // Horizontal position (plenty of room)
                                ["Y"] = 2,  // Horizontal position
                                ["Z"] = 3   // Height - on top of 3-layer terrain
                            },
                            ["Orientation"] = "Cw0"
                        }
                    }
                },
                // Water source on top of terrain - placed away from starting location
                new Entity
                {
                    Id = Guid.NewGuid().ToString(),
                    Template = "WaterSource",
                    Components = new Dictionary<string, object>
                    {
                        ["WaterSource"] = new Dictionary<string, float>
                        {
                            ["SpecifiedStrength"] = 1.0f,
                            ["CurrentStrength"] = 1.0f
                        },
                        ["BlockObject"] = new Dictionary<string, object>
                        {
                            ["Coordinates"] = new Dictionary<string, int>
                            {
                                ["X"] = 6,  // Horizontal position (far from starting location)
                                ["Y"] = 6,  // Horizontal position
                                ["Z"] = 3   // Height - on top of 3-layer terrain
                            },
                            ["Orientation"] = "Cw0"
                        }
                    }
                }
            ]
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
            Width = 8,
            Height = 8
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
        Console.WriteLine($"  Size: 8x8 (height 23 - Timberborn standard)");
        Console.WriteLine($"  Voxels: 1472 total (192 solid terrain, 1280 air)");
        Console.WriteLine($"  Entities: 2 (StartingLocation at 2,2,3 | WaterSource at 6,6,3)");
        Console.WriteLine($"  File size: {new FileInfo(timberPath).Length / 1024.0:F1} KB");
    }
}
