import { Globe, Server, ShieldCheck, Search } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function Services() {
  const services = [
    {
      title: "Website Attacks",
      description: "I'm able to use vulnerabilities to my advantage like SQL- and XSS injections, SSRF, No-Redirect, Wordpress vulnerabilities and Web Shells.",
      icon: Globe,
    },
    {
      title: "Server Attacks",
      description: "I'm able to use powerful set of tools and methods like DNS Floods, TCP/UDP attacks, Nmap, FTP/SSH attacks and Firewall Bypasses.",
      icon: Server,
    },
    {
      title: "Network Security",
      description: "Assessment of local and cloud networks to identify potential entry points and misconfigurations that could lead to data breaches.",
      icon: ShieldCheck,
    },
    {
      title: "Vulnerability Research",
      description: "Proactive searching for unknown vulnerabilities in software and firmware using fuzzing and manual code review techniques.",
      icon: Search,
    },
  ];

  return (
    <section id="services" className="bg-slate-50 py-24">
      <div className="container mx-auto px-4 md:px-8">
        <h3 className="text-center text-xs font-bold uppercase tracking-widest text-[#025091]">Services</h3>
        <h2 className="mt-4 text-center text-3xl font-bold text-slate-900 md:text-4xl">
          What I can do
        </h2>
        <div className="mt-16 grid gap-8 sm:grid-cols-2">
          {services.map((service, i) => (
            <Card key={i} className="border-2 border-[#025091]/20 transition-all hover:border-[#025091]">
              <CardHeader>
                <service.icon className="h-8 w-8 text-[#025091]" />
                <CardTitle className="mt-4 text-2xl font-bold text-slate-900">
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600 leading-relaxed">
                  {service.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
