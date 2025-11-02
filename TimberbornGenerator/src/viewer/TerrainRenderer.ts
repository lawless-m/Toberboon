import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import type { VoxelGrid } from '../core/VoxelGrid';
import type { WasmVoxelGrid } from '../core/WasmVoxelGrid';
import type { Entity } from '../types';

interface Coordinates {
  X: number;
  Y: number;
  Z: number;
}

/**
 * TerrainRenderer - 3D visualization of generated terrain
 *
 * Renders generated voxel grids and entities using Three.js
 */
export class TerrainRenderer {
  private scene: THREE.Scene;
  private camera: THREE.PerspectiveCamera;
  private renderer: THREE.WebGLRenderer;
  private controls: OrbitControls;
  private container: HTMLElement;

  constructor(container: HTMLElement) {
    this.container = container;

    // Create scene
    this.scene = new THREE.Scene();
    this.scene.background = new THREE.Color(0x87CEEB); // Sky blue

    // Create camera
    this.camera = new THREE.PerspectiveCamera(
      60,
      container.clientWidth / container.clientHeight,
      0.1,
      1000
    );
    this.camera.position.set(50, 50, 50);

    // Create renderer
    this.renderer = new THREE.WebGLRenderer({ antialias: true });
    this.renderer.setSize(container.clientWidth, container.clientHeight);
    this.renderer.setPixelRatio(window.devicePixelRatio);
    this.renderer.shadowMap.enabled = true;
    this.renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    container.appendChild(this.renderer.domElement);

    // Add controls
    this.controls = new OrbitControls(this.camera, this.renderer.domElement);
    this.controls.enableDamping = true;
    this.controls.dampingFactor = 0.05;
    this.controls.minDistance = 10;
    this.controls.maxDistance = 500;

    // Add lights
    this.setupLights();

    // Handle window resize
    window.addEventListener('resize', () => this.onWindowResize());

    // Start animation loop
    this.animate();
  }

  private setupLights() {
    // Ambient light
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    this.scene.add(ambientLight);

    // Directional light (sun)
    const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8);
    directionalLight.position.set(50, 100, 50);
    directionalLight.castShadow = true;
    directionalLight.shadow.mapSize.width = 2048;
    directionalLight.shadow.mapSize.height = 2048;
    this.scene.add(directionalLight);

    // Hemisphere light
    const hemiLight = new THREE.HemisphereLight(0x87CEEB, 0x8B7355, 0.3);
    this.scene.add(hemiLight);
  }

  /**
   * Load and render generated terrain
   */
  public loadTerrain(grid: VoxelGrid | WasmVoxelGrid, entities: Entity[]) {
    console.log('🎨 Rendering terrain in 3D viewer...');
    console.time('render');

    // Clear existing terrain
    this.clearTerrain();

    // Collect voxels for rendering
    const voxels: Coordinates[] = [];
    for (const pos of grid.getAllSolidVoxels()) {
      voxels.push({ X: pos.x, Y: pos.y, Z: pos.z });
    }

    console.log(`  Rendering ${voxels.length.toLocaleString()} voxels...`);

    // Render terrain blocks
    this.renderTerrainBlocks(voxels);

    // Render entities
    this.renderEntities(entities);

    // Center camera on terrain
    const width = grid.width;
    const depth = grid.depth;
    const centerX = width / 2;
    const centerZ = depth / 2;
    const centerY = 10;

    this.controls.target.set(centerX, centerY, centerZ);
    this.camera.position.set(centerX + 50, centerY + 50, centerZ + 50);
    this.controls.update();

    console.timeEnd('render');
    console.log('✓ 3D rendering complete!');
  }

  private clearTerrain() {
    const objectsToRemove: THREE.Object3D[] = [];
    this.scene.traverse((object: THREE.Object3D) => {
      if (object instanceof THREE.Mesh || object instanceof THREE.InstancedMesh) {
        objectsToRemove.push(object);
      }
    });
    objectsToRemove.forEach((obj) => this.scene.remove(obj));
  }

  private renderTerrainBlocks(blocks: Coordinates[]) {
    if (blocks.length === 0) return;

    // Use instanced mesh for performance
    const geometry = new THREE.BoxGeometry(1, 1, 1);
    const material = new THREE.MeshStandardMaterial({
      color: 0x8B7355, // Brown/dirt color
      roughness: 0.8,
      metalness: 0.2
    });

    const instancedMesh = new THREE.InstancedMesh(geometry, material, blocks.length);
    instancedMesh.castShadow = true;
    instancedMesh.receiveShadow = true;

    const matrix = new THREE.Matrix4();
    blocks.forEach((block, i) => {
      // Coordinate mapping: Timberborn (X,Y,Z) -> Three.js (X,Z,Y)
      // Timberborn: X=width, Y=depth, Z=height
      // Three.js: X=width, Y=height, Z=depth
      matrix.setPosition(block.X, block.Z, block.Y);
      instancedMesh.setMatrixAt(i, matrix);
    });
    instancedMesh.instanceMatrix.needsUpdate = true;

    this.scene.add(instancedMesh);
  }

  private renderEntities(entities: Entity[]) {
    for (const entity of entities) {
      if (!entity.Components.BlockObject) continue;

      const coords = entity.Components.BlockObject.Coordinates;

      if (entity.Template === 'WaterSource') {
        this.renderWaterSource(coords);
      } else if (entity.Template === 'StartingLocation') {
        this.renderStartingLocation(coords);
      } else if (['Pine', 'Birch', 'Maple', 'ChestnutTree', 'MangroveTree'].includes(entity.Template)) {
        this.renderTree(coords, entity.Template);
      } else if (entity.Template === 'BlueberryBush') {
        this.renderBush(coords);
      }
    }
  }

  private renderWaterSource(coords: Coordinates) {
    const geometry = new THREE.SphereGeometry(0.5, 16, 16);
    const material = new THREE.MeshStandardMaterial({
      color: 0x1E90FF,
      emissive: 0x1E90FF,
      emissiveIntensity: 0.5,
      transparent: true,
      opacity: 0.8
    });

    const mesh = new THREE.Mesh(geometry, material);
    mesh.position.set(coords.X, coords.Z, coords.Y);
    this.scene.add(mesh);
  }

  private renderStartingLocation(coords: Coordinates) {
    const geometry = new THREE.CylinderGeometry(2, 2, 0.5, 16);
    const material = new THREE.MeshStandardMaterial({
      color: 0xFFD700,
      emissive: 0xFFD700,
      emissiveIntensity: 0.3
    });

    const mesh = new THREE.Mesh(geometry, material);
    mesh.position.set(coords.X, coords.Z + 0.25, coords.Y);
    this.scene.add(mesh);
  }

  private renderTree(coords: Coordinates, type: string) {
    const tree = new THREE.Group();

    // Trunk
    const trunkGeometry = new THREE.CylinderGeometry(0.15, 0.2, 2, 8);
    const trunkMaterial = new THREE.MeshStandardMaterial({ color: 0x4A3728 });
    const trunk = new THREE.Mesh(trunkGeometry, trunkMaterial);
    trunk.position.y = 1;
    trunk.castShadow = true;
    tree.add(trunk);

    // Foliage
    const foliageColor = this.getTreeColor(type);
    const foliageGeometry = new THREE.ConeGeometry(0.8, 1.5, 8);
    const foliageMaterial = new THREE.MeshStandardMaterial({ color: foliageColor });

    const foliage1 = new THREE.Mesh(foliageGeometry, foliageMaterial);
    foliage1.position.y = 2.5;
    foliage1.castShadow = true;
    tree.add(foliage1);

    const foliage2 = new THREE.Mesh(foliageGeometry, foliageMaterial);
    foliage2.position.y = 3;
    foliage2.scale.setScalar(0.7);
    foliage2.castShadow = true;
    tree.add(foliage2);

    tree.position.set(coords.X, coords.Z, coords.Y);
    this.scene.add(tree);
  }

  private getTreeColor(type: string): number {
    const colors: { [key: string]: number } = {
      Pine: 0x228B22,
      Birch: 0x90EE90,
      Maple: 0xFF6347,
      ChestnutTree: 0x32CD32,
      MangroveTree: 0x2E8B57
    };
    return colors[type] || 0x228B22;
  }

  private renderBush(coords: Coordinates) {
    const geometry = new THREE.SphereGeometry(0.3, 8, 8);
    const material = new THREE.MeshStandardMaterial({ color: 0x4169E1 });
    const bush = new THREE.Mesh(geometry, material);
    bush.position.set(coords.X, coords.Z, coords.Y);
    bush.castShadow = true;
    this.scene.add(bush);
  }

  private animate = () => {
    requestAnimationFrame(this.animate);
    this.controls.update();
    this.renderer.render(this.scene, this.camera);
  };

  private onWindowResize() {
    this.camera.aspect = this.container.clientWidth / this.container.clientHeight;
    this.camera.updateProjectionMatrix();
    this.renderer.setSize(this.container.clientWidth, this.container.clientHeight);
  }

  public dispose() {
    this.controls.dispose();
    this.renderer.dispose();
    window.removeEventListener('resize', () => this.onWindowResize());
  }
}
