namespace TimberbornTerrainGenerator.Config;

public record GeneratorConfig
{
    // Map Settings
    public int MapSize { get; init; } = 128;
    public int MaxHeight { get; init; } = 50;
    public string OutputName { get; init; } = "ProceduralMap";

    // Terrain Settings
    public TerrainSettings Terrain { get; init; } = new();

    // Cave Settings
    public CaveSettings Caves { get; init; } = new();

    // Overhang Settings
    public OverhangSettings Overhangs { get; init; } = new();

    // Entity Settings
    public EntitySettings Entities { get; init; } = new();

    // Noise Seed
    public int Seed { get; init; } = Random.Shared.Next();
}

public record TerrainSettings
{
    public float BaseScale { get; init; } = 0.02f;
    public float BaseAmplitude { get; init; } = 20.0f;
    public int Octaves { get; init; } = 4;
    public float Persistence { get; init; } = 0.5f;
    public float Lacunarity { get; init; } = 2.0f;
}

public record CaveSettings
{
    public bool Generate { get; init; } = true;
    public int WormCount { get; init; } = 15;
    public float WormRadius { get; init; } = 3.0f;
    public int WormLength { get; init; } = 50;
    public float CaveNoiseThreshold { get; init; } = 0.4f;
    public int MinCaveDepth { get; init; } = 5; // Min blocks below surface
}

public record OverhangSettings
{
    public bool Generate { get; init; } = true;
    public float OverhangChance { get; init; } = 0.3f; // Probability at cliffs
    public int MinCliffHeight { get; init; } = 5;
}

public record EntitySettings
{
    public WaterSourceSettings WaterSources { get; init; } = new();
    public VegetationSettings Vegetation { get; init; } = new();
}

public record WaterSourceSettings
{
    public int Count { get; init; } = 3;
    public float MinStrength { get; init; } = 1.0f;
    public float MaxStrength { get; init; } = 3.0f;
    public int MinElevation { get; init; } = 15; // Prefer high ground
}

public record VegetationSettings
{
    public int TreeDensityPercent { get; init; } = 30; // % of valid tiles
    public int BushDensityPercent { get; init; } = 15;
    public Dictionary<string, float> TreeTypes { get; init; } = new()
    {
        ["Pine"] = 0.4f,
        ["Birch"] = 0.3f,
        ["Maple"] = 0.2f,
        ["ChestnutTree"] = 0.1f
    };
}
