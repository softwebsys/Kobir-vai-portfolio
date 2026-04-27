"use client";

import { motion } from "framer-motion";

export function Skills() {
  const skills = [
    { name: "Network Mapper (Nmap)", value: 90, level: "Expert", experience: "Tactical Recon" },
    { name: "Infrastructure Penetration", value: 85, level: "Advanced", experience: "Offensive Ops" },
    { name: "Linux Systems (Kali/Debian)", value: 80, level: "Advanced", experience: "Core OS" },
    { name: "Traffic Analysis (Wireshark)", value: 85, level: "Expert", experience: "Packet Logic" },
    { name: "Web App Security (Burp)", value: 75, level: "Advanced", experience: "Bug Bounty" },
    { name: "Vulnerability Management", value: 70, level: "Intermediate", experience: "Proactive Fix" },
  ];

  return (
    <section id="skills" className="py-40">
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
            <h3 className="text-[10px] font-black uppercase tracking-[0.5em] text-primary">Technical Arsenal</h3>
            <h2 className="text-6xl font-black tracking-tighter text-foreground md:text-8xl leading-none">
              MASTERED <br />
              <span className="text-muted-foreground/10">SKILLSET.</span>
            </h2>
          </div>
        </motion.div>

        <div className="grid gap-x-24 gap-y-16 md:grid-cols-2">
          {skills.map((skill, i) => (
            <motion.div 
              key={i} 
              className="group space-y-6"
              initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: i * 0.1 }}
            >
              <div className="flex items-end justify-between">
                <div className="space-y-2">
                  <h4 className="text-2xl font-black tracking-tighter text-foreground group-hover:text-primary transition-colors duration-500">{skill.name}</h4>
                  <div className="flex gap-4">
                    <span className="text-[10px] font-black uppercase tracking-[0.3em] text-primary">{skill.level}</span>
                    <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-muted-foreground">/ {skill.experience}</span>
                  </div>
                </div>
                <div className="text-3xl font-black tabular-nums tracking-tighter text-foreground/20 group-hover:text-primary/40 transition-colors duration-700">{skill.value}%</div>
              </div>
              <div className="relative h-[1px] w-full bg-white/5 overflow-hidden">
                <motion.div 
                  className="absolute left-0 top-0 h-full bg-primary"
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.value}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 2, ease: [0.16, 1, 0.3, 1], delay: 0.5 + i * 0.1 }}
                />
                <motion.div 
                  className="absolute left-0 top-0 h-full bg-white/20 blur-sm"
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.value}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 2, ease: [0.16, 1, 0.3, 1], delay: 0.5 + i * 0.1 }}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>


  );
}
