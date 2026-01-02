import * as THREE from 'three';
import { STLLoader } from 'three/examples/jsm/loaders/STLLoader.js';

/**
 * Material densities in g/cm³
 */
export enum MATERIAL_DENSITIES {
  POLYAMIDE = 1.01,
}

/**
 * Calculates the signed volume of a triangle
 * Used for computing the volume of 3D meshes
 */
function signedVolumeOfTriangle(p1: THREE.Vector3, p2: THREE.Vector3, p3: THREE.Vector3): number {
  return p1.dot(p2.clone().cross(p3)) / 6.0;
}

/**
 * Calculates the weight of an STL file in grams
 * @param file - The STL file to analyze
 * @param material - Material type (default: POLYAMIDE)
 * @returns Weight in grams, rounded to 2 decimal places
 */
export async function calculateStlWeight(
  file: File,
  material: keyof typeof MATERIAL_DENSITIES = 'POLYAMIDE'
): Promise<number> {
  // Load STL file as array buffer
  const arrayBuffer = await file.arrayBuffer();

  // Parse geometry using Three.js STL loader
  const loader = new STLLoader();
  const geometry = loader.parse(arrayBuffer);

  // Calculate volume by summing signed volumes of all triangles
  const position = geometry.attributes.position;
  let volume = 0;
  const p1 = new THREE.Vector3();
  const p2 = new THREE.Vector3();
  const p3 = new THREE.Vector3();

  for (let i = 0; i < position.count; i += 3) {
    p1.fromBufferAttribute(position, i);
    p2.fromBufferAttribute(position, i + 1);
    p3.fromBufferAttribute(position, i + 2);

    volume += signedVolumeOfTriangle(p1, p2, p3);
  }

  // Convert mm³ to cm³ and multiply by material density
  const volumeCm3 = Math.abs(volume) / 1000;
  const grams = volumeCm3 * MATERIAL_DENSITIES[material];

  return Number(grams.toFixed(2));
}

/**
 * Calculates the price for a 3D printed part
 * @param weight - Weight in grams
 * @param priceMultiplier - Price per gram (e.g., 40 UAH/g)
 * @param includePaint - Whether to include paint finishing (+10%)
 * @param quantity - Number of units
 * @returns Object with price per unit and total price
 */
export function calculatePrice(
  weight: number,
  priceMultiplier: number,
  includePaint: boolean,
  quantity: number
): { pricePerUnit: number; totalPrice: number } {
  // Base price calculation: (multiplier × weight) / 1.2
  let pricePerUnit = (priceMultiplier * weight) / 1.2;

  // Add paint surcharge if selected
  if (includePaint) {
    pricePerUnit *= 1.1;
  }

  // Round to 2 decimal places
  pricePerUnit = Number(pricePerUnit.toFixed(2));
  const totalPrice = Number((pricePerUnit * quantity).toFixed(2));

  return { pricePerUnit, totalPrice };
}
