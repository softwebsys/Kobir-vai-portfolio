"use client";

import Link from "next/link";
import { Shield } from "lucide-react";

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
    <nav className="sticky top-0 z-50 w-full border-b border-white/10 bg-background/60 backdrop-blur-xl">
      <div className="container mx-auto flex h-20 items-center justify-between px-6 md:px-12">
        <Link href="/" className="flex items-center gap-3 text-2xl font-black tracking-tighter text-foreground hover:opacity-80 transition-opacity">
          <Shield className="h-7 w-7 text-primary" />
          <span>KABIR</span>
        </Link>
        <div className="hidden items-center space-x-8 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-xs font-bold uppercase tracking-widest text-muted-foreground transition-all hover:text-foreground hover:tracking-[0.15em]"
            >
              {link.name}
            </Link>
          ))}
        </div>
      </div>
    </nav>

  );
}
