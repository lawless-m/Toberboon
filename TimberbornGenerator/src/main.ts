import { HybridTerrainGenerator } from './HybridTerrainGenerator';
import { DEFAULT_CONFIG, GeneratorConfig } from './types';
import { initWasm, isWasmAvailable } from './wasm-loader';
import { TerrainRenderer } from './viewer/TerrainRenderer';
import { TimberbornExporter } from './export/TimberbornExporter';

// Get form elements
const form = document.getElementById('generator-form') as HTMLFormElement;
const generateBtn = document.getElementById('generateBtn') as HTMLButtonElement;
const progressContainer = document.getElementById('progressContainer') as HTMLDivElement;
const progressFill = document.getElementById('progressFill') as HTMLDivElement;
const progressText = document.getElementById('progressText') as HTMLDivElement;
const statsContainer = document.getElementById('stats') as HTMLDivElement;

// Form inputs
const mapSizeInput = document.getElementById('mapSize') as HTMLSelectElement;
const maxHeightInput = document.getElementById('maxHeight') as HTMLInputElement;
const seedInput = document.getElementById('seed') as HTMLInputElement;
const outputNameInput = document.getElementById('outputName') as HTMLInputElement;
const generateCavesInput = document.getElementById('generateCaves') as HTMLInputElement;
const generateWaterwaysInput = document.getElementById('generateWaterways') as HTMLInputElement;
const generateOverhangsInput = document.getElementById('generateOverhangs') as HTMLInputElement;
const addVegetationInput = document.getElementById('addVegetation') as HTMLInputElement;

// Waterway inputs
const waterwayCountInput = document.getElementById('waterwayCount') as HTMLInputElement;
const waterwayWidthInput = document.getElementById('waterwayWidth') as HTMLSelectElement;
const waterwayDepthInput = document.getElementById('waterwayDepth') as HTMLSelectElement;
const waterwayMeanderingInput = document.getElementById('waterwayMeandering') as HTMLSelectElement;

// Vegetation inputs
const treeDensityInput = document.getElementById('treeDensity') as HTMLInputElement;
const bushDensityInput = document.getElementById('bushDensity') as HTMLInputElement;

// Stats elements
const statMapSize = document.getElementById('statMapSize') as HTMLSpanElement;
const statVoxels = document.getElementById('statVoxels') as HTMLSpanElement;
const statEntities = document.getElementById('statEntities') as HTMLSpanElement;
const statFileSize = document.getElementById('statFileSize') as HTMLSpanElement;
const statTime = document.getElementById('statTime') as HTMLSpanElement;
const statSeed = document.getElementById('statSeed') as HTMLSpanElement;

// Viewer elements
const viewerContainer = document.getElementById('viewer-container') as HTMLDivElement;
const viewerCanvas = document.getElementById('viewer-canvas') as HTMLDivElement;
const downloadBtn = document.getElementById('downloadBtn') as HTMLButtonElement;

// Initialize 3D viewer
let renderer: TerrainRenderer | null = null;
let lastGeneration: { blob: Blob; config: GeneratorConfig } | null = null;

// Download button handler
downloadBtn.addEventListener('click', () => {
  if (lastGeneration) {
    const exporter = new TimberbornExporter();
    exporter.downloadTimber(lastGeneration.blob, lastGeneration.config.outputName);
  }
});

// Toggle waterway settings visibility
generateWaterwaysInput.addEventListener('change', () => {
  const waterwaySettings = document.getElementById('waterwaySettings') as HTMLDivElement;
  waterwaySettings.style.display = generateWaterwaysInput.checked ? 'grid' : 'none';
});

// Toggle vegetation settings visibility
addVegetationInput.addEventListener('change', () => {
  const vegetationSettings = document.getElementById('vegetationSettings') as HTMLDivElement;
  vegetationSettings.style.display = addVegetationInput.checked ? 'grid' : 'none';
});

// Initialize WASM on startup
let wasmReady = false;

(async () => {
  console.log('🚀 Initializing Timberborn Generator...');
  wasmReady = await initWasm();

  if (wasmReady) {
    updateWasmBadge('WASM READY', '#10b981');
  } else {
    updateWasmBadge('TypeScript', '#f59e0b');
  }
})();

// Handle form submission
form.addEventListener('submit', async (e) => {
  e.preventDefault();
  await generateTerrain();
});

async function generateTerrain() {
  // Disable form
  generateBtn.disabled = true;
  progressContainer.style.display = 'block';
  statsContainer.style.display = 'none';
  viewerContainer.style.display = 'none';

  try {
    // Build config from form
    const config: GeneratorConfig = {
      ...DEFAULT_CONFIG,
      mapSize: parseInt(mapSizeInput.value),
      maxHeight: parseInt(maxHeightInput.value),
      seed: seedInput.value ? parseInt(seedInput.value) : Date.now(),
      outputName: outputNameInput.value,
      generateCaves: generateCavesInput.checked,
      generateWaterways: generateWaterwaysInput.checked,
      generateOverhangs: generateOverhangsInput.checked,

      // Waterway settings
      waterwayCount: parseInt(waterwayCountInput.value),
      waterwayWidth: parseInt(waterwayWidthInput.value),
      waterwayDepth: parseInt(waterwayDepthInput.value),
      waterwayMeandering: parseFloat(waterwayMeanderingInput.value),

      // Vegetation settings
      waterSourceCount: addVegetationInput.checked ? 3 : 0,
      treeDensity: addVegetationInput.checked ? parseInt(treeDensityInput.value) : 0,
      bushDensity: addVegetationInput.checked ? parseInt(bushDensityInput.value) : 0,
    };

    console.log('🎮 Starting generation with config:', config);

    const startTime = performance.now();

    // Create hybrid generator (uses WASM if available)
    const generator = new HybridTerrainGenerator(config);

    // Generate with progress
    const result = await generator.generateWithProgress((stage, progress) => {
      progressFill.style.width = `${progress * 100}%`;
      progressText.textContent = stage;
    });

    const endTime = performance.now();
    const duration = ((endTime - startTime) / 1000).toFixed(2);

    // Store generation for download
    lastGeneration = { blob: result.blob, config };

    // Show stats
    statsContainer.style.display = 'block';
    statMapSize.textContent = `${config.mapSize}×${config.mapSize}`;
    statVoxels.textContent = result.grid.getSolidCount().toLocaleString();
    statEntities.textContent = result.entities.length.toString();
    statFileSize.textContent = `${(result.blob.size / 1024 / 1024).toFixed(2)} MB`;
    statTime.textContent = `${duration}s`;
    statSeed.textContent = config.seed.toString();

    // Show 3D viewer
    viewerContainer.style.display = 'block';
    downloadBtn.style.display = 'block';

    // Initialize renderer if needed
    if (!renderer) {
      console.log('🎨 Initializing 3D viewer...');
      renderer = new TerrainRenderer(viewerCanvas);
    }

    // Render in 3D viewer
    console.log('🎨 Rendering terrain in 3D viewer...');
    renderer.loadTerrain(result.grid, result.entities);

    // Log performance data
    console.log('📊 Performance Metrics:');
    console.log(`  Map size: ${config.mapSize}×${config.mapSize}`);
    console.log(`  Total time: ${duration}s`);
    console.log(`  Voxels: ${result.grid.getSolidCount().toLocaleString()}`);
    console.log(`  File size: ${(result.blob.size / 1024 / 1024).toFixed(2)} MB`);
    console.log('');
    console.log('🔥 WASM Evaluation:');
    console.log(`  Performance: ${duration < 3 ? '✅ Good' : duration < 10 ? '⚠️ Moderate' : '❌ Slow'}`);
    console.log(`  Recommendation: ${duration < 5 ? 'TypeScript is sufficient' : 'Consider WASM for hot paths'}`);

  } catch (error) {
    console.error('❌ Generation failed:', error);
    alert(`Generation failed: ${error instanceof Error ? error.message : 'Unknown error'}`);
  } finally {
    // Re-enable form
    generateBtn.disabled = false;
    progressContainer.style.display = 'none';
  }
}

// Helper to update WASM badge
function updateWasmBadge(text: string, color: string) {
  const badge = document.querySelector('.wasm-badge') as HTMLElement;
  if (badge) {
    badge.textContent = text;
    badge.style.background = color;
  }
}

// Initialize
console.log('🌲 Timberborn Terrain Generator (Hybrid TypeScript/WASM)');
console.log('');
console.log('This is a hybrid architecture:');
console.log('  🔥 WASM (when available): VoxelGrid, HeightmapGenerator, CaveGenerator');
console.log('  ✅ TypeScript: UI, entity placement, export, 3D viewer');
console.log('  📦 Graceful fallback: Pure TypeScript if WASM unavailable');
console.log('');
console.log('Generate a map and see it instantly in 3D!');
