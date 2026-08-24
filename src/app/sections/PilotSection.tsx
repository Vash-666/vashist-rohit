"use client";

import { motion } from "framer-motion";
import { WingsIcon } from "../components/PrimordialIcons";

export default function PilotSection() {
  return (
    <section
      id="signal"
      className="relative min-h-screen flex items-center py-32 overflow-hidden"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-pilot" />
      
      {/* Horizon line */}
      <div className="absolute left-0 right-0 h-px bg-[#0EA5E9]/10" style={{ top: '70%' }} />

      {/* Section indicator */}
      <motion.div
        className="absolute left-8 bottom-1/3 section-indicator text-xs tracking-[0.3em] text-[#A1A1AA]/40"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        03
      </motion.div>

      <div className="container mx-auto px-8 lg:px-16">
        <div className="max-w-3xl" style={{ paddingLeft: '10%' }}>
          {/* Icon */}
          <motion.div
            className="mb-8"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <WingsIcon size={80} color="#0EA5E9" />
          </motion.div>

          {/* Title */}
          <motion.h2
            className="font-serif text-6xl lg:text-7xl font-light text-[#FAFAF9] leading-tight mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            The Signal
          </motion.h2>

          {/* Content */}
          <div className="space-y-8">
            <motion.p
              className="text-2xl lg:text-3xl text-[#FAFAF9] font-light leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              The sky demands presence when everything is uncertain.
            </motion.p>

            <motion.p
              className="text-lg text-[#A1A1AA] leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              Instrument-rated private pilot. Hours of preparation for moments of stillness. Weather, instruments, altitude, and the quiet voice that says &quot;now.&quot;
            </motion.p>

            <motion.p
              className="text-lg text-[#A1A1AA] leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              No room for ego at ten thousand feet. Only preparation so complete that the moment can finally be still.
            </motion.p>

            <motion.p
              className="text-xl text-[#0EA5E9] italic pt-8"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              viewport={{ once: true }}
            >
              What the sky teaches, the ground remembers.
            </motion.p>
          </div>
        </div>
      </div>
    </section>
  );
}
