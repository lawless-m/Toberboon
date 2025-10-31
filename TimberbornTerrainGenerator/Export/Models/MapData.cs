using Newtonsoft.Json;

namespace TimberbornTerrainGenerator.Export.Models;

public record MapData
{
    [JsonProperty("GameVersion")]
    public string GameVersion { get; init; } = "0.7.10.0";

    [JsonProperty("Timestamp")]
    public string Timestamp { get; init; } = DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss");

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

    [JsonProperty("WaterMapNew")]
    public WaterMapNew WaterMapNew { get; init; } = new();

    [JsonProperty("WaterEvaporationMap")]
    public WaterEvaporationMap WaterEvaporationMap { get; init; } = new();

    [JsonProperty("SoilMoistureSimulator")]
    public SoilMoistureSimulator SoilMoistureSimulator { get; init; } = new();

    [JsonProperty("SoilContaminationSimulator")]
    public SoilContaminationSimulator SoilContaminationSimulator { get; init; } = new();

    [JsonProperty("HazardousWeatherHistory")]
    public HazardousWeatherHistory HazardousWeatherHistory { get; init; } = new();

    [JsonProperty("MapThumbnailCameraMover")]
    public MapThumbnailCameraMover MapThumbnailCameraMover { get; init; } = new();
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
    [JsonProperty("Voxels")]
    public VoxelsArray Voxels { get; init; } = new();
}

public record VoxelsArray
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

public record WaterMapNew
{
    [JsonProperty("Levels")]
    public int Levels { get; init; } = 1;

    [JsonProperty("WaterColumns")]
    public WaterArray WaterColumns { get; init; } = new();

    [JsonProperty("ColumnOutflows")]
    public WaterArray ColumnOutflows { get; init; } = new();
}

public record WaterEvaporationMap
{
    [JsonProperty("Levels")]
    public int Levels { get; init; } = 1;

    [JsonProperty("EvaporationModifiers")]
    public WaterArray EvaporationModifiers { get; init; } = new();
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

public record SoilContaminationSimulator
{
    [JsonProperty("ContaminationLevels")]
    public ContaminationArray ContaminationLevels { get; init; } = new();
}

public record ContaminationArray
{
    [JsonProperty("Array")]
    public string Array { get; init; } = "";
}

public record HazardousWeatherHistory
{
    [JsonProperty("HistoryData")]
    public List<object> HistoryData { get; init; } = [];
}

public record MapThumbnailCameraMover
{
    [JsonProperty("Position")]
    public Position Position { get; init; } = new();

    [JsonProperty("ZoomLevel")]
    public float ZoomLevel { get; init; } = 0.5f;

    [JsonProperty("HorizontalAngle")]
    public float HorizontalAngle { get; init; } = 45.0f;

    [JsonProperty("VerticalAngle")]
    public float VerticalAngle { get; init; } = 45.0f;
}

public record Position
{
    [JsonProperty("X")]
    public float X { get; init; }

    [JsonProperty("Y")]
    public float Y { get; init; }

    [JsonProperty("Z")]
    public float Z { get; init; }
}

public record MapMetadata
{
    [JsonProperty("Width")]
    public int Width { get; init; }

    [JsonProperty("Height")]
    public int Height { get; init; }

    [JsonProperty("MapNameLocKey")]
    public string MapNameLocKey { get; init; } = "";

    [JsonProperty("MapDescriptionLocKey")]
    public string MapDescriptionLocKey { get; init; } = "";

    [JsonProperty("MapDescription")]
    public string MapDescription { get; init; } = "";

    [JsonProperty("IsRecommended")]
    public bool IsRecommended { get; init; } = false;

    [JsonProperty("IsDev")]
    public bool IsDev { get; init; } = false;
}
