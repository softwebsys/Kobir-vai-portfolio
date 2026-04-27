import { Mail, Linkedin, Github, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Contact() {
  return (
    <section id="contact" className="py-24">
      <div className="container mx-auto px-4 md:px-8">
        <h3 className="text-center text-xs font-bold uppercase tracking-widest text-[#025091]">Contact</h3>
        <h2 className="mt-4 text-center text-3xl font-bold text-slate-900 md:text-4xl">
          Get in Touch
        </h2>
        <div className="mt-16 grid gap-12 md:grid-cols-2">
          <div className="space-y-8">
            <h4 className="text-2xl font-bold text-slate-900">Let's talk about security</h4>
            <p className="text-lg text-slate-600">
              I'm always open to discussing new projects, security challenges, or 
              opportunities to collaborate. Feel free to reach out through any of 
              the following channels.
            </p>
            <div className="space-y-4">
              <div className="flex items-center gap-4 text-slate-600 transition-colors hover:text-[#025091]">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-50">
                  <Mail className="h-6 w-6 text-[#025091]" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-slate-400">Email</p>
                  <p className="text-lg font-bold">kabir.hossain@example.com</p>
                </div>
              </div>
              <div className="flex items-center gap-4 text-slate-600 transition-colors hover:text-[#025091]">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-50">
                  <Linkedin className="h-6 w-6 text-[#025091]" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-slate-400">LinkedIn</p>
                  <p className="text-lg font-bold">linkedin.com/in/kabir-hossain</p>
                </div>
              </div>
              <div className="flex items-center gap-4 text-slate-600 transition-colors hover:text-[#025091]">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-50">
                  <MapPin className="h-6 w-6 text-[#025091]" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-slate-400">Location</p>
                  <p className="text-lg font-bold">Dhaka, Bangladesh</p>
                </div>
              </div>
            </div>
          </div>
          <div className="rounded-2xl bg-[#025091] p-8 text-white shadow-xl md:p-12">
            <h4 className="text-2xl font-bold">Quick Message</h4>
            <form className="mt-8 space-y-4">
              <div className="space-y-2">
                <label className="text-sm font-medium">Name</label>
                <input
                  type="text"
                  className="w-full rounded-lg bg-white/10 px-4 py-3 text-white placeholder-white/50 border border-white/20 focus:outline-none focus:ring-2 focus:ring-white/50"
                  placeholder="Your Name"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">Email</label>
                <input
                  type="email"
                  className="w-full rounded-lg bg-white/10 px-4 py-3 text-white placeholder-white/50 border border-white/20 focus:outline-none focus:ring-2 focus:ring-white/50"
                  placeholder="your@email.com"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">Message</label>
                <textarea
                  rows={4}
                  className="w-full rounded-lg bg-white/10 px-4 py-3 text-white placeholder-white/50 border border-white/20 focus:outline-none focus:ring-2 focus:ring-white/50"
                  placeholder="How can I help you?"
                ></textarea>
              </div>
              <Button className="w-full bg-white text-[#025091] hover:bg-slate-100 font-bold py-6">
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
      <footer className="mt-24 border-t py-12 text-center text-slate-400">
        <p>© 2024 Kabir Hossain. All rights reserved.</p>
      </footer>
    </section>
  );
}
