using TimberbornTerrainGenerator.Utils;

namespace TimberbornTerrainGenerator.Terrain;

public class StructuralValidator
{
    public void ValidateAndFix(VoxelGrid grid)
    {
        var unsupportedBlocks = new HashSet<Vector3Int>();

        // Check all solid blocks for support
        foreach (var pos in grid.GetAllSolidVoxels().ToList())
        {
            if (!HasValidSupport(grid, pos))
            {
                unsupportedBlocks.Add(pos);
            }
        }

        // Remove unsupported blocks
        foreach (var pos in unsupportedBlocks)
        {
            grid[pos] = VoxelType.Air;
        }

        // Iteratively check until stable
        if (unsupportedBlocks.Count > 0)
        {
            ValidateAndFix(grid); // Recursive until stable
        }
    }

    private bool HasValidSupport(VoxelGrid grid, Vector3Int pos)
    {
        // Blocks at Y=0 are always supported
        if (pos.Y == 0) return true;

        // Check for support chain to ground
        return HasSupportChain(grid, pos, 0, new HashSet<Vector3Int>());
    }

    private bool HasSupportChain(VoxelGrid grid, Vector3Int pos, int overhangCount, HashSet<Vector3Int> visited)
    {
        if (pos.Y == 0) return true;
        if (overhangCount > 3) return false; // Overhang limit
        if (visited.Contains(pos)) return false;

        visited.Add(pos);

        var below = pos + Vector3Int.Down;

        // Supported directly below
        if (grid[below] == VoxelType.Solid)
        {
            return HasSupportChain(grid, below, 0, visited);
        }

        // Check adjacent blocks for support (diagonal/lateral)
        foreach (var neighbor in grid.GetNeighbors(pos))
        {
            if (neighbor.Y <= pos.Y && grid[neighbor] == VoxelType.Solid)
            {
                int newOverhangCount = neighbor.Y == pos.Y ? overhangCount + 1 : 0;
                if (HasSupportChain(grid, neighbor, newOverhangCount, visited))
                    return true;
            }
        }

        return false;
    }
}
