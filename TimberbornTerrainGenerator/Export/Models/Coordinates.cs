using System.Text.Json.Serialization;

namespace TimberbornTerrainGenerator.Export.Models;

public record Coordinates(
    [property: JsonPropertyName("X")] int X,
    [property: JsonPropertyName("Y")] int Y,
    [property: JsonPropertyName("Z")] int Z
);

public record Orientation(
    [property: JsonPropertyName("Value")] int Value
);
