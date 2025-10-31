using Newtonsoft.Json;

namespace TimberbornTerrainGenerator.Export.Models;

public record Coordinates(
    [property: JsonProperty("X")] int X,
    [property: JsonProperty("Y")] int Y,
    [property: JsonProperty("Z")] int Z
);

public record Orientation(
    [property: JsonProperty("Value")] int Value
);
