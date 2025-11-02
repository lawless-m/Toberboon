import { TerrainGenerator } from './TerrainGenerator';
import { DEFAULT_CONFIG, GeneratorConfig } from './types';

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
const generateOverhangsInput = document.getElementById('generateOverhangs') as HTMLInputElement;

// Stats elements
const statMapSize = document.getElementById('statMapSize') as HTMLSpanElement;
const statVoxels = document.getElementById('statVoxels') as HTMLSpanElement;
const statEntities = document.getElementById('statEntities') as HTMLSpanElement;
const statFileSize = document.getElementById('statFileSize') as HTMLSpanElement;
const statTime = document.getElementById('statTime') as HTMLSpanElement;
const statSeed = document.getElementById('statSeed') as HTMLSpanElement;

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

  try {
    // Build config from form
    const config: GeneratorConfig = {
      ...DEFAULT_CONFIG,
      mapSize: parseInt(mapSizeInput.value),
      maxHeight: parseInt(maxHeightInput.value),
      seed: seedInput.value ? parseInt(seedInput.value) : Date.now(),
      outputName: outputNameInput.value,
      generateCaves: generateCavesInput.checked,
      generateOverhangs: generateOverhangsInput.checked
    };

    console.log('🎮 Starting generation with config:', config);

    const startTime = performance.now();

    // Create generator
    const generator = new TerrainGenerator(config);

    // Generate with progress
    const result = await generator.generateWithProgress((stage, progress) => {
      progressFill.style.width = `${progress * 100}%`;
      progressText.textContent = stage;
    });

    const endTime = performance.now();
    const duration = ((endTime - startTime) / 1000).toFixed(2);

    // Download file
    const exporter = new (await import('./export/TimberbornExporter')).TimberbornExporter();
    exporter.downloadTimber(result.blob, config.outputName);

    // Show stats
    statsContainer.style.display = 'block';
    statMapSize.textContent = `${config.mapSize}×${config.mapSize}`;
    statVoxels.textContent = result.grid.getSolidCount().toLocaleString();
    statEntities.textContent = result.entities.length.toString();
    statFileSize.textContent = `${(result.blob.size / 1024 / 1024).toFixed(2)} MB`;
    statTime.textContent = `${duration}s`;
    statSeed.textContent = config.seed.toString();

    // Log performance data for WASM decision
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

// Initialize
console.log('🌲 Timberborn Terrain Generator (TypeScript + WASM Proof-of-Concept)');
console.log('');
console.log('This is a hybrid architecture proof-of-concept:');
console.log('  ✅ TypeScript: UI, entity placement, export');
console.log('  🔥 WASM candidates: VoxelGrid, HeightmapGenerator, CaveGenerator');
console.log('');
console.log('Generate some maps to collect performance data!');
