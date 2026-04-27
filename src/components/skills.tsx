"use client";

import { motion } from "framer-motion";

export function Skills() {
  const skills = [
    { name: "Network Mapper (Nmap)", level: "Expert", percent: 90 },
    { name: "Linux Systems", level: "Advanced", percent: 85 },
    { name: "Traffic Analysis", level: "Expert", percent: 85 },
    { name: "Vulnerability Assessment", level: "Advanced", percent: 80 },
  ];

  return (
    <section id="skills" className="py-24 bg-white overflow-hidden">
      <div className="mx-auto max-w-[1280px] px-6 md:px-10">
        <motion.div 
          className="mb-16 space-y-4"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-block border-b-[3px] border-[#1770b5] pb-2">
            <h2 className="text-sm font-[800] uppercase tracking-widest text-[#2d2e32]">Skills</h2>
          </div>
          <h3 className="text-4xl font-[800] text-[#2d2e32] md:text-5xl">Technical Arsenal.</h3>
        </motion.div>

        <div className="grid gap-12 md:grid-cols-2">
          {skills.map((skill, i) => (
            <div key={i} className="space-y-4">
              <motion.div 
                className="flex justify-between items-end"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 + 0.5 }}
              >
                <div className="space-y-1">
                  <h4 className="text-xl font-[800] text-[#2d2e32]">{skill.name}</h4>
                  <span className="text-xs font-bold uppercase tracking-widest text-[#1770b5]">{skill.level}</span>
                </div>
                <div className="text-3xl font-[800] text-[#2d2e32]/10">{skill.percent}%</div>
              </motion.div>
              <div className="h-2 w-full bg-[#f9f9f9] rounded-full overflow-hidden">
                <motion.div 
                  className="h-full bg-[#1770b5]"
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.percent}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.5, delay: i * 0.1 + 0.5, ease: "easeOut" }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
