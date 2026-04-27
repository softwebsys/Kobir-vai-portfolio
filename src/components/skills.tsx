"use client";

export function Skills() {
  const skills = [
    { name: "Network Mapper (Nmap)", level: "Expert", percent: 90 },
    { name: "Linux Systems", level: "Advanced", percent: 85 },
    { name: "Traffic Analysis", level: "Expert", percent: 85 },
    { name: "Vulnerability Assessment", level: "Advanced", percent: 80 },
  ];

  return (
    <section id="skills" className="py-24 bg-white">
      <div className="mx-auto max-w-[1280px] px-6 md:px-10">
        <div className="mb-16 space-y-4 reveal-animation">
          <div className="inline-block border-b-[3px] border-[#1770b5] pb-2">
            <h2 className="text-sm font-[800] uppercase tracking-widest text-[#2d2e32]">Skills</h2>
          </div>
          <h3 className="text-4xl font-[800] text-[#2d2e32] md:text-5xl">Technical Arsenal.</h3>
        </div>

        <div className="grid gap-12 md:grid-cols-2">
          {skills.map((skill, i) => (
            <div 
              key={i} 
              className="space-y-4 reveal-animation"
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              <div className="flex justify-between items-end">
                <div className="space-y-1">
                  <h4 className="text-xl font-[800] text-[#2d2e32]">{skill.name}</h4>
                  <span className="text-xs font-bold uppercase tracking-widest text-[#1770b5]">{skill.level}</span>
                </div>
                <div className="text-3xl font-[800] text-[#2d2e32]/10">{skill.percent}%</div>
              </div>
              <div className="h-2 w-full bg-[#f9f9f9] rounded-full overflow-hidden">
                <div 
                  className="h-full bg-[#1770b5] transition-all duration-1000 ease-out"
                  style={{ width: `${skill.percent}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
