using Newtonsoft.Json;

namespace TimberbornTerrainGenerator.Export.Models;

public record BlockObjectComponent
{
    [JsonProperty("BlockObject")]
    public BlockObject BlockObject { get; init; } = new();
}

public record BlockObject
{
    [JsonProperty("Coordinates")]
    public Coordinates Coordinates { get; init; } = new(0, 0, 0);

    [JsonProperty("Orientation")]
    public Orientation Orientation { get; init; } = new(0);
}

public record WaterSourceComponent
{
    [JsonProperty("WaterSource")]
    public WaterSourceData WaterSource { get; init; } = new();
}

public record WaterSourceData
{
    [JsonProperty("SpecifiedStrength")]
    public float SpecifiedStrength { get; init; }
}

public record GrowableComponent
{
    [JsonProperty("Growable")]
    public GrowableData Growable { get; init; } = new();
}

public record GrowableData
{
    [JsonProperty("GrowthProgress")]
    public float GrowthProgress { get; init; }
}
