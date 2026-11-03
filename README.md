# GRAVE ALTAR — Gothic Accessories

> *“Forged in Shadow. Worn in Devotion.”*

Award-level luxury e-commerce experience crafted for **GRAVE ALTAR** using React, Vite, Tailwind CSS, Lenis, GSAP, and Zustand.

---

## ⚡ Quick Start

```bash
# Install dependencies
npm install

# Launch development server
npm run dev

# Build for production
npm run build
```
Live server runs on `http://localhost:5173/`.

---

## 🏛️ Brand & Design System

- **Colors:**
  - `--black`: `#050505` (Main deep background)
  - `--charcoal`: `#0e0e0f` / `#131316` (Cards, surfaces)
  - `--pewter`: `#8f8d88` (Secondary typography, hairline borders)
  - `--silver`: `#d6d3cc` (Headings, primary accents, metal gleam)
  - `--bone`: `#efeae0` (Primary body text)
  - `--blood`: `#5c0f14` (Rare consecrated accent, limited stock tags, sacred CTAs)
- **Atmosphere & Textures:**
  - Film grain noise overlay (`.film-grain`)
  - Radial dark vignette
  - 1px hairline silver borders
  - Monogram-inspired fleur-de-lis, crescent, and dagger dividers
  - Chamfered corner button geometry with slow metallic shimmer
  - Uniform gothic image desaturation & contrast grading (`.gothic-photo`)
- **Official Brand Logo:**
  - Placed in `public/images/grave-altar-logo.jpg` and featured across the Header, Cinematic Loader, Footer, and Favicon.

---

## 📱 Mobile Native App Experience (< 768px)

Below 768px, the site automatically switches into a native mobile app feel:
1. **Fixed Bottom Tab Bar:** Instant navigation with active indicator dots (Home, Shop, Saved Reliquary with live count, Cart with live count, Creed).
2. **Compact Top App Bar:** Monogram logo with instant search and hamburger menu.
3. **Swipeable Scroll-Snap Rails:** Seamless thumb-scrolling through featured relics.
4. **Bottom-Sheet Modals:** Drag-to-close feel for filters and quick-view examine.
5. **Sticky Mobile Action Bar:** Fixed purchase bar on product pages with instant one-tap Add to Cart.
6. **Haptic Feedback Simulation:** Interactive scaling on press (`:active scale(0.96)`).
7. **PWA Ready:** Configured with `public/manifest.json`.

---

## 🛠️ How to Customize

### 1. Swapping Images
All imagery is centralized in a single file:  
👉 [`src/data/images.js`](file:///d:/Techora/Grave%20Altar/src/data/images.js)  
Update any direct URL or local asset path here, and it will automatically reflect across the entire store.

### 2. Adding / Editing Products
All product definitions, prices, stock, alloy details, and descriptions live in:  
👉 [`src/data/products.js`](file:///d:/Techora/Grave%20Altar/src/data/products.js)  
- `price`: INR (₹)
- `material`: Metal composition (e.g., .925 Sterling Silver, Obsidian)
- `sizes`: Array of sizes
- `images`: Dual image paths for the hover flip effect

### 3. Modifying Brand Lore & FAQs
Text, testimonials, and philosophy can be edited in:  
👉 [`src/data/brand.js`](file:///d:/Techora/Grave%20Altar/src/data/brand.js)

### 4. Updating Theme & Palette
Customize colors, fonts, or keyframes in:  
👉 [`tailwind.config.js`](file:///d:/Techora/Grave%20Altar/tailwind.config.js) and [`src/styles/index.css`](file:///d:/Techora/Grave%20Altar/src/styles/index.css)

---

## 📐 Tested Breakpoints

Tested and verified with zero horizontal overflow across:
- **Mobile (375px)**: Native app layout with fixed bottom navigation and swipe rails.
- **Tablet (768px)**: Balanced 2-column editorial grid.
- **Desktop (1280px & 1920px)**: Full cinematic experience with custom silver crescent cursor, Lenis smooth scroll, and asymmetric editorial layouts.

