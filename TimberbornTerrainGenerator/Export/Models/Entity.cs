using System.Text.Json.Serialization;

namespace TimberbornTerrainGenerator.Export.Models;

public record Entity
{
    [JsonPropertyName("Id")]
    public string Id { get; init; } = "";

    [JsonPropertyName("Template")]
    public string Template { get; init; } = "";

    [JsonPropertyName("Components")]
    public List<object> Components { get; init; } = [];
}
