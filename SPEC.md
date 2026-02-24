# SOAKED Property Cleaning - Landing Page Specification

## Project Overview
- **Project Name**: SOAKED Property Cleaning Landing Page
- **Type**: Premium React Landing Page
- **Core Functionality**: High-converting property cleaning service landing page with modern, premium design
- **Target Users**: Property owners seeking professional cleaning services

## Tech Stack
- React 18+ with Vite
- Tailwind CSS
- Framer Motion (subtle animations only)
- Lucide React (icons)

## Color Palette
- **Primary (Deep Navy)**: #0B1C3D
- **Primary Dark**: #060D1F
- **Accent (Soft Sky Blue)**: #4A90D9
- **Accent Light**: #7AB3E8
- **Background**: #F8FAFC
- **Background Alt**: #FFFFFF
- **Text Primary**: #0B1C3D
- **Text Secondary**: #64748B
- **Text Light**: #94A3B8
- **Border**: #E2E8F0

## Typography
- **Heading Font**: "Outfit" (Google Fonts) - Bold, modern geometric sans-serif
- **Body Font**: "DM Sans" (Google Fonts) - Clean, readable

## Font Sizes
- Hero Title: 72px (desktop), 40px (mobile)
- Section Title: 48px (desktop), 32px (mobile)
- Card Title: 24px
- Body: 16px
- Small: 14px

## Spacing System
- Section padding: 120px vertical (desktop), 80px (mobile)
- Container max-width: 1280px
- Component gap: 24px
- Card padding: 32px

## Component Structure

### 1. Navbar
- Fixed position, transparent on top, solid on scroll
- Logo (text-based: "SOAKED")
- Navigation links: Services, About, Process, Contact
- CTA button: "Get Quote"
- Mobile: Hamburger menu

### 2. Hero Section
- Full viewport height
- Dark navy background with subtle animated gradient
- Headline: "Restore Your Property. Instantly."
- Subheadline: "Professional exterior cleaning that makes your property look brand new."
- Two CTAs: Primary (filled), Secondary (outline)
- Animated background effect using CSS

### 3. Trust Bar
- Light gray background
- 4 items: 5-Star Rated, Fully Insured, Fast Response, Professional Equipment
- Minimal icons (Lucide)
- Horizontal layout on desktop, 2x2 grid on mobile

### 4. About Section
- Split layout (50/50)
- Left: Heading + premium copy
- Right: Image placeholder with soft shadow
- Headline: "Property Cleaning Done Properly."

### 5. Services Section
- 6 service cards in responsive grid (3x2 desktop, 2x3 tablet, 1x6 mobile)
- Cards: Pressure Washing, Driveway Cleaning, Roof Cleaning, Patio Restoration, Gutter Cleaning, Commercial Cleaning
- Hover effects: lift + accent border
- Icon + title + short description

### 6. Before & After Section
- Dark navy background
- Image comparison placeholder
- Title: "The Transformation Speaks for Itself."

### 7. Process Section
- 4 steps with numbered circles
- Minimal line connectors
- Steps: Request Quote → Schedule → Deep Clean → Enjoy Results

### 8. Testimonials Section
- Card carousel (horizontal scroll or auto-fade)
- 5-star rating
- Client name + review text
- Soft background

### 9. Final CTA Section
- Dark navy background
- Glow effect on hover
- Headline: "Ready to Make Your Property Look Brand New?"
- Primary button: "Get Your Free Quote Today"

### 10. Footer
- 4-column layout
- Logo + tagline
- Contact info
- Service areas
- Social links (placeholder icons)

## Animations (Framer Motion)
- Fade-in on scroll for sections
- Subtle slide-up for content
- Hover lift for cards (translateY -4px)
- Smooth navbar transition
- Button hover scale (1.02)

## Performance Requirements
- Lazy load images
- Use React.lazy for components
- Optimize Tailwind CSS (purge unused)
- Lighthouse target: 90+

## Responsive Breakpoints
- Mobile: < 640px
- Tablet: 640px - 1024px
- Desktop: > 1024px
