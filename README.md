# BlueMarlinBD - Elite Industrial Manufacturing Platform

BlueMarlinBD is a premium B2B manufacturing website built with React and Vite. It features an advanced industrial aesthetic, high-performance animations, and a structured quote request flow designed for global enterprise scale.

## 🎯 Project Overview

This platform serves as the digital headquarters for BlueMarlinBD, specializing in bulk plastic manufacturing, CNC machining, and OEM custom molding solutions. The project emphasizes professional reliability, high capacity, and enterprise-grade precision.

## ✨ Key Features

- **Elite Industrial UI**: A sophisticated dark theme with deep contrast, glassmorphism, and radial background depth.
- **Advanced Motion & Parallax**: High-end animations powered by Framer Motion, including staggered text reveals, scroll-based parallax, and 3D tilt effects on cards.
- **Multi-Step B2B Quote Flow**: A professional 4-step lead capture form designed for high conversion, collecting structured requisition data.
- **Product Catalog**: A clean, filterable industrial product grid with zoom-on-hover effects and persistent B2B calls-to-action.
- **Shared Architecture**: Modular component structure (Stats, Process, TiltCards) for maximum code reusability across pages.
- **Mobile Optimized**: Fully responsive layouts ensuring a premium experience across all device sizes.
- **Global Contextual Routing**: Seamless transitions and state-based data passing (e.g., pre-filling quotes from product cards).

## 🛠️ Technical Stack

- **Framework**: [React 19](https://react.dev/)
- **Bundler**: [Vite 8](https://vitejs.dev/)
- **Styling**: [Tailwind CSS 3](https://tailwindcss.com/)
- **Animations**: [Framer Motion 12](https://www.framer.com/motion/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Routing**: [React Router Dom 7](https://reactrouter.com/)
- **Utilities**: `clsx`, `tailwind-merge`, `react-countup`

## 📂 Project Structure

```bash
src/
├── animations/    # Reusable Framer Motion variants
├── components/
│   ├── layout/    # Navbar, Footer, MainLayout
│   └── shared/    # Stats, Process, WhatsAppButton, TiltCards
├── layouts/       # Route-level layout wrappers
├── pages/         # Home, About, Services, Products, Contact, RequestQuote
├── routes/        # App routing configuration
├── App.jsx        # Root application component
├── index.css      # Global styles & design tokens
└── main.jsx       # Entry point
```

## 🚀 Getting Started

### Prerequisites

- Node.js (v18+)
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   ```
2. Install dependencies:
   ```bash
   npm install
   ```

### Development

Run the local development server with HMR:
```bash
npm run dev
```

### Build

Build the production-ready bundle:
```bash
npm run build
```

## 📜 Contributing

This project uses a standard feature-branch workflow. Please ensure all UI components strictly adhere to the established dark industrial theme and design tokens.

---

© 2026 BlueMarlinBD. All rights reserved.
