"use client";

import { motion } from "framer-motion";

export function About() {
  return (
    <section id="about" className="py-40">
      <div className="container mx-auto px-6">
        <div className="grid gap-24 md:grid-cols-2">
          <div className="space-y-8">
            <h2 className="text-reveal text-sm font-bold uppercase tracking-[0.4em] text-[#888888]">
              Biography
            </h2>
            <h3 className="text-reveal [animation-delay:0.2s] text-4xl font-bold leading-tight text-white md:text-5xl">
              A mature approach <br /> to digital safety.
            </h3>
          </div>
          
          <div className="space-y-12">
            <div className="text-reveal [animation-delay:0.4s] space-y-8 text-xl font-light leading-relaxed text-[#888888]">
              <p>
                I am <span className="text-white">Kabir Hossain</span>, a Dhaka-based security professional. At 35, I bridge the gap between mature strategic thinking and technical execution.
              </p>
              <p>
                My methodology is rooted in the belief that security is a continuous process of auditing, identifying, and fortifying. I specialize in <span className="text-white">network reconnaissance</span> and vulnerability management.
              </p>
            </div>
            
            <div className="text-reveal [animation-delay:0.6s] grid grid-cols-2 gap-12 pt-12 border-t border-[#222222]">
              <div className="space-y-2">
                <div className="text-3xl font-bold text-white">10+</div>
                <div className="text-[11px] font-bold uppercase tracking-widest text-[#888888]">Labs Completed</div>
              </div>
              <div className="space-y-2">
                <div className="text-3xl font-bold text-white">100%</div>
                <div className="text-[11px] font-bold uppercase tracking-widest text-[#888888]">Commitment</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
