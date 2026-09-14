# Riley's Barbershop Website

A production-quality homepage for Riley's Barbershop built with Next.js, TypeScript, and Tailwind CSS.

## Project Structure

```
app/
├── layout.tsx       # Root layout with metadata
├── page.tsx         # Homepage (only page in this build)
└── globals.css      # Global styles and typography
package.json         # Dependencies
tsconfig.json        # TypeScript configuration
tailwind.config.ts   # Tailwind CSS configuration
next.config.js       # Next.js configuration
postcss.config.js    # PostCSS configuration
```

## Setup & Installation

1. Install dependencies:
   ```bash
   npm install
   ```

2. Run development server:
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) in your browser.

3. Build for production:
   ```bash
   npm run build
   npm start
   ```

## Features

### Homepage Sections
1. **Sticky Navigation** - Brand, service links, call CTA
2. **Hero** - Strong headline, supporting copy, CTAs
3. **Trust** - 4.5 star rating, 20 reviews, value propositions
4. **Services** - All 10 services displayed as clean cards
5. **About** - Local, friendly barber positioning
6. **Gallery** - Placeholder structure for local photos (add images in `/public/images`)
7. **Reviews** - Rating summary, space for verified testimonials
8. **Contact** - Address, phone, directions, call CTAs
9. **Final CTA** - Strong call to action
10. **Footer** - Links, contact, copyright

### Design
- **Premium but approachable** - Clean typography, high contrast
- **Mobile-first** - Responsive design that works great on all devices
- **Fast loading** - Minimal dependencies, no unnecessary animations
- **Masculine character** - Strong typography, authoritative color palette
- **Local American barbershop** - Straightforward, community-focused

## Customization

### Adding Gallery Images
1. Create `/public/images/` directory
2. Add your photos
3. Update the gallery section in `app/page.tsx` to reference real images

### Adding Review Testimonials
Update the reviews section in `app/page.tsx` with verified Google reviews.

### Updating Business Info
All business information is centralized in the `businessData` object at the top of `app/page.tsx`.

## Notes
- No user history or invented data
- Clean, semantic HTML structure
- Tailwind CSS for styling (no custom component library)
- Fully responsive mobile experience
- Production-ready configuration
