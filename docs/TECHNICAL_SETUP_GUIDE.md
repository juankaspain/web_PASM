# 🛠️ Technical Setup Guide - Complete Configuration

**Last Updated**: 2026-01-10  
**Purpose**: Step-by-step instructions for technical configurations

---

## 🔍 Google Search Console Setup

### Why It's Critical
- Monitor how Google sees your site
- Identify indexing issues
- Track search performance
- Submit sitemaps
- See which keywords bring traffic

### Step-by-Step Setup

1. **Go to Google Search Console**
   - Visit: https://search.google.com/search-console
   - Sign in with Google account

2. **Add Property**
   - Click "Add Property"
   - Choose "URL prefix"
   - Enter: `https://almagrosanmiguel.com`

3. **Verify Ownership** (Choose ONE method)

   **Option A: HTML File Upload**
   ```bash
   # Download verification file from GSC
   # Place in /public folder
   mv google[hash].html public/
   git add public/google[hash].html
   git commit -m "feat: Add Google Search Console verification"
   git push
   # Deploy to production
   # Click "Verify" in GSC
   ```

   **Option B: HTML Meta Tag** (Recommended)
   ```tsx
   // src/app/layout.tsx
   export const metadata: Metadata = {
     // ... existing metadata
     verification: {
       google: 'YOUR_VERIFICATION_CODE_HERE', // Replace with real code
     },
   }
   ```

   **Option C: DNS TXT Record**
   ```
   # Add to your domain DNS:
   Type: TXT
   Name: @
   Value: google-site-verification=YOUR_CODE
   TTL: 3600
   ```

4. **Submit Sitemap**
   - In GSC, go to "Sitemaps" (left sidebar)
   - Enter: `sitemap.xml`
   - Click "Submit"
   - Wait 24-48 hours for indexing

5. **Configure Settings**
   - Set preferred domain (with or without www)
   - Set target country: Spain
   - Enable email notifications for critical issues

### What to Monitor

**Weekly Checks**:
- Coverage report (indexed pages)
- Performance report (clicks, impressions)
- Mobile usability issues

**Monthly Reviews**:
- Top performing queries
- Pages with declining traffic
- Manual actions (penalties)

---

## 📊 Google Analytics 4 Setup

### Why It's Essential
- Understand visitor behavior
- Track conversions (form submissions)
- Measure marketing effectiveness
- Identify popular content
- Make data-driven decisions

### Step-by-Step Setup

1. **Create GA4 Property**
   - Visit: https://analytics.google.com
   - Click "Admin" (bottom left)
   - Create Account: "Almagro San Miguel Portfolio"
   - Create Property: "almagrosanmiguel.com"
   - Select Industry: "Arts & Entertainment"
   - Select Time Zone: "Spain (Madrid)"

2. **Get Measurement ID**
   - After creating property, you'll see: `G-XXXXXXXXXX`
   - Copy this ID

3. **Add to Environment Variables**
   ```bash
   # .env.local
   NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX  # Replace with your real ID
   ```

4. **Update Vercel Environment Variables**
   - Go to: https://vercel.com/dashboard
   - Select project: web_PASM
   - Settings → Environment Variables
   - Add: `NEXT_PUBLIC_GA_ID` = `G-XXXXXXXXXX`
   - Redeploy project

5. **Verify Installation**
   - Visit your site: https://almagrosanmiguel.com
   - In GA4, go to Reports → Realtime
   - You should see your visit within 30 seconds

### Configure Key Events (Conversions)

**In GA4 Admin → Events → Create Event**:

1. **Contact Form Submission**
   ```
   Event name: contact_form_submit
   Mark as conversion: Yes
   ```

2. **Reel Play**
   ```
   Event name: reel_play
   Condition: video_percent > 50
   Mark as conversion: Yes
   ```

3. **External Link Clicks**
   ```
   Event name: outbound_click
   Parameters: link_url, link_domain
   ```

4. **Engagement Time**
   ```
   Event name: engaged_session
   Condition: session_duration > 120 (2 minutes)
   Mark as conversion: Yes
   ```

### Custom Reports to Create

1. **Casting Director Funnel**
   - Landing page → Portfolio → Showreel → Contact

2. **Content Performance**
   - Which sections get most engagement
   - Average time per section

3. **Device Breakdown**
   - Mobile vs Desktop usage
   - Performance by device

---

## 🎯 Google Tag Manager (Optional but Recommended)

### Why Use GTM
- Manage all tracking tags in one place
- No code changes needed for new tracking
- Easy A/B testing setup
- Advanced event tracking

### Setup

1. **Create GTM Account**
   - Visit: https://tagmanager.google.com
   - Create Account: "Almagro San Miguel"
   - Create Container: "almagrosanmiguel.com" (Web)

2. **Get Container ID**
   - You'll receive: `GTM-XXXXXXX`

3. **Add to Environment**
   ```bash
   # .env.local
   NEXT_PUBLIC_GTM_ID=GTM-XXXXXXX
   ```

4. **Create Analytics Component**
   ```tsx
   // src/components/Analytics.tsx
   'use client'
   
   import Script from 'next/script'
   
   export default function Analytics() {
     const GTM_ID = process.env.NEXT_PUBLIC_GTM_ID
     
     if (!GTM_ID) return null
     
     return (
       <>
         <Script
           id="gtm-script"
           strategy="afterInteractive"
           dangerouslySetInnerHTML={{
             __html: `
               (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
               new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
               j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
               'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
               })(window,document,'script','dataLayer','${GTM_ID}');
             `,
           }}
         />
         <noscript>
           <iframe
             src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
             height="0"
             width="0"
             style={{ display: 'none', visibility: 'hidden' }}
           />
         </noscript>
       </>
     )
   }
   ```

5. **Add GA4 Tag in GTM**
   - In GTM, create new Tag
   - Type: Google Analytics GA4 Configuration
   - Measurement ID: `G-XXXXXXXXXX`
   - Trigger: All Pages

---

## 🔒 Sentry Configuration (Already Set Up)

### Current Status
✅ Sentry is already configured for:
- Client-side errors
- Server-side errors
- Edge runtime errors

### Verify It's Working

1. **Check Sentry Dashboard**
   - Visit: https://sentry.io
   - Select project: web-pasm
   - Should see events if errors occurred

2. **Test Error Tracking**
   ```tsx
   // Add to any page temporarily
   <button onClick={() => { throw new Error('Test error') }}>
     Test Sentry
   </button>
   ```

3. **Configure Alerts**
   - Settings → Alerts
   - Create alert for: Error rate > 10/hour
   - Send to: Your email

---

## 🚀 Vercel Configuration

### Performance Optimizations

1. **Enable Vercel Analytics** (Free)
   ```bash
   npm i @vercel/analytics
   ```
   
   ```tsx
   // src/app/layout.tsx
   import { Analytics as VercelAnalytics } from '@vercel/analytics/react'
   
   export default function RootLayout({ children }) {
     return (
       <html>
         <body>
           {children}
           <VercelAnalytics />
         </body>
       </html>
     )
   }
   ```

2. **Enable Speed Insights** (Free)
   ```bash
   npm i @vercel/speed-insights
   ```
   
   ```tsx
   import { SpeedInsights } from '@vercel/speed-insights/next'
   
   export default function RootLayout({ children }) {
     return (
       <html>
         <body>
           {children}
           <SpeedInsights />
         </body>
       </html>
     )
   }
   ```

3. **Configure Caching**
   - Already configured in `next.config.js`
   - Vercel automatically handles CDN caching
   - Static assets cached for 1 year

---

## 🌐 DNS Configuration (If Using Custom Domain)

### Vercel DNS Records

**A Records**:
```
Type: A
Name: @
Value: 76.76.21.21
TTL: 3600
```

**CNAME Record**:
```
Type: CNAME
Name: www
Value: cname.vercel-dns.com
TTL: 3600
```

**Verify SSL**:
- Vercel automatically provisions SSL certificates
- Wait 24-48 hours for DNS propagation
- Check: https://www.ssllabs.com/ssltest/

---

## ✅ Configuration Checklist

### Google Services
- [ ] Google Search Console verified
- [ ] Sitemap submitted to GSC
- [ ] Google Analytics 4 installed
- [ ] GA4 custom events configured
- [ ] GA4 conversion goals set
- [ ] Google Tag Manager setup (optional)

### Monitoring
- [x] Sentry error tracking active
- [ ] Vercel Analytics enabled
- [ ] Vercel Speed Insights enabled
- [x] Lighthouse CI running

### SEO Technical
- [x] Sitemap.xml dynamic
- [x] Robots.txt optimized
- [x] Schema.org markup complete
- [x] OG meta tags present
- [ ] OG images uploaded (needs real photos)

### Security
- [x] Security headers configured
- [x] CSP policy active
- [x] HTTPS enforced
- [x] .well-known/security.txt present

### Performance
- [x] Image optimization enabled
- [x] Bundle splitting configured
- [x] Lazy loading implemented
- [x] Cache strategy optimal

---

## 📞 Support Resources

### Google Search Console
- Documentation: https://support.google.com/webmasters
- Help Forum: https://support.google.com/webmasters/community

### Google Analytics
- GA4 Documentation: https://support.google.com/analytics
- Learning Center: https://skillshop.withgoogle.com

### Vercel
- Documentation: https://vercel.com/docs
- Support: https://vercel.com/support

### Sentry
- Documentation: https://docs.sentry.io
- Community: https://forum.sentry.io

---

## 🔄 Maintenance Schedule

### Daily
- Monitor Sentry for critical errors
- Check Vercel deployment status

### Weekly
- Review Google Search Console coverage
- Check GA4 realtime reports
- Review performance metrics

### Monthly
- Analyze GA4 trends
- Review and optimize slow pages
- Update dependencies (`npm audit`)
- Check Lighthouse scores

### Quarterly
- Full SEO audit
- Security review
- Performance optimization
- Content strategy review

---

**Last Review**: 2026-01-10  
**Next Review Due**: 2026-04-10  
**Maintained By**: Development Team
