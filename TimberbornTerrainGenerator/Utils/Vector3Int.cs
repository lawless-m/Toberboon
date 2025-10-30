namespace TimberbornTerrainGenerator.Utils;

public readonly record struct Vector3Int(int X, int Y, int Z)
{
    public static Vector3Int Zero => new(0, 0, 0);
    public static Vector3Int Up => new(0, 1, 0);
    public static Vector3Int Down => new(0, -1, 0);

    public static Vector3Int operator +(Vector3Int a, Vector3Int b)
        => new(a.X + b.X, a.Y + b.Y, a.Z + b.Z);

    public static Vector3Int operator -(Vector3Int a, Vector3Int b)
        => new(a.X - b.X, a.Y - b.Y, a.Z - b.Z);

    public static Vector3Int operator *(Vector3Int v, int s)
        => new(v.X * s, v.Y * s, v.Z * s);

    public float Magnitude => MathF.Sqrt(X * X + Y * Y + Z * Z);

    public int ManhattanDistance(Vector3Int other)
        => Math.Abs(X - other.X) + Math.Abs(Y - other.Y) + Math.Abs(Z - other.Z);
}

// Float vector for cave generation and smooth calculations
public readonly record struct Vector3(float X, float Y, float Z)
{
    public static Vector3 Zero => new(0, 0, 0);

    public Vector3 Normalized()
    {
        float mag = MathF.Sqrt(X * X + Y * Y + Z * Z);
        return mag > 0 ? new(X / mag, Y / mag, Z / mag) : this;
    }

    public static Vector3 operator +(Vector3 a, Vector3 b)
        => new(a.X + b.X, a.Y + b.Y, a.Z + b.Z);

    public static Vector3 operator -(Vector3 a, Vector3 b)
        => new(a.X - b.X, a.Y - b.Y, a.Z - b.Z);

    public static Vector3 operator *(Vector3 v, float s)
        => new(v.X * s, v.Y * s, v.Z * s);

    public float Magnitude => MathF.Sqrt(X * X + Y * Y + Z * Z);
}
