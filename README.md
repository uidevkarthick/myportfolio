# Webmaster Global - Professional Portfolio

A modern, responsive portfolio website built with Next.js and React. Showcasing 10+ years of frontend development expertise and featured projects.

## Features

- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile devices
- **Professional Layout**: Clean, corporate design with modern aesthetic
- **Performance Optimized**: Built with Next.js for optimal performance and SEO
- **Easy Deployment**: Ready to deploy on Vercel or GitHub Pages
- **Modern Stack**: React 18, TypeScript, Next.js 14

## Project Sections

- **Hero Section**: Eye-catching introduction with call-to-action buttons
- **About Section**: Professional background, experience stats, and current role
- **Featured Projects**: Showcase of YnotFinance, DropSetu, and inidhomes
- **Skills Section**: Comprehensive list of technical expertise
- **Contact Section**: Easy ways to reach out for opportunities

## Tech Stack

- **Framework**: Next.js 14
- **Language**: TypeScript
- **Styling**: CSS (responsive grid & flexbox)
- **Deployment**: Vercel or GitHub Pages

## Getting Started

### Prerequisites
- Node.js 16+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/portfolio.git
cd portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

## Building for Production

```bash
npm run build
npm start
```

## Deployment

### Option 1: Deploy on Vercel (Recommended)

1. Push your repository to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Import your GitHub repository
4. Vercel will automatically detect Next.js and configure the build settings
5. Your site will be live at a Vercel URL

**Custom Domain:**
- Add your custom domain in Vercel's project settings
- Update DNS records as instructed

### Option 2: Deploy on GitHub Pages

1. Modify `next.config.js` for static export:
```javascript
const nextConfig = {
  output: 'export',
}
```

2. Build the project:
```bash
npm run build
```

3. Commit to GitHub:
```bash
git add .
git commit -m "Deploy portfolio"
git push origin main
```

4. Enable GitHub Pages in repository settings:
   - Go to Settings → Pages
   - Set source to `gh-pages` branch
   - Your site will be live at `https://yourusername.github.io/portfolio`

## Customization

### Update Your Information

Edit `app/page.tsx` to update:
- Your name and title
- Professional summary
- Contact information
- Project details
- Skills list

### Styling

All styles are in `app/globals.css`. Customize:
- Colors (CSS variables at the top)
- Fonts
- Spacing
- Responsive breakpoints

### Projects

Add or modify projects in the "Featured Projects" section of `app/page.tsx`. Update:
- Project titles and descriptions
- Technology tags
- Links to live sites

## Contact Information

- Email: webtechkarthik@gmail.com
- Phone: +91 9159 574 889
- Location: Chennai, India

## License

This portfolio is personal work. Feel free to use as inspiration for your own portfolio.

## Support

For questions or issues, please reach out via email.

---

Built with ❤️ by Webmaster Global
