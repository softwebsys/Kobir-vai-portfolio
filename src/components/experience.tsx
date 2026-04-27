"use client";

export function Experience() {
  const experiences = [
    { role: "Security Researcher", company: "Bug Bounty Platforms", period: "2023 - Present" },
    { role: "Cyber Security Bootcamp", company: "Strategic Defense Academy", period: "2022 - 2023" },
    { role: "Systems Administrator", company: "Enterprise IT Solutions", period: "2018 - 2022" },
  ];

  return (
    <section id="experiences" className="py-24 bg-[#f9f9f9]">
      <div className="mx-auto max-w-[1280px] px-6 md:px-10">
        <div className="grid gap-16 md:grid-cols-2">
          <div className="space-y-8 reveal-animation">
            <div className="space-y-4">
              <div className="inline-block border-b-[3px] border-[#1770b5] pb-2">
                <h2 className="text-sm font-[800] uppercase tracking-widest text-[#2d2e32]">Career</h2>
              </div>
              <h3 className="text-4xl font-[800] text-[#2d2e32] md:text-5xl">Professional <br /> Experience.</h3>
            </div>
            <p className="text-lg text-[#a0acbd] font-light leading-relaxed">
              A timeline of my professional journey in Information Technology and Cyber Security.
            </p>
          </div>

          <div className="space-y-12">
            {experiences.map((exp, i) => (
              <div 
                key={i} 
                className="relative pl-12 reveal-animation"
                style={{ animationDelay: `${i * 0.15}s` }}
              >
                <div className="absolute left-0 top-0 h-full w-[2px] bg-gray-200" />
                <div className="absolute -left-[5px] top-2 h-3 w-3 rounded-full bg-[#1770b5]" />
                
                <div className="space-y-2">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                    <h4 className="text-2xl font-[800] text-[#2d2e32]">{exp.role}</h4>
                    <span className="text-sm font-bold text-[#1770b5] bg-[#1770b5]/10 px-4 py-1 rounded-full whitespace-nowrap">{exp.period}</span>
                  </div>
                  <p className="text-sm font-[700] uppercase tracking-wider text-[#2d2e32]/60">{exp.company}</p>
                  <p className="text-[#a0acbd] font-light leading-relaxed">
                    Focusing on identifying structural vulnerabilities and coordinating defensive measures to protect enterprise assets.
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
