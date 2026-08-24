"use client";

import { motion, useTransform, MotionValue } from "framer-motion";
import { ChevronDown } from "lucide-react";
import NeuralOrb from "../components/NeuralOrb";

interface HeroSectionProps {
  mousePosition: { x: number; y: number };
  scrollProgress: MotionValue<number>;
}

export default function HeroSection({ mousePosition, scrollProgress }: HeroSectionProps) {
  const y = useTransform(scrollProgress, [0, 0.5], [0, -100]);
  const opacity = useTransform(scrollProgress, [0, 0.3], [1, 0]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.8,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1] as const,
      },
    },
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-hero" />
      
      {/* Neural Orb */}
      <NeuralOrb 
        mouseX={mousePosition.x} 
        mouseY={mousePosition.y}
        scrollProgress={scrollProgress}
      />

      {/* Content */}
      <motion.div
        className="relative z-10 text-center px-4"
        style={{ y, opacity }}
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Main title */}
        <motion.h1
          variants={itemVariants}
          className="font-serif text-[clamp(4rem,15vw,10rem)] font-light leading-none tracking-tight text-gradient-gold mb-6"
        >
          Vash
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          variants={itemVariants}
          className="font-serif text-[clamp(1.5rem,4vw,3rem)] text-[#FAFAF9] mb-8 tracking-wide"
        >
          Builder. Seeker.
        </motion.p>

        {/* Bracket text */}
        <motion.p
          variants={itemVariants}
          className="text-lg md:text-xl text-[#A1A1AA] max-w-md mx-auto italic"
        >
          [I built things in the future.]
        </motion.p>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2, duration: 0.8 }}
      >
        <span className="text-xs tracking-[0.3em] text-[#A1A1AA] uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown className="w-5 h-5 text-[#C9A84C]" />
        </motion.div>
      </motion.div>
    </section>
  );
}
