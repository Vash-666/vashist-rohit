"use client";

import { motion } from "framer-motion";
import { OuroborosIcon } from "../components/PrimordialIcons";

export default function InvestorSection() {
  return (
    <section
      id="investor"
      className="relative min-h-screen flex items-center py-32 overflow-hidden"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-investor" />
      
      {/* Subtle grid pattern */}
      <div 
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `linear-gradient(#D97706 1px, transparent 1px), linear-gradient(90deg, #D97706 1px, transparent 1px)`,
          backgroundSize: '60px 60px'
        }}
      />

      {/* Section indicator */}
      <motion.div
        className="absolute right-8 top-1/3 section-indicator text-xs tracking-[0.3em] text-[#A1A1AA]/40"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        style={{ writingMode: "vertical-rl", textOrientation: "mixed" }}
      >
        04
      </motion.div>

      <div className="container mx-auto px-8 lg:px-16">
        <div className="max-w-3xl ml-auto text-right">
          {/* Icon */}
          <motion.div
            className="flex justify-end mb-8"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <OuroborosIcon size={100} color="#D97706" />
          </motion.div>

          {/* Title */}
          <motion.h2
            className="font-serif text-6xl lg:text-7xl font-light text-[#FAFAF9] leading-tight mb-12"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            The Investor
          </motion.h2>

          {/* Content */}
          <div className="space-y-8">
            <motion.p
              className="text-2xl lg:text-3xl text-[#FAFAF9] font-light leading-relaxed"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Patient capital in a world of noise.
            </motion.p>

            <motion.p
              className="text-lg text-[#A1A1AA] leading-relaxed"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              I invest in blockchain, AI, transformative technologies — not for quarterly returns, but for decades of compound wisdom.
            </motion.p>

            <motion.p
              className="text-lg text-[#A1A1AA] leading-relaxed"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              The best returns come to those who wait. Who prepare. Who see patterns others miss in the chaos.
            </motion.p>

            <motion.p
              className="text-xl text-[#D97706] italic pt-8"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              viewport={{ once: true }}
            >
              Long-term thinking is the ultimate edge.
            </motion.p>
          </div>
        </div>
      </div>
    </section>
  );
}
