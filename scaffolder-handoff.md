# Scaffolder Handoff: Vashist Rohit Personal Website

## Overview
This document provides implementation-ready tasks for transforming the baseline template into the Vashist Rohit personal brand website.

---

## Project Context

**Brand:** Vashist Rohit  
**Positioning:** Conscious Builder — Web3 PM • Pilot • Life Coach • Conscious Investor  
**Theme:** Premium dark (slate-950 background, amber-400 accents)  
**Tech Stack:** Next.js 14+, TypeScript, Tailwind CSS, App Router

---

## Implementation Tasks

### Task 1: Content & Copy Updates

**Update page.tsx with new content structure:**

#### Hero Section
```tsx
// Replace current hero with:
<section className="min-h-screen flex items-center justify-center relative overflow-hidden">
  {/* Animated background - subtle gradient mesh or particles */}
  <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950" />
  
  <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
    <p className="text-amber-400 text-sm uppercase tracking-[0.3em] mb-4">
      Conscious Builder
    </p>
    <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-slate-100 mb-6">
      Vashist Rohit
    </h1>
    <p className="text-xl md:text-2xl text-slate-400 mb-8 max-w-2xl mx-auto leading-relaxed">
      I help ambitious people build success that actually matters.
      <br />
      <span className="text-slate-500">Web3 PM • Pilot • Life Coach • Conscious Investor</span>
    </p>
    <div className="flex flex-col sm:flex-row gap-4 justify-center">
      <Button size="lg" className="bg-amber-400 text-slate-950 hover:bg-amber-500">
        Book a Discovery Call
      </Button>
      <Button size="lg" variant="outline" className="border-slate-700 text-slate-300 hover:bg-slate-800">
        Explore My Work
      </Button>
    </div>
  </div>
</section>
```

#### Integration Section (4 Cards)
```tsx
<section className="py-24 px-4 bg-slate-950">
  <div className="max-w-6xl mx-auto">
    <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-slate-100">
      The Integration
    </h2>
    <p className="text-slate-400 text-center mb-16 max-w-2xl mx-auto">
      Four lenses. One unified approach to building conscious success.
    </p>
    
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {/* Card 1: Product Architect */}
      <Card className="bg-slate-900/50 border-slate-800 hover:border-amber-400/50 transition-all duration-300 hover:-translate-y-1 group">
        <CardHeader>
          <div className="w-12 h-12 rounded-lg bg-amber-400/10 flex items-center justify-center mb-4 group-hover:bg-amber-400/20 transition-colors">
            <Code className="w-6 h-6 text-amber-400" />
          </div>
          <CardTitle className="text-slate-100">Product Architect</CardTitle>
          <CardDescription className="text-slate-400">
            Building decentralized systems that actually work
          </CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-slate-500 mb-4">
            8+ years shipping products from 0→1 in Web3 and traditional tech
          </p>
          <div className="text-xs text-amber-400 uppercase tracking-wider opacity-0 group-hover:opacity-100 transition-opacity">
            How this serves you →
          </div>
        </CardContent>
      </Card>

      {/* Card 2: Perspective Engineer */}
      <Card className="bg-slate-900/50 border-slate-800 hover:border-amber-400/50 transition-all duration-300 hover:-translate-y-1 group">
        <CardHeader>
          <div className="w-12 h-12 rounded-lg bg-amber-400/10 flex items-center justify-center mb-4 group-hover:bg-amber-400/20 transition-colors">
            <Plane className="w-6 h-6 text-amber-400" />
          </div>
          <CardTitle className="text-slate-100">Perspective Engineer</CardTitle>
          <CardDescription className="text-slate-400">
            The cockpit taught me what boardrooms couldn't
          </CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-slate-500 mb-4">
            500+ flight hours of clarity under pressure and systems thinking
          </p>
          <div className="text-xs text-amber-400 uppercase tracking-wider opacity-0 group-hover:opacity-100 transition-opacity">
            How this serves you →
          </div>
        </CardContent>
      </Card>

      {/* Card 3: Transformation Partner */}
      <Card className="bg-slate-900/50 border-slate-800 hover:border-amber-400/50 transition-all duration-300 hover:-translate-y-1 group">
        <CardHeader>
          <div className="w-12 h-12 rounded-lg bg-amber-400/10 flex items-center justify-center mb-4 group-hover:bg-amber-400/20 transition-colors">
            <Heart className="w-6 h-6 text-amber-400" />
          </div>
          <CardTitle className="text-slate-100">Transformation Partner</CardTitle>
          <CardDescription className="text-slate-400">
            I don't give advice—I help you hear your own wisdom
          </CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-slate-500 mb-4">
            200+ hours coaching founders and executives to clarity
          </p>
          <div className="text-xs text-amber-400 uppercase tracking-wider opacity-0 group-hover:opacity-100 transition-opacity">
            How this serves you →
          </div>
        </CardContent>
      </Card>

      {/* Card 4: Capital Alchemist */}
      <Card className="bg-slate-900/50 border-slate-800 hover:border-amber-400/50 transition-all duration-300 hover:-translate-y-1 group">
        <CardHeader>
          <div className="w-12 h-12 rounded-lg bg-amber-400/10 flex items-center justify-center mb-4 group-hover:bg-amber-400/20 transition-colors">
            <TrendingUp className="w-6 h-6 text-amber-400" />
          </div>
          <CardTitle className="text-slate-100">Capital Alchemist</CardTitle>
          <CardDescription className="text-slate-400">
            Deploying capital where returns meet impact
          </CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-slate-500 mb-4">
            Focus: Web3 infrastructure, regenerative tech, human potential
          </p>
          <div className="text-xs text-amber-400 uppercase tracking-wider opacity-0 group-hover:opacity-100 transition-opacity">
            How this serves you →
          </div>
        </CardContent>
      </Card>
    </div>
  </div>
</section>
```

**Note:** Import icons from `lucide-react` (Code, Plane, Heart, TrendingUp)

---

### Task 2: Add Social Proof Section

```tsx
<section className="py-24 px-4 bg-slate-900">
  <div className="max-w-6xl mx-auto">
    <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-slate-100">
      What People Say
    </h2>
    <p className="text-slate-400 text-center mb-16">
      Real results from real collaboration
    </p>
    
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {/* Testimonial 1 */}
      <div className="bg-slate-950 p-8 rounded-2xl border border-slate-800">
        <p className="text-slate-300 mb-6 leading-relaxed">
          "Vashist helped me see around corners I didn't know existed. 
          My decision-making clarity improved 10x after just three sessions."
        </p>
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-full bg-slate-800" /> {/* Avatar placeholder */}
          <div>
            <p className="text-slate-200 font-medium">Client Name</p>
            <p className="text-slate-500 text-sm">Founder, Startup</p>
          </div>
        </div>
      </div>

      {/* Testimonial 2 */}
      <div className="bg-slate-950 p-8 rounded-2xl border border-slate-800">
        <p className="text-slate-300 mb-6 leading-relaxed">
          "The product strategy insights were invaluable. He doesn't just 
          understand Web3—he understands how to build products that matter."
        </p>
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-full bg-slate-800" />
          <div>
            <p className="text-slate-200 font-medium">Client Name</p>
            <p className="text-slate-500 text-sm">CTO, DeFi Protocol</p>
          </div>
        </div>
      </div>

      {/* Testimonial 3 */}
      <div className="bg-slate-950 p-8 rounded-2xl border border-slate-800">
        <p className="text-slate-300 mb-6 leading-relaxed">
          "His keynote at our leadership retreat was transformative. 
          The team is still talking about it months later."
        </p>
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-full bg-slate-800" />
          <div>
            <p className="text-slate-200 font-medium">Client Name</p>
            <p className="text-slate-500 text-sm">VP, Tech Company</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
```

---

### Task 3: Offerings Section

```tsx
<section className="py-24 px-4 bg-slate-950">
  <div className="max-w-6xl mx-auto">
    <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-slate-100">
      How I Can Help
    </h2>
    <p className="text-slate-400 text-center mb-16 max-w-2xl mx-auto">
      Three ways we can work together, depending on where you are in your journey
    </p>
    
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {/* Offering 1: Coaching */}
      <Card className="bg-slate-900 border-slate-800 relative overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-amber-400 to-amber-600" />
        <CardHeader>
          <CardTitle className="text-slate-100 text-xl">Conscious Leadership Coaching</CardTitle>
          <CardDescription className="text-slate-400">
            For founders and executives ready to lead from clarity
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <ul className="space-y-2 text-sm text-slate-300">
            <li className="flex items-start gap-2">
              <Check className="w-4 h-4 text-amber-400 mt-0.5 shrink-0" />
              <span>1:1 sessions tailored to your challenges</span>
            </li>
            <li className="flex items-start gap-2">
              <Check className="w-4 h-4 text-amber-400 mt-0.5 shrink-0" />
              <span>3-month minimum commitment</span>
            </li>
            <li className="flex items-start gap-2">
              <Check className="w-4 h-4 text-amber-400 mt-0.5 shrink-0" />
              <span>Between-session support via WhatsApp</span>
            </li>
          </ul>
          <div className="pt-4 border-t border-slate-800">
            <p className="text-2xl font-bold text-slate-100">$500<span className="text-sm font-normal text-slate-500">/session</span></p>
            <p className="text-xs text-slate-500 mt-1">Or $5,000 for 12-session program</p>
          </div>
          <Button className="w-full bg-amber-400 text-slate-950 hover:bg-amber-500">
            Apply for Coaching
          </Button>
          <p className="text-xs text-slate-500 text-center">Limited to 5 clients per month</p>
        </CardContent>
      </Card>

      {/* Offering 2: Advisory */}
      <Card className="bg-slate-900 border-slate-800 relative overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-emerald-400 to-emerald-600" />
        <CardHeader>
          <CardTitle className="text-slate-100 text-xl">Web3 Product Advisory</CardTitle>
          <CardDescription className="text-slate-400">
            Strategic guidance for building products that matter
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <ul className="space-y-2 text-sm text-slate-300">
            <li className="flex items-start gap-2">
              <Check className="w-4 h-4 text-emerald-400 mt-0.5 shrink-0" />
              <span>Product strategy & roadmap planning</span>
            </li>
            <li className="flex items-start gap-2">
              <Check className="w-4 h-4 text-emerald-400 mt-0.5 shrink-0" />
              <span>Team structure & hiring guidance</span>
            </li>
            <li className="flex items-start gap-2">
              <Check className="w-4 h-4 text-emerald-400 mt-0.5 shrink-0" />
              <span>Go-to-market strategy</span>
            </li>
          </ul>
          <div className="pt-4 border-t border-slate-800">
            <p className="text-2xl font-bold text-slate-100">$10K<span className="text-sm font-normal text-slate-500">/month</span></p>
            <p className="text-xs text-slate-500 mt-1">Retainer or project-based available</p>
          </div>
          <Button className="w-full bg-emerald-400 text-slate-950 hover:bg-emerald-500">
            Book Strategy Call
          </Button>
          <p className="text-xs text-slate-500 text-center">Free 30-minute discovery call</p>
        </CardContent>
      </Card>

      {/* Offering 3: Speaking */}
      <Card className="bg-slate-900 border-slate-800 relative overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-400 to-blue-600" />
        <CardHeader>
          <CardTitle className="text-slate-100 text-xl">Keynotes & Workshops</CardTitle>
          <CardDescription className="text-slate-400">
            Inspire your team to think bigger and build better
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <ul className="space-y-2 text-sm text-slate-300">
            <li className="flex items-start gap-2">
              <Check className="w-4 h-4 text-blue-400 mt-0.5 shrink-0" />
              <span>60-90 minute keynotes</span>
            </li>
            <li className="flex items-start gap-2">
              <Check className="w-4 h-4 text-blue-400 mt-0.5 shrink-0" />
              <span>Half-day interactive workshops</span>
            </li>
            <li className="flex items-start gap-2">
              <Check className="w-4 h-4 text-blue-400 mt-0.5 shrink-0" />
              <span>Custom content for your audience</span>
            </li>
          </ul>
          <div className="pt-4 border-t border-slate-800">
            <p className="text-2xl font-bold text-slate-100">$5K<span className="text-sm font-normal text-slate-500">+</span></p>
            <p className="text-xs text-slate-500 mt-1">Starting price, varies by scope</p>
          </div>
          <Button className="w-full bg-blue-400 text-slate-950 hover:bg-blue-500">
            Check Availability
          </Button>
          <p className="text-xs text-slate-500 text-center">Book 4+ weeks in advance</p>
        </CardContent>
      </Card>
    </div>
  </div>
</section>
```

---

### Task 4: Navigation & Layout Updates

**Update layout.tsx:**
```tsx
// Add proper metadata
export const metadata = {
  title: 'Vashist Rohit | Conscious Builder — Web3 PM, Pilot & Life Coach',
  description: 'Vashist Rohit helps founders and leaders build conscious success through product strategy, executive coaching, and mindful investing. Book a discovery call.',
  openGraph: {
    title: 'Vashist Rohit | Conscious Builder',
    description: 'Web3 PM • Pilot • Life Coach • Conscious Investor',
    type: 'website',
  },
}
```

**Create Navigation component (components/Navigation.tsx):**
```tsx
'use client'

import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { Menu, X } from 'lucide-react'

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { href: '#about', label: 'About' },
    { href: '#integration', label: 'Integration' },
    { href: '#offerings', label: 'Offerings' },
    { href: '#insights', label: 'Insights' },
  ]

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-slate-950/80 backdrop-blur-md border-b border-slate-800' 
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 py-4">
        <nav className="flex items-center justify-between">
          <a href="#" className="text-xl font-bold text-slate-100">
            VR
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a 
                key={link.href}
                href={link.href}
                className="text-sm text-slate-400 hover:text-slate-100 transition-colors"
              >
                {link.label}
              </a>
            ))}
            <Button 
              size="sm" 
              className="bg-amber-400 text-slate-950 hover:bg-amber-500"
            >
              Book a Call
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-slate-100"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X /> : <Menu />}
          </button>
        </nav>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-slate-950 border-b border-slate-800 py-4">
            {navLinks.map((link) => (
              <a 
                key={link.href}
                href={link.href}
                className="block px-4 py-2 text-slate-400 hover:text-slate-100"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <div className="px-4 pt-4">
              <Button className="w-full bg-amber-400 text-slate-950 hover:bg-amber-500">
                Book a Call
              </Button>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
```

---

### Task 5: Calendly Integration

**Install Calendly embed:**
```bash
npm install react-calendly
```

**Create BookingModal component:**
```tsx
'use client'

import { PopupModal } from 'react-calendly'
import { useState } from 'react'
import { Button } from '@/components/ui/button'

export function BookingButton({ 
  children, 
  className 
}: { 
  children: React.ReactNode
  className?: string 
}) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <Button 
        onClick={() => setIsOpen(true)}
        className={className}
      >
        {children}
      </Button>
      <PopupModal
        url="https://calendly.com/vashistrohit/discovery" // Update with actual Calendly URL
        onModalClose={() => setIsOpen(false)}
        open={isOpen}
        rootElement={document.getElementById('__next') || document.body}
      />
    </>
  )
}
```

---

### Task 6: Tailwind Config Updates

**Update tailwind.config.ts:**
```typescript
import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Custom color extensions if needed
        slate: {
          950: '#020617',
          900: '#0f172a',
          800: '#1e293b',
        },
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}
export default config
```

---

### Task 7: Analytics Setup

**Add Google Analytics (app/layout.tsx):**
```tsx
import Script from 'next/script'

// In head:
<Script
  src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"
  strategy="afterInteractive"
/>
<Script id="google-analytics" strategy="afterInteractive">
  {`
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'GA_MEASUREMENT_ID');
  `}
</Script>
```

---

## File Structure

```
src/
├── app/
│   ├── layout.tsx          # Update with metadata + Navigation
│   ├── page.tsx            # Main page with all sections
│   └── globals.css         # Ensure dark theme base styles
├── components/
│   ├── ui/                 # Existing shadcn components
│   ├── Navigation.tsx      # New: Sticky nav
│   ├── BookingButton.tsx   # New: Calendly integration
│   └── sections/           # New: Section components (optional)
│       ├── Hero.tsx
│       ├── Integration.tsx
│       ├── SocialProof.tsx
│       ├── Offerings.tsx
│       └── Footer.tsx
├── lib/
│   └── utils.ts
└── types/
    └── index.ts
```

---

## Dependencies to Install

```bash
# Icons
npm install lucide-react

# Calendly integration
npm install react-calendly

# Animation (optional - for advanced animations)
npm install framer-motion
```

---

## Assets Needed

**Images (place in /public):**
- `/og-image.jpg` - 1200x630px for social sharing
- `/favicon.ico` - Multi-resolution favicon
- `/apple-touch-icon.png` - 180x180px
- Testimonial avatars (or use placeholders initially)

**Fonts:**
- Already using Inter (via Next.js font optimization)

---

## Testing Checklist

- [ ] All CTAs open Calendly modal
- [ ] Navigation smooth scrolls to sections
- [ ] Mobile menu works correctly
- [ ] Cards have hover effects
- [ ] Page passes Lighthouse audit (90+)
- [ ] Meta tags render correctly (use https://www.opengraph.xyz/)
- [ ] Analytics events fire on CTA clicks
- [ ] Reduced motion preferences respected

---

## Notes

1. **Placeholder Content:** Replace "Client Name" and testimonial text with actual content when available
2. **Calendly URL:** Update with actual Calendly link before deployment
3. **Analytics ID:** Replace GA_MEASUREMENT_ID with actual tracking ID
4. **Images:** Add actual testimonial photos when available

---

*Handoff Version: 1.0*  
*For: @scaffolder*  
*Project: Vashist Rohit Personal Website*
