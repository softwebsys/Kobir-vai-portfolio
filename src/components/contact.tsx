"use client";

import { Mail, Linkedin, Github, MapPin, Shield } from "lucide-react";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export function Contact() {
  return (
    <section id="contact" className="py-40 bg-[#0e0e0e]">
      <div className="container mx-auto px-6">
        <div className="grid gap-24 md:grid-cols-2">
          <div className="space-y-4">
            <h2 className="text-reveal text-sm font-bold uppercase tracking-[0.4em] text-[#888888]">
              Contact
            </h2>
            <h3 className="text-reveal [animation-delay:0.2s] text-4xl font-bold text-white md:text-5xl">
              Get in touch.
            </h3>
          </div>

          <div className="space-y-12">
            <div className="text-reveal [animation-delay:0.4s] space-y-8 text-xl font-light leading-relaxed text-[#888888]">
              <p>
                Currently open for <span className="text-white">strategic collaborations</span> and new opportunities in cyber security.
              </p>
            </div>
            
            <div className="text-reveal [animation-delay:0.6s] space-y-8 pt-12 border-t border-[#222222]">
              {[
                { label: "Email", value: "kabir.hossain@example.com" },
                { label: "LinkedIn", value: "linkedin.com/in/kabir-hossain" },
                { label: "Location", value: "Dhaka, Bangladesh" }
              ].map((item, i) => (
                <div key={i} className="group flex items-center justify-between transition-colors hover:text-white">
                  <span className="text-[11px] font-bold uppercase tracking-widest text-[#444444] group-hover:text-white transition-colors">{item.label}</span>
                  <span className="text-lg font-medium text-[#888888] group-hover:text-white transition-colors">{item.value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <footer className="mt-40 pt-12 border-t border-[#222222]">
          <div className="flex flex-col items-center justify-between gap-8 md:flex-row">
            <p className="text-[11px] font-bold uppercase tracking-[0.4em] text-[#444444]">
              © 2024 / Kabir Hossain
            </p>
            <div className="flex gap-8">
              {[Github, Linkedin, Mail].map((Icon, i) => (
                <Icon key={i} className="h-4 w-4 text-[#444444] hover:text-white transition-colors cursor-pointer" />
              ))}
            </div>
          </div>
        </footer>
      </div>
    </section>
  );
}
