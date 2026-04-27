"use client";

import { motion } from "framer-motion";

export function About() {
  return (
    <section id="about" className="py-40">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col gap-32 md:flex-row items-center">
          <motion.div 
            className="flex-1 w-full"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          >
             <div className="relative aspect-square w-full max-w-[500px] overflow-hidden rounded-[4rem] bg-secondary/20 flex items-center justify-center group border border-white/5">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                <div className="relative p-16 text-center space-y-10">
                  <div className="flex justify-center">
                    <div className="h-[1px] w-20 bg-primary/50" />
                  </div>
                  <motion.p 
                    className="text-3xl font-light italic leading-tight text-foreground/90 tracking-tight"
                    animate={{ y: [0, -5, 0] }}
                    transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                  >
                    "Security is not a product, but a process."
                  </motion.p>
                  <div className="space-y-2">
                    <div className="text-[10px] font-black uppercase tracking-[0.5em] text-primary">Bruce Schneier</div>
                    <div className="text-[8px] font-bold uppercase tracking-[0.3em] text-muted-foreground">Security Guru</div>
                  </div>
                </div>
             </div>
          </motion.div>

          <motion.div 
            className="flex-1 space-y-12"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
          >
            <div className="space-y-6">
              <div className="h-[2px] w-12 bg-primary" />
              <h3 className="text-[10px] font-black uppercase tracking-[0.5em] text-primary">The Professional</h3>
            </div>
            
            <h2 className="text-6xl font-black tracking-tighter text-foreground md:text-8xl leading-none">
              A LIFELONG <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-b from-foreground to-muted-foreground/10">MISSION.</span>
            </h2>
            
            <div className="space-y-8">
              <p className="text-2xl font-light leading-relaxed text-muted-foreground">
                I am <span className="text-foreground font-bold underline decoration-primary/30 underline-offset-8">Kabir Hossain</span>, a Dhaka-based security professional. My journey is defined by a relentless curiosity about how digital systems fail, and a commitment to ensuring they don't.
              </p>
              <p className="text-lg leading-relaxed text-muted-foreground/60 font-light">
                At 35, I bridge the gap between mature strategic thinking and cutting-edge technical execution. I specialize in identifying structural weaknesses before they can be exploited, transforming vulnerabilities into fortified strengths.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-12 pt-10 border-t border-white/5">
              <div className="space-y-2">
                <div className="text-4xl font-black text-foreground tabular-nums">10+</div>
                <div className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">Labs Completed</div>
              </div>
              <div className="space-y-2">
                <div className="text-4xl font-black text-foreground tabular-nums">100%</div>
                <div className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">Commitment</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>


  );
}
