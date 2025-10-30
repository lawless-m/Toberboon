using TimberbornTerrainGenerator.Config;
using TimberbornTerrainGenerator.Utils;

namespace TimberbornTerrainGenerator.Terrain;

public class CaveGenerator
{
    private FastNoiseLite? _noise;

    public void GenerateCaveSystem(VoxelGrid grid, GeneratorConfig config)
    {
        var settings = config.Caves;
        if (!settings.Generate) return;

        _noise = new FastNoiseLite(config.Seed + 1000);
        _noise.SetNoiseType(FastNoiseLite.NoiseType.Cellular);
        _noise.SetFrequency(0.05f);

        var random = new Random(config.Seed);

        // Generate worm tunnels
        for (int i = 0; i < settings.WormCount; i++)
        {
            GenerateWorm(grid, random, settings, config.MaxHeight);
        }

        // Apply 3D noise for cavern chambers
        ApplyCavernNoise(grid, config);
    }

    private void GenerateWorm(VoxelGrid grid, Random random, CaveSettings settings, int maxHeight)
    {
        // Start point: underground, random X/Z
        var position = new Vector3(
            random.Next(grid.Width),
            random.Next(settings.MinCaveDepth, maxHeight / 2),
            random.Next(grid.Depth)
        );

        // Random initial direction (mostly horizontal)
        var direction = new Vector3(
            random.NextSingle() * 2 - 1,
            (random.NextSingle() - 0.5f) * 0.3f, // Less vertical
            random.NextSingle() * 2 - 1
        ).Normalized();

        for (int step = 0; step < settings.WormLength; step++)
        {
            // Carve sphere at current position
            CarveSphere(grid, position, settings.WormRadius);

            // Smoothly vary direction
            direction = RotateRandomly(direction, random, 15f);
            position += direction * (settings.WormRadius * 0.6f);

            // Keep within bounds
            if (!IsValidWormPosition(grid, position, settings.MinCaveDepth))
                break;
        }
    }

    private void CarveSphere(VoxelGrid grid, Vector3 center, float radius)
    {
        int iRadius = (int)Math.Ceiling(radius);
        var centerInt = new Vector3Int(
            (int)Math.Round(center.X),
            (int)Math.Round(center.Y),
            (int)Math.Round(center.Z)
        );

        for (int dx = -iRadius; dx <= iRadius; dx++)
        for (int dy = -iRadius; dy <= iRadius; dy++)
        for (int dz = -iRadius; dz <= iRadius; dz++)
        {
            var offset = new Vector3Int(dx, dy, dz);
            if (offset.Magnitude <= radius)
            {
                var pos = centerInt + offset;
                if (grid.IsInBounds(pos))
                    grid[pos] = VoxelType.Air;
            }
        }
    }

    private Vector3 RotateRandomly(Vector3 direction, Random random, float maxAngle)
    {
        // Apply random rotation (simplified)
        var noise = new Vector3(
            (random.NextSingle() - 0.5f) * 0.3f,
            (random.NextSingle() - 0.5f) * 0.2f,
            (random.NextSingle() - 0.5f) * 0.3f
        );

        return (direction + noise).Normalized();
    }

    private bool IsValidWormPosition(VoxelGrid grid, Vector3 position, int minDepth)
    {
        return position.X >= 0 && position.X < grid.Width &&
               position.Y >= minDepth && position.Y < grid.Height &&
               position.Z >= 0 && position.Z < grid.Depth;
    }

    private void ApplyCavernNoise(VoxelGrid grid, GeneratorConfig config)
    {
        if (_noise == null) return;

        var settings = config.Caves;

        for (int x = 0; x < grid.Width; x++)
        for (int y = settings.MinCaveDepth; y < config.MaxHeight - 3; y++)
        for (int z = 0; z < grid.Depth; z++)
        {
            var pos = new Vector3Int(x, y, z);
            if (grid[pos] != VoxelType.Solid) continue;

            float noiseValue = _noise.GetNoise(x, y, z);
            if (noiseValue > settings.CaveNoiseThreshold)
            {
                grid[pos] = VoxelType.Air;
            }
        }
    }

    public void CreateCaveEntrances(VoxelGrid grid)
    {
        // Find cave openings near surface
        for (int x = 0; x < grid.Width; x++)
        for (int z = 0; z < grid.Depth; z++)
        {
            // Scan downward from top
            for (int y = grid.Height - 1; y > 0; y--)
            {
                var pos = new Vector3Int(x, y, z);
                var below = new Vector3Int(x, y - 1, z);

                // Found transition from solid to cave
                if (grid[pos] == VoxelType.Solid && grid[below] == VoxelType.Air)
                {
                    // Remove ceiling blocks to create entrance
                    grid[pos] = VoxelType.Air;
                    break;
                }
            }
        }
    }
}
