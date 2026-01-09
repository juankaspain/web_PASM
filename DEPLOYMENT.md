# 🚀 DEPLOYMENT GUIDE
## Almagro San Miguel Portfolio

---

## 🎯 PRE-DEPLOYMENT CHECKLIST

### ✅ Code & Content
- [x] All components functional
- [x] No broken links (0 critical)
- [x] 19 sections complete
- [x] Real PDFs generating
- [x] Contact form working
- [x] Download system functional
- [x] Analytics integrated
- [x] Schema.org markup
- [x] SEO metadata complete
- [x] Sitemap.xml created
- [x] Robots.txt configured
- [x] PWA manifest ready

### 📝 Content Files Needed
- [ ] Profile image (profile-image.jpg)
- [ ] OG image (og-image.jpg, 1200x630)
- [ ] Twitter image (twitter-image.jpg, 1200x600)
- [ ] Favicon files (favicon.ico, 16x16, 32x32)
- [ ] Apple touch icon (180x180)
- [ ] Android chrome icons (192x192, 512x512)
- [ ] Screenshots (desktop + mobile)

---

## 🔑 ENVIRONMENT SETUP

### 1. Create `.env.local`

```bash
cp .env.example .env.local
```

### 2. Fill in Required Variables

```env
# Required
NEXT_PUBLIC_SITE_URL=https://almagrosanmiguel.com

# Google Analytics (get from https://analytics.google.com)
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX

# Optional: Email service
SENDGRID_API_KEY=SG.xxxxxxxxxxxxxxx
EMAIL_FROM=info@almagrosanmiguel.com
EMAIL_TO=info@almagrosanmiguel.com
```

---

## 🏛️ DEPLOYMENT OPTIONS

### 🔵 Option 1: Vercel (Recommended)

**Why Vercel?**
- Next.js native platform
- Zero configuration
- Automatic HTTPS
- Edge CDN global
- Preview deployments
- Analytics included

**Steps:**

1. **Install Vercel CLI**
```bash
npm i -g vercel
```

2. **Login**
```bash
vercel login
```

3. **Deploy**
```bash
# Production deploy
vercel --prod

# Or connect GitHub repo
# 1. Go to vercel.com/dashboard
# 2. Import Git Repository
# 3. Select juankaspain/web_PASM
# 4. Configure & Deploy
```

4. **Configure Environment Variables**
- Go to Project Settings
- Add environment variables from `.env.local`
- Redeploy

5. **Custom Domain**
- Go to Project Settings > Domains
- Add `almagrosanmiguel.com`
- Follow DNS instructions

**Vercel Configuration**
```json
// vercel.json (optional)
{
  "buildCommand": "npm run build",
  "devCommand": "npm run dev",
  "installCommand": "npm install",
  "framework": "nextjs",
  "regions": ["iad1"],
  "headers": [
    {
      "source": "/(.*)",
      "headers": [
        {
          "key": "X-Content-Type-Options",
          "value": "nosniff"
        },
        {
          "key": "X-Frame-Options",
          "value": "DENY"
        },
        {
          "key": "X-XSS-Protection",
          "value": "1; mode=block"
        }
      ]
    }
  ]
}
```

---

### 🟠 Option 2: Netlify

**Steps:**

1. **Install Netlify CLI**
```bash
npm i -g netlify-cli
```

2. **Build**
```bash
npm run build
```

3. **Deploy**
```bash
netlify deploy --prod
```

4. **Configuration**
```toml
# netlify.toml
[build]
  command = "npm run build"
  publish = ".next"

[[plugins]]
  package = "@netlify/plugin-nextjs"

[[headers]]
  for = "/*"
  [headers.values]
    X-Frame-Options = "DENY"
    X-Content-Type-Options = "nosniff"
```

---

### 🟡 Option 3: Cloudflare Pages

**Steps:**

1. Go to Cloudflare Pages
2. Connect GitHub repository
3. Configure build:
   - Build command: `npm run build`
   - Build output: `.next`
   - Framework: Next.js
4. Add environment variables
5. Deploy

---

### 🟣 Option 4: AWS Amplify

**Steps:**

1. Go to AWS Amplify Console
2. Connect repository
3. Configure:
```yaml
version: 1
frontend:
  phases:
    preBuild:
      commands:
        - npm install
    build:
      commands:
        - npm run build
  artifacts:
    baseDirectory: .next
    files:
      - '**/*'
  cache:
    paths:
      - node_modules/**/*
```
4. Deploy

---

## 🔗 DOMAIN CONFIGURATION

### DNS Records (Example for Vercel)

**A Record:**
```
Type: A
Name: @
Value: 76.76.21.21
TTL: Auto
```

**CNAME Record:**
```
Type: CNAME
Name: www
Value: cname.vercel-dns.com
TTL: Auto
```

### SSL Certificate
- Automatic with Vercel/Netlify/Cloudflare
- Force HTTPS: Yes
- HSTS: Enable

---

## 📊 POST-DEPLOYMENT

### 1. Verify Deployment

```bash
# Test all pages
curl -I https://almagrosanmiguel.com
curl -I https://almagrosanmiguel.com/api/download?type=bio
curl -X POST https://almagrosanmiguel.com/api/contact \
  -H "Content-Type: application/json" \
  -d '{"name":"Test","email":"test@test.com","category":"Test","message":"Test"}'
```

### 2. Submit to Search Engines

**Google Search Console:**
1. Go to https://search.google.com/search-console
2. Add property: `almagrosanmiguel.com`
3. Verify ownership (DNS/HTML)
4. Submit sitemap: `https://almagrosanmiguel.com/sitemap.xml`
5. Request indexing

**Bing Webmaster Tools:**
1. Go to https://www.bing.com/webmasters
2. Add site
3. Verify
4. Submit sitemap

### 3. Analytics Setup

**Google Analytics 4:**
1. Create GA4 property
2. Get Measurement ID (G-XXXXXXXXXX)
3. Add to `.env.local`
4. Redeploy
5. Verify tracking in Real-Time reports

**Alternative: Plausible**
```html
<!-- In Analytics.tsx, uncomment Plausible -->
<Script
  defer
  data-domain="almagrosanmiguel.com"
  src="https://plausible.io/js/script.js"
/>
```

### 4. Performance Testing

**Run Lighthouse:**
```bash
npx lighthouse https://almagrosanmiguel.com --view
```

**Target Scores:**
- Performance: 90+
- Accessibility: 95+
- Best Practices: 95+
- SEO: 95+

**Tools:**
- PageSpeed Insights: https://pagespeed.web.dev/
- GTmetrix: https://gtmetrix.com/
- WebPageTest: https://www.webpagetest.org/

### 5. Accessibility Audit

**Tools:**
- WAVE: https://wave.webaim.org/
- axe DevTools: Browser extension
- Lighthouse Accessibility

**Checklist:**
- [ ] All images have alt text
- [ ] Color contrast WCAG AA
- [ ] Keyboard navigation
- [ ] Screen reader tested
- [ ] Form labels present
- [ ] Focus indicators visible

### 6. Social Media Validation

**Facebook/OpenGraph:**
https://developers.facebook.com/tools/debug/

**Twitter Cards:**
https://cards-dev.twitter.com/validator

**LinkedIn:**
https://www.linkedin.com/post-inspector/

---

## 🔒 SECURITY

### Headers Configuration

Add to `next.config.js`:

```javascript
module.exports = {
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'X-DNS-Prefetch-Control',
            value: 'on'
          },
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=63072000; includeSubDomains; preload'
          },
          {
            key: 'X-Frame-Options',
            value: 'SAMEORIGIN'
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff'
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block'
          },
          {
            key: 'Referrer-Policy',
            value: 'origin-when-cross-origin'
          },
          {
            key: 'Permissions-Policy',
            value: 'camera=(), microphone=(), geolocation=()'
          }
        ]
      }
    ]
  }
}
```

---

## 📝 MONITORING

### Uptime Monitoring

**Free Options:**
- UptimeRobot: https://uptimerobot.com/
- Pingdom: https://www.pingdom.com/
- StatusCake: https://www.statuscake.com/

**Setup:**
1. Create account
2. Add monitor for `https://almagrosanmiguel.com`
3. Set check interval: 5 minutes
4. Configure alerts (email/SMS)

### Error Tracking

**Sentry:**
```bash
npm install @sentry/nextjs
npx @sentry/wizard -i nextjs
```

---

## ♻️ MAINTENANCE

### Regular Updates

**Weekly:**
- Check analytics
- Review contact form submissions
- Monitor uptime

**Monthly:**
- Update dependencies: `npm update`
- Check for security vulnerabilities: `npm audit`
- Review and update content (news, events)
- Backup data

**Quarterly:**
- Full SEO audit
- Performance optimization
- Content refresh
- A/B testing results

### Updating Content

**News Articles:**
1. Edit `src/components/sections/News.tsx`
2. Add new article to `newsItems` array
3. Commit & push
4. Auto-deploy

**Events:**
1. Edit `src/components/sections/Events.tsx`
2. Update `upcomingEvents` / `pastEvents`
3. Commit & push

---

## ❓ TROUBLESHOOTING

### Build Errors

```bash
# Clear cache
rm -rf .next node_modules
npm install
npm run build
```

### Deployment Fails

1. Check Node version: `node --version` (need 18+)
2. Verify environment variables
3. Check build logs
4. Test locally: `npm run build && npm start`

### 404 Errors

1. Clear CDN cache
2. Check `vercel.json` rewrites
3. Verify API routes

### Contact Form Not Working

1. Check `/api/contact` endpoint
2. Verify environment variables
3. Test with curl:
```bash
curl -X POST https://almagrosanmiguel.com/api/contact \
  -H "Content-Type: application/json" \
  -d '{"name":"Test","email":"test@test.com","category":"Test","message":"Test"}'
```

---

## 🎉 GO LIVE CHECKLIST

- [ ] Environment variables configured
- [ ] Domain connected
- [ ] SSL active (HTTPS)
- [ ] Google Analytics working
- [ ] Sitemap submitted to Google
- [ ] Social media tags validated
- [ ] Contact form tested
- [ ] Downloads working
- [ ] All links verified
- [ ] Mobile tested
- [ ] Performance score 90+
- [ ] Accessibility audit passed
- [ ] Uptime monitoring active
- [ ] Backup strategy in place

---

## 📞 SUPPORT

If you need help:
1. Check documentation
2. Review deployment logs
3. Contact hosting support
4. GitHub Issues (if open source)

**Hosting Support:**
- Vercel: https://vercel.com/support
- Netlify: https://answers.netlify.com/
- Cloudflare: https://community.cloudflare.com/

---

🚀 **Ready to go live!**
