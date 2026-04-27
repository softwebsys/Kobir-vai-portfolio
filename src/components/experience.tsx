"use client";

import { motion } from "framer-motion";

export function Experience() {
  const experiences = [
    { role: "Security Researcher", company: "Bug Bounty", period: "2023 - Present" },
    { role: "Cyber Bootcamp", company: "Defense Academy", period: "2022 - 2023" },
    { role: "Systems Admin", company: "Enterprise Sol.", period: "2018 - 2022" },
  ];

  return (
    <section id="experiences" className="py-40 bg-[#0e0e0e]">
      <div className="container mx-auto px-6">
        <div className="grid gap-24 md:grid-cols-2">
          <div className="space-y-4">
            <h2 className="text-reveal text-sm font-bold uppercase tracking-[0.4em] text-[#888888]">
              Career Path
            </h2>
            <h3 className="text-reveal [animation-delay:0.2s] text-4xl font-bold text-white md:text-5xl">
              Professional Evolution.
            </h3>
          </div>

          <div className="space-y-16">
            {experiences.map((exp, i) => (
              <div key={i} className="text-reveal [animation-delay:0.3s] group space-y-4">
                <div className="flex items-center justify-between">
                  <h4 className="text-2xl font-bold text-white md:text-3xl">{exp.role}</h4>
                  <span className="text-[11px] font-bold uppercase tracking-widest text-[#444444]">{exp.period}</span>
                </div>
                <p className="text-[11px] font-bold uppercase tracking-[0.4em] text-[#888888]">{exp.company}</p>
                <p className="max-w-md text-lg font-light leading-relaxed text-[#888888]">
                  Focusing on infrastructure security and coordinating responsible disclosures.
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
