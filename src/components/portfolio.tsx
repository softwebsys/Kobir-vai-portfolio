"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export function Portfolio() {
  const projects = [
    { name: "Nmap Network Audit", category: "Reconnaissance", image: "/nmap.png" },
    { name: "Traffic Analysis", category: "Network Logic", image: "/wireshark.png" },
    { name: "Metasploit Lab", category: "Exploitation", image: "/nmap.png" },
  ];

  return (
    <section id="portfolio" className="py-40 bg-[#0e0e0e]">
      <div className="container mx-auto px-6">
        <div className="mb-32 space-y-4">
          <h2 className="text-reveal text-sm font-bold uppercase tracking-[0.4em] text-[#888888]">
            Selected Projects
          </h2>
          <h3 className="text-reveal [animation-delay:0.2s] text-4xl font-bold text-white md:text-5xl">
            Technical Exhibition.
          </h3>
        </div>

        <div className="space-y-40">
          {projects.map((project, i) => (
            <div key={i} className="text-reveal [animation-delay:0.3s] group relative grid gap-12 md:grid-cols-2 items-center">
              <div className="space-y-8 order-2 md:order-1">
                <span className="text-[11px] font-bold uppercase tracking-[0.4em] text-[#888888]">{project.category}</span>
                <h4 className="text-5xl font-bold tracking-tight text-white md:text-7xl group-hover:text-[#888888] transition-colors duration-700">{project.name}</h4>
                <p className="max-w-md text-xl font-light text-[#888888]">
                  Detailed security auditing and vulnerability identification in a controlled laboratory environment.
                </p>
                <div className="pt-8">
                  <a href="#" className="text-[11px] font-bold uppercase tracking-widest text-white border-b border-white pb-2 hover:text-[#888888] hover:border-[#888888] transition-all">
                    View Lab Report
                  </a>
                </div>
              </div>
              <div className="relative aspect-video overflow-hidden rounded-lg order-1 md:order-2 bg-[#161616]">
                <Image
                  src={project.image}
                  alt={project.name}
                  fill
                  className="object-cover grayscale opacity-40 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-1000"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
