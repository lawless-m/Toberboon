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

        // Scale amplitude based on MaxHeight for consistent terrain variation
        // BaseAmplitude is a fraction of MaxHeight (default 0.6 = 60% variation)
        float effectiveAmplitude = config.MaxHeight * settings.BaseAmplitude;

        // Calculate total amplitude range for all octaves
        float maxAmplitude = 0;
        float amp = effectiveAmplitude;
        for (int i = 0; i < settings.Octaves; i++)
        {
            maxAmplitude += amp;
            amp *= settings.Persistence;
        }

        for (int z = 0; z < config.MapSize; z++)
        for (int x = 0; x < config.MapSize; x++)
        {
            float amplitude = effectiveAmplitude;
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

            // Normalize properly based on actual amplitude range
            // noise is in range [-maxAmplitude, +maxAmplitude]
            float normalizedHeight = (height + maxAmplitude) / (maxAmplitude * 2);
            heightmap[x, z] = normalizedHeight * config.MaxHeight;
        }

        // Apply gradient-based terrain enhancement for more dramatic features
        heightmap = EnhanceTerrainGradients(heightmap, config);

        // Clamp to valid range after enhancement
        for (int x = 0; x < config.MapSize; x++)
        for (int z = 0; z < config.MapSize; z++)
        {
            heightmap[x, z] = Math.Clamp(heightmap[x, z], 0, config.MaxHeight - 1);
        }

        // Calculate terrain interest metrics
        float minHeight = float.MaxValue, maxHeight = float.MinValue, avgHeight = 0;
        int uniqueHeights = new HashSet<int>(heightmap.Cast<float>().Select(h => (int)h)).Count;
        float totalVariation = 0;

        foreach (var h in heightmap)
        {
            minHeight = Math.Min(minHeight, h);
            maxHeight = Math.Max(maxHeight, h);
            avgHeight += h;
        }
        avgHeight /= (config.MapSize * config.MapSize);

        // Calculate local height variation (how much each cell differs from neighbors)
        for (int x = 0; x < config.MapSize; x++)
        for (int z = 0; z < config.MapSize; z++)
        {
            float h = heightmap[x, z];
            int neighbors = 0;
            float neighborDiff = 0;

            if (x > 0) { neighborDiff += Math.Abs(h - heightmap[x-1, z]); neighbors++; }
            if (x < config.MapSize - 1) { neighborDiff += Math.Abs(h - heightmap[x+1, z]); neighbors++; }
            if (z > 0) { neighborDiff += Math.Abs(h - heightmap[x, z-1]); neighbors++; }
            if (z < config.MapSize - 1) { neighborDiff += Math.Abs(h - heightmap[x, z+1]); neighbors++; }

            totalVariation += neighborDiff / neighbors;
        }
        float avgVariation = totalVariation / (config.MapSize * config.MapSize);

        // Interest score: combines height range, unique heights, and local variation
        float heightRangeScore = (maxHeight - minHeight) / config.MaxHeight * 100; // % of max height used
        float uniquenessScore = (float)uniqueHeights / config.MaxHeight * 100; // % of possible heights
        float variationScore = avgVariation * 10; // Scaled up for visibility
        float interestScore = (heightRangeScore + uniquenessScore + variationScore) / 3;

        Console.WriteLine($"  Height range: {minHeight:F1} - {maxHeight:F1} (span: {maxHeight - minHeight:F1})");
        Console.WriteLine($"  Unique heights: {uniqueHeights}/{config.MaxHeight} | Avg variation: {avgVariation:F2}");
        Console.WriteLine($"  Interest score: {interestScore:F1} (range: {heightRangeScore:F0}% + unique: {uniquenessScore:F0}% + variation: {variationScore:F0})");

        return heightmap;
    }

    private float[,] EnhanceTerrainGradients(float[,] heightmap, GeneratorConfig config)
    {
        var enhanced = new float[config.MapSize, config.MapSize];
        const float gradientStrength = 5.0f; // How much to accentuate slopes
        const float terraceHeight = 3.0f;    // Height of plateau layers
        const float terraceThreshold = 0.15f; // Gradient threshold for creating terraces

        for (int x = 0; x < config.MapSize; x++)
        for (int z = 0; z < config.MapSize; z++)
        {
            float h = heightmap[x, z];

            // Calculate local gradient (first derivative)
            float gradientX = 0, gradientZ = 0;

            if (x > 0 && x < config.MapSize - 1)
                gradientX = (heightmap[x + 1, z] - heightmap[x - 1, z]) / 2;

            if (z > 0 && z < config.MapSize - 1)
                gradientZ = (heightmap[x, z + 1] - heightmap[x, z - 1]) / 2;

            // Calculate gradient magnitude (steepness)
            float gradient = MathF.Sqrt(gradientX * gradientX + gradientZ * gradientZ);

            // For steep slopes, create terraces (quantize height)
            if (gradient > terraceThreshold)
            {
                // Quantize to create plateau layers
                float terraced = MathF.Round(h / terraceHeight) * terraceHeight;
                // Blend between terraced and original based on gradient strength
                float blend = Math.Clamp(gradient * 3, 0, 1);
                h = h * (1 - blend) + terraced * blend;
            }

            // Apply power curve to further accentuate steep areas
            float enhancement = MathF.Pow(gradient, 1.8f) * gradientStrength;

            // Apply enhancement in the direction of steepest ascent
            float avgGradient = (gradientX + gradientZ) / 2;
            float sign = avgGradient >= 0 ? 1 : -1;

            enhanced[x, z] = h + (enhancement * sign);
        }

        return enhanced;
    }
}
