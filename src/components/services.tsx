"use client";

import { motion } from "framer-motion";

export function Services() {
  const services = [
    { title: "Website Attacks", id: "01" },
    { title: "Infrastructure Security", id: "02" },
    { title: "Cloud Defense", id: "03" },
    { title: "Threat Research", id: "04" },
  ];

  return (
    <section id="services" className="py-40 bg-[#0e0e0e]">
      <div className="container mx-auto px-6">
        <div className="grid gap-24 md:grid-cols-2">
          <div className="space-y-4">
            <h2 className="text-reveal text-sm font-bold uppercase tracking-[0.4em] text-[#888888]">
              Capabilities
            </h2>
            <h3 className="text-reveal [animation-delay:0.2s] text-4xl font-bold text-white md:text-5xl">
              Strategic Defense.
            </h3>
          </div>

          <div className="divide-y divide-[#222222]">
            {services.map((service, i) => (
              <div key={i} className="text-reveal [animation-delay:0.3s] group flex items-center justify-between py-12 transition-colors hover:text-white">
                <div className="flex items-center gap-12">
                  <span className="text-sm font-bold text-[#444444] group-hover:text-white transition-colors">{service.id}</span>
                  <h4 className="text-2xl font-bold text-[#888888] group-hover:text-white transition-colors md:text-4xl">{service.title}</h4>
                </div>
                <div className="h-2 w-2 rounded-full bg-[#222222] group-hover:bg-white transition-colors" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
