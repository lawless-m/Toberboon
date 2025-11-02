use wasm_bindgen::prelude::*;
use noise::{NoiseFn, Perlin, Fbm};
use std::collections::HashMap;

// Re-export for TypeScript to check WASM is loaded
#[wasm_bindgen(start)]
pub fn init() {
    // Optional: set panic hook for better error messages
    #[cfg(feature = "console_error_panic_hook")]
    console_error_panic_hook::set_once();
}

/// VoxelGrid - Fast 3D voxel storage using native arrays
///
/// This replaces the TypeScript Map-based implementation with a compact
/// bit-packed array for ~10x memory reduction and ~5x faster access.
#[wasm_bindgen]
pub struct VoxelGrid {
    width: usize,
    height: usize,  // Z dimension (vertical)
    depth: usize,   // Y dimension
    // Bit-packed: each u8 stores 8 voxels (0 or 1)
    data: Vec<u8>,
}

#[wasm_bindgen]
impl VoxelGrid {
    /// Create new empty voxel grid
    #[wasm_bindgen(constructor)]
    pub fn new(width: usize, height: usize, depth: usize) -> VoxelGrid {
        let total_voxels = width * height * depth;
        let byte_count = (total_voxels + 7) / 8; // Round up for bit-packing

        VoxelGrid {
            width,
            height,
            depth,
            data: vec![0; byte_count],
        }
    }

    /// Get voxel value at (x, y, z)
    pub fn get(&self, x: usize, y: usize, z: usize) -> bool {
        if !self.is_in_bounds(x, y, z) {
            return false;
        }

        let index = self.index(x, y, z);
        let byte_index = index / 8;
        let bit_index = index % 8;

        (self.data[byte_index] & (1 << bit_index)) != 0
    }

    /// Set voxel value at (x, y, z)
    pub fn set(&mut self, x: usize, y: usize, z: usize, value: bool) {
        if !self.is_in_bounds(x, y, z) {
            return;
        }

        let index = self.index(x, y, z);
        let byte_index = index / 8;
        let bit_index = index % 8;

        if value {
            self.data[byte_index] |= 1 << bit_index;
        } else {
            self.data[byte_index] &= !(1 << bit_index);
        }
    }

    /// Check if coordinates are in bounds
    fn is_in_bounds(&self, x: usize, y: usize, z: usize) -> bool {
        x < self.width && y < self.depth && z < self.height
    }

    /// Calculate linear index from 3D coordinates
    fn index(&self, x: usize, y: usize, z: usize) -> usize {
        z * (self.width * self.depth) + y * self.width + x
    }

    /// Fill voxels from heightmap
    /// heightmap is flat array: [height at (0,0), height at (1,0), ...]
    pub fn fill_from_heightmap(&mut self, heightmap: &[f32]) {
        for y in 0..self.depth {
            for x in 0..self.width {
                let height = heightmap[y * self.width + x].floor() as usize;

                // Fill all voxels from 0 to height
                for z in 0..height.min(self.height) {
                    self.set(x, y, z, true);
                }
            }
        }
    }

    /// Export to Timberborn voxel array format
    /// Returns space-separated string of "0" and "1"
    pub fn to_voxel_array(&self) -> String {
        let timberborn_height = 23;
        let total = self.width * self.depth * timberborn_height;
        let mut result = String::with_capacity(total * 2); // "0 " per voxel

        // Timberborn order: Z (height), Y (depth), X (width)
        for z in 0..timberborn_height {
            for y in 0..self.depth {
                for x in 0..self.width {
                    if result.len() > 0 {
                        result.push(' ');
                    }

                    let is_solid = if z < self.height {
                        self.get(x, y, z)
                    } else {
                        false
                    };

                    result.push(if is_solid { '1' } else { '0' });
                }
            }
        }

        result
    }

    /// Get count of solid voxels
    pub fn get_solid_count(&self) -> usize {
        self.data.iter()
            .map(|&byte| byte.count_ones() as usize)
            .sum()
    }

    /// Get grid dimensions as [width, height, depth]
    pub fn dimensions(&self) -> Vec<usize> {
        vec![self.width, self.height, self.depth]
    }
}

/// Generate heightmap using multi-octave noise
#[wasm_bindgen]
pub fn generate_heightmap(
    width: usize,
    depth: usize,
    seed: u32,
    scale: f64,
    octaves: usize,
    persistence: f64,
    lacunarity: f64,
    max_height: f64,
) -> Vec<f32> {
    let fbm = Fbm::<Perlin>::new(seed)
        .set_octaves(octaves)
        .set_persistence(persistence)
        .set_lacunarity(lacunarity);

    let mut heightmap = Vec::with_capacity(width * depth);
    let base_height = max_height * 0.3;

    for y in 0..depth {
        for x in 0..width {
            // Sample noise (-1 to 1)
            let noise_value = fbm.get([x as f64 * scale, y as f64 * scale]);

            // Convert to height (base_height to max_height)
            let height = base_height + ((noise_value + 1.0) / 2.0) * (max_height - base_height);
            let height = height.max(1.0).min(max_height);

            heightmap.push(height as f32);
        }
    }

    heightmap
}

/// Carve caves using worm tunnels and 3D noise
#[wasm_bindgen]
pub fn carve_caves(
    grid: &mut VoxelGrid,
    seed: u32,
    cave_count: usize,
    cave_threshold: f64,
    max_height: usize,
) {
    // Worm-based tunnels
    carve_worm_tunnels(grid, seed, cave_count);

    // 3D noise-based caverns
    carve_caverns(grid, seed + 1000, cave_threshold, max_height);
}

/// Carve worm-style tunnels
fn carve_worm_tunnels(grid: &mut VoxelGrid, seed: u32, count: usize) {
    use std::f64::consts::PI;

    let mut rng_state = seed as u64;

    for _ in 0..count {
        // Random start position
        let start_x = seeded_random(&mut rng_state, grid.width);
        let start_y = seeded_random(&mut rng_state, grid.depth);
        let start_z = 5 + seeded_random(&mut rng_state, (grid.height as f64 * 0.6) as usize);

        let segments = 50 + seeded_random(&mut rng_state, 50);
        let radius = 2 + seeded_random(&mut rng_state, 2);

        let mut x = start_x as f64;
        let mut y = start_y as f64;
        let mut z = start_z as f64;

        let mut dx = random_f64(&mut rng_state) - 0.5;
        let mut dy = random_f64(&mut rng_state) - 0.5;
        let mut dz = (random_f64(&mut rng_state) - 0.5) * 0.5;

        for _ in 0..segments {
            // Carve sphere at current position
            carve_sphere(grid, x as usize, y as usize, z as usize, radius);

            // Update direction (random walk)
            dx += (random_f64(&mut rng_state) - 0.5) * 0.5;
            dy += (random_f64(&mut rng_state) - 0.5) * 0.5;
            dz += (random_f64(&mut rng_state) - 0.5) * 0.3;

            // Normalize
            let len = (dx * dx + dy * dy + dz * dz).sqrt();
            if len > 0.0 {
                dx /= len;
                dy /= len;
                dz /= len;
            }

            // Move forward
            x += dx * 1.5;
            y += dy * 1.5;
            z += dz * 1.5;

            // Clamp to bounds
            x = x.max(1.0).min((grid.width - 2) as f64);
            y = y.max(1.0).min((grid.depth - 2) as f64);
            z = z.max(3.0).min((grid.height - 2) as f64);
        }
    }
}

/// Carve sphere (remove voxels)
fn carve_sphere(grid: &mut VoxelGrid, cx: usize, cy: usize, cz: usize, radius: usize) {
    let r2 = (radius * radius) as i32;
    let r = radius as i32;

    for dz in -r..=r {
        for dy in -r..=r {
            for dx in -r..=r {
                let dist2 = dx * dx + dy * dy + dz * dz;
                if dist2 <= r2 {
                    let x = (cx as i32 + dx).max(0) as usize;
                    let y = (cy as i32 + dy).max(0) as usize;
                    let z = (cz as i32 + dz).max(0) as usize;
                    grid.set(x, y, z, false);
                }
            }
        }
    }
}

/// Carve noise-based caverns
fn carve_caverns(grid: &mut VoxelGrid, seed: u32, threshold: f64, max_height: usize) {
    let noise = Perlin::new(seed);
    let max_z = (max_height as f64 * 0.7) as usize;

    for z in 3..max_z.min(grid.height) {
        for y in 0..grid.depth {
            for x in 0..grid.width {
                if !grid.get(x, y, z) {
                    continue; // Already air
                }

                let noise_value = noise.get([
                    x as f64 * 0.1,
                    y as f64 * 0.1,
                    z as f64 * 0.1,
                ]);

                if noise_value > threshold {
                    grid.set(x, y, z, false);
                }
            }
        }
    }
}

// Simple seeded random helpers
fn seeded_random(state: &mut u64, max: usize) -> usize {
    *state = state.wrapping_mul(1664525).wrapping_add(1013904223);
    (*state % (max as u64)) as usize
}

fn random_f64(state: &mut u64) -> f64 {
    *state = state.wrapping_mul(1664525).wrapping_add(1013904223);
    (*state as f64) / (u64::MAX as f64)
}

#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn test_voxel_grid() {
        let mut grid = VoxelGrid::new(10, 10, 10);
        assert_eq!(grid.get(5, 5, 5), false);

        grid.set(5, 5, 5, true);
        assert_eq!(grid.get(5, 5, 5), true);

        grid.set(5, 5, 5, false);
        assert_eq!(grid.get(5, 5, 5), false);
    }

    #[test]
    fn test_heightmap() {
        let heightmap = generate_heightmap(32, 32, 12345, 0.02, 4, 0.5, 2.0, 50.0);
        assert_eq!(heightmap.len(), 32 * 32);
        assert!(heightmap.iter().all(|&h| h >= 1.0 && h <= 50.0));
    }
}
