import Image from "next/image";

export function Portfolio() {
  const projects = [
    { name: "Nmap Network Audit", image: "/nmap.png" },
    { name: "Traffic Analysis", image: "/wireshark.png" },
    { name: "Metasploit Lab", image: "/nmap.png" }, // Reusing for now
  ];

  return (
    <section id="portfolio" className="py-24">
      <div className="container mx-auto px-4 md:px-8">
        <h3 className="text-center text-xs font-bold uppercase tracking-widest text-[#025091]">Portfolio</h3>
        <h2 className="mt-4 text-center text-3xl font-bold text-slate-900 md:text-4xl">
          Homemade Projects
        </h2>
        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, i) => (
            <div
              key={i}
              className="group relative h-64 overflow-hidden rounded-xl bg-black shadow-lg"
            >
              <Image
                src={project.image}
                alt={project.name}
                fill
                className="object-cover opacity-60 transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-black/20">
                <h4 className="text-2xl font-black text-white">{project.name}</h4>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
