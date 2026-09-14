# Quick Start (5 Minutes)

## Run Locally

```bash
# 1. Open terminal in the project folder

# 2. Install packages
npm install

# 3. Start server
npm run dev

# 4. Open in browser
http://localhost:3000
```

Stop server: `Ctrl + C`

---

## Deploy to GitHub & Vercel (10 Minutes)

### 1. Create GitHub Repo
- Go to [github.com/new](https://github.com/new)
- Name: `rileys-barbershop`
- Make it **Public**
- Create

### 2. Push Your Code
```bash
git init
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/YOUR_USERNAME/rileys-barbershop.git
git branch -M main
git push -u origin main
```

### 3. Deploy on Vercel
- Go to [vercel.com](https://vercel.com)
- Sign up with GitHub
- Click "New Project"
- Select `rileys-barbershop`
- Click "Deploy"

**Done!** 🚀

Your site is live at: `https://rileys-barbershop.vercel.app`

Every time you push to GitHub, it auto-deploys!

---

## Make Changes & Update

```bash
# Edit files locally
# Test with: npm run dev

# When ready, push to GitHub
git add .
git commit -m "Update: description of change"
git push origin main

# Vercel auto-deploys in ~30 seconds
```

---

## Add Photos

1. Create `/public/images/` folder
2. Add your barbershop photos (JPG/PNG)
3. In `app/page.tsx`, replace image placeholders with real images

Example:
```jsx
<img 
  src="/images/hero-photo.jpg" 
  alt="Riley's Barbershop" 
/>
```

---

## Full Guide

See `DEPLOYMENT_GUIDE.md` for:
- Detailed GitHub setup
- Other deploy options (Netlify, GitHub Pages)
- Custom domain setup
- Troubleshooting
