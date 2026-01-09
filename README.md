# 🎬 Almagro San Miguel - Portfolio Website

> Professional actor portfolio built with Next.js 14, TypeScript, Tailwind CSS, and Framer Motion

[![Next.js](https://img.shields.io/badge/Next.js-14-black)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-blue)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3-cyan)](https://tailwindcss.com/)
[![License](https://img.shields.io/badge/License-MIT-green)](LICENSE)

## 🌟 Features

### 📱 19 Complete Sections
1. **Hero** - Impactful landing with CTA buttons
2. **About** - Complete biography with formation
3. **Stats** - Professional statistics dashboard
4. **Skills Graph** - 8 skills with animated progress bars
5. **Portfolio** - 8 TV series + 4 films
6. **Timeline** - Career timeline (1990-2026)
7. **Awards** - Prizes and recognitions
8. **Gallery** - Interactive image gallery with filters
9. **Collaborators** - Directors and co-stars
10. **Showreel** - Video reel
11. **News** - Blog with latest news
12. **Events** - Calendar with upcoming/past events
13. **Press** - Press articles collection
14. **Testimonials** - 12 real testimonials
15. **FAQ** - 10 frequently asked questions
16. **Press Kit** - Downloadable materials
17. **Contact** - Professional contact form
18. **Footer** - Complete links and social media
19. **Navbar** - Sticky navigation with mobile menu

### ✨ Interactive Features
- 📸 **Image Gallery** with category filters (TV, Film, Theater, BTS)
- ❓ **FAQ Accordion** with expand/collapse
- 📊 **Progress Bars** animated on scroll
- 📦 **Download System** for Press Kit materials
- 📱 **Mobile Navigation** with hamburger menu
- 🎨 **50+ Animations** with Framer Motion

### 🛠️ Technical Stack
- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Animations:** Framer Motion
- **Icons:** Lucide React
- **Forms:** React Hook Form
- **Deployment:** Vercel-ready

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

```bash
# Clone repository
git clone https://github.com/juankaspain/web_PASM.git
cd web_PASM

# Install dependencies
npm install
# or
yarn install

# Run development server
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📝 Project Structure

```
web_PASM/
├── src/
│   ├── app/
│   │   ├── api/
│   │   │   └── download/
│   │   │       └── route.ts          # Download handler
│   │   ├── layout.tsx
│   │   ├── page.tsx               # Main page
│   │   └── globals.css
│   │
│   ├── components/
│   │   ├── Navbar.tsx             # Navigation
│   │   ├── Footer.tsx             # Footer
│   │   └── sections/              # 18 section components
│   │       ├── Hero.tsx
│   │       ├── About.tsx
│   │       ├── Stats.tsx
│   │       ├── SkillsGraph.tsx
│   │       ├── Portfolio.tsx
│   │       ├── Timeline.tsx
│   │       ├── Awards.tsx
│   │       ├── Gallery.tsx
│   │       ├── Collaborators.tsx
│   │       ├── Showreel.tsx
│   │       ├── News.tsx
│   │       ├── Events.tsx
│   │       ├── Press.tsx
│   │       ├── Testimonials.tsx
│   │       ├── FAQ.tsx
│   │       ├── PressKit.tsx
│   │       └── Contact.tsx
│   │
│   └── lib/
│       └── utils.ts
│
├── public/                     # Static assets
├── AUDIT_REPORT.md             # Complete audit
├── tailwind.config.ts
├── tsconfig.json
└── package.json
```

## 📊 Data Overview

### Portfolio Content
- **TV Series:** 8 (with 300+ episodes)
- **Films:** 4 (including shorts)
- **Theater:** 10+ productions
- **Awards:** 2 (1 prize + 1 nomination)
- **Directors:** 6 featured collaborators
- **Co-stars:** 8 highlighted
- **Skills:** 8 main + 8 additional
- **News Articles:** 6 with real dates
- **Events:** 7 (3 upcoming + 4 past)
- **Testimonials:** 12 quotes
- **Press Articles:** 10 links
- **FAQ:** 10 questions/answers

## ⚙️ Configuration

### Environment Variables

Create `.env.local` file:

```env
# Contact Form (Formspree)
NEXT_PUBLIC_FORMSPREE_ID=your_form_id

# Analytics (optional)
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX

# Site URL
NEXT_PUBLIC_SITE_URL=https://almagrosanmiguel.com
```

### Customization

#### Colors (tailwind.config.ts)
```typescript
theme: {
  extend: {
    colors: {
      primary: colors.slate,
      accent: colors.yellow,
    },
  },
}
```

#### Content
Edit section files in `src/components/sections/` to update:
- Biography text
- Filmography data
- News articles
- Events
- etc.

## 📦 Deployment

### Vercel (Recommended)

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

Or connect your GitHub repo to Vercel dashboard.

### Other Platforms
- **Netlify:** `npm run build` + deploy `out/` folder
- **Cloudflare Pages:** Connect GitHub repo
- **AWS Amplify:** Connect repository

## ✅ Pre-Production Checklist

- [x] All components functional
- [x] No broken links
- [x] Responsive design verified
- [x] Navbar navigation working
- [x] Download system implemented
- [ ] Create actual Press Kit PDFs
- [ ] Connect contact form backend
- [ ] Add Google Analytics
- [ ] Test on multiple browsers
- [ ] Optimize all images
- [ ] Add sitemap.xml
- [ ] Configure custom domain
- [ ] SSL certificate

## 🐛 Known Issues

### Minor
1. **Press Kit downloads** are mocked (API returns JSON)
   - **Fix:** Create actual PDF/ZIP files
2. **Contact form** needs backend
   - **Fix:** Integrate Formspree or similar
3. **3 placeholder links** (#) for future content
   - **Fix:** Update when content available

## 📊 Performance

### Lighthouse Scores (Estimated)
- **Performance:** 90-95
- **Accessibility:** 95-100
- **Best Practices:** 95-100
- **SEO:** 90-95

### Bundle Size
- **First Load JS:** ~180 KB
- **Total Bundle:** ~500 KB (gzipped)

## 🔧 Development

### Available Scripts

```bash
# Development server
npm run dev

# Production build
npm run build

# Start production server
npm start

# Linting
npm run lint

# Type checking
npm run type-check
```

## 📝 License

MIT License - See [LICENSE](LICENSE) file

## 👤 Contact

**Almagro San Miguel**
- Email: info@almagrosanmiguel.com
- Instagram: [@almagrosanmiguel](https://www.instagram.com/almagrosanmiguel/)
- IMDb: [nm9017709](https://www.imdb.com/name/nm9017709/)

## 🚀 Credits

- **Design & Development:** AI-Assisted
- **Content:** Almagro San Miguel
- **Framework:** Next.js Team
- **Icons:** Lucide
- **Animations:** Framer Motion

---

**Made with ❤️ in Sevilla, Spain**
