"use client";

import { motion } from "framer-motion";
import { Mail } from "lucide-react";

export default function ClosingSection() {
  return (
    <section
      id="contact"
      className="relative min-h-[60vh] flex items-center justify-center py-32 overflow-hidden"
    >
      {/* Background - pure dark, no gradient */}
      <div className="absolute inset-0 bg-[#0A0A0B]" />
      
      {/* Subtle gold orb echo */}
      <motion.div
        className="absolute top-1/4 left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-[#C9A84C]/10 blur-xl"
        initial={{ opacity: 0, scale: 0 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      />

      <div className="container mx-auto px-8 text-center">
        <motion.div
          className="max-w-2xl mx-auto space-y-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {/* Opening line */}
          <motion.p
            className="text-xl text-[#A1A1AA]"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            If something here resonated,
          </motion.p>

          {/* Email CTA */}
          <motion.a
            href="mailto:rohit.vashist@live.com"
            className="group inline-flex items-center gap-4 text-2xl md:text-3xl text-[#FAFAF9] hover:text-[#C9A84C] transition-colors duration-300"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <Mail className="w-6 h-6" />
            <span className="relative">
              rohit.vashist@live.com
              <motion.span
                className="absolute -bottom-2 left-0 h-px bg-[#C9A84C]"
                initial={{ width: 0 }}
                whileInView={{ width: "100%" }}
                transition={{ duration: 0.8, delay: 0.8 }}
                viewport={{ once: true }}
              />
            </span>
          </motion.a>

          {/* Closing line */}
          <motion.p
            className="text-lg text-[#A1A1AA] italic"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            viewport={{ once: true }}
          >
            That&apos;s the only signal I need.
          </motion.p>
        </motion.div>

        {/* Footer */}
        <motion.footer
          className="absolute bottom-8 left-0 right-0 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1 }}
          viewport={{ once: true }}
        >
          <p className="text-xs text-[#A1A1AA]/40 tracking-wider">
            Built with intention • 2026
          </p>
        </motion.footer>
      </div>
    </section>
  );
}
