using TimberbornTerrainGenerator.Utils;

namespace TimberbornTerrainGenerator.Terrain;

public enum VoxelType
{
    Air,
    Solid,
    Water
}

public class VoxelGrid
{
    private readonly Dictionary<Vector3Int, VoxelType> _voxels = new();

    public int Width { get; init; }
    public int Height { get; init; } // Max Y coordinate
    public int Depth { get; init; }

    public VoxelType this[Vector3Int pos]
    {
        get => _voxels.GetValueOrDefault(pos, VoxelType.Air);
        set
        {
            if (value == VoxelType.Air)
                _voxels.Remove(pos);
            else
                _voxels[pos] = value;
        }
    }

    public bool IsInBounds(Vector3Int pos) =>
        pos.X >= 0 && pos.X < Width &&
        pos.Y >= 0 && pos.Y < Height &&
        pos.Z >= 0 && pos.Z < Depth;

    public IEnumerable<Vector3Int> GetAllSolidVoxels() =>
        _voxels.Where(kv => kv.Value == VoxelType.Solid).Select(kv => kv.Key);

    public IEnumerable<Vector3Int> GetNeighbors(Vector3Int pos)
    {
        Vector3Int[] directions =
        [
            new(1, 0, 0), new(-1, 0, 0),
            new(0, 1, 0), new(0, -1, 0),
            new(0, 0, 1), new(0, 0, -1)
        ];

        foreach (var dir in directions)
        {
            var neighbor = pos + dir;
            if (IsInBounds(neighbor))
                yield return neighbor;
        }
    }

    public int GetSurfaceHeight(int x, int z)
    {
        for (int y = Height - 1; y >= 0; y--)
        {
            if (this[new Vector3Int(x, y, z)] == VoxelType.Solid)
                return y;
        }
        return 0;
    }
}
