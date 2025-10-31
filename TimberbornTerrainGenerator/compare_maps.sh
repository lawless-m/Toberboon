#!/bin/bash

echo "=== Generated Map Comparison ==="
echo ""

for map in ExampleMap CaveWorld RollingHills; do
  echo "📍 Map: $map"
  echo "   File size: $(ls -lh output/${map}.timber | awk '{print $5}')"

  stats=$(unzip -p output/${map}.timber world.json | jq -c '{
    size: .Singletons.MapSize.Size.X,
    terrain: ([.Entities[] | select(.Template == "TerrainBlock")] | length),
    water: ([.Entities[] | select(.Template == "WaterSource")] | length),
    trees: ([.Entities[] | select(.Template | IN("Pine", "Birch", "Maple", "ChestnutTree"))] | length),
    bushes: ([.Entities[] | select(.Template | IN("BlueberryBush", "Dandelion"))] | length)
  }')

  echo "   $stats" | jq '.'
  echo ""
done
