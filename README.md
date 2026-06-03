# Freezer Pal — Website & Brand Guidelines Platform 🧊

> **The Digital Presentation Layer for the Conscious Kitchen.**  
> A high-performance, responsive marketing platform built using Astro 6, React 19, and Tailwind CSS v4. Features fluid scroll kinematics, a live custom savings calculator, and an integrated interactive brand guide.

---

## 🌐 Project Overview
This repository contains the frontend codebase for the official **Freezer Pal** website. Rather than the application itself, this codebase is the digital landing interface designed to introduce users to the Freezer Pal ecosystem, drive marketing acquisition, and present the brand's complete layout guidelines.

### Key Digital Experiences Included:
1.  **Acquisition Landing Page**: An immersive single-page landing site designed with scroll-driven animations showing the mobile application features (shared meal planning, freezer stock tracking, and synced shopping lists).
2.  **Interactive Savings Calculator**: A React-powered calculator that helps potential users calculate financial and environmental gains (CO2 reduction) based on household metrics directly on the site.
3.  **Digital Brand Guidelines Platform**: An in-browser design system dashboard (`/brand`) documenting typography pairings, color spaces, button patterns, asset guidelines, and responsive layout foundations.

---

## 🛠️ Stack & Optimization Architecture

This website is engineered for speed, SEO, and elegant motion:

*   **Astro v6**: Leveraged for modern, content-first static setups. It keeps baseline JavaScript loads near zero by server-rendering static content, only loading interactive islands where necessary.
*   **React v19**: Powers the interactive components, including the savings calculator and the brand guidelines nav-state modules.
*   **Tailwind CSS v4**: Utility-first styling with key color-space modifications (including the clean, milk-based `#FAF9F6` canvas background).
*   **Motion**: Orchestrates transitions and smooth spring layouts.
*   **GSAP & Lenis**: Manages fluid, responsive scroll choreography and smooth-scroll kinetics.

---

## 🎨 Design Engineering (Liquid Frosted Glass)

The website uses a custom-curated, glassy visual aesthetic called **Liquid Frosted Glass**. Rather than utilizing static, flat off-white card patterns, the interface implements custom-crafted hardware-accelerated glassy utility blocks:

```css
/* Custom class definitions from src/index.css */
.glass {
  background: linear-gradient(135deg, rgba(255, 255, 255, 0.5) 0%, rgba(255, 255, 255, 0.2) 100%);
  backdrop-filter: blur(20px) saturate(160%);
  -webkit-backdrop-filter: blur(20px) saturate(160%);
  border: 1px solid rgba(255, 255, 255, 0.8);
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.05), inset 0 1px 2px rgba(255, 255, 255, 0.8);
}
```

These classes are dynamically implemented across:
*   **Navigation elements**: Floating headers that transition seamlessly back and forth from transparent states as the page scrolls.
*   **Interactive Cards**: Content containers and testimonial blocks that blend smoothly over color variations.
*   **Brand Guidelines Sidebar**: A sticky, scroll-tracked utility column that matches light and dark frosted standards.

---

## 📁 Repository Structure

```
├── src/
│   ├── components/
│   │   ├── brand/               # Direct design system visual components
│   │   │   ├── BrandLogo.tsx       # Logo usage, scaling margins, and download hooks
│   │   │   ├── BrandColors.tsx     # Color definition blocks and Hex palettes
│   │   │   ├── BrandTypography.tsx # Font style samples and stack specs
│   │   │   ├── BrandIcons.tsx      # System icons from Lucide
│   │   │   ├── BrandBackgrounds.tsx# Textures, overlays, and background pairings
│   │   │   ├── BrandImagery.tsx    # Curation guidelines for photography styles
│   │   │   └── BrandButtons.tsx    # CTA and app download assets
│   │   ├── Benefits.tsx         # Responsive feature showcase
│   │   ├── Cta.tsx              # Interactive scale-triggered exit section
│   │   ├── Faq.tsx              # Accordion component & Savings Calculator
│   │   ├── Hero.tsx             # Interactive header & mockup smartphone frame
│   │   ├── HowItWorks.tsx       # Step-by-step feature progression view
│   │   ├── LiquidGL.tsx         # The Liquid Frosted glass wrapper component
│   │   ├── Logo.tsx             # Vector snowflake brand mark
│   │   └── Navbar.tsx           # Floating scrolled glass header
│   ├── pages/
│   │   ├── Landing.tsx          # Marketing components composer
│   │   ├── BrandGuide.tsx       # Live style guide implementation
│   │   ├── brand.astro          # Brand guide page layout wrapper
│   │   └── index.astro          # Landing page layout entry point
│   ├── index.css                # Style foundations, design system variables, and utilities
│   └── Layout.tsx               # Primary application page wrapper
├── astro.config.mjs             # Astro compilation and runtime setup
└── package.json                 # Core dependencies and developer scripts
```

---

## 🚀 Setting Up the Website Locally

Follow these instructions to clone, develop on, and compile this marketing site:

### Prerequisites
*   **Node.js** (v18 or higher recommended)
*   **npm** or your preferred Node package manager

### 1. Installation
Install the project's dependencies:
```bash
npm install
```

### 2. Run the Development Server
Launch the Astro development process:
```bash
npm run dev
```
By default, the environment starts on port **3000**. Open [http://localhost:3000](http://localhost:3000) inside your web browser.

### 3. Lint and Quality Verification
To audit your TypeScript configurations and verify styling consistency:
```bash
npm run lint
```

### 4. Build for Production
To output an optimized, completely static compilation of the marketing funnel:
```bash
npm run build
```
The static file server assets will be written directly inside the `/dist` directory, fully primed for high-speed edge distribution (Cloud Run, Netlify, Vercel, S3).
