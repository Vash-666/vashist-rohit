# UX Specification: Vashist Website v2.1

## Implementation-Ready Animation Specifications

---

## 1. Hero Section Animations

### 1.1 Typing Animation for "Vash"
```css
/* CSS Animation */
@keyframes typeChar {
  from { opacity: 0; transform: translateY(10px); }
  to { opacity: 1; transform: translateY(0); }
}

@keyframes cursorBlink {
  0%, 50% { opacity: 1; }
  51%, 100% { opacity: 0; }
}

@keyframes glowPulse {
  0%, 100% { text-shadow: 0 0 20px rgba(201, 162, 39, 0.3); }
  50% { text-shadow: 0 0 40px rgba(201, 162, 39, 0.6), 0 0 60px rgba(201, 162, 39, 0.3); }
}
```

```javascript
// JS Implementation
function typeWriter(element, text, speed = 100) {
  element.innerHTML = '';
  element.classList.add('typing-active');
  
  let i = 0;
  const type = () => {
    if (i < text.length) {
      const span = document.createElement('span');
      span.textContent = text[i];
      span.style.animation = `typeChar 0.3s ease forwards`;
      span.style.animationDelay = `${i * 0.08}s`;
      element.appendChild(span);
      i++;
      setTimeout(type, speed);
    } else {
      // Add blinking cursor
      const cursor = document.createElement('span');
      cursor.className = 'typing-cursor';
      cursor.textContent = '|';
      cursor.style.animation = 'cursorBlink 0.8s infinite';
      element.appendChild(cursor);
      
      // Start glow animation
      element.style.animation = 'glowPulse 3s ease-in-out infinite';
      
      // Remove cursor after 3 blinks
      setTimeout(() => {
        cursor.style.opacity = '0';
        setTimeout(() => cursor.remove(), 300);
      }, 2400);
    }
  };
  type();
}
```

### 1.2 Staggered Tagline Reveal
```css
@keyframes fadeUp {
  from { 
    opacity: 0; 
    transform: translateY(20px);
    filter: blur(4px);
  }
  to { 
    opacity: 1; 
    transform: translateY(0);
    filter: blur(0);
  }
}

.tagline-word {
  display: inline-block;
  opacity: 0;
  animation: fadeUp 0.6s cubic-bezier(0.4, 0, 0.2, 1) forwards;
}
```

```javascript
function staggerTagline(element) {
  const text = element.textContent;
  const words = text.split(' ');
  element.innerHTML = words.map((word, i) => 
    `<span class="tagline-word" style="animation-delay: ${0.8 + (i * 0.2)}s">${word}</span>`
  ).join(' ');
}
```

### 1.3 Particle Constellation Background
```css
.particle {
  position: absolute;
  width: 2px;
  height: 2px;
  background: rgba(255, 255, 255, 0.5);
  border-radius: 50%;
  pointer-events: none;
  transition: transform 0.3s ease;
}

.particle-line {
  position: absolute;
  height: 1px;
  background: linear-gradient(90deg, transparent, rgba(255,255,255,0.1), transparent);
  transform-origin: left center;
  pointer-events: none;
}
```

```javascript
class ParticleField {
  constructor(container, count = 40) {
    this.container = container;
    this.particles = [];
    this.count = count;
    this.mouse = { x: 0, y: 0 };
    this.init();
  }
  
  init() {
    for (let i = 0; i < this.count; i++) {
      this.createParticle();
    }
    this.animate();
    
    this.container.addEventListener('mousemove', (e) => {
      const rect = this.container.getBoundingClientRect();
      this.mouse.x = e.clientX - rect.left;
      this.mouse.y = e.clientY - rect.top;
    });
  }
  
  createParticle() {
    const p = document.createElement('div');
    p.className = 'particle';
    const x = Math.random() * 100;
    const y = Math.random() * 100;
    p.style.left = x + '%';
    p.style.top = y + '%';
    p.dataset.vx = (Math.random() - 0.5) * 0.3;
    p.dataset.vy = (Math.random() - 0.5) * 0.3;
    this.container.appendChild(p);
    this.particles.push({ el: p, x, y });
  }
  
  animate() {
    this.particles.forEach((p, i) => {
      let x = parseFloat(p.el.style.left);
      let y = parseFloat(p.el.style.top);
      let vx = parseFloat(p.el.dataset.vx);
      let vy = parseFloat(p.el.dataset.vy);
      
      // Mouse repulsion
      const rect = p.el.getBoundingClientRect();
      const px = rect.left + rect.width / 2;
      const py = rect.top + rect.height / 2;
      const dx = px - this.mouse.x;
      const dy = py - this.mouse.y;
      const dist = Math.sqrt(dx * dx + dy * dy);
      
      if (dist < 150) {
        const force = (150 - dist) / 150 * 0.02;
        vx += (dx / dist) * force;
        vy += (dy / dist) * force;
      }
      
      x += vx;
      y += vy;
      
      // Wrap around
      if (x < 0) x = 100;
      if (x > 100) x = 0;
      if (y < 0) y = 100;
      if (y > 100) y = 0;
      
      p.el.style.left = x + '%';
      p.el.style.top = y + '%';
      p.el.dataset.vx = vx * 0.99; // friction
      p.el.dataset.vy = vy * 0.99;
      
      // Draw connections (only every 3rd particle for performance)
      if (i % 3 === 0) this.drawConnections(p, i);
    });
    
    requestAnimationFrame(() => this.animate());
  }
  
  drawConnections(p1, index) {
    // Remove old lines
    p1.el.querySelectorAll('.particle-line').forEach(l => l.remove());
    
    this.particles.slice(index + 1, index + 5).forEach(p2 => {
      const rect1 = p1.el.getBoundingClientRect();
      const rect2 = p2.el.getBoundingClientRect();
      const dx = rect2.left - rect1.left;
      const dy = rect2.top - rect1.top;
      const dist = Math.sqrt(dx * dx + dy * dy);
      
      if (dist < 120) {
        const line = document.createElement('div');
        line.className = 'particle-line';
        line.style.width = dist + 'px';
        line.style.left = '50%';
        line.style.top = '50%';
        line.style.transform = `rotate(${Math.atan2(dy, dx)}rad)`;
        line.style.opacity = (1 - dist / 120) * 0.3;
        p1.el.appendChild(line);
      }
    });
  }
}
```

### 1.4 Scroll Indicator Animation
```css
@keyframes bounceArrow {
  0%, 100% { transform: translateY(0); opacity: 1; }
  50% { transform: translateY(8px); opacity: 0.6; }
}

.scroll-indicator {
  animation: bounceArrow 2s ease-in-out infinite;
}
```

---

## 2. Section Reveal Animations

### 2.1 Section Scroll Reveal
```css
@keyframes sectionReveal {
  from {
    opacity: 0;
    transform: translateY(40px);
    filter: blur(2px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
    filter: blur(0);
  }
}

@keyframes iconPop {
  0% { transform: scale(0) rotate(-180deg); }
  70% { transform: scale(1.1) rotate(10deg); }
  100% { transform: scale(1) rotate(0deg); }
}

@keyframes borderDraw {
  from { height: 0; }
  to { height: 100%; }
}

.section {
  opacity: 0;
  transform: translateY(40px);
  transition: none;
}

.section.visible {
  animation: sectionReveal 0.7s cubic-bezier(0.16, 1, 0.3, 1) forwards;
}

.section.visible .pillar-icon {
  animation: iconPop 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) 0.1s forwards;
}

.section.visible .quote-text::before {
  content: '';
  position: absolute;
  left: -2px;
  top: 0;
  width: 2px;
  height: 0;
  background: currentColor;
  animation: borderDraw 0.6s ease-out 0.4s forwards;
}
```

```javascript
function initScrollReveal() {
  const sections = document.querySelectorAll('.section');
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.12,
    rootMargin: '0px 0px -50px 0px'
  });
  
  sections.forEach(section => observer.observe(section));
}
```

### 2.2 Icon Float Animation (Idle)
```css
@keyframes iconFloat {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-3px); }
}

.pillar-icon {
  animation: iconFloat 4s ease-in-out infinite;
  animation-delay: var(--float-delay, 0s);
}
```

### 2.3 Section Number Animation
```css
@keyframes numberSlide {
  from {
    opacity: 0;
    transform: translateX(-20px);
  }
  to {
    opacity: 0.65;
    transform: translateX(0);
  }
}

.section.visible .section-number {
  animation: numberSlide 0.4s ease-out 0.2s forwards;
}
```

---

## 3. Interactive Elements

### 3.1 Magnetic Buttons
```css
.magnetic-btn {
  transition: transform 0.2s ease;
  will-change: transform;
}
```

```javascript
function initMagneticButtons() {
  const buttons = document.querySelectorAll('.magnetic-btn');
  
  buttons.forEach(btn => {
    btn.addEventListener('mousemove', (e) => {
      const rect = btn.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;
      
      btn.style.transform = `translate(${x * 0.2}px, ${y * 0.2}px)`;
    });
    
    btn.addEventListener('mouseleave', () => {
      btn.style.transform = 'translate(0, 0)';
    });
  });
}
```

### 3.2 Navigation Underline
```css
.nav-link {
  position: relative;
}

.nav-link::after {
  content: '';
  position: absolute;
  bottom: -2px;
  left: 50%;
  width: 0;
  height: 1px;
  background: currentColor;
  transition: all 0.25s ease;
  transform: translateX(-50%);
}

.nav-link:hover::after {
  width: 100%;
}
```

### 3.3 Icon Hover Effects
```css
@keyframes iconRipple {
  0% { box-shadow: 0 0 0 0 rgba(255, 255, 255, 0.4); }
  100% { box-shadow: 0 0 0 15px rgba(255, 255, 255, 0); }
}

.pillar-icon:hover {
  transform: scale(1.15) rotate(5deg);
  animation: iconRipple 0.6s ease-out;
}
```

---

## 4. Ambient Effects

### 4.1 Animated Gradient Mesh (Background)
```css
@keyframes gradientShift {
  0%, 100% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
}

.ambient-gradient {
  position: fixed;
  inset: 0;
  background: 
    radial-gradient(ellipse at 20% 30%, rgba(201, 162, 39, 0.03) 0%, transparent 50%),
    radial-gradient(ellipse at 80% 70%, rgba(124, 154, 142, 0.03) 0%, transparent 50%),
    radial-gradient(ellipse at 50% 50%, rgba(107, 142, 159, 0.02) 0%, transparent 70%);
  background-size: 200% 200%;
  animation: gradientShift 20s ease infinite;
  pointer-events: none;
  z-index: -1;
}
```

### 4.2 Film Grain Noise
```css
@keyframes grain {
  0%, 100% { transform: translate(0, 0); }
  10% { transform: translate(-5%, -10%); }
  20% { transform: translate(-15%, 5%); }
  30% { transform: translate(7%, -25%); }
  40% { transform: translate(-5%, 25%); }
  50% { transform: translate(-15%, 10%); }
  60% { transform: translate(15%, 0%); }
  70% { transform: translate(0%, 15%); }
  80% { transform: translate(3%, 35%); }
  90% { transform: translate(-10%, 10%); }
}

.noise-overlay {
  position: fixed;
  inset: 0;
  background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E");
  opacity: 0.02;
  pointer-events: none;
  z-index: 9999;
  animation: grain 8s steps(10) infinite;
}
```

### 4.3 CTA Glow Pulse
```css
@keyframes ctaGlow {
  0%, 100% { box-shadow: 0 0 20px rgba(255, 255, 255, 0.1); }
  50% { box-shadow: 0 0 40px rgba(255, 255, 255, 0.2), 0 0 60px rgba(201, 162, 39, 0.1); }
}

.cta-button {
  animation: ctaGlow 4s ease-in-out infinite;
}
```

---

## 5. Mobile Adaptations

```css
@media (max-width: 768px) {
  /* Reduce particle count via JS */
  .particle:nth-child(n+16) {
    display: none;
  }
  
  /* Disable magnetic effects */
  .magnetic-btn {
    transform: none !important;
  }
  
  /* Shorter animations */
  .section.visible {
    animation-duration: 0.5s;
  }
  
  /* Simpler hover states */
  .pillar-icon:hover {
    transform: scale(1.05);
    animation: none;
  }
}
```

```javascript
function isMobile() {
  return window.matchMedia('(pointer: coarse)').matches || 
         window.innerWidth < 768;
}

// Initialize with mobile checks
const particleCount = isMobile() ? 15 : 40;
const enableMagnetic = !isMobile();
```

---

## 6. Reduced Motion Support

```css
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
  
  .section {
    opacity: 1;
    transform: none;
  }
  
  .particle, .noise-overlay {
    display: none;
  }
}
```

---

## 7. Performance Optimizations

1. **Use `will-change`** sparingly on animated elements
2. **Throttle** mousemove events to 60fps
3. **Use `transform` and `opacity`** only for animations
4. **Lazy initialize** particles after hero animation
5. **Disconnect IntersectionObserver** after reveal
6. **Use CSS animations** over JS where possible
7. **Debounce** resize events

---

## Implementation Order

1. **Phase 1:** Hero typing + stagger (P0)
2. **Phase 2:** Scroll reveal + section animations (P0)
3. **Phase 3:** Particle background + ambient effects (P1)
4. **Phase 4:** Interactive elements + polish (P1/P2)
