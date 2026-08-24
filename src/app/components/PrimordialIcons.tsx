"use client";

import { motion } from "framer-motion";

interface IconProps {
  className?: string;
  size?: number;
  color?: string;
  animate?: boolean;
}

// Tree/Neural Pattern - Builder
export function TreeIcon({ className = "", size = 120, color = "#4F46E5", animate = true }: IconProps) {
  return (
    <motion.svg
      width={size}
      height={size}
      viewBox="0 0 120 120"
      fill="none"
      className={className}
      animate={animate ? { rotate: 360 } : undefined}
      transition={animate ? { duration: 120, repeat: Infinity, ease: "linear" } : undefined}
    >
      {/* Central trunk */}
      <motion.path
        d="M60 100 L60 60"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        initial={{ pathLength: 0 }}
        whileInView={{ pathLength: 1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
      />
      
      {/* Branches */}
      <motion.path
        d="M60 60 L30 40 M60 60 L90 40 M60 60 L45 25 M60 60 L75 25"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        initial={{ pathLength: 0 }}
        whileInView={{ pathLength: 1 }}
        transition={{ duration: 1.2, delay: 0.3, ease: "easeOut" }}
      />
      
      {/* Sub-branches */}
      <motion.path
        d="M30 40 L15 30 M30 40 L35 20 M90 40 L105 30 M90 40 L85 20 M45 25 L35 15 M75 25 L85 15"
        stroke={color}
        strokeWidth="1"
        strokeLinecap="round"
        initial={{ pathLength: 0 }}
        whileInView={{ pathLength: 1 }}
        transition={{ duration: 1, delay: 0.6, ease: "easeOut" }}
      />
      
      {/* Nodes */}
      <motion.circle cx="60" cy="60" r="3" fill={color} initial={{ scale: 0 }} whileInView={{ scale: 1 }} transition={{ delay: 0.9 }} />
      <motion.circle cx="30" cy="40" r="2" fill={color} initial={{ scale: 0 }} whileInView={{ scale: 1 }} transition={{ delay: 1 }} />
      <motion.circle cx="90" cy="40" r="2" fill={color} initial={{ scale: 0 }} whileInView={{ scale: 1 }} transition={{ delay: 1 }} />
      <motion.circle cx="45" cy="25" r="2" fill={color} initial={{ scale: 0 }} whileInView={{ scale: 1 }} transition={{ delay: 1.1 }} />
      <motion.circle cx="75" cy="25" r="2" fill={color} initial={{ scale: 0 }} whileInView={{ scale: 1 }} transition={{ delay: 1.1 }} />
    </motion.svg>
  );
}

// Spiral - Seeker
export function SpiralIcon({ className = "", size = 100, color = "#14B8A6", animate = true }: IconProps) {
  const path = "M60 60 m-40 0 a40 40 0 1 1 80 0 a40 40 0 1 1 -80 0 M60 60 m-30 0 a30 30 0 1 1 60 0 a30 30 0 1 1 -60 0 M60 60 m-20 0 a20 20 0 1 1 40 0 a20 20 0 1 1 -40 0 M60 60 m-10 0 a10 10 0 1 1 20 0 a10 10 0 1 1 -20 0";
  
  return (
    <motion.svg
      width={size}
      height={size}
      viewBox="0 0 120 120"
      fill="none"
      className={className}
      animate={animate ? { rotate: 360 } : undefined}
      transition={animate ? { duration: 60, repeat: Infinity, ease: "linear" } : undefined}
    >
      <motion.path
        d={path}
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        initial={{ pathLength: 0 }}
        whileInView={{ pathLength: 1 }}
        transition={{ duration: 2, ease: "easeOut" }}
      />
      <motion.circle
        cx="60"
        cy="60"
        r="4"
        fill={color}
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        transition={{ delay: 1.5 }}
      />
    </motion.svg>
  );
}

// Wings - Pilot
export function WingsIcon({ className = "", size = 80, color = "#0EA5E9", animate = true }: IconProps) {
  return (
    <motion.svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      className={className}
      animate={animate ? { scaleY: [1, 1.05, 1] } : undefined}
      transition={animate ? { duration: 3, repeat: Infinity, ease: "easeInOut" } : undefined}
    >
      {/* Left wing */}
      <motion.path
        d="M50 50 Q20 30 10 40 Q25 50 50 60"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        fill="none"
        initial={{ pathLength: 0 }}
        whileInView={{ pathLength: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
      />
      <motion.path
        d="M50 60 Q25 70 15 65 Q30 55 50 50"
        stroke={color}
        strokeWidth="1"
        strokeLinecap="round"
        fill="none"
        initial={{ pathLength: 0 }}
        whileInView={{ pathLength: 1 }}
        transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
      />
      
      {/* Right wing */}
      <motion.path
        d="M50 50 Q80 30 90 40 Q75 50 50 60"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        fill="none"
        initial={{ pathLength: 0 }}
        whileInView={{ pathLength: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
      />
      <motion.path
        d="M50 60 Q75 70 85 65 Q70 55 50 50"
        stroke={color}
        strokeWidth="1"
        strokeLinecap="round"
        fill="none"
        initial={{ pathLength: 0 }}
        whileInView={{ pathLength: 1 }}
        transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
      />
    </motion.svg>
  );
}

// Ouroboros - Investor
export function OuroborosIcon({ className = "", size = 100, color = "#D97706", animate = true }: IconProps) {
  return (
    <motion.svg
      width={size}
      height={size}
      viewBox="0 0 120 120"
      fill="none"
      className={className}
      animate={animate ? { rotate: -360 } : undefined}
      transition={animate ? { duration: 90, repeat: Infinity, ease: "linear" } : undefined}
    >
      {/* Snake body */}
      <motion.circle
        cx="60"
        cy="60"
        r="45"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        fill="none"
        initial={{ pathLength: 0 }}
        whileInView={{ pathLength: 1 }}
        transition={{ duration: 2, ease: "easeOut" }}
      />
      
      {/* Head */}
      <motion.path
        d="M95 35 Q105 25 100 40"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        fill="none"
        initial={{ pathLength: 0 }}
        whileInView={{ pathLength: 1 }}
        transition={{ duration: 0.5, delay: 1.5 }}
      />
      
      {/* Inner circle */}
      <motion.circle
        cx="60"
        cy="60"
        r="25"
        stroke={color}
        strokeWidth="1"
        strokeDasharray="4 4"
        fill="none"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 0.5 }}
        transition={{ delay: 1.8 }}
      />
    </motion.svg>
  );
}
