/**
 * VASH REBRAND — MAIN JAVASCRIPT
 * GSAP ScrollTrigger animations for 6-room snap-scroll experience
 */

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

// Check for reduced motion preference
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const isTouchDevice = window.matchMedia('(pointer: coarse)').matches;

// ============================================
// UTILITY FUNCTIONS
// ============================================

function initProgressBar() {
    const progressBar = document.querySelector('.progress-bar');
    const progressFill = document.querySelector('.progress-fill');
    
    // Show progress bar after initial load
    setTimeout(() => progressBar.classList.add('visible'), 2000);
    
    window.addEventListener('scroll', () => {
        const scrollTop = window.scrollY;
        const docHeight = document.documentElement.scrollHeight - window.innerHeight;
        const scrollPercent = (scrollTop / docHeight) * 100;
        progressFill.style.width = scrollPercent + '%';
    }, { passive: true });
}

// ============================================
// ROOM 1: THE PORTAL
// ============================================

function initPortalRoom() {
    const portalContent = document.querySelector('.portal-content');
    const chars = document.querySelectorAll('.portal-name .char');
    const tagline = document.querySelector('.portal-tagline');
    const scrollIndicator = document.querySelector('.scroll-indicator');
    
    // Initial reveal timeline
    const portalTL = gsap.timeline({ delay: 0.5 });
    
    portalTL
        .to(portalContent, {
            opacity: 1,
            duration: 0.8,
            ease: 'power2.out'
        })
        .to(chars, {
            opacity: 1,
            y: 0,
            duration: 0.6,
            stagger: 0.08,
            ease: 'power2.out'
        }, '-=0.4')
        .to(tagline, {
            opacity: 1,
            duration: 0.8,
            ease: 'power2.out'
        }, '-=0.2')
        .to(scrollIndicator, {
            opacity: 1,
            duration: 0.6,
            ease: 'power2.out'
        }, '-=0.2');
    
    // Scroll-triggered parallax for portal
    if (!prefersReducedMotion) {
        gsap.to('.portal-texture', {
            yPercent: 30,
            ease: 'none',
            scrollTrigger: {
                trigger: '#portal',
                start: 'top top',
                end: 'bottom top',
                scrub: true
            }
        });
        
        // Fade out portal content on scroll
        gsap.to('.portal-content', {
            opacity: 0,
            y: -50,
            ease: 'none',
            scrollTrigger: {
                trigger: '#portal',
                start: 'top top',
                end: '50% top',
                scrub: true
            }
        });
    }
}

// ============================================
// ROOM 2: AI & WEB3
// ============================================

function initTechRoom() {
    const techRoom = document.querySelector('#tech');
    const headline = document.querySelector('.tech-headline');
    const subhead = document.querySelector('.tech-subhead');
    const body = document.querySelector('.tech-body');
    
    // Pin the room and animate content
    const techTL = gsap.timeline({
        scrollTrigger: {
            trigger: techRoom,
            start: 'top top',
            end: '+=100%',
            pin: true,
            scrub: prefersReducedMotion ? false : 1,
            snap: prefersReducedMotion ? false : {
                snapTo: 1,
                duration: { min: 0.2, max: 0.5 },
                ease: 'power2.out'
            }
        }
    });
    
    if (!prefersReducedMotion) {
        techTL
            .to(headline, {
                opacity: 1,
                y: 0,
                duration: 0.3
            })
            .to(subhead, {
                opacity: 1,
                y: 0,
                duration: 0.25
            }, '-=0.15')
            .to(body, {
                opacity: 1,
                y: 0,
                duration: 0.25
            }, '-=0.15');
        
        // Parallax on texture
        gsap.to('.tech-texture', {
            yPercent: 20,
            ease: 'none',
            scrollTrigger: {
                trigger: techRoom,
                start: 'top bottom',
                end: 'bottom top',
                scrub: true
            }
        });
    } else {
        // Reduced motion: just fade in
        gsap.set([headline, subhead, body], { opacity: 1, y: 0 });
    }
}

// ============================================
// ROOM 3: THE PIVOT
// ============================================

function initPivotRoom() {
    const pivotRoom = document.querySelector('#pivot');
    const line1 = document.querySelector('.pivot-line-1');
    const line2 = document.querySelector('.pivot-line-2');
    const gradient = document.querySelector('.pivot-gradient');
    
    const pivotTL = gsap.timeline({
        scrollTrigger: {
            trigger: pivotRoom,
            start: 'top top',
            end: '+=150%',
            pin: true,
            scrub: prefersReducedMotion ? false : 1,
            snap: prefersReducedMotion ? false : {
                snapTo: 1,
                duration: { min: 0.3, max: 0.6 },
                ease: 'power2.out'
            }
        }
    });
    
    if (!prefersReducedMotion) {
        // First line appears with scale
        pivotTL.to(line1, {
            opacity: 1,
            scale: 1,
            duration: 0.4
        });
        
        // Gradient shift
        pivotTL.to(gradient, {
            background: 'linear-gradient(180deg, #252744 0%, rgba(212, 165, 116, 0.4) 50%, var(--sandstone) 100%)',
            duration: 0.5
        }, 0.3);
        
        // Second line fades in
        pivotTL.to(line2, {
            opacity: 1,
            y: 0,
            duration: 0.3
        }, 0.5);
    } else {
        gsap.set(line1, { opacity: 1, scale: 1 });
        gsap.set(line2, { opacity: 1, y: 0 });
    }
}

// ============================================
// ROOM 4: LIFE COACH
// ============================================

function initCoachRoom() {
    const coachRoom = document.querySelector('#coach');
    const headline = document.querySelector('.coach-headline');
    const subhead = document.querySelector('.coach-subhead');
    const body = document.querySelector('.coach-body');
    const quote = document.querySelector('.coach-quote');
    
    const coachTL = gsap.timeline({
        scrollTrigger: {
            trigger: coachRoom,
            start: 'top top',
            end: '+=120%',
            pin: true,
            scrub: prefersReducedMotion ? false : 1,
            snap: prefersReducedMotion ? false : {
                snapTo: 1,
                duration: { min: 0.2, max: 0.5 },
                ease: 'power2.out'
            }
        }
    });
    
    if (!prefersReducedMotion) {
        coachTL
            .to(headline, {
                opacity: 1,
                x: 0,
                duration: 0.25
            })
            .to(subhead, {
                opacity: 1,
                duration: 0.2
            }, '-=0.1')
            .to(body, {
                opacity: 1,
                duration: 0.2
            }, '-=0.1')
            .to(quote, {
                opacity: 1,
                scale: 1,
                duration: 0.25
            }, '-=0.1');
        
        // Slow pan on texture
        gsap.to('.coach-texture', {
            backgroundPosition: '100% 100%',
            ease: 'none',
            scrollTrigger: {
                trigger: coachRoom,
                start: 'top bottom',
                end: 'bottom top',
                scrub: true
            }
        });
    } else {
        gsap.set([headline, subhead, body, quote], { opacity: 1, x: 0, scale: 1 });
    }
}

// ============================================
// ROOM 5: PILOT
// ============================================

function initPilotRoom() {
    const pilotRoom = document.querySelector('#pilot');
    const headline = document.querySelector('.pilot-headline');
    const subhead = document.querySelector('.pilot-subhead');
    const body = document.querySelector('.pilot-body');
    const texture = document.querySelector('.pilot-texture');
    
    const pilotTL = gsap.timeline({
        scrollTrigger: {
            trigger: pilotRoom,
            start: 'top top',
            end: '+=100%',
            pin: true,
            scrub: prefersReducedMotion ? false : 1,
            snap: prefersReducedMotion ? false : {
                snapTo: 1,
                duration: { min: 0.2, max: 0.5 },
                ease: 'power2.out'
            }
        }
    });
    
    if (!prefersReducedMotion) {
        // Texture zoom out (feeling of ascent)
        gsap.set(texture, { scale: 1.1 });
        
        pilotTL
            .to(texture, {
                scale: 1,
                duration: 0.5
            }, 0)
            .to(headline, {
                opacity: 1,
                y: 0,
                duration: 0.25
            }, 0.2)
            .to(subhead, {
                opacity: 1,
                y: 0,
                duration: 0.2
            }, '-=0.1')
            .to(body, {
                opacity: 1,
                y: 0,
                duration: 0.2
            }, '-=0.1');
    } else {
        gsap.set(texture, { scale: 1 });
        gsap.set([headline, subhead, body], { opacity: 1, y: 0 });
    }
}

// ============================================
// ROOM 6: THE SIGNAL
// ============================================

function initSignalRoom() {
    const investmentHeadline = document.querySelector('.investment-headline');
    const investmentSubhead = document.querySelector('.investment-subhead');
    const investmentBody = document.querySelector('.investment-body');
    const signalText = document.querySelector('.signal-text');
    const signalEmail = document.querySelector('.signal-email');
    const signalNote = document.querySelector('.signal-note');
    
    // Investment section animations
    if (!prefersReducedMotion) {
        gsap.to(investmentHeadline, {
            opacity: 1,
            y: 0,
            duration: 0.6,
            ease: 'power2.out',
            scrollTrigger: {
                trigger: '.investment-section',
                start: 'top 70%',
                toggleActions: 'play none none reverse'
            }
        });
        
        gsap.to(investmentSubhead, {
            opacity: 1,
            y: 0,
            duration: 0.6,
            delay: 0.15,
            ease: 'power2.out',
            scrollTrigger: {
                trigger: '.investment-section',
                start: 'top 70%',
                toggleActions: 'play none none reverse'
            }
        });
        
        gsap.to(investmentBody, {
            opacity: 1,
            y: 0,
            duration: 0.6,
            delay: 0.3,
            ease: 'power2.out',
            scrollTrigger: {
                trigger: '.investment-section',
                start: 'top 70%',
                toggleActions: 'play none none reverse'
            }
        });
        
        // The Signal animations
        gsap.to(signalText, {
            opacity: 1,
            duration: 0.8,
            ease: 'power2.out',
            scrollTrigger: {
                trigger: '.the-signal',
                start: 'top 60%',
                toggleActions: 'play none none reverse'
            }
        });
        
        gsap.to(signalEmail, {
            opacity: 1,
            duration: 0.8,
            delay: 0.2,
            ease: 'power2.out',
            onComplete: () => signalEmail.classList.add('visible'),
            scrollTrigger: {
                trigger: '.the-signal',
                start: 'top 60%',
                toggleActions: 'play none none reverse'
            }
        });
        
        gsap.to(signalNote, {
            opacity: 1,
            duration: 0.8,
            delay: 0.4,
            ease: 'power2.out',
            scrollTrigger: {
                trigger: '.the-signal',
                start: 'top 60%',
                toggleActions: 'play none none reverse'
            }
        });
    } else {
        gsap.set([investmentHeadline, investmentSubhead, investmentBody], { opacity: 1, y: 0 });
        gsap.set([signalText, signalEmail, signalNote], { opacity: 1 });
        signalEmail.classList.add('visible');
    }
}

// ============================================
// GLOBAL SCROLL SNAP
// ============================================

function initGlobalSnap() {
    if (prefersReducedMotion || isTouchDevice) return;
    
    // Wait for all ScrollTriggers to be created
    ScrollTrigger.refresh();
    
    const rooms = ['#portal', '#tech', '#pivot', '#coach', '#pilot', '#signal'];
    const roomTriggers = rooms.map(id => ScrollTrigger.getAll().find(st => st.trigger === document.querySelector(id))).filter(Boolean);
    
    // Global snap that works with pinned sections
    ScrollTrigger.create({
        snap: {
            snapTo: (progress, self) => {
                // Find nearest section
                const scrollTriggers = ScrollTrigger.getAll().filter(st => st.pin);
                const positions = scrollTriggers.map(st => st.start / ScrollTrigger.maxScroll(window));
                
                // Add end position
                positions.push(1);
                
                // Find closest position
                let closest = positions[0];
                let minDiff = Math.abs(progress - closest);
                
                for (let i = 1; i < positions.length; i++) {
                    const diff = Math.abs(progress - positions[i]);
                    if (diff < minDiff) {
                        minDiff = diff;
                        closest = positions[i];
                    }
                }
                
                return closest;
            },
            duration: { min: 0.2, max: 0.5 },
            delay: 0,
            ease: 'power2.out'
        }
    });
}

// ============================================
// INITIALIZATION
// ============================================

document.addEventListener('DOMContentLoaded', () => {
    // Initialize progress bar
    initProgressBar();
    
    // Initialize each room
    initPortalRoom();
    initTechRoom();
    initPivotRoom();
    initCoachRoom();
    initPilotRoom();
    initSignalRoom();
    
    // Initialize global snap after a short delay to ensure all triggers are set
    setTimeout(initGlobalSnap, 100);
});

// Handle resize
let resizeTimer;
window.addEventListener('resize', () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
        ScrollTrigger.refresh();
    }, 250);
}, { passive: true });
