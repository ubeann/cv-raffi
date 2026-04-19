# CV Landing Page - Copilot Instructions

## Project Overview
- **Framework**: Next.js 16+ with TypeScript
- **Package Manager**: Bun (runtime & package manager)
- **Styling**: Tailwind CSS + shadcn/ui
- **Deployment**: Vercel
- **Purpose**: Professional CV landing page

## Development Guidelines

### Code Style
- Use TypeScript for type safety
- Follow ESLint configuration
- Use functional components with hooks
- Organize components in `src/components/`
- Use `@/` alias for imports

### Component Structure
- Keep components in `app/` directory (App Router)
- Use server components by default
- Mark interactive components with `'use client'`
- Prefer composition over complex props

### Styling
- Use Tailwind CSS utility classes
- Use shadcn/ui components for UI elements
- Create custom components in `src/components/ui/`
- Maintain consistent spacing and typography

### Performance
- Optimize images with Next.js Image component
- Use dynamic imports for heavy components
- Implement proper meta tags for SEO
- Use proper font optimization

### Vercel Deployment
- Environment variables are auto-loaded from `.env.local`
- Build command: `bun run build`
- Start command: `bun run start`
- No special configuration needed for Vercel

## Key Files
- `next.config.ts` - Next.js configuration
- `tsconfig.json` - TypeScript configuration
- `tailwind.config.ts` - Tailwind CSS customization
- `.eslintrc.json` - ESLint rules
- `vercel.json` - Vercel deployment settings

## Common Commands
```bash
bun run dev      # Start development server
bun run build    # Build for production
bun run start    # Start production server
bun run lint     # Run ESLint
```
