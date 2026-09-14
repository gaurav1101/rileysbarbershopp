# Deployment Guide: Riley's Barbershop Website

## Part 1: Download & Run Locally

### Step 1: Download the Code
1. Go to `/mnt/user-data/outputs/rileys-barbershop/`
2. Download the entire `rileys-barbershop` folder to your computer
3. Extract if it's a ZIP file

### Step 2: Install Dependencies
Open terminal/command prompt in the project folder and run:
```bash
npm install
```

### Step 3: Run Locally
```bash
npm run dev
```

You'll see:
```
> ready - started server on 0.0.0.0:3000, url: http://localhost:3000
```

Open **http://localhost:3000** in your browser to see the site live.

**To stop the server:** Press `Ctrl + C` in terminal

---

## Part 2: Push to GitHub

### Step 1: Create a GitHub Account
- Go to [github.com](https://github.com)
- Sign up (free)

### Step 2: Create a New Repository
1. Go to [github.com/new](https://github.com/new)
2. Repository name: `rileys-barbershop`
3. Description: `Riley's Barbershop Website`
4. Choose: **Public** (so you can deploy for free)
5. Click **Create repository**

### Step 3: Initialize Git & Push Code
In your project folder, open terminal and run:

```bash
# Initialize git
git init

# Add all files
git add .

# Create first commit
git commit -m "Initial commit: Riley's Barbershop website"

# Add GitHub remote (replace YOUR_USERNAME)
git remote add origin https://github.com/YOUR_USERNAME/rileys-barbershop.git

# Rename branch to main (GitHub default)
git branch -M main

# Push to GitHub
git push -u origin main
```

**Done!** Your code is now on GitHub at:
```
https://github.com/YOUR_USERNAME/rileys-barbershop
```

---

## Part 3: Deploy for Free

### Option A: Vercel (Recommended - Easiest)

**Why Vercel?**
- Made by Next.js creators
- Free tier includes unlimited deployments
- Auto-deploys when you push to GitHub
- Custom domain support
- Live preview for every commit

**Steps:**

1. Go to [vercel.com](https://vercel.com)
2. Click **Sign up** → Choose **GitHub**
3. Authorize Vercel to access your GitHub
4. Click **New Project**
5. Find & select `rileys-barbershop` repo
6. Click **Import**
7. Click **Deploy**

**Your site is live in 2 minutes!** 🎉

Vercel gives you a URL like:
```
https://rileys-barbershop.vercel.app
```

**To use custom domain (optional):**
1. In Vercel dashboard → Settings → Domains
2. Add your domain (e.g., `rileys-barbershop.com`)
3. Update domain DNS settings (Vercel will guide you)

---

### Option B: GitHub Pages (Free)

**Steps:**

1. Go to your GitHub repo → **Settings**
2. Scroll to **Pages** (left sidebar)
3. Under "Source", select: **GitHub Actions**
4. In your project, create `.github/workflows/nextjs.yml`:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [main]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: '18'
      - run: npm install
      - run: npm run build
      - uses: actions/upload-artifact@v3
        with:
          name: out
          path: out
```

5. Push this file to GitHub
6. Go back to Settings → Pages
7. Select `gh-pages` branch

Your site will be at:
```
https://YOUR_USERNAME.github.io/rileys-barbershop
```

---

### Option C: Netlify (Also Free & Easy)

**Steps:**

1. Go to [netlify.com](https://netlify.com)
2. Click **Sign up** → Choose **GitHub**
3. Authorize & connect your GitHub
4. Click **New site from Git**
5. Select `rileys-barbershop` repo
6. Build command: `npm run build`
7. Publish directory: `.next`
8. Click **Deploy site**

Your site is live at:
```
https://your-site-name.netlify.app
```

---

## Part 4: Update & Redeploy

Once deployed, updating is easy:

```bash
# Make changes locally
# Edit app/page.tsx or app/globals.css

# Test locally
npm run dev

# When ready, push to GitHub
git add .
git commit -m "Update: [describe changes]"
git push origin main
```

**That's it!** Vercel/Netlify automatically redeploys within seconds.

---

## Part 5: Add Custom Domain

### With Vercel:
1. Dashboard → Project → Settings → Domains
2. Add your domain
3. Follow DNS instructions

### With Netlify:
1. Site settings → Domain management
2. Add custom domain
3. Follow DNS instructions

### Buy Domain:
- [Namecheap.com](https://namecheap.com)
- [GoDaddy.com](https://godaddy.com)
- [Google Domains](https://domains.google.com)

---

## Production Build & Testing

Before deploying:

```bash
# Create production build
npm run build

# Test production locally
npm start
```

Visit http://localhost:3000 to verify everything works.

---

## File Structure

```
rileys-barbershop/
├── app/
│   ├── page.tsx          # Homepage
│   ├── layout.tsx        # Root layout
│   └── globals.css       # Styles
├── public/
│   └── images/           # Add photos here
├── package.json          # Dependencies
├── tsconfig.json         # TypeScript config
├── tailwind.config.ts    # Tailwind setup
├── next.config.js        # Next.js config
├── README.md             # Setup instructions
├── DESIGN_CHANGES.md     # Design details
└── DEPLOYMENT_GUIDE.md   # This file
```

---

## Troubleshooting

### "npm: command not found"
- Install Node.js from [nodejs.org](https://nodejs.org)
- Restart terminal after install

### "Port 3000 already in use"
```bash
npm run dev -- -p 3001
```
(Uses port 3001 instead)

### Build fails on Vercel/Netlify
- Check that `tsconfig.json` exists
- Ensure `package.json` has correct scripts
- Look at deployment logs in dashboard

### Changes not showing
- Hard refresh browser: `Ctrl + Shift + R` (Windows/Linux) or `Cmd + Shift + R` (Mac)
- Clear browser cache

---

## Next Steps

1. ✅ Download code
2. ✅ Run locally (`npm run dev`)
3. ✅ Push to GitHub
4. ✅ Deploy to Vercel/Netlify
5. ⬜ Add real photos to `/public/images/`
6. ⬜ Update business info if needed
7. ⬜ Add custom domain
8. ⬜ Share with customers!

---

## Support

**Questions?**
- Next.js docs: [nextjs.org/docs](https://nextjs.org/docs)
- Tailwind docs: [tailwindcss.com](https://tailwindcss.com)
- Vercel docs: [vercel.com/docs](https://vercel.com/docs)

**Need help?**
- Check terminal error messages
- Google the error message
- Vercel/Netlify have live chat support
