# NIA Construction Website

A modern, single-page construction company website built with Next.js 15, featuring high-end animations and a royal blue color theme.

## Features

- **Modern Tech Stack**: Next.js 15 with TypeScript and Tailwind CSS
- **High-End Animations**: Framer Motion for smooth, professional animations
- **Responsive Design**: Mobile-first approach with beautiful UI on all devices
- **Royal Blue Theme**: Professional color scheme with royal blue and accent red
- **Single Page Layout**: Smooth scrolling sections including:
  - Hero section with animated background
  - About section with statistics
  - Services showcase with hover effects
  - Featured projects gallery
  - Contact form with info cards
  - Footer with social links

## Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Scroll Detection**: React Intersection Observer

## Getting Started

The development server is already running at:
- Local: http://localhost:3000
- Network: http://192.168.29.57:3000

## Project Structure

```
construction-site/
├── app/
│   ├── layout.tsx          # Root layout
│   ├── page.tsx            # Main page
│   └── globals.css         # Global styles
├── components/
│   ├── Navbar.tsx          # Navigation with scroll effect
│   ├── Hero.tsx            # Hero section with animations
│   ├── About.tsx           # About section with stats
│   ├── Services.tsx        # Services cards
│   ├── Projects.tsx        # Projects gallery
│   ├── Contact.tsx         # Contact form
│   └── Footer.tsx          # Footer section
└── public/
    └── logo.svg            # Company logo
```

## Customization

### Colors
The color theme is defined in `tailwind.config.ts`:
- Royal Blue: #1e40af
- Accent Red: #ef4444

### Content
Update the content in each component file to match your company's information.

### Logo
Replace `/public/logo.svg` with your actual logo file.

## Build for Production

```bash
npm run build
npm start
```

## Animation Features

- Scroll-triggered animations
- Hover effects on cards and buttons
- Smooth page transitions
- Animated backgrounds
- Interactive navigation
- Card flip and scale effects
