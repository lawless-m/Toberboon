import { Vector3Int, VoxelType } from '../types';

/**
 * WasmVoxelGrid - TypeScript wrapper around Rust WASM VoxelGrid
 *
 * This provides the same interface as the pure TypeScript VoxelGrid
 * but delegates to WASM for performance-critical operations.
 */
export class WasmVoxelGrid {
  private wasmGrid: any; // Actual WASM VoxelGrid instance

  constructor(
    public readonly width: number,
    public readonly height: number,
    public readonly depth: number,
    wasmModule: any
  ) {
    this.wasmGrid = new wasmModule.VoxelGrid(width, height, depth);
  }

  get(pos: Vector3Int): VoxelType {
    const isSolid = this.wasmGrid.get(pos.x, pos.y, pos.z);
    return isSolid ? VoxelType.Solid : VoxelType.Air;
  }

  set(pos: Vector3Int, type: VoxelType): void {
    const isSolid = type === VoxelType.Solid;
    this.wasmGrid.set(pos.x, pos.y, pos.z, isSolid);
  }

  isInBounds(pos: Vector3Int): boolean {
    return pos.x >= 0 && pos.x < this.width &&
           pos.y >= 0 && pos.y < this.depth &&
           pos.z >= 0 && pos.z < this.height;
  }

  isSolid(pos: Vector3Int): boolean {
    return this.get(pos) === VoxelType.Solid;
  }

  *getAllSolidVoxels(): IterableIterator<Vector3Int> {
    // Note: This is slower than the pure TS version for iteration
    // But we rarely need this operation
    for (let z = 0; z < this.height; z++) {
      for (let y = 0; y < this.depth; y++) {
        for (let x = 0; x < this.width; x++) {
          if (this.wasmGrid.get(x, y, z)) {
            yield { x, y, z };
          }
        }
      }
    }
  }

  getSolidCount(): number {
    return this.wasmGrid.get_solid_count();
  }

  toVoxelArray(): string {
    return this.wasmGrid.to_voxel_array();
  }

  fillFromHeightmap(heightmap: number[][]): void {
    // Flatten heightmap for WASM (expects 1D array)
    const flat = new Float32Array(this.width * this.depth);
    let i = 0;
    for (let y = 0; y < this.depth; y++) {
      for (let x = 0; x < this.width; x++) {
        flat[i++] = heightmap[y][x];
      }
    }

    this.wasmGrid.fill_from_heightmap(flat);
  }

  // Expose underlying WASM grid for direct manipulation
  getWasmGrid(): any {
    return this.wasmGrid;
  }
}
