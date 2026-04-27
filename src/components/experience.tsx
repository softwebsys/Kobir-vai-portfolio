"use client";

import { motion } from "framer-motion";

export function Experience() {
  const experiences = [
    {
      role: "Security Researcher",
      company: "Independent / Bug Bounty",
      period: "2023 - Present",
      description: "Analyzing distributed systems for structural vulnerabilities and coordinating responsible disclosures."
    },
    {
      role: "Cyber Operations Bootcamp",
      company: "Strategic Defense Academy",
      period: "2022 - 2023",
      description: "Advanced simulation training focusing on APT emulation and enterprise network fortification."
    },
    {
      role: "Systems Administrator",
      company: "Enterprise Solutions",
      period: "2018 - 2022",
      description: "Architecting secure infrastructure and managing complex network security policies."
    }
  ];

  return (
    <section id="experiences" className="py-40">
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
            <h3 className="text-[10px] font-black uppercase tracking-[0.5em] text-primary">Evolution</h3>
            <h2 className="text-6xl font-black tracking-tighter text-foreground md:text-8xl leading-none">
              CAREER <br />
              <span className="text-muted-foreground/10">TRAJECTORY.</span>
            </h2>
          </div>
        </motion.div>

        <div className="space-y-24 max-w-5xl">
          {experiences.map((exp, i) => (
            <motion.div 
              key={i} 
              className="group relative flex flex-col md:flex-row gap-12 md:gap-32"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: i * 0.1 }}
            >
              <div className="md:w-40 flex-shrink-0 pt-2">
                <div className="text-sm font-black tracking-[0.3em] text-primary tabular-nums group-hover:tracking-[0.5em] transition-all duration-500">
                  {exp.period}
                </div>
              </div>
              
              <div className="relative flex-1 pb-16 border-b border-white/5 last:border-0 last:pb-0">
                <div className="absolute -left-[91px] top-4 h-2 w-2 rounded-full bg-primary/20 border border-primary/50 hidden md:block group-hover:scale-150 group-hover:bg-primary transition-all duration-500" />
                
                <div className="space-y-6">
                  <div className="space-y-2">
                    <h4 className="text-4xl font-black tracking-tighter text-foreground transition-all duration-500 group-hover:text-primary">
                      {exp.role}
                    </h4>
                    <p className="text-[10px] font-black text-muted-foreground uppercase tracking-[0.4em]">
                      {exp.company}
                    </p>
                  </div>
                  <p className="text-xl font-light leading-relaxed text-muted-foreground max-w-3xl group-hover:text-foreground/80 transition-colors duration-500">
                    {exp.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>


  );
}
