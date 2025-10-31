using TimberbornTerrainGenerator.Config;
using TimberbornTerrainGenerator.Utils;

namespace TimberbornTerrainGenerator.Terrain;

public class TerrainGenerator
{
    public VoxelGrid Generate(GeneratorConfig config)
    {
        Console.WriteLine("Generating heightmap...");
        var heightmapGen = new HeightmapGenerator();
        var heightmap = heightmapGen.Generate(config);

        Console.WriteLine("Filling voxel grid...");
        var grid = new VoxelGrid
        {
            Width = config.MapSize,
            Height = config.MaxHeight,
            Depth = config.MapSize
        };

        FillFromHeightmap(grid, heightmap);

        if (config.Caves.Generate)
        {
            Console.WriteLine("Generating caves...");
            var caveGen = new CaveGenerator();
            caveGen.GenerateCaveSystem(grid, config);
            caveGen.CreateCaveEntrances(grid);
        }

        if (config.Overhangs.Generate)
        {
            Console.WriteLine("Generating overhangs...");
            var overhangGen = new OverhangGenerator();
            overhangGen.GenerateOverhangs(grid, config);
        }

        Console.WriteLine("Validating structure...");
        var validator = new StructuralValidator();
        validator.ValidateAndFix(grid);

        return grid;
    }

    private void FillFromHeightmap(VoxelGrid grid, float[,] heightmap)
    {
        for (int x = 0; x < grid.Width; x++)
        for (int z = 0; z < grid.Depth; z++)
        {
            int surfaceHeight = (int)Math.Floor(heightmap[x, z]);

            // Fill from ground (Y=0) to surface
            for (int y = 0; y <= surfaceHeight; y++)
            {
                grid[new Vector3Int(x, y, z)] = VoxelType.Solid;
            }
        }
    }
}
