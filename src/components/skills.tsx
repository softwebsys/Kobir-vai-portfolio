"use client";

import { motion } from "framer-motion";

export function Skills() {
  const skills = [
    { name: "Nmap", level: "Expert" },
    { name: "Linux", level: "Advanced" },
    { name: "Wireshark", level: "Expert" },
    { name: "Burp Suite", level: "Advanced" },
  ];

  return (
    <section id="skills" className="py-40 bg-[#0e0e0e]">
      <div className="container mx-auto px-6">
        <div className="grid gap-24 md:grid-cols-2">
          <div className="space-y-4">
            <h2 className="text-reveal text-sm font-bold uppercase tracking-[0.4em] text-[#888888]">
              Expertise
            </h2>
            <h3 className="text-reveal [animation-delay:0.2s] text-4xl font-bold text-white md:text-5xl">
              Technical Arsenal.
            </h3>
          </div>

          <div className="grid grid-cols-2 gap-12">
            {skills.map((skill, i) => (
              <div key={i} className="text-reveal [animation-delay:0.3s] space-y-2">
                <h4 className="text-xl font-bold text-white">{skill.name}</h4>
                <p className="text-[11px] font-bold uppercase tracking-widest text-[#444444]">{skill.level}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
