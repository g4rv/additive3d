Create a complete React component for the Additive3D project following your tech stack and design system.

## Component Creation Wizard

You will create a new React component following these steps:

### 1. Gather Information

First, ask the user for these details if not provided:

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
- Header components → `components/header/`
- UI components → `components/ui/`
- Business logic → `components/[category]/`
- Shared components → `components/shared/`

### 3. File Structure Creation

Generate the appropriate file structure based on component type:

**Standard Component Structure:**
```
components/[category]/[ComponentName]/
├── [ComponentName].tsx          # Main component
├── [ComponentName].types.ts     # TypeScript interfaces (if complex)
├── [ComponentName].stories.tsx  # Storybook stories (if needed)
├── [ComponentName].test.tsx     # Jest tests (if needed)
└── index.ts                     # Barrel export
```

**Hook Components (if needed):**
```
hooks/use[ComponentName].ts      # Custom hooks
```

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

#### Design System Integration:
Use your established color palette from `globals.css`:
- **Primary actions:** `bg-primary`, `hover:bg-primary-focus`, `text-primary-content`
- **Secondary actions:** `bg-secondary`, `hover:bg-secondary-focus`, `text-secondary-content`
- **Warning states:** `bg-warning`, `text-warning-content`
- **Error states:** `bg-error`, `text-error-content`
- **Success states:** `bg-success`, `text-success-content`
- **Base colors:** `base-100`, `base-200`, `base-300`, `base-content`

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
export default function ComponentName({
  title,
  description,
  className,
}: ComponentNameProps) {
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
      className={cn('overflow-hidden bg-base-200', className)}
    >
      <div className="p-4">
        <h3 className="text-lg font-semibold text-primary">{title}</h3>
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
export default function ComponentName({
  title,
  children,
  className,
}: ComponentNameProps) {
  const isTablet = useMediaQuery('above', 640);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={cn(
      'collapse bg-base-100',
      isTablet && 'collapse-open',
      className
    )}>
      <input
        type="checkbox"
        checked={isOpen}
        onChange={(e) => setIsOpen(e.target.checked)}
      />
      <div className="collapse-title text-xl font-medium text-primary">
        {title}
      </div>
      <div className="collapse-content">
        {children}
      </div>
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
export default forwardRef<ComponentNameRef, ComponentNameProps>(
  ({ title, className }, ref) => {
    const [isOpen, setIsOpen] = useState(false);

    const close = () => setIsOpen(false);
    const open = () => setIsOpen(true);

    useImperativeHandle(ref, () => ({
      close,
      open,
    }), []);

    return (
      <div className={cn('modal', !isOpen && 'modal-open', className)}>
        <div className="modal-box">
          <h3 className="font-bold text-lg text-primary">{title}</h3>
        </div>
      </div>
    );
  }
);

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

### 6. Storybook Stories

Generate comprehensive Storybook stories:

```tsx
import type { Meta, StoryObj } from '@storybook/react';
import ComponentName from './ComponentName';

const meta: Meta<typeof ComponentName> = {
  title: 'Components/[ComponentName]',
  component: ComponentName,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'primary', 'secondary'],
    },
    className: {
      control: 'text',
    },
  },
};

export default meta;
type Story = StoryObj<typeof ComponentName>;

export const Default: Story = {
  args: {
    title: 'Default Component',
  },
};

export const Primary: Story = {
  args: {
    title: 'Primary Component',
    variant: 'primary',
  },
};

export const Interactive: Story = {
  args: {
    title: 'Interactive Component',
    variant: 'secondary',
  },
  render: (args) => {
    const [isOpen, setIsOpen] = useState(false);
    return (
      <div>
        <button
          className="btn btn-primary mb-4"
          onClick={() => setIsOpen(!isOpen)}
        >
          Toggle Component
        </button>
        <ComponentName {...args} isOpen={isOpen} />
      </div>
    );
  },
};
```

### 7. Jest Tests

Generate comprehensive tests:

```tsx
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import ComponentName from './ComponentName';

describe('ComponentName', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  describe('Rendering', () => {
    it('should render with default props', () => {
      render(<ComponentName title="Test Title" />);

      expect(screen.getByText('Test Title')).toBeInTheDocument();
    });

    it('should apply custom className', () => {
      render(<ComponentName title="Test" className="custom-class" />);

      const element = screen.getByText('Test').closest('.custom-class');
      expect(element).toBeInTheDocument();
    });
  });

  describe('Interactions', () => {
    it('should handle user interactions', async () => {
      const user = userEvent.setup();
      const mockHandler = jest.fn();

      render(<ComponentName title="Interactive" onAction={mockHandler} />);

      const button = screen.getByRole('button');
      await user.click(button);

      expect(mockHandler).toHaveBeenCalledTimes(1);
    });
  });

  describe('Accessibility', () => {
    it('should have proper ARIA attributes', () => {
      render(<ComponentName title="Accessible" />);

      const element = screen.getByRole('region');
      expect(element).toBeInTheDocument();
    });

    it('should be keyboard navigable', () => {
      render(<ComponentName title="Keyboard" />);

      const element = screen.getByRole('button');
      element.focus();
      expect(element).toHaveFocus();
    });
  });
});
```

### 8. Barrel Export

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
import ComponentName from '@/components/category/ComponentName';

// With types
import ComponentName, { ComponentNameProps } from '@/components/category/ComponentName';

// Usage
<ComponentName
  title="3D Printing Calculator"
  variant="primary"
  className="w-full max-w-md"
/>
```

### Advanced Usage with Ref:
```tsx
import { useRef } from 'react';
import ComponentName, { ComponentNameRef } from '@/components/category/ComponentName';

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
   - ComponentName.stories.tsx (XX lines) [if needed]
   - ComponentName.test.tsx (XX lines) [if needed]
   - index.ts

📁 Location: components/[category]/ComponentName/

🚀 Features:
   - TypeScript interfaces with proper typing
   - DaisyUI + Tailwind CSS v4 styling
   - Accessibility compliant
   - Mobile responsive
   - Motion animations (if requested)

📖 Next steps:
   - Import: import ComponentName from '@/components/category/ComponentName'
   - Storybook: npm run storybook
   - Tests: npm test ComponentName.test.tsx
```

**For Advanced Components:**
```
✅ Created ComponentName with advanced features:

🎨 Main Component:
   - components/[category]/ComponentName/ComponentName.tsx (XX lines)
   - Client-side interactivity with 'use client'
   - Framer Motion animations
   - useMediaQuery responsive behavior
   - ForwardRef for parent control

🔧 Supporting Files:
   - ComponentName.types.ts - TypeScript interfaces
   - ComponentName.stories.tsx - Storybook documentation
   - ComponentName.test.tsx - Jest test coverage
   - index.ts - Clean barrel exports

📁 Location: components/[category]/ComponentName/

✨ Advanced Features:
   - Custom hooks integration
   - Parent-child communication via ref
   - Motion animations with spring physics
   - Responsive breakpoints
   - Full accessibility compliance

🚀 Usage Examples:
   - Basic: <ComponentName title="Example" />
   - Advanced: <ComponentName ref={ref} title="Controlled" />
   - Import: import ComponentName from '@/components/category/ComponentName'
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
Test: Jest test coverage
    ↓
Document: Storybook stories
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
- ✅ Comprehensive test coverage
- ✅ Storybook documentation
- ✅ ESLint compliant (max 3 props, clean code)
- ✅ Accessibility built-in
- ✅ Mobile-first responsive design
- ✅ 3D printing business logic support

---

**Remember:** This command creates production-ready components following Additive3D standards. Components integrate seamlessly with your existing codebase, use your design system, and follow your established patterns for hooks, motion, and component architecture.