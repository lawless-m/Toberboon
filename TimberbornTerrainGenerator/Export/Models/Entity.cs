using Newtonsoft.Json;

namespace TimberbornTerrainGenerator.Export.Models;

public record Entity
{
    [JsonProperty("Id")]
    public string Id { get; init; } = "";

    [JsonProperty("Template")]
    public string Template { get; init; } = "";

    [JsonProperty("Components")]
    public List<object> Components { get; init; } = [];
}
