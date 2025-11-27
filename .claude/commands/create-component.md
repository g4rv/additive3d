Create a complete React component for the Additive3D project following your tech stack and design system.

## Component Creation Wizard

You will create a new React component following these steps:

### 1. Gather Information

First, ask the user for these details if not provided:
(Ask question by question)

**Question 1:** What would you like to name your component? (PascalCase, e.g., "QuoteCalculator" or "MaterialCard")

**Question 2:** What should this component do? (brief description)

**Question 3:** Where will this component be used in the application?

**Question 4:** What props does it need? (max 3 - following your codebase patterns)

**Question 5:** Does it need client interactivity? (decides if 'use client' is needed)

**Question 6:** Does it need motion animations? (framer-motion integration)

**Question 7:** Does it need responsive behavior? (useMediaQuery hook)

### 2. Component Type Analysis

Based on the answers, analyze and categorize the component:

**Available Component Categories:**

- **header** - Navigation headers, menus, mobile navigation
- **card** - Content cards, panels, feature sections
- **form** - Input forms, controls, validation
- **calculator** - Cost calculators, pricing tools (3D printing specific)
- **upload** - File upload, 3D model submission
- **table** - Data tables, specifications, comparisons
- **modal** - Dialogs, overlays, confirmations
- **cta** - Call-to-action buttons, conversion elements
- **timeline** - Order tracking, progress visualization
- **custom** - Something else not listed

**Component Location Mapping:**

- UI components → `components/ui/[kebab-case-folder]/ComponentName.tsx`
- All other components → `components/[kebab-case-folder]/ComponentName.tsx`

### 3. File Structure Creation

Generate the appropriate file structure based on component type:

**Standard Component Structure:**

```
components/[kebab-case-folder]/
├── ComponentName.tsx          # Main component
├── ComponentName.types.ts     # TypeScript interfaces (if complex)
└── index.ts                   # Barrel export
```

**Hook Components (if needed):**

```
hooks/use[ComponentName].ts      # Custom hooks
```

**Pre-Creation Checklist:**

Before creating a new component, always:

1. **Check existing UI components** - Browse `components/ui/` for similar functionality
2. **Verify DaisyUI equivalents** - Check if DaisyUI already provides the needed component
3. **Review design patterns** - Ensure consistency with existing components in the codebase
4. **Validate design decisions** - Cross-reference with `context/design-principles.md` and `context/style-guide.md`

### 4. Component Implementation

Generate a TypeScript React component with:

#### Technical Requirements:

- ✅ **'use client' directive** only if client interactivity is needed
- ✅ **TypeScript interfaces** following your patterns (max 3 props per ESLint)
- ✅ **JSDoc comments** with description and @example
- ✅ **DaisyUI + Tailwind CSS v4** styling
- ✅ **Semantic HTML** with accessibility
- ✅ **Motion animations** using framer-motion (if requested)
- ✅ **Responsive behavior** using useMediaQuery hook (if requested)
- ✅ **ForwardRef pattern** for parent communication (if needed)

#### Design System Compliance:

- ✅ **Verify with design principles** - Cross-reference with `context/design-principles.md` for B2B manufacturing UX patterns
- ✅ **Follow style guide** - Use `context/style-guide.md` for typography, colors, spacing, and component specifications
- ✅ **Use existing CSS variables** - Leverage colors from `app/globals.css` (base-100, base-200, base-300, primary, etc.)
- ✅ **DaisyUI component approach** - Prefer DaisyUI components over custom CSS when available
- ✅ **Use /ui components** - Check for existing reusable components in `components/ui/` before creating new ones
- ✅ **WCAG AA compliance** - Ensure minimum 4.5:1 contrast for normal text, 3:1 for large text
- ✅ **Accessibility first** - Include ARIA labels, keyboard navigation, screen reader support

#### Design System Integration:

Use your established color palette from `globals.css`:

- **Primary actions:** `bg-primary`, `text-primary-content`
- **Secondary actions:** `bg-secondary`, `text-secondary-content`
- **Accent actions:** `bg-accent`, `text-accent-content`
- **Warning states:** `bg-warning`, `text-warning-content`
- **Error states:** `bg-error`, `text-error-content`
- **Success states:** `bg-success`, `text-success-content`
- **Info states:** `bg-info`, `text-info-content`
- **Base surfaces:** `bg-base-100`, `bg-base-200`, `bg-base-300`
- **Text colors:** `text-base-content`, `text-neutral-content`
- **Layout utilities:** Use `custom-container` for max-width containment, `h-header` for header spacing

#### Component Patterns:

**Pattern 1: Server Component (default)**

```tsx
import { cn } from '@/utils/cn';

interface ComponentNameProps {
  title: string;
  description?: string;
  className?: string;
}

/**
 * ComponentName - Brief description
 *
 * @example
 * <ComponentName title="Hello" description="World" />
 */
export default function ComponentName({ title, description, className }: ComponentNameProps) {
  return (
    <div className={cn('card bg-base-100 shadow-xl', className)}>
      <div className="card-body">
        <h2 className="card-title text-primary">{title}</h2>
        {description && <p className="text-base-content/80">{description}</p>}
      </div>
    </div>
  );
}
```

**Pattern 2: Client Component with Motion**

```tsx
'use client';

import { cn } from '@/utils/cn';
import { motion } from 'framer-motion';
import { useState } from 'react';

interface ComponentNameProps {
  title: string;
  isOpen?: boolean;
  onToggle?: () => void;
  className?: string;
}

/**
 * ComponentName - Interactive component with animations
 *
 * @example
 * <ComponentName title="Interactive" isOpen={true} />
 */
export default function ComponentName({
  title,
  isOpen = false,
  onToggle,
  className,
}: ComponentNameProps) {
  return (
    <motion.div
      animate={{ height: isOpen ? 'auto' : 0 }}
      transition={{ type: 'spring', stiffness: 300, damping: 30 }}
      className={cn('bg-base-200 overflow-hidden', className)}
    >
      <div className="p-4">
        <h3 className="text-primary text-lg font-semibold">{title}</h3>
      </div>
    </motion.div>
  );
}
```

**Pattern 3: Component with Custom Hook**

```tsx
'use client';

import { cn } from '@/utils/cn';
import useMediaQuery from '@/hooks/useMediaQuery';
import { useState } from 'react';

interface ComponentNameProps {
  title: string;
  children: React.ReactNode;
  className?: string;
}

/**
 * ComponentName - Responsive component with custom hook
 *
 * @example
 * <ComponentName title="Responsive">Content</ComponentName>
 */
export default function ComponentName({ title, children, className }: ComponentNameProps) {
  const isTablet = useMediaQuery('above', 640);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={cn('bg-base-100 collapse', isTablet && 'collapse-open', className)}>
      <input type="checkbox" checked={isOpen} onChange={(e) => setIsOpen(e.target.checked)} />
      <div className="collapse-title text-primary text-xl font-medium">{title}</div>
      <div className="collapse-content">{children}</div>
    </div>
  );
}
```

**Pattern 4: ForwardRef Component (for parent control)**

```tsx
'use client';

import { cn } from '@/utils/cn';
import { forwardRef, useImperativeHandle, useState } from 'react';

export interface ComponentNameRef {
  close: () => void;
  open: () => void;
}

interface ComponentNameProps {
  title: string;
  className?: string;
}

/**
 * ComponentName - Component with parent control via ref
 *
 * @example
 * const ref = useRef<ComponentNameRef>(null);
 * <ComponentName ref={ref} title="Controlled" />
 */
export default forwardRef<ComponentNameRef, ComponentNameProps>(({ title, className }, ref) => {
  const [isOpen, setIsOpen] = useState(false);

  const close = () => setIsOpen(false);
  const open = () => setIsOpen(true);

  useImperativeHandle(
    ref,
    () => ({
      close,
      open,
    }),
    []
  );

  return (
    <div className={cn('modal', !isOpen && 'modal-open', className)}>
      <div className="modal-box">
        <h3 className="text-primary text-lg font-bold">{title}</h3>
      </div>
    </div>
  );
});

ComponentName.displayName = 'ComponentName';
```

### 5. TypeScript Patterns

Follow your existing patterns:

**Simple Props Interface:**

```tsx
interface ComponentNameProps {
  title: string;
  variant?: 'default' | 'primary' | 'secondary';
  className?: string;
}
```

**Complex Props with Types File:**

```tsx
// ComponentName.types.ts
export interface ComponentData {
  id: string;
  name: string;
  value: number;
}

export interface ComponentNameProps {
  data: ComponentData[];
  onSelect?: (item: ComponentData) => void;
  className?: string;
}
```

### 6. Barrel Export

Create clean import structure:

```tsx
// index.ts
export { default } from './ComponentName';
export type { ComponentNameProps, ComponentNameRef } from './ComponentName';
```

## Specialized 3D Printing Components

### Calculator Components:

- Integration with material pricing
- Support for 3D file analysis
- Cost breakdown visualization
- Manufacturing time estimation

### Upload Components:

- 3D file validation
- Progress indicators
- Error handling for invalid formats
- Preview capabilities

### Material Selection:

- Material properties display
- Visual comparison tools
- Technical specifications
- Availability status

## Component Best Practices

### 1. Performance:

- Use React.memo for expensive components
- Implement proper loading states
- Lazy load heavy components
- Optimize re-renders

### 2. Accessibility:

- Semantic HTML structure
- ARIA labels where needed
- Keyboard navigation support
- Screen reader compatibility
- Focus management

### 3. Motion:

- Use framer-motion for animations
- Respect prefers-reduced-motion
- Smooth transitions (300-500ms)
- Spring animations for natural feel

### 4. Responsive:

- Mobile-first design
- Breakpoint-based layouts
- Touch-friendly interactions
- Adaptive content

### 5. State Management:

- Local state for UI
- Lift state when needed
- Custom hooks for complex logic
- Proper prop drilling

## Integration Examples

### Import and Usage:

```tsx
// Simple import
import ComponentName from '@/components/[kebab-case-folder]';

// With types
import ComponentName, { ComponentNameProps } from '@/components/[kebab-case-folder]';

// Usage
<ComponentName title="3D Printing Calculator" variant="primary" className="w-full max-w-md" />;
```

### Advanced Usage with Ref:

```tsx
import { useRef } from 'react';
import ComponentName, { ComponentNameRef } from '@/components/[kebab-case-folder]';

export default function ParentComponent() {
  const componentRef = useRef<ComponentNameRef>(null);

  const handleClose = () => {
    componentRef.current?.close();
  };

  return (
    <div>
      <ComponentName ref={componentRef} title="Controlled Component" />
      <button onClick={handleClose}>Close Component</button>
    </div>
  );
}
```

## Summary Generation

After creating all files, provide:

**For Basic Components:**

```
✅ Created ComponentName with:
   - ComponentName.tsx (XX lines)
   - ComponentName.types.ts (XX lines) [if needed]
   - index.ts

📁 Location: components/[kebab-case-folder]/

🚀 Features:
   - TypeScript interfaces with proper typing
   - DaisyUI + Tailwind CSS v4 styling
   - Accessibility compliant
   - Mobile responsive
   - Motion animations (if requested)

📖 Next steps:
   - Import: import ComponentName from '@/components/[kebab-case-folder]'
```

**For Advanced Components:**

```
✅ Created ComponentName with advanced features:

🎨 Main Component:
   - components/[kebab-case-folder]/ComponentName.tsx (XX lines)
   - Client-side interactivity with 'use client'
   - Framer Motion animations
   - useMediaQuery responsive behavior
   - ForwardRef for parent control

🔧 Supporting Files:
   - ComponentName.types.ts - TypeScript interfaces
   - index.ts - Clean barrel exports

📁 Location: components/[kebab-case-folder]/

✨ Advanced Features:
   - Custom hooks integration
   - Parent-child communication via ref
   - Motion animations with spring physics
   - Responsive breakpoints
   - Full accessibility compliance

🚀 Usage Examples:
   - Basic: <ComponentName title="Example" />
   - Advanced: <ComponentName ref={ref} title="Controlled" />
   - Import: import ComponentName from '@/components/[kebab-case-folder]'
```

## Component Creation Workflow

```
User provides: Component details
    ↓
Analyze: Component type and requirements
    ↓
Generate: File structure and implementation
    ↓
Implement: Following Additive3D patterns
    ↓
Export: Clean barrel exports
    ↓
Summary: Usage instructions and next steps
```

**Key Features:**

- ✅ Tailored to Additive3D tech stack (Next.js 16, React 19, TypeScript)
- ✅ DaisyUI + Tailwind CSS v4 integration
- ✅ Framer Motion animations
- ✅ Custom hooks support (useMediaQuery, useBodyLock)
- ✅ ForwardRef patterns for parent control
- ✅ ESLint compliant (max 3 props, clean code)
- ✅ Accessibility built-in
- ✅ Mobile-first responsive design
- ✅ 3D printing business logic support

---

**Remember:** This command creates production-ready components following Additive3D standards. Components integrate seamlessly with your existing codebase, use your design system, and follow your established patterns for hooks, motion, and component architecture.
