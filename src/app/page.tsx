"use client";

import { useEffect, useState, useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import HeroSection from "./sections/HeroSection";
import BuilderSection from "./sections/BuilderSection";
import SeekerSection from "./sections/SeekerSection";
import PilotSection from "./sections/PilotSection";
import InvestorSection from "./sections/InvestorSection";
import ClosingSection from "./sections/ClosingSection";

export default function Home() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll();
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 2 - 1,
        y: (e.clientY / window.innerHeight) * 2 - 1,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <main ref={containerRef} className="relative">
      <HeroSection 
        mousePosition={mousePosition} 
        scrollProgress={smoothProgress} 
      />
      <BuilderSection />
      <SeekerSection />
      <PilotSection />
      <InvestorSection />
      <ClosingSection />
    </main>
  );
}
