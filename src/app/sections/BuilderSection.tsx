"use client";

import { motion } from "framer-motion";
import { TreeIcon } from "../components/PrimordialIcons";

interface Project {
  id: string;
  title: string;
  proof: string;
  tags: string[];
  status: "live" | "building" | "concept";
  link?: string;
}

const projects: Project[] = [
  {
    id: "rwa-tennis-trophy",
    title: "RWA Tennis Trophy Tokenization",
    proof: "Proof that physical things can have digital souls. A 1947 trophy, its champions, their stories — preserved not as data, but as truth.",
    tags: ["Solidity", "ERC-721", "IPFS", "Hardhat", "Sepolia"],
    status: "live",
    link: "https://github.com/Vash-666/-Rwa-trophy-token"
  },
  {
    id: "agentic-ai-system",
    title: "Agentic AI Mastery Lab",
    proof: "Proof that AI agents can collaborate without hierarchy. Switch routes. Quality audits. Content creates. No boss. Just signal.",
    tags: ["Multi-Agent Systems", "AI Orchestration", "TypeScript", "OpenClaw"],
    status: "live",
    link: "https://github.com/Vash-666/agentic-ai-systems"
  },
  {
    id: "homeguardian",
    title: "HomeGuardian AI",
    proof: "Proof that machines can tell us before they break. The quiet prediction that saves the emergency.",
    tags: ["Machine Learning", "IoT", "Predictive Analytics", "Python"],
    status: "building"
  },
  {
    id: "federal-ai",
    title: "Federal AI Modernization",
    proof: "Proof that legacy systems can learn new patterns. What I built where I cannot show you.",
    tags: ["SAM.gov", "FPDS", "Bedrock", "ServiceNow", "FedRAMP"],
    status: "live"
  }
];

const statusConfig = {
  live: { label: "Live", color: "text-emerald-400", dot: "bg-emerald-400" },
  building: { label: "Building", color: "text-amber-400", dot: "bg-amber-400" },
  concept: { label: "Concept", color: "text-blue-400", dot: "bg-blue-400" }
};

export default function BuilderSection() {
  return (
    <section
      id="truth"
      className="relative min-h-screen flex items-center py-32 overflow-hidden"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-builder" />
      
      {/* Left edge line */}
      <div className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-[#4F46E5]/20 to-transparent" />

      {/* Section indicator */}
      <motion.div
        className="absolute left-8 top-1/2 -translate-y-1/2 section-indicator text-xs tracking-[0.3em] text-[#A1A1AA]/40"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        01
      </motion.div>

      <div className="container mx-auto px-8 lg:px-16">
        <div className="grid lg:grid-cols-5 gap-16 items-start">
          {/* Left column - Icon and Title */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="mb-8"
            >
              <TreeIcon size={120} color="#4F46E5" />
            </motion.div>

            <motion.h2
              className="font-serif text-6xl lg:text-7xl font-light text-[#FAFAF9] leading-tight"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              The<br />Truth
            </motion.h2>
          </div>

          {/* Right column - Content */}
          <div className="lg:col-span-3 space-y-12">
            <motion.p
              className="text-2xl lg:text-3xl text-[#FAFAF9] font-light leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              I don&apos;t build systems. I see patterns.
            </motion.p>

            <motion.p
              className="text-lg text-[#A1A1AA] leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              viewport={{ once: true }}
            >
              Ten years reading the noise. You learn the smell of real.
            </motion.p>

            <motion.p
              className="text-lg text-[#A1A1AA] leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
            >
              Where code meets governance meets human truth — that&apos;s where I translate.
            </motion.p>

            {/* Projects - Proof not Portfolio */}
            <motion.div
              className="pt-8 border-t border-[#262626]"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              viewport={{ once: true }}
            >
              <p className="text-[#FAFAF9] mb-4">Certified Ethereum Expert.</p>
              <p className="text-[#FAFAF9] mb-4">Federal AI modernization.</p>
              <p className="text-[#FAFAF9] mb-8">Startups that raised, scaled, and sometimes failed.</p>
              
              <p className="text-[#4F46E5] italic mb-12">Every system is a bet you&apos;re willing to lose.</p>

              {/* Projects List */}
              <div className="space-y-8">
                {projects.map((project, index) => (
                  <motion.div
                    key={project.id}
                    className="group"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 * index }}
                    viewport={{ once: true }}
                  >
                    {project.link ? (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block"
                      >
                        <ProjectContent project={project} />
                      </a>
                    ) : (
                      <ProjectContent project={project} />
                    )}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ProjectContent({ project }: { project: Project }) {
  const status = statusConfig[project.status];
  
  return (
    <div className="border-l-2 border-[#262626] pl-6 py-2 group-hover:border-[#4F46E5] transition-colors duration-300">
      <div className="flex items-center gap-3 mb-2">
        <h3 className="text-lg text-[#FAFAF9] font-light group-hover:text-[#4F46E5] transition-colors">
          {project.title}
        </h3>
        <span className={`flex items-center gap-1.5 text-xs ${status.color}`}>
          <span className={`w-1.5 h-1.5 rounded-full ${status.dot}`} />
          {status.label}
        </span>
      </div>
      
      <p className="text-[#A1A1AA] text-sm leading-relaxed mb-3">
        {project.proof}
      </p>
      
      <div className="flex flex-wrap gap-2">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="text-xs text-[#525252] tracking-wide"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}
