"use client";

import { motion } from "framer-motion";

export function Experience() {
  const experiences = [
    { role: "Security Researcher", company: "Bug Bounty Platforms", period: "2023 - Present" },
    { role: "Cyber Security Bootcamp", company: "Strategic Defense Academy", period: "2022 - 2023" },
    { role: "Systems Administrator", company: "Enterprise IT Solutions", period: "2018 - 2022" },
  ];

  return (
    <section id="experiences" className="py-24 bg-[#f9f9f9] overflow-hidden">
      <div className="mx-auto max-w-[1280px] px-6 md:px-10">
        <div className="grid gap-16 md:grid-cols-2">
          <motion.div 
            className="space-y-8"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="space-y-4">
              <div className="inline-block border-b-[3px] border-[#1770b5] pb-2">
                <h2 className="text-sm font-[800] uppercase tracking-widest text-[#2d2e32]">Career</h2>
              </div>
              <h3 className="text-4xl font-[800] text-[#2d2e32] md:text-5xl">Professional <br /> Experience.</h3>
            </div>
            <p className="text-lg text-[#5a606c] font-light leading-relaxed">
              A timeline of my professional journey in Information Technology and Cyber Security.
            </p>
          </motion.div>

          <div className="space-y-12">
            {experiences.map((exp, i) => (
              <motion.div 
                key={i} 
                className="relative pl-12"
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.2 }}
              >
                <motion.div 
                  className="absolute left-0 top-0 h-full w-[2px] bg-gray-200"
                  initial={{ height: 0 }}
                  whileInView={{ height: "100%" }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: i * 0.2 }}
                />
                <motion.div 
                  className="absolute -left-[5px] top-2 h-3 w-3 rounded-full bg-[#1770b5]"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ type: "spring", delay: i * 0.2 + 0.5 }}
                />
                
                <div className="space-y-2">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                    <h4 className="text-2xl font-[800] text-[#2d2e32]">{exp.role}</h4>
                    <span className="text-sm font-bold text-[#1770b5] bg-[#1770b5]/10 px-4 py-1 rounded-full whitespace-nowrap">{exp.period}</span>
                  </div>
                  <p className="text-sm font-[700] uppercase tracking-wider text-[#2d2e32]/60">{exp.company}</p>
                  <p className="text-[#5a606c] font-light leading-relaxed">
                    Focusing on identifying structural vulnerabilities and coordinating defensive measures to protect enterprise assets.
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
