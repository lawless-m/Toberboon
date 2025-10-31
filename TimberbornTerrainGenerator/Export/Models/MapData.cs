using Newtonsoft.Json;

namespace TimberbornTerrainGenerator.Export.Models;

public record MapData
{
    [JsonProperty("GameVersion")]
    public string GameVersion { get; init; } = "0.7.10.0";

    [JsonProperty("Timestamp")]
    public string Timestamp { get; init; } = DateTime.UtcNow.ToString("o");

    [JsonProperty("Singletons")]
    public Singletons Singletons { get; init; } = new();

    [JsonProperty("Entities")]
    public List<Entity> Entities { get; init; } = [];
}

public record Singletons
{
    [JsonProperty("MapSize")]
    public MapSize MapSize { get; init; } = new();

    [JsonProperty("TerrainMap")]
    public TerrainMap TerrainMap { get; init; } = new();

    [JsonProperty("WaterMap")]
    public WaterMap WaterMap { get; init; } = new();

    [JsonProperty("SoilMoistureSimulator")]
    public SoilMoistureSimulator SoilMoistureSimulator { get; init; } = new();

    [JsonProperty("CameraComponent")]
    public CameraComponent CameraComponent { get; init; } = new();
}

public record MapSize
{
    [JsonProperty("Size")]
    public Size Size { get; init; } = new();
}

public record Size
{
    [JsonProperty("X")]
    public int X { get; init; }

    [JsonProperty("Y")]
    public int Y { get; init; }
}

public record TerrainMap
{
    [JsonProperty("Heights")]
    public HeightsArray Heights { get; init; } = new();
}

public record HeightsArray
{
    [JsonProperty("Array")]
    public string Array { get; init; } = "";
}

public record CameraComponent
{
    [JsonProperty("CameraState")]
    public CameraState CameraState { get; init; } = new();
}

public record CameraState
{
    [JsonProperty("Target")]
    public Target Target { get; init; } = new();

    [JsonProperty("ZoomLevel")]
    public float ZoomLevel { get; init; } = 0.5f;

    [JsonProperty("HorizontalAngle")]
    public float HorizontalAngle { get; init; } = 45.0f;

    [JsonProperty("VerticalAngle")]
    public float VerticalAngle { get; init; } = 45.0f;
}

public record Target
{
    [JsonProperty("X")]
    public float X { get; init; }

    [JsonProperty("Y")]
    public float Y { get; init; }

    [JsonProperty("Z")]
    public float Z { get; init; }
}

public record WaterMap
{
    [JsonProperty("WaterDepths")]
    public WaterArray WaterDepths { get; init; } = new();

    [JsonProperty("Outflows")]
    public WaterArray Outflows { get; init; } = new();
}

public record WaterArray
{
    [JsonProperty("Array")]
    public string Array { get; init; } = "";
}

public record SoilMoistureSimulator
{
    [JsonProperty("MoistureLevels")]
    public MoistureArray MoistureLevels { get; init; } = new();
}

public record MoistureArray
{
    [JsonProperty("Array")]
    public string Array { get; init; } = "";
}
