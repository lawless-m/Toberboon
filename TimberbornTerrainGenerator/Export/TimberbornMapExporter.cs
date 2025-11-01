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

        string worldJson = JsonConvert.SerializeObject(mapData, settings);

        // Build metadata
        var metadata = new MapMetadata
        {
            Width = config.MapSize,
            Height = config.MapSize
        };
        string metadataJson = JsonConvert.SerializeObject(metadata, settings);

        // Create ZIP archive (.timber file)
        string timberPath = Path.Combine(outputPath, $"{config.OutputName}.timber");

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
                            X = config.MapSize / 2.0f,
                            Y = config.MapSize * 0.64f,
                            Z = config.MapSize / -2.0f
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
            Entities = entities // No TerrainBlock entities - terrain is in Voxels array
        };
    }

    private string BuildVoxelsArray(VoxelGrid grid)
    {
        const int TIMBERBORN_HEIGHT = 23; // Timberborn always expects 23 vertical layers
        var values = new List<string>();

        // Voxels array is space-separated: "1" for solid, "0" for air
        // TIMBERBORN COORDINATES: X,Y are horizontal, Z is vertical (height)
        // OUR COORDINATES: X,Z are horizontal, Y is vertical (height)
        // Order: iterate through Z (Timberborn height 0-22), then Y (Timberborn depth), then X (Timberborn width)
        // CRITICAL: Always generate exactly width * depth * 23 voxels
        for (int timberbornZ = 0; timberbornZ < TIMBERBORN_HEIGHT; timberbornZ++)  // Timberborn Z = our Y (height)
        for (int timberbornY = 0; timberbornY < grid.Depth; timberbornY++)         // Timberborn Y = our Z (depth)
        for (int timberbornX = 0; timberbornX < grid.Width; timberbornX++)         // Timberborn X = our X (width)
        {
            // Convert Timberborn coords to our grid coords
            int ourY = timberbornZ;  // Timberborn Z -> our Y (height)
            int ourZ = timberbornY;  // Timberborn Y -> our Z (depth)
            int ourX = timberbornX;  // Timberborn X -> our X (width)

            // If height is beyond our grid height, it's air
            if (ourY >= grid.Height)
            {
                values.Add("0");
            }
            else
            {
                var voxel = grid[new Vector3Int(ourX, ourY, ourZ)];
                values.Add(voxel == VoxelType.Solid ? "1" : "0");
            }
        }

        return string.Join(" ", values);
    }

}
