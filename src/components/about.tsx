"use client";

import { motion } from "framer-motion";

export function About() {
  return (
    <section id="about" className="py-24 bg-white overflow-hidden">
      <motion.div 
        className="mx-auto max-w-[1280px] px-6 md:px-10"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="grid gap-16 md:grid-cols-2 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="inline-block border-b-[3px] border-[#1770b5] pb-2">
                <h2 className="text-sm font-[800] uppercase tracking-widest text-[#2d2e32]">About Me</h2>
              </div>
              <h3 className="text-4xl font-[800] text-[#2d2e32] leading-tight md:text-5xl">
                Technical Excellence & <br /> Professional Integrity.
              </h3>
            </div>
            
            <div className="space-y-6 text-lg text-[#5a606c] leading-relaxed font-light">
              <p>
                My name is <span className="font-semibold text-[#2d2e32]">Kabir Hossain</span>. I am a dedicated Junior Cyber Security Engineer based in Dhaka, Bangladesh. With a focus on <span className="text-[#1770b5] font-medium">Network Security</span> and vulnerability assessments, I strive to build resilient digital architectures.
              </p>
              <p>
                Having started my security journey later in life, I combine technical proficiency with over a decade of disciplined professional experience. I believe that security is not just about tools, but about understanding the mindset of those who seek to bypass them.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-8 pt-4">
              {[
                { label: "Experience", value: "3+ Years" },
                { label: "Completed Labs", value: "50+" }
              ].map((stat, i) => (
                <motion.div 
                  key={i} 
                  className="p-6 bg-[#f9f9f9] rounded-xl border border-gray-100"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="text-3xl font-[800] text-[#1770b5]">{stat.value}</div>
                  <div className="text-sm font-semibold text-[#5a606c] uppercase tracking-wider">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>

          <motion.div 
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="bg-[#f9f9f9] p-10 md:p-16 rounded-3xl border border-gray-100 relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-8 text-6xl text-[#1770b5]/10 font-serif italic group-hover:text-[#1770b5]/20 transition-colors">"</div>
              <blockquote className="text-2xl font-medium text-[#2d2e32] leading-relaxed italic relative z-10">
                "Security is a state of mind, not just a set of tools. It requires constant curiosity and unwavering ethics."
              </blockquote>
              <div className="mt-10 flex items-center gap-4">
                <div className="h-[2px] w-12 bg-[#1770b5]" />
                <span className="text-sm font-bold uppercase tracking-widest text-[#5a606c]">Core Philosophy</span>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
