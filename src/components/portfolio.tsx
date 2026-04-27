"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export function Portfolio() {
  const projects = [
    { name: "Nmap Network Audit", image: "/nmap.png", category: "Reconnaissance" },
    { name: "Traffic Analysis", image: "/wireshark.png", category: "Network Analysis" },
    { name: "Metasploit Lab", image: "/nmap.png", category: "Exploitation" },
  ];

  return (
    <section id="portfolio" className="py-40">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div 
          className="flex flex-col md:flex-row md:items-end justify-between gap-12 mb-32"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="space-y-6">
            <div className="h-[2px] w-12 bg-primary" />
            <h3 className="text-[10px] font-black uppercase tracking-[0.5em] text-primary">Selected Works</h3>
            <h2 className="text-6xl font-black tracking-tighter text-foreground md:text-8xl leading-none">
              TECHNICAL <br />
              <span className="text-muted-foreground/10">EXHIBITION.</span>
            </h2>
          </div>
          <p className="max-w-md text-muted-foreground text-xl font-light leading-relaxed">
            A curation of offensive and defensive security operations executed in controlled laboratory environments.
          </p>
        </motion.div>
        
        <div className="grid gap-16 sm:grid-cols-2">
          {projects.map((project, i) => (
            <motion.div
              key={i}
              className="group relative aspect-[16/10] overflow-hidden rounded-[3.5rem] bg-secondary/20 border border-white/5"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: i * 0.1 }}
            >
              <Image
                src={project.image}
                alt={project.name}
                fill
                className="object-cover opacity-40 transition-all duration-1000 group-hover:scale-110 group-hover:opacity-100 grayscale group-hover:grayscale-0"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0b] via-[#0a0a0b]/20 to-transparent opacity-90 transition-opacity duration-700 group-hover:opacity-40" />
              
              <div className="absolute inset-0 p-16 flex flex-col justify-end">
                <div className="space-y-4">
                  <motion.span 
                    className="inline-block text-[10px] font-black uppercase tracking-[0.4em] text-primary"
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.5 }}
                  >
                    {project.category}
                  </motion.span>
                  <h4 className="text-4xl font-black tracking-tighter text-foreground group-hover:text-primary transition-colors duration-500">{project.name}</h4>
                </div>
                
                <div className="mt-10 flex items-center gap-4 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0">
                  <div className="h-[1px] w-12 bg-white/20" />
                  <span className="text-[10px] font-black uppercase tracking-[0.2em] text-white">View Lab Report</span>
                </div>
              </div>

              <div className="absolute top-10 right-10 h-16 w-16 rounded-full border border-white/10 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-700 -rotate-45 group-hover:rotate-0">
                <div className="h-2 w-2 rounded-full bg-primary animate-pulse" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>


  );
}
