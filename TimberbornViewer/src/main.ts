import { TerrainRenderer } from './renderer';
import { loadTimberFile } from './loader';
import type { ParsedMapData } from './types';

// UI Elements
const fileInput = document.getElementById('file-input') as HTMLInputElement;
const infoPanel = document.getElementById('info') as HTMLDivElement;
const loadingOverlay = document.getElementById('loading') as HTMLDivElement;
const canvasContainer = document.getElementById('canvas-container') as HTMLDivElement;

// Stats elements
const mapSizeEl = document.getElementById('map-size') as HTMLSpanElement;
const terrainBlocksEl = document.getElementById('terrain-blocks') as HTMLSpanElement;
const waterSourcesEl = document.getElementById('water-sources') as HTMLSpanElement;
const treesEl = document.getElementById('trees') as HTMLSpanElement;
const bushesEl = document.getElementById('bushes') as HTMLSpanElement;

// Initialize renderer
const renderer = new TerrainRenderer(canvasContainer);

// Handle file selection
fileInput.addEventListener('change', async (event) => {
  const input = event.target as HTMLInputElement;
  const file = input.files?.[0];

  if (!file) return;

  try {
    // Show loading overlay
    loadingOverlay.classList.add('active');

    console.log('Loading file:', file.name);

    // Load and parse the .timber file
    const mapData = await loadTimberFile(file);

    console.log('Map data loaded:', mapData);

    // Update UI stats
    updateStats(mapData);

    // Render terrain
    renderer.loadTerrain(mapData);

    // Show info panel
    infoPanel.style.display = 'block';

    console.log('Terrain rendered successfully');
  } catch (error) {
    console.error('Error loading terrain:', error);
    alert(`Failed to load terrain: ${error instanceof Error ? error.message : 'Unknown error'}`);
  } finally {
    // Hide loading overlay
    loadingOverlay.classList.remove('active');
  }
});

function updateStats(data: ParsedMapData) {
  mapSizeEl.textContent = `${data.mapSize.x} × ${data.mapSize.y}`;
  terrainBlocksEl.textContent = data.stats.terrainBlocks.toLocaleString();
  waterSourcesEl.textContent = data.stats.waterSources.toString();
  treesEl.textContent = data.stats.trees.toLocaleString();
  bushesEl.textContent = data.stats.bushes.toLocaleString();
}

// Log startup
console.log('🌲 Timberborn Viewer initialized');
console.log('Please load a .timber file to view the terrain');

// Add keyboard controls help
document.addEventListener('keydown', (e) => {
  if (e.key === 'h' || e.key === 'H') {
    const instructions = document.getElementById('instructions');
    if (instructions) {
      instructions.style.display = instructions.style.display === 'none' ? 'block' : 'none';
    }
  }
});
