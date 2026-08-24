"use client";

import { motion } from "framer-motion";
import { SpiralIcon } from "../components/PrimordialIcons";

export default function SeekerSection() {
  return (
    <section
      id="seeker"
      className="relative min-h-screen flex items-center py-32 overflow-hidden"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-seeker" />
      
      {/* Concentric circles texture */}
      <div className="absolute inset-0 flex items-center justify-center opacity-5">
        {[1, 2, 3, 4, 5].map((i) => (
          <motion.div
            key={i}
            className="absolute rounded-full border border-[#14B8A6]"
            style={{
              width: `${i * 200}px`,
              height: `${i * 200}px`,
            }}
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1, delay: i * 0.1 }}
            viewport={{ once: true }}
          />
        ))}
      </div>

      {/* Section indicator */}
      <motion.div
        className="absolute right-8 top-1/2 -translate-y-1/2 section-indicator text-xs tracking-[0.3em] text-[#A1A1AA]/40"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        style={{ writingMode: "vertical-rl", textOrientation: "mixed" }}
      >
        02
      </motion.div>

      <div className="container mx-auto px-8 lg:px-16">
        <div className="max-w-3xl mx-auto text-center">
          {/* Icon */}
          <motion.div
            className="flex justify-center mb-12"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <SpiralIcon size={100} color="#14B8A6" />
          </motion.div>

          {/* Title */}
          <motion.h2
            className="font-serif text-6xl lg:text-7xl font-light text-[#FAFAF9] leading-tight mb-12"
            initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            The Seeker
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
              But systems without wisdom are just noise.
            </motion.p>

            <motion.p
              className="text-lg text-[#A1A1AA] leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              I walk the line where ancient East meets modern West — questions of life, meaning, soul. The psychology of transformation.
            </motion.p>

            <motion.p
              className="text-lg text-[#A1A1AA] leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              At inflection points, founders and executives come to me. Not for answers. For the right questions.
            </motion.p>

            <motion.p
              className="text-xl text-[#14B8A6] italic pt-8"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              viewport={{ once: true }}
            >
              External success without internal clarity is hollow.
            </motion.p>
          </div>
        </div>
      </div>
    </section>
  );
}
