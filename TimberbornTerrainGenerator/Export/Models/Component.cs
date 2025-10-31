using System.Text.Json.Serialization;

namespace TimberbornTerrainGenerator.Export.Models;

public record BlockObjectComponent
{
    [JsonPropertyName("BlockObject")]
    public BlockObject BlockObject { get; init; } = new();
}

public record BlockObject
{
    [JsonPropertyName("Coordinates")]
    public Coordinates Coordinates { get; init; } = new(0, 0, 0);

    [JsonPropertyName("Orientation")]
    public Orientation Orientation { get; init; } = new(0);
}

public record WaterSourceComponent
{
    [JsonPropertyName("WaterSource")]
    public WaterSourceData WaterSource { get; init; } = new();
}

public record WaterSourceData
{
    [JsonPropertyName("SpecifiedStrength")]
    public float SpecifiedStrength { get; init; }
}

public record GrowableComponent
{
    [JsonPropertyName("Growable")]
    public GrowableData Growable { get; init; } = new();
}

public record GrowableData
{
    [JsonPropertyName("GrowthProgress")]
    public float GrowthProgress { get; init; }
}
