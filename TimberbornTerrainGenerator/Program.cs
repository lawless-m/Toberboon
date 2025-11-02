using TimberbornTerrainGenerator.Config;
using TimberbornTerrainGenerator.Entities;
using TimberbornTerrainGenerator.Export;
using TimberbornTerrainGenerator.Terrain;

namespace TimberbornTerrainGenerator;

class Program
{
    static void Main(string[] args)
    {
        Console.WriteLine("=== Timberborn 3D Voxel Terrain Generator ===\n");

        // Check for minimal mode
        if (args.Contains("--minimal"))
        {
            string minimalOutputPath = GetOutputPath();
            Directory.CreateDirectory(minimalOutputPath);
            MinimalMapGenerator.Generate(minimalOutputPath);
            return;
        }

        // Get configuration (from CLI args or defaults)
        var config = GetConfiguration(args);

        Console.WriteLine($"Generating map: {config.OutputName}");
        Console.WriteLine($"Size: {config.MapSize}x{config.MapSize}");
        Console.WriteLine($"Max Height: {config.MaxHeight}");
        Console.WriteLine($"Seed: {config.Seed}");
        Console.WriteLine($"Caves: {(config.Caves.Generate ? "Enabled" : "Disabled")}");
        Console.WriteLine($"Overhangs: {(config.Overhangs.Generate ? "Enabled" : "Disabled")}\n");

        // Generate terrain
        var generator = new TerrainGenerator();
        var grid = generator.Generate(config);

        Console.WriteLine("Terrain generation complete.");
        Console.WriteLine($"Total voxels: {grid.GetAllSolidVoxels().Count()}");

        // Place entities
        var placer = new EntityPlacer();
        var entities = placer.PlaceAll(grid, config);

        Console.WriteLine($"Entities placed: {entities.Count}");

        // Export
        var exporter = new TimberbornMapExporter();
        string outputPath = GetOutputPath();

        Directory.CreateDirectory(outputPath);
        exporter.Export(grid, entities, config, outputPath);

        Console.WriteLine("\nGeneration complete!");
        Console.WriteLine($"Map saved to: {outputPath}");
    }

    static GeneratorConfig GetConfiguration(string[] args)
    {
        // Parse command line arguments if provided
        int mapSize = 128;
        int maxHeight = 50;
        string outputName = "ProceduralCaveMap";
        int? seed = null;
        bool caves = true;
        bool overhangs = true;
        bool vegetation = true;

        for (int i = 0; i < args.Length; i++)
        {
            switch (args[i].ToLower())
            {
                case "--size" when i + 1 < args.Length:
                    if (int.TryParse(args[++i], out int size))
                        mapSize = size;
                    break;
                case "--height" when i + 1 < args.Length:
                    if (int.TryParse(args[++i], out int height))
                        maxHeight = height;
                    break;
                case "--name" when i + 1 < args.Length:
                    outputName = args[++i];
                    break;
                case "--seed" when i + 1 < args.Length:
                    if (int.TryParse(args[++i], out int s))
                        seed = s;
                    break;
                case "--no-caves":
                    caves = false;
                    break;
                case "--no-overhangs":
                    overhangs = false;
                    break;
                case "--no-vegetation":
                    vegetation = false;
                    break;
                case "--help":
                    PrintHelp();
                    Environment.Exit(0);
                    break;
            }
        }

        return new GeneratorConfig
        {
            MapSize = mapSize,
            MaxHeight = maxHeight,
            OutputName = outputName,
            Seed = seed ?? Random.Shared.Next(),
            Caves = new CaveSettings { Generate = caves },
            Overhangs = new OverhangSettings { Generate = overhangs },
            Entities = new EntitySettings
            {
                Vegetation = new VegetationSettings { Generate = vegetation }
            }
        };
    }

    static string GetOutputPath()
    {
        // Try to use Documents/Timberborn/Maps folder
        string documentsPath = Environment.GetFolderPath(Environment.SpecialFolder.MyDocuments);
        string timberbornMapsPath = Path.Combine(documentsPath, "Timberborn", "Maps");

        // If that doesn't work, use current directory
        if (!string.IsNullOrEmpty(documentsPath))
        {
            return timberbornMapsPath;
        }

        return Path.Combine(Directory.GetCurrentDirectory(), "output");
    }

    static void PrintHelp()
    {
        Console.WriteLine("Timberborn 3D Voxel Terrain Generator");
        Console.WriteLine("\nUsage: TimberbornTerrainGenerator [options]");
        Console.WriteLine("\nOptions:");
        Console.WriteLine("  --size <n>        Map size (32-384, default: 128)");
        Console.WriteLine("  --height <n>      Max height (10-100, default: 50)");
        Console.WriteLine("  --name <name>     Output file name (default: ProceduralCaveMap)");
        Console.WriteLine("  --seed <n>        Random seed for reproducible generation");
        Console.WriteLine("  --no-caves        Disable cave generation");
        Console.WriteLine("  --no-overhangs    Disable overhang generation");
        Console.WriteLine("  --no-vegetation   Disable tree and bush generation");
        Console.WriteLine("  --help            Show this help message");
        Console.WriteLine("\nExample:");
        Console.WriteLine("  TimberbornTerrainGenerator --size 256 --name MyMap --seed 12345");
    }
}
