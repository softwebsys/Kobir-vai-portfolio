export function About() {
  return (
    <section id="about" className="bg-slate-50 py-24">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col gap-12 md:flex-row items-center">
          <div className="flex-1">
             <div className="relative h-64 w-full md:h-96 overflow-hidden rounded-xl shadow-lg">
                <div className="absolute inset-0 bg-[#025091]/10 flex items-center justify-center">
                   <div className="text-center p-8">
                      <p className="text-slate-500 italic">"Security is not a product, but a process."</p>
                      <p className="mt-4 font-bold text-[#025091]">— Bruce Schneier</p>
                   </div>
                </div>
             </div>
          </div>
          <div className="flex-1 space-y-6">
            <h3 className="text-xs font-bold uppercase tracking-widest text-[#025091]">About</h3>
            <h2 className="text-3xl font-bold text-slate-900 md:text-4xl">
              A lifelong interest in Cyber Security
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed">
              Hi, I am Kabir, a 35 years old located in Dhaka, Bangladesh. My interest 
              has always been in Cyber Security. I want to ensure that security is our top 
              priority within our quickly developing world and would like to contribute to a 
              more secure environment.
            </p>
            <p className="text-lg text-slate-600 leading-relaxed">
              Transitioning into the field at 35, I bring a unique blend of maturity, 
              analytical thinking, and a disciplined approach to problem-solving. 
              I have spent years self-studying and participating in various security 
              bootcamps to master the tools of the trade.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
