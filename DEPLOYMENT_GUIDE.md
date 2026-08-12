# 🚀 Deployment Guide

Follow these steps to deploy your portfolio and make it live.

## Quick Start (Recommended: Vercel)

### Step 1: Push to GitHub

```bash
git init
git add .
git commit -m "Initial commit - portfolio"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/portfolio.git
git push -u origin main
```

### Step 2: Connect to Vercel

1. Go to [vercel.com](https://vercel.com)
2. Sign up or log in with GitHub
3. Click "New Project"
4. Import your portfolio repository
5. Vercel will auto-detect Next.js settings
6. Click "Deploy"
7. Your site will be live in ~1-2 minutes!

### Step 3: Add Custom Domain (Optional)

1. In Vercel Dashboard, go to your project → Settings → Domains
2. Add your custom domain
3. Update your domain's DNS records (instructions provided by Vercel)
4. DNS propagation takes 24-48 hours

**Popular domain providers:**
- Namecheap
- GoDaddy
- Route53 (AWS)
- Google Domains

---

## Alternative: GitHub Pages

### Step 1: Update Configuration

Modify `next.config.js`:

```javascript
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/portfolio', // Only if repo name is "portfolio"
}

module.exports = nextConfig
```

### Step 2: Build & Deploy

```bash
npm run build
git add .
git commit -m "Deploy to GitHub Pages"
git push origin main
```

### Step 3: Enable GitHub Pages

1. Go to repository Settings
2. Scroll to "Pages"
3. Under "Source", select "GitHub Actions"
4. Site will be live at `https://YOUR_USERNAME.github.io/portfolio`

---

## Environment Variables (If Needed)

Create `.env.local`:

```bash
NEXT_PUBLIC_SITE_URL=https://your-domain.com
```

---

## Post-Deployment Checklist

- [ ] Test on mobile devices (use Chrome DevTools)
- [ ] Check all links work (Projects, Contact)
- [ ] Verify email link opens your mail client
- [ ] Verify phone link calls your number
- [ ] Test form submissions if added
- [ ] Check page speed (Vercel Analytics)
- [ ] Verify SEO tags (view page source)
- [ ] Share link on LinkedIn, GitHub, Twitter

---

## Maintenance

### Update Your Portfolio

```bash
# Make changes to app/page.tsx or styles
git add .
git commit -m "Update portfolio content"
git push origin main
```

**For Vercel**: Automatically deploys on push
**For GitHub Pages**: Deploy manually with `npm run build`

### Monitor Performance

- **Vercel**: Includes built-in analytics
- **Lighthouse**: Run audit in Chrome DevTools
- **Pagespeed Insights**: https://pagespeed.web.dev/

---

## Troubleshooting

### Build Fails
```bash
npm install
npm run build
```

### CSS not showing
- Clear browser cache (Ctrl+Shift+Delete)
- Hard refresh (Ctrl+F5)

### Links not working
- Check `app/page.tsx` for correct URLs
- Verify email/phone format

### Domain not working
- Wait 24-48 hours for DNS propagation
- Check DNS settings with `nslookup` or `dig`

---

## Need Help?

- **Vercel Docs**: https://vercel.com/docs
- **Next.js Docs**: https://nextjs.org/docs
- **GitHub Pages Docs**: https://docs.github.com/en/pages

---

**Your portfolio is now ready to impress employers! 🎉**
