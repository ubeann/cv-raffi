# CV Landing Page

A modern, professional CV landing page built with **Next.js 16**, **TypeScript**, **Tailwind CSS**, and **Bun**. Optimized for Vercel deployment.

## 🚀 Features

- ✨ **Modern Design** - Clean, professional layout with smooth scrolling
- ⚡ **Performance** - Next.js 16 with optimized images and code splitting
- 🎨 **Responsive** - Mobile-first design that looks great on all devices
- 🔧 **TypeScript** - Full type safety for better code quality
- 🎯 **SEO Optimized** - Proper meta tags and semantic HTML
- 🚀 **Ready for Vercel** - Zero-config deployment
- 📦 **Modern Stack** - React 19, Tailwind CSS 4, Bun package manager

## 📋 Sections

- **Hero** - Eye-catching introduction with call-to-action buttons
- **About** - Personal bio and key skills showcase
- **Projects** - Featured project showcase with tags
- **Contact** - Multiple contact channels (email, LinkedIn, GitHub)
- **Header** - Fixed navigation with smooth scrolling

## 🛠️ Tech Stack

- **Framework**: Next.js 16+ with TypeScript
- **Styling**: Tailwind CSS 4 + Lucide Icons
- **Runtime**: Bun (significantly faster than npm/yarn)
- **Deployment**: Vercel (automatic)
- **Code Quality**: ESLint + TypeScript

## 📦 Prerequisites

- **Bun** (>= 1.0) - [Install Bun](https://bun.sh)
- **Node.js** (for compatibility, though not required with Bun)
- **Git** (for version control)

## 🚀 Quick Start

### 1. **Environment Setup**

Copy the example environment file and fill in your details:

```bash
cp .env.local.example .env.local
```

Edit `.env.local` with your information:

```env
NEXT_PUBLIC_FULL_NAME="Your Name"
NEXT_PUBLIC_EMAIL="your.email@example.com"
NEXT_PUBLIC_PHONE="+1 (555) 123-4567"
NEXT_PUBLIC_LOCATION="City, Country"
NEXT_PUBLIC_GITHUB_URL="https://github.com/yourusername"
NEXT_PUBLIC_LINKEDIN_URL="https://linkedin.com/in/yourprofile"
NEXT_PUBLIC_TWITTER_URL="https://twitter.com/yourhandle"
```

### 2. **Install Dependencies**

```bash
bun install
```

### 3. **Development Server**

```bash
bun run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### 4. **Build for Production**

```bash
bun run build
bun run start
```

## 📂 Project Structure

```
cv-raffi/
├── app/
│   ├── layout.tsx           # Root layout
│   ├── page.tsx             # Home page
│   └── globals.css          # Global styles
├── src/
│   └── components/
│       ├── Header.tsx       # Navigation header
│       └── sections/
│           ├── Hero.tsx     # Hero section
│           ├── About.tsx    # About section
│           ├── Projects.tsx # Projects section
│           └── Contact.tsx  # Contact section
├── public/                  # Static assets
├── .github/
│   └── copilot-instructions.md
├── vercel.json              # Vercel deployment config
├── .env.local.example       # Environment template
├── next.config.ts           # Next.js config
├── tsconfig.json            # TypeScript config
├── tailwind.config.ts       # Tailwind config
├── package.json             # Dependencies
└── bunfig.toml              # Bun config
```

## 🎨 Customization

### Update Colors

Edit `tailwind.config.ts` to customize the color scheme:

```typescript
module.exports = {
  theme: {
    extend: {
      colors: {
        primary: '#your-color',
        // ...
      },
    },
  },
}
```

### Add/Modify Sections

Components are located in `src/components/sections/`. Each section is self-contained and can be easily customized.

### Update Projects

Edit `src/components/sections/Projects.tsx` to add your own projects:

```typescript
const projects = [
  {
    title: "Your Project",
    description: "Project description",
    tags: ["Tech1", "Tech2"],
    link: "https://project-link.com",
  },
  // ...
];
```

## 🚀 Deployment on Vercel

### Option 1: Using Vercel CLI

```bash
npm install -g vercel
vercel
```

### Option 2: Git Integration

1. Push your code to GitHub
2. Connect your GitHub repository to Vercel
3. Vercel automatically deploys on every push

### Option 3: Vercel Web Dashboard

1. Go to [vercel.com](https://vercel.com)
2. Click "New Project"
3. Select your repository
4. Vercel auto-detects Next.js + Bun configuration
5. Deploy!

**No additional configuration needed** - `vercel.json` handles everything.

## 📝 Available Scripts

```bash
bun run dev      # Start development server (hot reload)
bun run build    # Build for production
bun run start    # Start production server
bun run lint     # Run ESLint
bun run type-check # Run TypeScript type checking
```

## 🔒 Environment Variables

All environment variables prefixed with `NEXT_PUBLIC_` are exposed to the browser. Never store sensitive data in these.

## 📱 Responsive Design

The site is fully responsive with:

- Mobile (< 640px) - Single column, touch-friendly
- Tablet (640px - 1024px) - Two columns where appropriate
- Desktop (> 1024px) - Full layout with optimal spacing

## ⚡ Performance Tips

1. **Image Optimization** - Next.js Image component handles optimization
2. **Code Splitting** - Dynamic imports for heavy components
3. **Caching** - HTTP headers configured in `vercel.json`
4. **Bundle Analysis** - Monitor bundle size with build analytics

## 🐛 Troubleshooting

### Port 3000 already in use?

```bash
bun run dev -- --port 3001
```

### Build fails?

```bash
bun run build --verbose
```

### TypeScript errors?

```bash
bun run type-check
```

## 📚 Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS](https://tailwindcss.com)
- [Bun Documentation](https://bun.sh)
- [Vercel Documentation](https://vercel.com/docs)

## 📄 License

This project is open source and available under the MIT License.

## 🤝 Contributing

Feel free to fork, modify, and use this template for your own CV/portfolio!

## 💡 Pro Tips

1. **SEO** - Update metadata in `app/page.tsx` with your information
2. **Analytics** - Add Google Analytics via environment variables
3. **Form** - For contact forms, use services like Formspree or SendGrid
4. **Custom Domain** - Set up a custom domain in Vercel settings
5. **Dark Mode** - Add dark mode support in `tailwind.config.ts`

---

**Built with ❤️ using Next.js + Bun + Vercel**

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
