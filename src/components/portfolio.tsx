"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export function Portfolio() {
  const projects = [
    { name: "Network Vulnerability Scan", category: "Nmap / Recon", image: "/nmap.png" },
    { name: "Packet Traffic Analysis", category: "Wireshark", image: "/wireshark.png" },
    { name: "Active Directory Lab", category: "Windows Security", image: "/nmap.png" },
  ];

  return (
    <section id="portfolio" className="py-24 bg-[#f9f9f9] overflow-hidden">
      <div className="mx-auto max-w-[1280px] px-6 md:px-10">
        <motion.div 
          className="mb-16 space-y-4"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-block border-b-[3px] border-[#1770b5] pb-2">
            <h2 className="text-sm font-[800] uppercase tracking-widest text-[#2d2e32]">Portfolio</h2>
          </div>
          <h3 className="text-4xl font-[800] text-[#2d2e32] md:text-5xl">Selected Projects.</h3>
        </motion.div>

        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, i) => (
            <motion.div 
              key={i} 
              className="group bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-premium transition-all"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              whileHover={{ y: -10 }}
            >
              <div className="relative aspect-video overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.name}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-[#1770b5]/10 opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
              <div className="p-8 space-y-4">
                <span className="text-xs font-bold uppercase tracking-widest text-[#1770b5]">{project.category}</span>
                <h4 className="text-xl font-[800] text-[#2d2e32]">{project.name}</h4>
                <p className="text-sm text-[#5a606c] font-light leading-relaxed">
                  Comprehensive security auditing and technical report generation for enterprise environments.
                </p>
                <div className="pt-4">
                  <a href="#" className="inline-flex items-center text-sm font-bold text-[#2d2e32] hover:text-[#1770b5] transition-colors">
                    View Project Details
                    <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
