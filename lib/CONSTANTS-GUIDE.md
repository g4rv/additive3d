# Constants Export Guide

All project constants are exported from a **single location**: `lib/constants.ts`

## Import Pattern

```typescript
import {
  NAVIGATION,
  CONTACT_INFO,
  COMPANY_NAME,
  TECHNOLOGIES_DATA,
  // ... etc
} from '@/lib/constants';
```

## Available Exports

### Navigation
- **`MAIN_NAVIGATION_LIST`** - Hierarchical navigation structure with children
- **`NAVIGATION`** - Flat navigation structure with parent/order metadata

### Contact & Company
- **`CONTACT_INFO`** - Phone numbers, email, address with links
- **`COMPANY_NAME`** - Company name string

### Screen Breakpoints
- **`SCREEN_BREAKPOINTS`** - Responsive breakpoint values (xs, sm, md, lg, xl, 2xl, 3xl, 4xl, 5xl)

### Data Collections
- **`TECHNOLOGIES_DATA`** - FDM and MJF technology information
- **`MATERIALS_DATA`** - ABS, Nylon, PETG material specifications
- **`EQUIPMENT_DATA`** - HP Jet Fusion and Stratasys equipment details

## File Structure

```
lib/constants.ts
├── NAVIGATION (section)
│   ├── MAIN_NAVIGATION_LIST
│   └── NAVIGATION
├── CONTACT & COMPANY INFO (section)
│   ├── CONTACT_INFO
│   └── COMPANY_NAME
├── SCREEN BREAKPOINTS (section)
│   └── SCREEN_BREAKPOINTS
├── TECHNOLOGIES DATA (section)
│   └── TECHNOLOGIES_DATA
├── MATERIALS DATA (section)
│   └── MATERIALS_DATA
├── EQUIPMENT DATA (section)
│   └── EQUIPMENT_DATA
└── EXPORTS (single export point)
```

## Benefits

✅ **Single source of truth** - All constants in one file
✅ **Clear organization** - Sections with headers
✅ **Easy to maintain** - Add new exports in one place
✅ **Type-safe** - TypeScript ensures correct usage
✅ **Tree-shakeable** - Only imports what you use

## Usage Examples

### Navigation
```typescript
import { NAVIGATION } from '@/lib/constants';

const calculatorLink = NAVIGATION.calculator.href;
// "/services/3d-printing/calculator"
```

### Contact Information
```typescript
import { CONTACT_INFO } from '@/lib/constants';

const phone = CONTACT_INFO.phone.label;
// "+38 (063) 886 20 47"
```

### Technologies
```typescript
import { TECHNOLOGIES_DATA } from '@/lib/constants';

TECHNOLOGIES_DATA.map(tech => (
  <div key={tech.name}>{tech.title}</div>
));
```
