"use client";

import { Globe, Server, ShieldCheck, Search } from "lucide-react";
import { motion } from "framer-motion";

export function Services() {
  const services = [
    { 
      title: "Vulnerability Assessment", 
      description: "Identifying security gaps in web applications and network infrastructure using industry-standard methodologies.",
      icon: Search 
    },
    { 
      title: "Network Security", 
      description: "Analyzing packet traffic and firewall configurations to ensure robust defense-in-depth strategies.",
      icon: ShieldCheck 
    },
    { 
      title: "Penetration Testing", 
      description: "Simulating cyber attacks to evaluate the security of an organization's defensive systems.",
      icon: Server 
    },
    { 
      title: "Security Auditing", 
      description: "Reviewing system configurations and access controls to ensure compliance with security best practices.",
      icon: Globe 
    },
  ];

  return (
    <section id="services" className="py-24 bg-white overflow-hidden">
      <div className="mx-auto max-w-[1280px] px-6 md:px-10">
        <motion.div 
          className="mb-16 space-y-4"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-block border-b-[3px] border-[#1770b5] pb-2">
            <h2 className="text-sm font-[800] uppercase tracking-widest text-[#2d2e32]">Services</h2>
          </div>
          <h3 className="text-4xl font-[800] text-[#2d2e32] md:text-5xl">Strategic Security.</h3>
        </motion.div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service, i) => (
            <motion.div 
              key={i} 
              className="group p-10 bg-white rounded-2xl border border-gray-100 transition-all hover:bg-[#f9f9f9] hover:border-[#1770b5]/20"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <motion.div 
                className="mb-8 flex h-16 w-16 items-center justify-center rounded-2xl bg-[#1770b5]/5 text-[#1770b5] transition-all group-hover:bg-[#1770b5] group-hover:text-white"
                whileHover={{ rotate: 15 }}
              >
                <service.icon className="h-8 w-8" />
              </motion.div>
              <h4 className="mb-4 text-xl font-[800] text-[#2d2e32]">{service.title}</h4>
              <p className="text-sm text-[#5a606c] font-light leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
