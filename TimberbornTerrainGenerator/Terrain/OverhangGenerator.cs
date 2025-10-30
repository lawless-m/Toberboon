using TimberbornTerrainGenerator.Config;
using TimberbornTerrainGenerator.Utils;

namespace TimberbornTerrainGenerator.Terrain;

public class OverhangGenerator
{
    public void GenerateOverhangs(VoxelGrid grid, GeneratorConfig config)
    {
        var settings = config.Overhangs;
        if (!settings.Generate) return;

        var random = new Random(config.Seed + 2000);

        // Find cliff faces (steep height changes)
        var cliffs = FindCliffs(grid, settings.MinCliffHeight);

        foreach (var cliff in cliffs)
        {
            if (random.NextSingle() < settings.OverhangChance)
            {
                GenerateOverhangAt(grid, cliff, random);
            }
        }
    }

    private List<Vector3Int> FindCliffs(VoxelGrid grid, int minHeight)
    {
        var cliffs = new List<Vector3Int>();

        for (int x = 1; x < grid.Width - 1; x++)
        for (int z = 1; z < grid.Depth - 1; z++)
        {
            int centerHeight = grid.GetSurfaceHeight(x, z);

            // Check neighbors for significant drop
            foreach (var (dx, dz) in new[] { (1, 0), (-1, 0), (0, 1), (0, -1) })
            {
                int neighborHeight = grid.GetSurfaceHeight(x + dx, z + dz);
                if (centerHeight - neighborHeight >= minHeight)
                {
                    cliffs.Add(new Vector3Int(x, centerHeight, z));
                    break;
                }
            }
        }

        return cliffs;
    }

    private void GenerateOverhangAt(VoxelGrid grid, Vector3Int cliff, Random random)
    {
        // Extend blocks outward (max 3 blocks overhang)
        int overhangLength = random.Next(1, 4);

        // Determine overhang direction (toward lower ground)
        var direction = FindOverhangDirection(grid, cliff);

        for (int dist = 1; dist <= overhangLength; dist++)
        {
            var overhangPos = cliff + direction * dist;

            if (grid.IsInBounds(overhangPos))
            {
                // Check if valid overhang (max 3 blocks from support)
                if (IsValidOverhang(dist))
                {
                    grid[overhangPos] = VoxelType.Solid;

                    // Randomly add blocks below for organic look
                    if (random.NextSingle() > 0.5f && dist < overhangLength)
                    {
                        var below = overhangPos + Vector3Int.Down;
                        if (grid.IsInBounds(below))
                            grid[below] = VoxelType.Solid;
                    }
                }
            }
        }
    }

    private Vector3Int FindOverhangDirection(VoxelGrid grid, Vector3Int cliff)
    {
        // Find direction with lowest neighbor
        Vector3Int[] directions =
        [
            new(1, 0, 0), new(-1, 0, 0),
            new(0, 0, 1), new(0, 0, -1)
        ];

        int lowestHeight = int.MaxValue;
        Vector3Int bestDir = directions[0];

        foreach (var dir in directions)
        {
            var neighbor = new Vector3Int(cliff.X + dir.X, 0, cliff.Z + dir.Z);
            int height = grid.GetSurfaceHeight(neighbor.X, neighbor.Z);
            if (height < lowestHeight)
            {
                lowestHeight = height;
                bestDir = new Vector3Int(dir.X, 0, dir.Z);
            }
        }

        return bestDir;
    }

    private bool IsValidOverhang(int distanceFromSupport)
    {
        // Maximum 3 blocks overhang
        return distanceFromSupport <= 3;
    }
}
