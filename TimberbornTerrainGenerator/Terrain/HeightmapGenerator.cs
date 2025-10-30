using TimberbornTerrainGenerator.Config;

namespace TimberbornTerrainGenerator.Terrain;

public class HeightmapGenerator
{
    public float[,] Generate(GeneratorConfig config)
    {
        var noise = new FastNoiseLite(config.Seed);
        noise.SetNoiseType(FastNoiseLite.NoiseType.OpenSimplex2);

        var heightmap = new float[config.MapSize, config.MapSize];
        var settings = config.Terrain;

        for (int z = 0; z < config.MapSize; z++)
        for (int x = 0; x < config.MapSize; x++)
        {
            float amplitude = settings.BaseAmplitude;
            float frequency = settings.BaseScale;
            float height = 0;

            // Multi-octave noise for natural-looking terrain
            for (int octave = 0; octave < settings.Octaves; octave++)
            {
                float sampleX = x * frequency;
                float sampleZ = z * frequency;

                float noiseValue = noise.GetNoise(sampleX, sampleZ);
                height += noiseValue * amplitude;

                amplitude *= settings.Persistence;
                frequency *= settings.Lacunarity;
            }

            // Clamp to valid range (normalize from -1..1 to 0..maxHeight)
            float normalizedHeight = (height + settings.BaseAmplitude) / (settings.BaseAmplitude * 2);
            heightmap[x, z] = Math.Clamp(normalizedHeight * config.MaxHeight, 0, config.MaxHeight - 1);
        }

        return heightmap;
    }
}
