import { Vector3Int, VoxelType } from '../types';

/**
 * VoxelGrid - 3D voxel storage
 *
 * 🔥 WASM CANDIDATE: This class is memory-intensive and called frequently.
 * A Rust WASM implementation could provide:
 * - Faster lookups (native array vs Map)
 * - Better memory locality
 * - SIMD operations for bulk operations
 *
 * For proof-of-concept, TypeScript is fine for maps up to 128×128.
 * For 256×256+, consider porting to WASM.
 */
export class VoxelGrid {
  private voxels: Map<string, VoxelType>;

  constructor(
    public readonly width: number,
    public readonly height: number,  // Max Z (vertical)
    public readonly depth: number
  ) {
    this.voxels = new Map();
  }

  private key(pos: Vector3Int): string {
    return `${pos.x},${pos.y},${pos.z}`;
  }

  get(pos: Vector3Int): VoxelType {
    if (!this.isInBounds(pos)) return VoxelType.Air;
    return this.voxels.get(this.key(pos)) ?? VoxelType.Air;
  }

  set(pos: Vector3Int, type: VoxelType): void {
    if (!this.isInBounds(pos)) return;

    if (type === VoxelType.Air) {
      this.voxels.delete(this.key(pos));
    } else {
      this.voxels.set(this.key(pos), type);
    }
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
    for (const [key, type] of this.voxels.entries()) {
      if (type === VoxelType.Solid) {
        const [x, y, z] = key.split(',').map(Number);
        yield { x, y, z };
      }
    }
  }

  getSolidCount(): number {
    let count = 0;
    for (const type of this.voxels.values()) {
      if (type === VoxelType.Solid) count++;
    }
    return count;
  }

  /**
   * Get voxels in Timberborn format: Z (height), Y (depth), X (width)
   * Returns space-separated string of "0" (air) and "1" (solid)
   */
  toVoxelArray(): string {
    const values: string[] = [];
    const TIMBERBORN_HEIGHT = 23;

    // Iterate in Timberborn order: Z, Y, X
    for (let z = 0; z < TIMBERBORN_HEIGHT; z++) {
      for (let y = 0; y < this.depth; y++) {
        for (let x = 0; x < this.width; x++) {
          const isSolid = this.isSolid({ x, y, z });
          values.push(isSolid ? '1' : '0');
        }
      }
    }

    return values.join(' ');
  }

  /**
   * Fill voxels below the heightmap
   */
  fillFromHeightmap(heightmap: number[][]): void {
    for (let y = 0; y < this.depth; y++) {
      for (let x = 0; x < this.width; x++) {
        const height = Math.floor(heightmap[y][x]);

        // Fill all voxels from 0 to height
        for (let z = 0; z < height && z < this.height; z++) {
          this.set({ x, y, z }, VoxelType.Solid);
        }
      }
    }
  }
}
