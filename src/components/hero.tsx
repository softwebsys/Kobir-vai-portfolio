"use client";

import Image from "next/image";
import { Linkedin, Mail, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.3 },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <section className="container mx-auto flex min-h-[90vh] flex-col items-center justify-center px-6 py-12 md:flex-row md:px-12 overflow-hidden">
      <motion.div 
        className="flex-1 space-y-10 text-center md:text-left"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div 
          variants={itemVariants}
          className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5 text-[10px] font-black tracking-[0.2em] text-primary uppercase border border-primary/20"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
          </span>
          Junior Cyber Security Engineer
        </motion.div>
        
        <motion.h1 
          variants={itemVariants}
          className="text-6xl font-black tracking-tighter text-foreground md:text-8xl lg:text-[10rem] leading-[0.85]"
        >
          KABIR <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-muted-foreground/20 via-muted-foreground/40 to-muted-foreground/20">HOSSAIN</span>
        </motion.h1>

        <motion.p 
          variants={itemVariants}
          className="max-w-xl text-lg leading-relaxed text-muted-foreground md:text-xl font-light"
        >
          Securing the digital frontier through <span className="text-primary font-medium text-glow">proactive defense</span> and analytical rigor. 35 years of disciplined perspective applied to <span className="text-foreground font-medium underline decoration-primary/30 underline-offset-8">modern security challenges</span>.
        </motion.p>

        <motion.div variants={itemVariants} className="flex flex-col items-center gap-8 sm:flex-row md:justify-start">
          <Button className="h-16 rounded-full px-12 text-xs font-black uppercase tracking-[0.2em] transition-all hover:scale-105 active:scale-95 glow-primary group">
            Explore Portfolio
            <div className="ml-2 h-1 w-1 rounded-full bg-current group-hover:w-4 transition-all" />
          </Button>
          <div className="flex gap-6">
            {[Linkedin, Mail, Github].map((Icon, i) => (
              <motion.div key={i} whileHover={{ y: -5 }} className="cursor-pointer">
                <Icon className="h-5 w-5 text-muted-foreground hover:text-primary transition-colors" />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.div>

      <motion.div 
        className="relative mt-20 flex flex-1 justify-center md:mt-0 md:justify-end"
        initial={{ opacity: 0, scale: 0.9, x: 50 }}
        animate={{ opacity: 1, scale: 1, x: 0 }}
        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.5 }}
      >
        <div className="relative group">
          <div className="absolute -inset-1 bg-gradient-to-r from-primary/50 to-blue-500/50 rounded-[3.5rem] blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>
          <div className="relative aspect-[4/5] w-[320px] md:w-[450px] overflow-hidden rounded-[3rem] bg-secondary/30 border border-white/10 shadow-2xl">
            <Image
              src="/kabir.png"
              alt="Kabir Hossain"
              fill
              className="object-cover grayscale brightness-90 group-hover:grayscale-0 group-hover:brightness-110 transition-all duration-1000 ease-in-out scale-105 group-hover:scale-100"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0b] via-transparent to-transparent opacity-80" />
          </div>
          
          <motion.div 
            className="absolute -bottom-10 -right-10 hidden md:block"
            animate={{ y: [0, -15, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          >
            <div className="glass-dark p-6 rounded-3xl border border-white/10 shadow-2xl space-y-2">
              <div className="text-[10px] font-black text-primary tracking-widest uppercase">Specialization</div>
              <div className="text-sm font-bold text-white">Network Intrusion Detection</div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>


  );
}
