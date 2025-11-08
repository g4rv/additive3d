# Create Component

Interactive component generator that creates React components with DaisyUI styling following the Additive3D design principles and style guide.

## Usage
```
/create-component
```

Starts an interactive wizard that guides you through creating the perfect component for your needs.

## Interactive Creation Wizard

The command will ask questions one at a time, waiting for your response before continuing to the next step:

### Step 1: Component Name & Purpose
**Question 1:** What would you like to name your component? (PascalCase)
*Waits for user input*

**Question 2:** What should this component do?
*Waits for user input*

**Question 3:** Where will this component be used in the application?
*Waits for user input*

### Step 2: Component Type Selection
**Question 4:** Select the component type that best fits your needs:
1. **header** - Navigation headers, menus, breadcrumbs
2. **card** - Content cards, panels, feature sections
3. **form** - Input forms, controls, validation
4. **cta** - Call-to-action buttons, conversion elements
5. **table** - Data tables, specifications, comparisons
6. **calculator** - Cost calculators, pricing tools
7. **upload** - File upload, 3D model submission
8. **dashboard** - Analytics dashboards, status panels
9. **timeline** - Order tracking, progress visualization
10. **modal** - Dialogs, overlays, confirmations
11. **custom** - Something else not listed

Please enter a number (1-11):
*Waits for user input*

### Step 3: Key Features & Content
**Question 5:** What data will the component display/handle?
*Waits for user input*

**Question 6:** What interactions should users be able to perform?
*Waits for user input*

**Question 7:** Any specific manufacturing data or technical specs?
*Waits for user input*

**Question 8:** Any integration needs (3D viewers, APIs, etc.)?
*Waits for user input*

### Step 4: Styling & Design Preferences
**Question 9:** What is the primary purpose? (information display, user input, conversion, etc.)
*Waits for user input*

**Question 10:** How important is the visual hierarchy? (high, medium, low)
*Waits for user input*

**Question 11:** What are your animation preferences? (minimal, standard, rich)
*Waits for user input*

**Question 12:** What are the mobile requirements? (simple, moderate, complex)
*Waits for user input*

### Step 5: Technical Requirements
**Question 13:** Any external dependencies needed?
*Waits for user input*

**Question 14:** Any special accessibility requirements?
*Waits for user input*

**Question 15:** Any performance considerations?
*Waits for user input*

**Question 16:** Any testing requirements?
*Waits for user input*

## Component Generation Process

After gathering your requirements, the wizard will:

### 1. Component Structure Analysis
- Analyze your answers to determine optimal TypeScript interfaces
- Identify appropriate design patterns based on component purpose
- Consider accessibility and responsive requirements

### 2. Design System Implementation
- Apply Additive3D color palette using DaisyUI theme tokens
- Implement typography following your technical & geometric font system
- Use your 4px spacing scale and grid system
- Apply motion standards with proper easing functions

### 3. Manufacturing-Specific UX Patterns
Based on your component type, implement appropriate B2B manufacturing UX patterns:

**For header components**: B2B account integration, conversion-first architecture
**For card components**: Professional manufacturing aesthetics, technical data display
**For form components**: Trust-centered design, low cognitive load, error prevention
**For CTA components**: Risk-mitigation language, strategic placement
**For table components**: Technical data presentation, specification comparison
**For calculator components**: Transparent cost breakdown, engineering-grade estimation
**For upload components**: Security-first UX, IP protection assurances
**For dashboard components**: Manufacturing workflow integration, real-time status
**For timeline components**: Manufacturing process visualization, status communication

### 4. File Creation
Create component files in the appropriate directory structure:
- **Component file**: `src/components/<category>/<ComponentName>.tsx`
- **Styles file**: `src/components/<category>/<ComponentName>.module.css` (if needed)
- **Types file**: `src/components/<category>/<ComponentName>.types.ts` (if complex)
- **Story file**: `src/components/<category>/<ComponentName>.stories.tsx` (documentation)

### 5. Component Implementation Features
- **TypeScript**: Full type safety with proper interfaces and prop validation
- **Accessibility**: WCAG 2.1 AA compliance with ARIA labels and keyboard navigation
- **Responsive**: Mobile-first design with appropriate breakpoints
- **Dark Mode**: Automatic theme switching using DaisyUI dark theme
- **Performance**: Optimized for manufacturing data visualization and 3D content
- **Internationalization**: Support for multiple languages if required

### 6. Design Principles Compliance
Ensure component follows the core design mandate:
- **Digital Performance = Physical Precision**: Accurate data visualization
- **Manufacturing Efficiency**: Minimize steps, support bulk operations
- **Trust-Centered Design**: Clear confirmations, actionable feedback
- **Visualizing Technical Capability**: 3D quality focus and hyperrealistic rendering

### 7. Style Guide Integration
- **Color System**: Use Brand-Primary-Gold (#FEDA6A) and Surface-Dark-Base (#1D1E22)
- **Typography**: Geometric sans-serif for headings, clean sans-serif for body
- **Layout**: 12-column grid system, proper spacing scale
- **Motion**: Proper easing functions and duration standards
- **Interactive States**: Hover, focus, active, and disabled states

## Generated Component Features

### Built-in Accessibility
- Semantic HTML structure
- ARIA labels and descriptions
- Keyboard navigation support
- Screen reader compatibility
- Focus management
- Motion preference respect

### Manufacturing-Ready UX
- Input validation with helpful error messages
- Loading states appropriate for manufacturing data
- Success/error feedback with clear next steps
- Progress indicators for long-running operations
- Data security indicators where appropriate

### Performance Optimized
- Lazy loading for heavy components
- Efficient re-render patterns
- Optimized for 3D model integration
- Proper component memoization where needed

## Example Interactive Session
```
/create-component

🚀 Let's create your component step by step!

**Question 1:** What would you like to name your component? (PascalCase)
> QuoteCalculator

**Question 2:** What should this component do?
> Calculate instant quotes for 3D printing projects with transparent pricing

**Question 3:** Where will this component be used in the application?
> On the homepage and pricing page

**Question 4:** Select the component type that best fits your needs:
1. header - Navigation headers, menus, breadcrumbs
2. card - Content cards, panels, feature sections
3. form - Input forms, controls, validation
4. cta - Call-to-action buttons, conversion elements
5. table - Data tables, specifications, comparisons
6. calculator - Cost calculators, pricing tools
7. upload - File upload, 3D model submission
8. dashboard - Analytics dashboards, status panels
9. timeline - Order tracking, progress visualization
10. modal - Dialogs, overlays, confirmations
11. custom - Something else not listed
Please enter a number (1-11):
> 6

✅ Great! A calculator component with transparent cost breakdown and engineering-grade estimation.

**Question 5:** What data will the component display/handle?
> Material cost, print time, support structures, post-processing, quantity

**Question 6:** What interactions should users be able to perform?
> Upload 3D files, select materials, adjust quantity, compare options

**Question 7:** Any specific manufacturing data or technical specs?
> Yes - material density, machine hourly rates, post-processing costs

**Question 8:** Any integration needs (3D viewers, APIs, etc.)?
> 3D file viewer, material database, shipping calculator API

**Question 9:** What is the primary purpose? (information display, user input, conversion, etc.)
> User input and conversion

**Question 10:** How important is the visual hierarchy? (high, medium, low)
> High - it's the main conversion tool

**Question 11:** What are your animation preferences? (minimal, standard, rich)
> Standard - smooth transitions for calculations

**Question 12:** What are the mobile requirements? (simple, moderate, complex)
> Moderate - responsive with simplified view

**Question 13:** Any external dependencies needed?
> Three.js for 3D viewer, file validation library

**Question 14:** Any special accessibility requirements?
> WCAG 2.1 AA compliance required

**Question 15:** Any performance considerations?
> Handle large 3D files efficiently

**Question 16:** Any testing requirements?
> Unit tests for calculations, E2E for user flow

✅ Component Summary:
Name: QuoteCalculator
Type: calculator
Features: Cost breakdown, 3D file upload, material selection
Styling: High hierarchy, standard animations, mobile responsive
Technical: Three.js integration, WCAG AA, performance optimized

📁 Ready to create component files? (y/n)
> y

🎉 Creating QuoteCalculator component...
Created: src/components/calculator/QuoteCalculator.tsx
Created: src/components/calculator/QuoteCalculator.types.ts
Created: src/components/calculator/QuoteCalculator.module.css
Created: src/components/calculator/QuoteCalculator.test.tsx

✅ Component created successfully!
```

## Post-Creation Checklist
After component creation, the wizard will provide:
1. **Code Review**: Summary of generated files and key features
2. **Integration Steps**: How to import and use the component
3. **Customization Guide**: Where to modify styles and functionality
4. **Testing Instructions**: How to test accessibility and functionality
5. **Next Steps**: Recommendations for further enhancements