"use client";

import Link from "next/link";
import { Shield } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Navbar() {
  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Portfolio", href: "#portfolio" },
    { name: "Services", href: "#services" },
    { name: "Skills", href: "#skills" },
    { name: "Experiences", href: "#experiences" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-white/5 bg-[#0a0a0b]/80 backdrop-blur-2xl">
      <div className="container mx-auto flex h-24 items-center justify-between px-6 md:px-12">
        <Link href="/" className="flex items-center gap-3 group">
          <div className="relative flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 transition-all group-hover:bg-primary group-hover:rotate-[10deg]">
            <Shield className="h-5 w-5 text-primary group-hover:text-primary-foreground transition-colors" />
          </div>
          <span className="text-xl font-black tracking-tighter text-foreground">KABIR</span>
        </Link>
        
        <div className="hidden items-center gap-10 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="group relative text-[10px] font-black uppercase tracking-[0.3em] text-muted-foreground transition-colors hover:text-foreground"
            >
              {link.name}
              <span className="absolute -bottom-2 left-0 h-[2px] w-0 bg-primary transition-all group-hover:w-full" />
            </Link>
          ))}
          <Button variant="outline" className="rounded-full px-6 text-[10px] font-black uppercase tracking-widest border-white/10 hover:bg-white/5">
            Hire Me
          </Button>
        </div>
      </div>
    </nav>


  );
}
