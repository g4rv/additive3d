/**
 * Material properties interface for 3D printing materials
 */
export interface MaterialProperties {
  /** Tensile strength in MPa */
  tensileStrength?: string;
  /** Flexural strength in MPa */
  flexuralStrength?: string;
  /** Heat deflection temperature in °C */
  heatDeflectionTemp?: string;
  /** Density in g/cm³ */
  density?: string;
  /** Elongation at break in % */
  elongation?: string;
  /** Rockwell hardness */
  hardness?: string;
}

/**
 * Material item for showcase display
 */
export interface MaterialItem {
  /** Material name */
  name: string;
  /** Material category/technology */
  fullname?: string;

  technology: string;
  /** Brief description of material characteristics */
  description?: string;
  /** Link to detailed material page */
  href?: string;
  /** Material image path */
  image?: string;
  /** Key technical specifications - can be array of strings or detailed properties object */
  specs?: string[] | MaterialProperties;
  /** Detailed material properties for technical comparison */
  properties?: MaterialProperties;
  /** Common applications and use cases */
  applications?: string[];
  /** Available colors/finishes */
  colors?: string[];
  /** Certifications and standards */
  certifications?: string[];
  /** Available material variants */
  variants?: string[];
}

/**
 * Materials showcase component props
 */
export interface MaterialsShowcaseProps {
  /** Additional CSS classes */
  className?: string;
}
