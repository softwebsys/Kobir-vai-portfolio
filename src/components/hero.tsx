"use client";

import { useEffect, useState, useRef } from "react";
import Image from "next/image";
import { Linkedin, Mail, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const phrases = ["Digital Frontier.", "Cyber Systems.", "Network Assets."];
const chars = "!<>-_\\/[]{}—=+*^?#________";

export function Hero() {
  const [displayText, setDisplayText] = useState(phrases[0]);
  const [loopNum, setLoopNum] = useState(0);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const scramble = async () => {
      const nextPhrase = phrases[(loopNum + 1) % phrases.length];
      let iteration = 0;
      
      const interval = setInterval(() => {
        setDisplayText((prev) => 
          nextPhrase
            .split("")
            .map((char, index) => {
              if (index < iteration) {
                return nextPhrase[index];
              }
              return chars[Math.floor(Math.random() * chars.length)];
            })
            .join("")
        );

        if (iteration >= nextPhrase.length) {
          clearInterval(interval);
          setTimeout(() => {
            setLoopNum((prev) => prev + 1);
          }, 3000); // Wait 3 seconds before next scramble
        }

        iteration += 1 / 3;
      }, 30);
    };

    const timeout = setTimeout(scramble, 3000);
    return () => {
      clearTimeout(timeout);
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [loopNum]);

  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.3 * i },
    }),
  } as const;

  const child = {
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
    hidden: {
      opacity: 0,
      y: 20,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
  } as const;

  return (
    <section className="bg-[#f9f9f9] py-16 md:py-32 overflow-hidden min-h-[85vh] flex items-center">
      <div className="mx-auto max-w-[1280px] px-6 md:px-10 flex flex-col items-center gap-12 md:flex-row">
        <div className="flex-1 space-y-8 text-center md:text-left">
          <motion.div 
            className="space-y-4"
            initial="hidden"
            animate="visible"
            variants={container}
          >
            <motion.h2 
              variants={child}
              className="text-sm font-semibold uppercase tracking-[0.2em] text-[#1770b5]"
            >
              Junior Cyber Security Engineer
            </motion.h2>
            
            <motion.h1 
              variants={child}
              className="text-3xl font-hero tracking-tight text-[#2d2e32] md:text-5xl lg:text-6xl leading-[1.1]"
            >
              Securing the <br className="hidden md:block" /> 
              <span className="relative inline-block text-[#1770b5]">
                {/* Fixed width container to prevent shift */}
                <span className="invisible select-none" aria-hidden="true">
                  Digital Frontier.
                </span>
                <span className="absolute left-0 top-0 whitespace-nowrap">
                  {displayText}
                </span>
              </span>
            </motion.h1>
          </motion.div>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="max-w-xl text-lg leading-relaxed text-[#5a606c] md:text-xl font-light"
          >
            I specialize in identifying vulnerabilities and coordinating defensive strategies. 
            At 35, I bring a mature perspective to complex <span className="text-[#2d2e32] font-medium">security challenges</span>.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.8 }}
            className="flex flex-col items-center gap-6 sm:flex-row md:justify-start"
          >
            <Button size="lg" className="bg-[#1770b5] hover:bg-[#135a92] rounded-md px-10 h-14 font-semibold text-white shadow-lg transition-transform hover:scale-105">
              Download CV
            </Button>
            <div className="flex gap-6">
              {[
                { Icon: Linkedin, label: "LinkedIn" },
                { Icon: Mail, label: "Email" },
                { Icon: Github, label: "GitHub" }
              ].map(({ Icon, label }, i) => (
                <a key={i} href="#" aria-label={label} className="flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-sm border border-gray-100 text-[#2d2e32] hover:text-[#1770b5] transition-all hover:-translate-y-1">
                  <Icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </motion.div>
        </div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, duration: 1, ease: "easeOut" }}
          className="relative flex-1 flex justify-center md:justify-end"
        >
          <div className="relative aspect-square w-[300px] md:w-[450px]">
            <div className="absolute -inset-4 rounded-full border-2 border-dashed border-[#1770b5]/20 animate-[spin_20s_linear_infinite]" />
            <div className="relative h-full w-full overflow-hidden rounded-full border-[8px] border-white shadow-2xl">
              <Image
                src="/kabir.png"
                alt="Kabir Hossain"
                fill
                sizes="(max-width: 768px) 300px, 450px"
                className="object-cover"
                priority
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
