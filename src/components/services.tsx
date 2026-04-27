"use client";

import { Globe, Server, ShieldCheck, Search } from "lucide-react";
import { motion } from "framer-motion";

export function Services() {
  const services = [
    {
      title: "Website Attacks",
      description: "Exploiting structural weaknesses including SQLi, XSS, SSRF, and advanced Web Shell deployment strategies.",
      icon: Globe,
    },
    {
      title: "Infrastructure Security",
      description: "Analyzing network protocols (DNS, TCP/UDP), firewall bypass techniques, and comprehensive service enumeration.",
      icon: Server,
    },
    {
      title: "Cloud Defense",
      description: "Securing local and hybrid cloud environments against common misconfigurations and privilege escalation vectors.",
      icon: ShieldCheck,
    },
    {
      title: "Threat Research",
      description: "Proactive identification of zero-day vulnerabilities through automated fuzzing and rigorous manual code auditing.",
      icon: Search,
    },
  ];

  return (
    <section id="services" className="py-40 relative">
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
            <h3 className="text-[10px] font-black uppercase tracking-[0.5em] text-primary">Capabilities</h3>
            <h2 className="text-6xl font-black tracking-tighter text-foreground md:text-8xl leading-none">
              STRATEGIC <br />
              <span className="text-muted-foreground/10">DEFENSE.</span>
            </h2>
          </div>
        </motion.div>

        <div className="grid gap-8 sm:grid-cols-2">
          {services.map((service, i) => (
            <motion.div 
              key={i} 
              className="group relative overflow-hidden rounded-[3rem] bg-secondary/10 p-16 border border-white/5 transition-all duration-700 hover:bg-secondary/20 hover:border-white/10"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: i * 0.1 }}
            >
              <div className="mb-12 flex h-20 w-20 items-center justify-center rounded-3xl bg-primary/10 text-primary transition-all duration-700 group-hover:scale-110 group-hover:bg-primary group-hover:text-primary-foreground">
                <service.icon className="h-10 w-10" />
              </div>
              <h4 className="mb-6 text-3xl font-black tracking-tighter text-foreground">{service.title}</h4>
              <p className="text-xl font-light leading-relaxed text-muted-foreground group-hover:text-foreground/80 transition-colors">
                {service.description}
              </p>
              
              <div className="absolute -right-16 -top-16 h-64 w-64 rounded-full bg-primary/5 blur-[100px] transition-all duration-1000 group-hover:bg-primary/20" />
              
              <div className="absolute bottom-16 right-16 opacity-0 group-hover:opacity-100 transition-all duration-700 translate-x-4 group-hover:translate-x-0">
                <div className="h-2 w-2 rounded-full bg-primary" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>


  );
}
