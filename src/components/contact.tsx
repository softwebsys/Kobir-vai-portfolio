"use client";

import { Mail, Linkedin, Github, MapPin } from "lucide-react";

export function Contact() {
  return (
    <section id="contact" className="py-24 bg-white border-t border-gray-100">
      <div className="mx-auto max-w-[1280px] px-6 md:px-10">
        <div className="grid gap-16 md:grid-cols-2">
          <div className="space-y-8 reveal-animation">
            <div className="space-y-4">
              <div className="inline-block border-b-[3px] border-[#1770b5] pb-2">
                <h2 className="text-sm font-[800] uppercase tracking-widest text-[#2d2e32]">Contact</h2>
              </div>
              <h3 className="text-4xl font-[800] text-[#2d2e32] md:text-5xl">Let's Connect.</h3>
            </div>
            <p className="text-lg text-[#a0acbd] font-light leading-relaxed">
              I am currently open to strategic collaborations, security auditing projects, and full-time opportunities.
            </p>
            
            <div className="space-y-6 pt-4">
              {[
                { icon: Mail, value: "kabir.hossain@example.com", label: "Email" },
                { icon: Linkedin, value: "linkedin.com/in/kabir-hossain", label: "LinkedIn" },
                { icon: MapPin, value: "Dhaka, Bangladesh", label: "Location" }
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-6 group">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#f9f9f9] text-[#1770b5] transition-all group-hover:bg-[#1770b5] group-hover:text-white">
                    <item.icon className="h-6 w-6" />
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-widest text-[#a0acbd]">{item.label}</p>
                    <p className="text-lg font-bold text-[#2d2e32] group-hover:text-[#1770b5] transition-colors">{item.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="reveal-animation [animation-delay:0.3s]">
            <div className="bg-[#f9f9f9] p-10 rounded-3xl border border-gray-100">
              <h4 className="text-2xl font-[800] text-[#2d2e32] mb-8">Send a Message</h4>
              <form className="space-y-6">
                <div className="grid gap-6 sm:grid-cols-2">
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-[#a0acbd]">Full Name</label>
                    <input className="w-full bg-white border border-gray-200 rounded-lg h-12 px-4 focus:outline-none focus:ring-2 focus:ring-[#1770b5]/20 focus:border-[#1770b5]" placeholder="John Doe" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-[#a0acbd]">Email Address</label>
                    <input className="w-full bg-white border border-gray-200 rounded-lg h-12 px-4 focus:outline-none focus:ring-2 focus:ring-[#1770b5]/20 focus:border-[#1770b5]" placeholder="john@example.com" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-[#a0acbd]">Message</label>
                  <textarea rows={5} className="w-full bg-white border border-gray-200 rounded-lg p-4 focus:outline-none focus:ring-2 focus:ring-[#1770b5]/20 focus:border-[#1770b5]" placeholder="Tell me about your project..." />
                </div>
                <button className="w-full bg-[#1770b5] hover:bg-[#135a92] h-14 rounded-lg font-bold text-white transition-all transform hover:-translate-y-1">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>

        <footer className="mt-24 pt-12 border-t border-gray-100">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
            <span className="text-xl font-[800] text-[#2d2e32] uppercase">KABIR <span className="text-[#1770b5]">HOSSAIN</span></span>
            <p className="text-sm text-[#a0acbd]">© 2024 / Engineered for absolute security.</p>
            <div className="flex gap-6">
              {[Github, Linkedin, Mail].map((Icon, i) => (
                <Icon key={i} className="h-5 w-5 text-[#a0acbd] hover:text-[#1770b5] cursor-pointer transition-colors" />
              ))}
            </div>
          </div>
        </footer>
      </div>
    </section>
  );
}
