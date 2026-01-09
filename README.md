# 🌐 Web PASM - Modern Web Application

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Security](https://img.shields.io/badge/security-A%2B-brightgreen)](https://github.com/juankaspain/web_PASM)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](http://makeapullrequest.com)

Modern, secure, and performant web application built with cutting-edge technologies and best practices.

---

## 📋 Table of Contents

- [Architecture Overview](#architecture-overview)
- [Technology Stack](#technology-stack)
- [Project Structure](#project-structure)
- [Security Features](#security-features)
- [Performance Optimization](#performance-optimization)
- [SEO Strategy](#seo-strategy)
- [Development Workflow](#development-workflow)
- [Deployment Strategy](#deployment-strategy)
- [Monitoring & Analytics](#monitoring--analytics)
- [Getting Started](#getting-started)

---

## 🏗️ Architecture Overview

### Design Philosophy

This project follows a **modern JAMstack architecture** with focus on:

- **Performance First**: Sub-second load times, optimized assets, lazy loading
- **Security by Design**: CSP headers, HTTPS enforcement, input sanitization
- **SEO Optimized**: Server-side rendering, semantic HTML, structured data
- **Accessibility**: WCAG 2.1 AA compliant, ARIA labels, keyboard navigation
- **Mobile First**: Responsive design, touch-optimized, PWA capabilities

### Architecture Pattern

```
┌─────────────────────────────────────────────────┐
│                   CDN Layer                      │
│         (Cloudflare / CloudFront)                │
└─────────────────────────────────────────────────┘
                      ↓
┌─────────────────────────────────────────────────┐
│              Static Site Generator               │
│           (Next.js / Astro / Vite)              │
└─────────────────────────────────────────────────┘
                      ↓
┌─────────────────────────────────────────────────┐
│         API Layer (Serverless Functions)         │
│          (Vercel / Netlify / AWS Lambda)        │
└─────────────────────────────────────────────────┘
                      ↓
┌─────────────────────────────────────────────────┐
│              Database & Storage                  │
│        (PostgreSQL / MongoDB / S3)              │
└─────────────────────────────────────────────────┘
```

---

## 🚀 Technology Stack

### Frontend Core

- **Framework**: Next.js 15 (App Router) with React 19
  - Server Components for optimal performance
  - Streaming SSR and Suspense
  - Incremental Static Regeneration (ISR)

- **Styling**: 
  - Tailwind CSS 4.0 (utility-first approach)
  - CSS Modules for component-specific styles
  - Framer Motion for animations

- **Type Safety**: TypeScript 5.x with strict mode
  - Full type coverage
  - Zod for runtime validation

### State Management

- **React Context** for global state
- **Zustand** for complex client state
- **TanStack Query (React Query)** for server state
- **React Hook Form** with Zod validation

### Backend & APIs

- **API Routes**: Next.js API routes / Serverless functions
- **Database ORM**: Prisma / Drizzle ORM
- **Authentication**: NextAuth.js v5 / Clerk
- **API Validation**: Zod schemas
- **Rate Limiting**: Upstash Redis

### DevOps & Infrastructure

- **Hosting**: Vercel (primary) / Netlify (alternative)
- **Database**: 
  - Vercel Postgres / Supabase (PostgreSQL)
  - Upstash Redis for caching
- **Storage**: Cloudinary / S3 for assets
- **CI/CD**: GitHub Actions
- **Monitoring**: Sentry + Vercel Analytics

### Development Tools

- **Package Manager**: pnpm (fast, disk-efficient)
- **Code Quality**: 
  - ESLint (Airbnb + Next.js config)
  - Prettier for formatting
  - Husky for git hooks
  - Commitlint for conventional commits
- **Testing**: 
  - Vitest for unit tests
  - Playwright for E2E tests
  - React Testing Library
  - Jest for integration tests

---

## 📁 Project Structure

```
web_PASM/
├── .github/
│   ├── workflows/          # GitHub Actions CI/CD
│   └── ISSUE_TEMPLATE/
├── public/
│   ├── assets/
│   │   ├── images/
│   │   ├── fonts/
│   │   └── icons/
│   ├── robots.txt
│   ├── sitemap.xml
│   └── manifest.json       # PWA manifest
├── src/
│   ├── app/                # Next.js App Router
│   │   ├── (marketing)/    # Route group
│   │   ├── (dashboard)/
│   │   ├── api/
│   │   ├── layout.tsx
│   │   └── page.tsx
│   ├── components/
│   │   ├── ui/             # Reusable UI components
│   │   ├── forms/
│   │   ├── layouts/
│   │   └── sections/
│   ├── lib/
│   │   ├── utils/          # Utility functions
│   │   ├── hooks/          # Custom React hooks
│   │   ├── constants/
│   │   └── validations/    # Zod schemas
│   ├── services/           # API services
│   ├── stores/             # State management
│   ├── styles/
│   │   └── globals.css
│   └── types/              # TypeScript types
├── prisma/
│   ├── schema.prisma
│   └── migrations/
├── tests/
│   ├── unit/
│   ├── integration/
│   └── e2e/
├── docs/                   # Documentation
├── .env.example
├── .eslintrc.json
├── .prettierrc
├── next.config.js
├── tailwind.config.ts
├── tsconfig.json
├── package.json
└── README.md
```

---

## 🔒 Security Features

### Implementation Checklist

- ✅ **Content Security Policy (CSP)** - Prevents XSS attacks
- ✅ **HTTPS Enforcement** - All traffic encrypted
- ✅ **CORS Configuration** - Controlled cross-origin requests
- ✅ **Rate Limiting** - DDoS protection and abuse prevention
- ✅ **Input Sanitization** - DOMPurify for user-generated content
- ✅ **SQL Injection Prevention** - Parameterized queries with Prisma
- ✅ **Authentication** - Secure session management with httpOnly cookies
- ✅ **CSRF Protection** - Token-based validation
- ✅ **Security Headers**: 
  - X-Frame-Options: DENY
  - X-Content-Type-Options: nosniff
  - Referrer-Policy: strict-origin-when-cross-origin
  - Permissions-Policy

### Environment Variables

All sensitive data stored securely:
- API keys in environment variables
- Secrets in Vercel/GitHub Secrets
- No credentials in codebase

---

## ⚡ Performance Optimization

### Strategies Implemented

1. **Code Splitting**
   - Dynamic imports for heavy components
   - Route-based chunking
   - Vendor bundle optimization

2. **Image Optimization**
   - Next.js Image component with automatic WebP
   - Lazy loading with intersection observer
   - Responsive images with srcset

3. **Caching Strategy**
   - Static assets: 1 year cache
   - API responses: Redis caching
   - CDN edge caching
   - Service Worker for offline support

4. **Bundle Optimization**
   - Tree shaking
   - Minification and compression
   - Critical CSS extraction
   - Preloading critical resources

5. **Monitoring**
   - Core Web Vitals tracking
   - Lighthouse CI in pipeline
   - Real User Monitoring (RUM)

### Performance Targets

- **Lighthouse Score**: 95+ across all metrics
- **First Contentful Paint**: < 1.2s
- **Largest Contentful Paint**: < 2.5s
- **Time to Interactive**: < 3.8s
- **Cumulative Layout Shift**: < 0.1

---

## 🔍 SEO Strategy

### Technical SEO

- **Semantic HTML5** - Proper heading hierarchy
- **Open Graph** - Social media optimization
- **Twitter Cards** - Enhanced Twitter sharing
- **Structured Data** - JSON-LD schema markup
- **XML Sitemap** - Auto-generated and submitted
- **Robots.txt** - Proper crawl directives
- **Canonical URLs** - Duplicate content prevention
- **Meta Tags** - Optimized titles and descriptions

### On-Page SEO

- Server-side rendering for crawlability
- Mobile-first responsive design
- Fast page load speeds
- Clean URL structure
- Internal linking strategy
- Alt text for all images

### Tools Integration

- Google Search Console
- Google Analytics 4
- Bing Webmaster Tools
- Schema.org markup validator

---

## 🛠️ Development Workflow

### Branch Strategy

```
main          → Production-ready code
├── develop   → Integration branch
└── feature/* → Feature branches
└── hotfix/*  → Emergency fixes
```

### Commit Convention

Following [Conventional Commits](https://www.conventionalcommits.org/):

```
feat: add new feature
fix: bug fix
docs: documentation changes
style: formatting, missing semicolons
refactor: code restructuring
test: adding tests
chore: maintenance tasks
perf: performance improvements
ci: CI/CD changes
```

### Pull Request Process

1. Create feature branch from `develop`
2. Implement changes with tests
3. Pass all CI checks (lint, test, build)
4. Code review by team member
5. Merge to develop, then to main

---

## 🚢 Deployment Strategy

### Environments

- **Development**: Local development server
- **Preview**: Automatic deployment on PR
- **Staging**: Pre-production testing
- **Production**: Live application

### Deployment Pipeline

```
Push to branch
    ↓
GitHub Actions triggered
    ↓
Run tests & linting
    ↓
Build application
    ↓
Deploy to Vercel
    ↓
Run E2E tests
    ↓
Health check
    ↓
Production live
```

### Rollback Strategy

- Instant rollback via Vercel dashboard
- Git revert for code-level rollbacks
- Database migrations with down scripts

---

## 📊 Monitoring & Analytics

### Error Tracking

- **Sentry**: Real-time error monitoring
- Source maps for stack traces
- User session replay
- Performance monitoring

### Analytics

- **Google Analytics 4**: User behavior
- **Vercel Analytics**: Web vitals
- **Hotjar**: Heatmaps and recordings
- Custom event tracking

### Logging

- Structured logging with Winston
- Centralized log aggregation
- Error alerting via Slack/Discord

---

## 🚀 Getting Started

### Prerequisites

- Node.js 20.x or higher
- pnpm 8.x or higher
- Git

### Installation

```bash
# Clone repository
git clone https://github.com/juankaspain/web_PASM.git
cd web_PASM

# Install dependencies
pnpm install

# Set up environment variables
cp .env.example .env.local

# Run database migrations
pnpm prisma migrate dev

# Start development server
pnpm dev
```

### Available Scripts

```bash
pnpm dev          # Start development server
pnpm build        # Build for production
pnpm start        # Start production server
pnpm lint         # Run ESLint
pnpm lint:fix     # Fix linting issues
pnpm format       # Format code with Prettier
pnpm test         # Run unit tests
pnpm test:e2e     # Run E2E tests
pnpm type-check   # TypeScript type checking
```

---

## 📚 Documentation

- [Architecture Documentation](./docs/ARCHITECTURE.md)
- [API Documentation](./docs/API.md)
- [Component Library](./docs/COMPONENTS.md)
- [Contributing Guide](./docs/CONTRIBUTING.md)
- [Security Policy](./docs/SECURITY.md)

---

## 🤝 Contributing

Contributions are welcome! Please read our [Contributing Guide](./docs/CONTRIBUTING.md) for details on our code of conduct and the process for submitting pull requests.

---

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## 👥 Team

- **Lead Developer**: Pedro Almagro
- **Organization**: juankaspain

---

## 🙏 Acknowledgments

Built with modern web technologies and industry best practices. Special thanks to the open-source community.

---

**Made with ❤️ in Sevilla, Spain** 🇪🇸
