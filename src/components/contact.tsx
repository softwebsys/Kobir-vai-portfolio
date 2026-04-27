"use client";

import { Mail, Linkedin, Github, MapPin, Shield } from "lucide-react";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export function Contact() {
  return (
    <section id="contact" className="py-40 relative overflow-hidden">
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
            <h3 className="text-[10px] font-black uppercase tracking-[0.5em] text-primary">Contact</h3>
            <h2 className="text-6xl font-black tracking-tighter text-foreground md:text-8xl leading-none">
              SECURE <br />
              <span className="text-muted-foreground/10">CHANNEL.</span>
            </h2>
          </div>
        </motion.div>

        <div className="grid gap-32 md:grid-cols-2">
          <motion.div 
            className="space-y-16"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          >
            <p className="text-3xl font-light leading-snug text-muted-foreground max-w-lg">
              Open for strategic <span className="text-foreground font-medium underline decoration-primary/30 underline-offset-8">collaborations</span>, complex security challenges, and career-defining opportunities.
            </p>
            
            <div className="space-y-10">
              {[
                { icon: Mail, label: "Transmission", value: "kabir.hossain@example.com" },
                { icon: Linkedin, label: "Professional", value: "linkedin.com/in/kabir-hossain" },
                { icon: MapPin, label: "Operations", value: "Dhaka, Bangladesh" }
              ].map((item, i) => (
                <div key={i} className="group flex items-center gap-8">
                  <div className="flex h-20 w-20 items-center justify-center rounded-[2rem] bg-secondary/20 border border-white/5 text-muted-foreground transition-all duration-500 group-hover:bg-primary group-hover:text-primary-foreground group-hover:border-primary group-hover:rotate-[10deg]">
                    <item.icon className="h-8 w-8" />
                  </div>
                  <div className="space-y-1">
                    <p className="text-[10px] font-black uppercase tracking-[0.4em] text-primary/50">{item.label}</p>
                    <p className="text-2xl font-black tracking-tighter text-foreground group-hover:text-primary transition-colors duration-500">{item.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div 
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
          >
            <div className="relative overflow-hidden rounded-[4rem] bg-secondary/10 p-16 md:p-20 border border-white/10 shadow-2xl">
              <form className="space-y-12">
                <div className="space-y-2 group">
                  <label className="text-[10px] font-black uppercase tracking-[0.4em] text-primary ml-1 group-focus-within:text-primary transition-colors">Identification</label>
                  <input
                    type="text"
                    className="w-full bg-transparent border-b border-white/5 py-6 text-2xl text-foreground placeholder-white/5 focus:outline-none focus:border-primary transition-all font-light"
                    placeholder="Full Name"
                  />
                </div>
                <div className="space-y-2 group">
                  <label className="text-[10px] font-black uppercase tracking-[0.4em] text-primary ml-1 group-focus-within:text-primary transition-colors">Communication</label>
                  <input
                    type="email"
                    className="w-full bg-transparent border-b border-white/5 py-6 text-2xl text-foreground placeholder-white/5 focus:outline-none focus:border-primary transition-all font-light"
                    placeholder="Email Address"
                  />
                </div>
                <div className="space-y-2 group">
                  <label className="text-[10px] font-black uppercase tracking-[0.4em] text-primary ml-1 group-focus-within:text-primary transition-colors">Manifesto</label>
                  <textarea
                    rows={4}
                    className="w-full bg-transparent border-b border-white/5 py-6 text-2xl text-foreground placeholder-white/5 focus:outline-none focus:border-primary transition-all font-light resize-none"
                    placeholder="Brief Message"
                  ></textarea>
                </div>
                <Button className="h-20 w-full rounded-full text-xs font-black uppercase tracking-[0.4em] transition-all hover:scale-[1.02] active:scale-[0.98] glow-primary">
                  Establish Connection
                </Button>
              </form>
            </div>
            
            <div className="absolute -bottom-20 -right-20 h-80 w-80 rounded-full bg-primary/5 blur-[120px] -z-10" />
          </motion.div>
        </div>
      </div>

      <footer className="mt-60 py-24 border-t border-white/5">
        <div className="container mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="flex items-center gap-3 text-3xl font-black tracking-tighter text-foreground group">
            <Shield className="h-8 w-8 text-primary group-hover:rotate-[20deg] transition-transform" />
            KABIR <span className="text-muted-foreground/20 group-hover:text-muted-foreground/40 transition-colors">HOSSAIN</span>
          </div>
          <div className="flex flex-col items-center md:items-end gap-2">
            <p className="text-[10px] font-black uppercase tracking-[0.5em] text-muted-foreground">
              © 2024 / Digital Citadel
            </p>
            <p className="text-[8px] font-bold uppercase tracking-[0.2em] text-primary/40">
              Engineered for absolute security
            </p>
          </div>
          <div className="flex gap-10">
            {[Github, Linkedin, Mail].map((Icon, i) => (
              <Icon key={i} className="h-5 w-5 text-muted-foreground/40 hover:text-primary transition-all cursor-pointer hover:scale-125" />
            ))}
          </div>
        </div>
      </footer>
    </section>


  );
}
