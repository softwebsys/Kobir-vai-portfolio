"use client";

import Image from "next/image";
import { Linkedin, Mail, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export function Hero() {
  return (
    <section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-6 text-center">
      <div className="z-10 max-w-5xl space-y-12">
        <div className="space-y-4">
          <p className="text-reveal text-sm font-bold uppercase tracking-[0.4em] text-[#888888]">
            Junior Cyber Security Engineer
          </p>
          <h1 className="text-reveal [animation-delay:0.2s] text-6xl font-bold tracking-tighter text-white md:text-9xl leading-none">
            KABIR <br /> HOSSAIN.
          </h1>
        </div>
        
        <p className="text-reveal [animation-delay:0.4s] mx-auto max-w-2xl text-xl font-light leading-relaxed text-[#888888] md:text-2xl">
          Analyzing systems for structural vulnerabilities and coordinating <span className="text-white">responsible disclosures</span>. Strategic defense through analytical rigor.
        </p>

        <div className="text-reveal [animation-delay:0.6s] flex justify-center gap-12 pt-8">
          {[Linkedin, Mail, Github].map((Icon, i) => (
            <a key={i} href="#" className="group flex items-center gap-2 text-[11px] font-bold uppercase tracking-widest text-[#888888] hover:text-white transition-colors">
              <Icon className="h-5 w-5" />
              <span className="hidden sm:inline">Connect</span>
            </a>
          ))}
        </div>
      </div>
      
      {/* Background Decorative Element */}
      <div className="absolute inset-0 -z-10 opacity-20 bg-[radial-gradient(circle_at_50%_120%,#222,transparent)]" />
    </section>
  );
}
