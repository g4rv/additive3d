# Additive3D Brand & Website Style Guide: Additive Manufacturing Excellence

## I. Brand Philosophy & Voice: Engineering Elegance

The website design must convey absolute trust, engineering precision, and future-forward innovation. The aesthetic should feel premium, technical, and authoritative, focusing on the high-value application of Additive Manufacturing (AM).

*   [ ] **Tone:** Authoritative, Precise, Future-Focused, and Technical. Avoid overly casual or consumer-grade language.
*   [ ] **Core Messaging:** Focus on the precision, complexity, and performance outcomes (e.g., weight reduction, rapid iteration, intricate geometry) enabled by the technology.
*   [ ] **Visual Ethos:** High-contrast, clean, and minimalist. Leverage dark surfaces to make the gold accents and featured 3D printed parts 'pop.'

### Accessibility & Inclusive Design (WCAG 2.1 AA)

*   [ ] **Screen Reader Support:** All interactive elements must have ARIA labels and semantic HTML structure
*   [ ] **Keyboard Navigation:** Full keyboard accessibility with visible focus states
*   [ ] **Motion Preferences:** Respect `prefers-reduced-motion` for animations
*   [ ] **Cognitive Load:** Clear information hierarchy with progressive disclosure for complex technical data

## II. Color System: Gold Standard Contrast

The palette is built on deep, sophisticated dark tones and the brand's signature gold, ensuring high visibility and conveying a sense of luxury and industrial quality.

*   [ ] **Primary Brand Accent (Gold):** Used sparingly for high-value action items, key data highlights, hero text accents, and interactive element states.
    *   **Token:** Brand-Primary-Gold
    *   **Target Hex:** #ffd231 (A rich, high-contrast gold/amber)
*   [ ] **Neutral Palette (The Foundation):**
    *   [ ] **Primary Background:** A deep, near-black slate for the main canvas, maximizing contrast and minimizing eye strain.
        *   **Token:** Surface-Dark-Base
        *   **Target Hex:** #161616 (Deep Matte Dark Slate)
    *   [ ] **Secondary Surface:** A slightly lighter shade for content cards, panels, and subtle depth changes.
        *   **Token:** Surface-Card-Elevated
        *   **Target Hex:** #262626 (Slate)
    *   [ ] **Primary Text:** Near-white for optimal readability against the dark background.
        *   **Token:** Text-High-Contrast
        *   **Target Hex:** #F5F5F5 (Whitish)
*   [ ] **Functional Colors (Limited Use):** Used only for immediate status or feedback, separated from the brand gold.
    *   **Success/Approval:** Green (e.g., #40cf72)
    *   **Error/Alert:** Red (e.g., #e33636)

## III. Typography: Technical & Geometric

A font pairing that projects a technical, structured, and modern industrial feel is required, prioritizing readability in both large headings and dense specification tables.

*   [ ] **Font Pairing Strategy:** Utilize a strong, geometric sans-serif for headings (to emphasize structure) and a lighter, highly legible sans-serif for body copy (to ensure flow and scannability).
*   [ ] **Headline Font (Geometric Statement):**
    *   **Family:** Gilroy (or similar Geometric Sans-serif, e.g., Montserrat)
    *   **Usage:** H1, H2, and high-impact numerical data/Key Performance Indicators (KPIs).
    *   **Weight:** ExtraBold or Bold.
*   [ ] **Body/Paragraph Font (Technical Readability):**
    *   **Family:** Jura (or similar clean, structured Sans-serif, e.g., Inter, Lato)
    *   **Usage:** All body copy, captions, product descriptions, and navigational elements.
    *   **Weight:** Light or Regular, ensuring generous line height for large text blocks. Fonts like Switzer are also noted as excellent choices for information-dense interfaces due to their high x-height.

### Type Scale & Spacing

| Element | Size | Weight | Line Height | Usage |
|---------|------|--------|-------------|-------|
| **H1** | 56px | ExtraBold | 1.1 | Main page titles, hero sections |
| **H2** | 40px | Bold | 1.2 | Section headers, major headlines |
| **H3** | 32px | SemiBold | 1.3 | Subsection headers |
| **H4** | 24px | Medium | 1.4 | Card titles, feature headers |
| **Body Large** | 20px | Regular | 1.6 | Lead paragraphs, important descriptions |
| **Body** | 16px | Regular | 1.6 | Standard body copy, specifications |
| **Body Small** | 14px | Regular | 1.5 | Captions, metadata, secondary info |
| **Technical Data** | 13px | Medium | 1.4 | Specification tables, measurements |
| **Navigation** | 15px | Medium | 1.4 | Menu items, links |

### Responsive Typography

| Breakpoint | Scale Factor | H1 | Body |
|------------|--------------|----|----|
| **Mobile** | 0.75x | 42px | 14px |
| **Tablet** | 0.875x | 48px | 15px |
| **Desktop** | 1.0x | 56px | 16px |
| **Large** | 1.125x | 64px | 18px |

## IV. Imagery & Visual Language: The Printed Product

Visual content must focus on the high-fidelity, high-tolerance output of the 3D printing process, elevating the parts from prototype status to industrial components.

*   [ ] **Focus: Complexity and Precision:** Imagery should always highlight the key advantage of AM—the ability to create complex shapes, internal lattice structures, or consolidated assemblies that are impossible with traditional methods.
*   [ ] **Mandatory Image Types:**
    *   [ ] **Macro/Detail Shots:** Extreme close-ups of surface finish and fine features, emphasizing quality and tight tolerances.
    *   [ ] **Contextual Shots:** Parts shown in an industrial context (e.g., installed in machinery, next to engineering tools like calipers or schematics) to establish professional credibility.
    *   [ ] **Process Visualization:** High-quality, cinematic time-lapse video loops of a part being printed (layer-by-layer) for the hero section or key product pages.
    *   [ ] **3D Interactive Models:** Utilize high-performance 3D viewers (WebGL/Three.js based) for interactive product demos, allowing users to rotate, inspect, and explore specific part geometries directly in the browser.
*   [ ] **Aesthetic Style:**
    *   [ ] **Lighting:** Low-key, dramatic studio lighting to make materials and reflections pop against the dark UI background.
    *   [ ] **Color Use:** Use the Brand-Primary-Gold as a subtle overlay or highlight effect on the geometry of the printed parts in graphics to tie the visual asset back to the brand.
*   [ ] **Data Visualization (Marketing Context):** Infographics detailing material specifications, stress tests, and performance gains (e.g., "50% lighter part") must be presented using a technical, wireframe aesthetic utilizing the Gold and Dark Grey palette.

## V. Core UI Components & Interaction

The interface must be minimalist, fast, and driven by purposeful interactions that draw the user toward high-value content.

### Motion & Animation System

*   [x] **Duration Tokens** (Defined in `app/globals.css`)
    *   **--duration-instant:** `100ms` - Instant feedback (hover states, ripples)
    *   **--duration-fast:** `150ms` - Micro-interactions (button clicks, checkbox toggles)
    *   **--duration-normal:** `200ms` - Standard transitions (dropdowns, tooltips)
    *   **--duration-moderate:** `300ms` - Component animations (cards, modals)
    *   **--duration-slow:** `400ms` - Page transitions (route changes)
    *   **--duration-slower:** `600ms` - Complex animations (accordions, carousels)
    *   **--duration-slowest:** `800ms` - Hero animations, large-scale transitions

*   [x] **Easing Tokens** (Defined in `app/globals.css`)
    *   **--ease-standard:** `cubic-bezier(0.4, 0.0, 0.2, 1)` - Default for most transitions
    *   **--ease-entrance:** `cubic-bezier(0.2, 0.0, 0.0, 1.0)` - Elements entering viewport
    *   **--ease-exit:** `cubic-bezier(0.0, 0.0, 0.2, 1)` - Elements leaving viewport
    *   **--ease-bounce:** `cubic-bezier(0.68, -0.55, 0.265, 1.55)` - Playful interactions
    *   **--ease-smooth:** `cubic-bezier(0.4, 0.0, 0.6, 1)` - Smooth, flowing animations

*   [ ] **Usage Guidelines:**
    *   Use `--duration-fast` + `--ease-standard` for button/link hover states
    *   Use `--duration-normal` + `--ease-entrance` for dropdown menus
    *   Use `--duration-moderate` + `--ease-standard` for card hover effects
    *   Use `--duration-slow` + `--ease-entrance` for modal appearances
    *   Use `--duration-slower` + `--ease-smooth` for scroll-triggered animations

*   [x] **Loading States:** 3D part rotation animation, gold accent pulse
*   [x] **Respect Motion Preferences:** Disable animations when `prefers-reduced-motion`

**Tailwind Usage:**
```css
/* Use CSS variables in Tailwind classes */
transition-[color] duration-[var(--duration-fast)]
transition-all duration-[var(--duration-normal)]
```

### Component Specifications

*   [ ] **Primary CTA Buttons:**
    *   **Background:** Brand-Primary-Gold (#ffd231)
    *   **Text:** Surface-Dark-Base (#161616)
    *   **Padding:** 16px 32px (desktop), 14px 24px (mobile)
    *   **Border Radius:** 4px
    *   **Font Weight:** SemiBold
    *   **States:** Hover (10% brighter gold), Focus (2px gold outline + offset), Active (scale 0.98), Disabled (30% opacity)

*   [ ] **Secondary Buttons:**
    *   **Background:** Transparent
    *   **Border:** 1px solid Text-High-Contrast (#F5F5F5)
    *   **Text:** Text-High-Contrast (#F5F5F5)
    *   **Hover:** Background Surface-Card-Elevated (#262626)

*   [ ] **Input Fields:**
    *   **Background:** Surface-Card-Elevated (#262626)
    *   **Border:** 1px solid transparent
    *   **Focus:** 1px solid Brand-Primary-Gold (#ffd231)
    *   **Error:** 1px solid Error/Alert (#e33636)
    *   **Padding:** 12px 16px
    *   **Border Radius:** 4px

*   [ ] **Cards & Panels:**
    *   **Background:** Surface-Card-Elevated (#262626)
    *   **Border:** None (subtle elevation through background difference)
    *   **Padding:** 24px
    *   **Border Radius:** 8px
    *   **Shadow:** Subtle inset for depth against darker background

### Layout & Grid

*   [ ] **Grid System:** 12-column CSS Grid/Flexbox
*   [ ] **Spacing Scale:** 4px base (4, 8, 16, 24, 32, 48, 64, 96px)
*   [ ] **Container Max Width:** 1400px (desktop), 100% with padding (mobile)
*   [ ] **Section Spacing:** 96px (desktop), 64px (mobile)

### Navigation

*   [ ] **Header:** Height 80px (desktop), 64px (mobile)
*   [ ] **Logo:** Left aligned, gold accent on hover
*   [ ] **Menu Items:** Text-High-Contrast, medium weight, 16px spacing
*   [ ] **Active State:** Subtle gold underline (2px) + text color Brand-Primary-Gold
*   [ ] **Mobile Menu:** Slide-out from right, gold accent border

### Data Tables & Specifications

*   [ ] **Table Headers:** Surface-Card-Elevated background, bold text, sticky positioning
*   [ ] **Table Rows:** Alternating subtle background differences
*   [ ] **Technical Data:** Technical Data font size (13px), monospace numbers for measurements
*   [ ] **Responsive:** Horizontal scroll on mobile, key columns sticky left

## VI. B2B Manufacturing UX Patterns

### Quote & Order Management

*   [ ] **File Upload Interface:** Drag-and-drop zone with format validation (STL, OBJ, STEP), immediate 3D preview, security badge display
*   [ ] **Cost Calculator UI:** Side-by-side material comparison, technical specs panel, quantity discount matrix
*   [ ] **Bulk Operations:** Multi-select for quote requests, batch re-ordering, CSV export for procurement
*   [ ] **Order Tracking:** Visual timeline with status icons, estimated completion countdown, quality checkpoint indicators

### Technical Specification Display

*   [ ] **Material Comparison Tables:** Sortable columns, filter by properties, visual indicators for performance ratings
*   [ ] **Tolerance Information:** Expandable sections showing achievable tolerances by material/process
*   [ ] **Quality Certifications:** Downloadable PDFs, badge system for standards compliance (ISO, ASTM)

### 3D Model Interaction

*   [ ] **Viewer Controls:** Rotate (mouse/touch), zoom (scroll/pinch), reset view, fullscreen mode
*   [ ] **Measurement Tools:** Dimension display, cross-section view, material thickness indication
*   [ ] **Mobile Gestures:** Single finger rotate, two finger zoom, tap for measurement points

## VII. Technical Implementation (Agent Mandate)

### Performance Budget

*   [ ] **Page Load:** <2 seconds initial paint, <3 seconds full load
*   [ ] **3D Models:** Max 2MB per model, progressive loading, Level-of-Detail (LOD) switching
*   [ ] **Images:** WebP format, responsive sizing, lazy loading below fold
*   [ ] **JavaScript:** <200KB gzipped, code splitting by route

### Development Stack

*   [ ] **CSS Framework:** Tailwind CSS v3+ with custom design tokens
*   [ ] **3D Rendering:** Three.js with React Three Fiber for React components
*   [ ] **Animation:** Framer Motion for component transitions, CSS transforms for simple effects
*   [ ] **State Management:** React Context for UI state, form state management for quote calculations

### Browser Support

*   [ ] **Modern Browsers:** Chrome 90+, Firefox 88+, Safari 14+, Edge 90+
*   [ ] **Mobile:** iOS Safari 14+, Chrome Mobile 90+
*   [ ] **3D Support:** WebGL 2.0 required, fallback to static images
*   [ ] **Accessibility:** Screen reader support (NVDA, JAWS, VoiceOver)