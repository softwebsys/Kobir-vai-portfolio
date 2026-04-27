import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";

export function Skills() {
  const skills = [
    { name: "Network Mapper (Nmap)", value: 90, level: "Professional", experience: "5 years experience" },
    { name: "Brute Force Attacks", value: 85, level: "Professional", experience: "4 years experience" },
    { name: "Linux (Kali/Debian)", value: 80, level: "Advanced", experience: "6 years experience" },
    { name: "Acunetix", value: 70, level: "Intermediate", experience: "2 years experience" },
    { name: "Wireshark", value: 85, level: "Professional", experience: "4 years experience" },
    { name: "Burp Suite", value: 75, level: "Advanced", experience: "3 years experience" },
  ];

  return (
    <section id="skills" className="py-24">
      <div className="container mx-auto px-4 md:px-8">
        <h3 className="text-center text-xs font-bold uppercase tracking-widest text-[#025091]">Skills</h3>
        <h2 className="mt-4 text-center text-3xl font-bold text-slate-900 md:text-4xl">
          Mastering skills that are beyond legal
        </h2>
        <div className="mt-16 grid gap-x-12 gap-y-10 md:grid-cols-2">
          {skills.map((skill, i) => (
            <div key={i} className="space-y-4">
              <div className="flex items-center justify-between">
                <h4 className="text-lg font-semibold text-slate-900">{skill.name}</h4>
                <span className="font-bold text-[#025091]">{skill.value}%</span>
              </div>
              <Progress value={skill.value} className="h-3 bg-[#025091]/10" />
              <div className="flex gap-2">
                <Badge variant="secondary" className="bg-[#025091] text-white hover:bg-[#025091]/90">
                  {skill.level}
                </Badge>
                <Badge variant="outline" className="border-[#025091] text-[#025091]">
                  {skill.experience}
                </Badge>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
