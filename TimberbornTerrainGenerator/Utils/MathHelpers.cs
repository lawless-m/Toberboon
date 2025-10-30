namespace TimberbornTerrainGenerator.Utils;

public static class MathHelpers
{
    public static float Lerp(float a, float b, float t)
    {
        return a + (b - a) * t;
    }

    public static int Clamp(int value, int min, int max)
    {
        if (value < min) return min;
        if (value > max) return max;
        return value;
    }

    public static float Clamp(float value, float min, float max)
    {
        if (value < min) return min;
        if (value > max) return max;
        return value;
    }

    public static float Remap(float value, float fromMin, float fromMax, float toMin, float toMax)
    {
        float t = (value - fromMin) / (fromMax - fromMin);
        return Lerp(toMin, toMax, t);
    }
}
