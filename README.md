# Freezer Pal 🧊

> **The Conscious Kitchen Ecosystem**  
> Streamline meal planning, synchronize shared family shopping lists, and eliminate food waste straight from your freezer with a modern, high-fidelity digital dashboard.

---

## 🍽️ About Freezer Pal
Freezer Pal is a modern full-stack web application designed for households looking to practice **total madkontrol** (total kitchen control). By mapping out what you already have in your freezer, Freezer Pal helps reduce food waste (**undgå madspild**), intelligently plans weekly meals based on available ingredients, and synchronizes real-time shopping lists across the household.

Designed with premium aesthetic values and fluid interactive states, Freezer Pal provides an experience built around high-density typography, smooth scrolling, and an advanced **Liquid Frosted Glass** visual language.

---

## ✨ Core Features

### 🧊 1. Total Pantry & Freezer Mapping (Overblikket)
*   Keep a precise, categorizeable record of your freezer drawers.
*   Prevent food items from being forgotten in the depths of your freezer shelves.
*   Helps save a typical Danish household up to 1,500 kr. annually by utilizing forgotten ingredients.

### 🗓️ 2. Fælles Madplan (Shared Meal Planner Sync)
*   Generate weekly rotating dinner plans primarily leveraging items already in stock.
*   Consolidated system reduces last-minute impulse purchases.
*   Dramatically shortens prep and cooking times.

### 🛒 3. Live Dele-indkøbsliste (Family-Synced Shopping Lists)
*   A real-time shared shopping list synced instantly across family devices.
*   Prevents duplicate purchases (e.g., getting double milk because of split shopping trips).
*   Intelligent, context-sensitive suggestions based on meal plans and leftover stock.

### 🎨 4. Liquid Frosted Glass UI
*   High-fidelity liquid glassmorphism design tokens utilizing optimized hardware-accelerated backdrops (`backdrop-filter`) and saturation multipliers.
*   Engineered above a warm, inviting **Milk Base** tone to replace standard harsh off-whites.

---

## 🎨 Visual Identity & Design System

Freezer Pal is defined by an elegant, high-contrast, editorial design guidelines module natively available within the application's internal Brand Guide.

### Color Palette
| Color | Name | Hex | Usage |
| :--- | :--- | :--- | :--- |
| ![#3D5A38](https://placeholder-renderer.herokuapp.com/color/3D5A38?width=24&height=24) | **Tactical Olive** | `#3D5A38` | Brand core, dark backdrops, text headings |
| ![#AFE648](https://placeholder-renderer.herokuapp.com/color/AFE648?width=24&height=24) | **Kinetic Chartreuse** | `#AFE648` | Interactive call-to-actions, highlights |
| ![#FAF9F6](https://placeholder-renderer.herokuapp.com/color/FAF9F6?width=24&height=24) | **Milk Base** | `#FAF9F6` | Global page backdrop, replacing standard whites |
| ![#527A4D](https://placeholder-renderer.herokuapp.com/color/527A4D?width=24&height=24) | **Forest Light** | `#527A4D` | Editorial backgrounds, badge structures |

### Typography Guidelines
*   **Headings/Rubrik**: `Stack Sans Headline` — Bold, premium, high-impact display lettering.
*   **Body Copy/Brødtekst**: `Inter` — Human, neutral, and meticulously clear across small screens.

---

## ⚙️ Built With

*   **Framework**: [Astro (v6)](https://astro.build/) — Fast island architecture combining content delivery with interactive elements.
*   **Component Model**: [React (v19)](https://react.dev/) — Interactive application modules and state machines.
*   **Styling Engine**: [Tailwind CSS (v4)](https://tailwindcss.com/) — Responsive, modern design frameworks.
*   **Animations**: [Motion](https://motion.dev/) — Premium micro-interactions, spring layouts, and stagger effects.
*   **Scroll Kinetics**: [GSAP](https://gsap.com/) & [Lenis](https://lenis.darkroom.engineering/) — Fluid, consistent scroll-triggered physics.

---

## 📂 Codebase Architecture

The project maintains a highly modular design split between statically optimized page wraps and reusable visual components:

```
├── src/
│   ├── components/
│   │   ├── brand/               # Modular sections of the Brand Guidelines
│   │   │   ├── BrandLogo.tsx       # Logo placement rules & minimum scale
│   │   │   ├── BrandColors.tsx     # Hex code values & swatches
│   │   │   ├── BrandTypography.tsx # Layout specimens
│   │   │   ├── BrandIcons.tsx      # System icons from lucide-react
│   │   │   ├── BrandBackgrounds.tsx# Textures and overlay patterns
│   │   │   ├── BrandImagery.tsx    # Unsplash photography styles
│   │   │   └── BrandButtons.tsx    # Interactive buttons and Google Play assets
│   │   ├── Benefits.tsx         # Detailed feature grid & glass elements
│   │   ├── Cta.tsx              # Dynamic scroll-scale CTA component
│   │   ├── Faq.tsx              # Collapsible interaction with calculator
│   │   ├── Hero.tsx             # Interactive header & smartphone asset
│   │   ├── HowItWorks.tsx       # Scrolling device simulation chapter engine
│   │   ├── LiquidGL.tsx         # Liquid Frosted Glass layout engine
│   │   ├── Logo.tsx             # Reusable SVG snowflake mark
│   │   └── Navbar.tsx           # Floating responsive frosted menu
│   ├── pages/
│   │   ├── Landing.tsx          # Assembled landing modules
│   │   ├── BrandGuide.tsx       # Fully functioning Brand Guide module
│   │   ├── brand.astro          # Astro entrypoint for public brand guide
│   │   └── index.astro          # Main SEO-optimized home entrypoint
│   ├── index.css                # Global CSS variables & liquid class attributes
│   └── Layout.tsx               # Master app shell
├── astro.config.mjs             # High-speed Astro packaging server configurations
└── package.json                 # Dependency list & compilation execution triggers
```

---

## 🚀 Getting Started

To run Freezer Pal locally in your own development environment, perform the following steps:

### Prerequisites
Ensure you have **Node.js** (v18 or higher) and **npm** installed on your system.

### 1. Clone & Position
Navigate to your desired directory and extract the project:
```bash
cd freezer-pal
```

### 2. Dependency Installation
Install the necessary package engines, including React 19, Tailwind CSS v4, Motion, and GSAP:
```bash
npm install
```

### 3. Start the Development Server
Launch the Astro development process locally (automatically configured on port `3000`):
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your web browser to view the application.

### 4. Direct Production Compilation
Compile a fully static, edge-optimized production build:
```bash
npm run build
```
The output assets will be rendered directly in the `/dist` directory, completely optimized for lightning-fast deployments.

---

## 🔎 SEO & Search Optimization
The project integrates pre-render crawl configurations and automated Schema representations to scale Google search discovery:
*   **JSON-LD Structured Data**: Includes interactive semantic configurations pointing to pricing metadata, features, and operating systems.
*   **Canonical Localization**: Embedded with Danish meta directives (`lang="da"`, local search optimization mappings) to dominate localized search listings.

---

## 📄 License
This project is proprietary and built exclusively for the **Freezer Pal** design ecosystem.
