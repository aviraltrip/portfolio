# Aviral Tripathi — Personal Portfolio

A modern, high-performance personal portfolio website built with **React**, **Vite**, **Tailwind CSS**, and integrated with **GSAP (ScrollTrigger)** and **Lenis** for an Awwwards-style, fluid scrolling and creative motion experience.

## ✨ Highlights & Motion System

- **Smooth Inertial Scrolling:** Integrated **Lenis** for natural, buttery-smooth scrolling with custom exponential easing and touch/wheel normalization.
- **Scroll Choreography & Parallax:** Built with **GSAP + ScrollTrigger** for hardware-accelerated animations, subtle ambient glow parallax, and synchronized scroll reveals.
- **Micro-Interactions:** Subtle magnetic pulls on key interactive elements, cascading wave staggers on skill badges, and preview mockups with scroll scrub.
- **Clean Responsive Design:** Minimalist dark/light theme support, glassmorphism cards, and typography optimized across desktop, tablet, and mobile.
- **Performance & Accessibility First:** Respects `prefers-reduced-motion` preferences, utilizes GPU-accelerated transforms (`translate3d`, `opacity`), and guarantees zero memory leaks with React 19 lifecycle cleanup via `gsap.context()`.

## 🛠️ Tech Stack

- **Framework:** React 19 + Vite
- **Styling:** Tailwind CSS (v4)
- **Motion & Smooth Scroll:** GSAP 3 (ScrollTrigger) + Lenis
- **Icons:** Lucide React + Simple Icons
- **Contact Service:** EmailJS
- **Deployment:** Vercel

## 🚀 Getting Started

### Prerequisites

- Node.js (v18 or higher recommended)
- npm / yarn / pnpm

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/aviraltrip/portfolio.git
   cd portfolio/portfolio
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Set up environment variables (for EmailJS contact form):
   Create a `.env` file in the project folder:
   ```env
   VITE_EMAILJS_SERVICE_ID=your_service_id
   VITE_EMAILJS_TEMPLATE_ID=your_template_id
   VITE_EMAILJS_USER_ID=your_user_id
   ```

4. Start the development server:
   ```bash
   npm run dev
   ```

5. Build for production:
   ```bash
   npm run build
   ```

## 📄 License

MIT © Aviral Tripathi
