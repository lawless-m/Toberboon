import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import type { ParsedMapData, Coordinates } from './types';

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

    // Add grid helper
    const gridHelper = new THREE.GridHelper(200, 50, 0x444444, 0x222222);
    this.scene.add(gridHelper);

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
    directionalLight.shadow.camera.near = 0.5;
    directionalLight.shadow.camera.far = 500;
    directionalLight.shadow.camera.left = -100;
    directionalLight.shadow.camera.right = 100;
    directionalLight.shadow.camera.top = 100;
    directionalLight.shadow.camera.bottom = -100;
    this.scene.add(directionalLight);

    // Hemisphere light for better ambient
    const hemiLight = new THREE.HemisphereLight(0x87CEEB, 0x8B7355, 0.3);
    this.scene.add(hemiLight);
  }

  public loadTerrain(data: ParsedMapData) {
    // Clear existing terrain
    this.clearTerrain();

    // Render terrain blocks
    this.renderTerrainBlocks(data.terrainBlocks);

    // Render water sources
    this.renderWaterSources(data.waterSources);

    // Render trees
    this.renderTrees(data.trees);

    // Render bushes
    this.renderBushes(data.bushes);

    // Center camera on terrain
    const centerX = data.mapSize.x / 2;
    const centerZ = data.mapSize.y / 2;
    this.controls.target.set(centerX, 10, centerZ);
    this.camera.position.set(centerX + 50, 50, centerZ + 50);
    this.controls.update();
  }

  private clearTerrain() {
    // Remove all meshes except lights and helpers
    const objectsToRemove: THREE.Object3D[] = [];
    this.scene.traverse((object) => {
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
      matrix.setPosition(block.X, block.Y, block.Z);
      instancedMesh.setMatrixAt(i, matrix);
    });
    instancedMesh.instanceMatrix.needsUpdate = true;

    this.scene.add(instancedMesh);
  }

  private renderWaterSources(sources: Array<{ coords: Coordinates; strength: number }>) {
    const geometry = new THREE.SphereGeometry(0.5, 16, 16);
    const material = new THREE.MeshStandardMaterial({
      color: 0x1E90FF, // Dodger blue
      emissive: 0x1E90FF,
      emissiveIntensity: 0.5,
      transparent: true,
      opacity: 0.8
    });

    sources.forEach(({ coords, strength }) => {
      const mesh = new THREE.Mesh(geometry, material);
      mesh.position.set(coords.X, coords.Y, coords.Z);

      // Scale based on strength
      const scale = 0.5 + (strength * 0.2);
      mesh.scale.setScalar(scale);

      this.scene.add(mesh);

      // Add water particles effect
      this.addWaterParticles(coords, strength);
    });
  }

  private addWaterParticles(coords: Coordinates, strength: number) {
    const particleCount = Math.floor(strength * 10);
    const geometry = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);

    for (let i = 0; i < particleCount; i++) {
      positions[i * 3] = coords.X + (Math.random() - 0.5) * 2;
      positions[i * 3 + 1] = coords.Y + Math.random() * 2;
      positions[i * 3 + 2] = coords.Z + (Math.random() - 0.5) * 2;
    }

    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));

    const material = new THREE.PointsMaterial({
      color: 0x4DD0E1,
      size: 0.1,
      transparent: true,
      opacity: 0.6
    });

    const particles = new THREE.Points(geometry, material);
    this.scene.add(particles);
  }

  private renderTrees(trees: Array<{ coords: Coordinates; type: string }>) {
    trees.forEach(({ coords, type }) => {
      const tree = this.createTree(type);
      tree.position.set(coords.X, coords.Y, coords.Z);
      this.scene.add(tree);
    });
  }

  private createTree(type: string): THREE.Group {
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

    return tree;
  }

  private getTreeColor(type: string): number {
    const colors: { [key: string]: number } = {
      Pine: 0x228B22,      // Forest green
      Birch: 0x90EE90,     // Light green
      Maple: 0xFF6347,     // Tomato (autumn)
      ChestnutTree: 0x32CD32, // Lime green
      MangroveTree: 0x2E8B57  // Sea green
    };
    return colors[type] || 0x228B22;
  }

  private renderBushes(bushes: Array<{ coords: Coordinates; type: string }>) {
    bushes.forEach(({ coords, type }) => {
      const bush = this.createBush(type);
      bush.position.set(coords.X, coords.Y, coords.Z);
      this.scene.add(bush);
    });
  }

  private createBush(type: string): THREE.Mesh {
    const geometry = new THREE.SphereGeometry(0.3, 8, 8);
    const color = type === 'BlueberryBush' ? 0x4169E1 : 0xFFD700; // Blue or yellow
    const material = new THREE.MeshStandardMaterial({ color });
    const bush = new THREE.Mesh(geometry, material);
    bush.castShadow = true;
    return bush;
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
