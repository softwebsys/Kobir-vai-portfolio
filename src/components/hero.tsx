import Image from "next/image";
import { Linkedin, Mail, Github } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section className="container mx-auto flex min-h-[70vh] flex-col items-center justify-center px-4 py-16 md:flex-row md:px-8">
      <div className="flex-1 space-y-6 text-center md:text-left">
        <h1 className="text-4xl font-extrabold tracking-tight text-slate-900 md:text-6xl">
          Cyber Security <br />
          <span className="text-[#025091]">Engineer</span>
        </h1>
        <p className="max-w-xl text-lg text-slate-600">
          Hi, My name is Kabir Hossain, a 35-year-old Junior Cyber Security Engineer 
          passionate about protecting digital landscapes. I specialize in vulnerability 
          assessment and network security.
        </p>
        <div className="flex justify-center gap-4 md:justify-start">
          <Button variant="ghost" size="icon" className="text-[#025091] hover:bg-blue-50">
            <Linkedin className="h-6 w-6" />
          </Button>
          <Button variant="ghost" size="icon" className="text-[#025091] hover:bg-blue-50">
            <Mail className="h-6 w-6" />
          </Button>
          <Button variant="ghost" size="icon" className="text-[#025091] hover:bg-blue-50">
            <Github className="h-6 w-6" />
          </Button>
        </div>
      </div>
      <div className="mt-12 flex flex-1 justify-center md:mt-0">
        <div className="relative h-64 w-64 overflow-hidden rounded-[2rem] border-4 border-[#025091] shadow-2xl md:h-96 md:w-80">
          <Image
            src="/kabir.png"
            alt="Kabir Hossain"
            fill
            className="object-cover"
            priority
          />
        </div>
      </div>
    </section>
  );
}
