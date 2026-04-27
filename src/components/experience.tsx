import { Card, CardContent } from "@/components/ui/card";

export function Experience() {
  const experiences = [
    {
      role: "Junior Cyber Security Researcher",
      company: "Independent / Freelance",
      period: "2023 - Present",
      description: "Conducting independent security audits and participating in bug bounty programs. Focused on web application vulnerabilities."
    },
    {
      role: "Cyber Security Bootcamp",
      company: "Security Institute",
      period: "2022 - 2023",
      description: "Intensive 12-month program covering network security, penetration testing, and ethical hacking."
    },
    {
      role: "System Administrator",
      company: "Tech Solutions Ltd.",
      period: "2018 - 2022",
      description: "Managing internal networks and servers, implementing initial security protocols and firewall rules."
    }
  ];

  return (
    <section id="experiences" className="bg-slate-50 py-24">
      <div className="container mx-auto px-4 md:px-8">
        <h3 className="text-center text-xs font-bold uppercase tracking-widest text-[#025091]">Experiences</h3>
        <h2 className="mt-4 text-center text-3xl font-bold text-slate-900 md:text-4xl">
          Professional Journey
        </h2>
        <div className="mt-16 space-y-8 max-w-3xl mx-auto">
          {experiences.map((exp, i) => (
            <Card key={i} className="relative overflow-hidden border-l-4 border-l-[#025091]">
              <CardContent className="p-8">
                <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4">
                  <div>
                    <h4 className="text-2xl font-bold text-slate-900">{exp.role}</h4>
                    <p className="text-[#025091] font-semibold">{exp.company}</p>
                  </div>
                  <span className="text-sm font-medium text-slate-500 bg-slate-100 px-3 py-1 rounded-full">
                    {exp.period}
                  </span>
                </div>
                <p className="mt-4 text-slate-600 leading-relaxed">
                  {exp.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
