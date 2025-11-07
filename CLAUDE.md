# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

- `npm run dev` - Start the development server (http://localhost:3000)
- `npm run build` - Build the production application
- `npm start` - Start the production server
- `npm run lint` - Run ESLint for code linting

## Project Architecture

This is a Next.js 16 application using the App Router pattern with React 19 and TypeScript. The project uses Tailwind CSS v4 for styling.

### Key Structure
- **App Router**: Uses the `app/` directory with React Server Components by default
- **Styling**: Tailwind CSS v4 with custom CSS variables in `app/globals.css`
- **Fonts**: Geist Sans and Geist Mono fonts configured in `app/layout.tsx`
- **Path Alias**: `@/*` maps to the project root for imports

### Configuration Files
- **TypeScript**: Configured in `tsconfig.json` with Next.js plugin and strict mode enabled
- **Next.js**: Basic configuration in `next.config.ts`
- **ESLint**: Uses `eslint-config-next` for Next.js best practices
- **CSS**: Tailwind v4 with custom theme variables for light/dark mode support

### Dark Mode Implementation
The project supports automatic dark mode switching using `prefers-color-scheme` media query with CSS variables defined in `app/globals.css`.

### Current State
This is a fresh Next.js project with the default create-next-app template. The main page component is in `app/page.tsx` and contains basic Next.js branding and links to documentation.