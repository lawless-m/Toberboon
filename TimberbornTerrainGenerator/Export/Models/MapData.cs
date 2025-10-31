using System.Text.Json.Serialization;

namespace TimberbornTerrainGenerator.Export.Models;

public record MapData
{
    [JsonPropertyName("GameVersion")]
    public string GameVersion { get; init; } = "0.7.10.0";

    [JsonPropertyName("Timestamp")]
    public string Timestamp { get; init; } = DateTime.UtcNow.ToString("o");

    [JsonPropertyName("Singletons")]
    public Singletons Singletons { get; init; } = new();

    [JsonPropertyName("Entities")]
    public List<Entity> Entities { get; init; } = [];
}

public record Singletons
{
    [JsonPropertyName("MapSize")]
    public MapSize MapSize { get; init; } = new();

    [JsonPropertyName("TerrainMap")]
    public TerrainMap TerrainMap { get; init; } = new();

    [JsonPropertyName("CameraComponent")]
    public CameraComponent CameraComponent { get; init; } = new();
}

public record MapSize
{
    [JsonPropertyName("Size")]
    public Size Size { get; init; } = new();
}

public record Size
{
    [JsonPropertyName("X")]
    public int X { get; init; }

    [JsonPropertyName("Y")]
    public int Y { get; init; }
}

public record TerrainMap
{
    [JsonPropertyName("Heights")]
    public HeightsArray Heights { get; init; } = new();
}

public record HeightsArray
{
    [JsonPropertyName("Array")]
    public string Array { get; init; } = "";
}

public record CameraComponent
{
    [JsonPropertyName("CameraState")]
    public CameraState CameraState { get; init; } = new();
}

public record CameraState
{
    [JsonPropertyName("Target")]
    public Target Target { get; init; } = new();

    [JsonPropertyName("ZoomLevel")]
    public float ZoomLevel { get; init; } = 0.5f;

    [JsonPropertyName("HorizontalAngle")]
    public float HorizontalAngle { get; init; } = 45.0f;

    [JsonPropertyName("VerticalAngle")]
    public float VerticalAngle { get; init; } = 45.0f;
}

public record Target
{
    [JsonPropertyName("X")]
    public float X { get; init; }

    [JsonPropertyName("Y")]
    public float Y { get; init; }

    [JsonPropertyName("Z")]
    public float Z { get; init; }
}
