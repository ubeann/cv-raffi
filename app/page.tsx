export const metadata = {
  title: "RAFFI ACHMAD R. — SDE // CV",
};

export default function Home() {
  return (
    <div className="flex flex-col w-full border-x border-border min-h-screen">
      {/* HEADER / HERO - INDUSTRIAL UTILITARIAN */}
      <header className="grid grid-cols-1 md:grid-cols-[1fr_3fr] border-b border-border">
        <div className="p-6 md:p-8 flex flex-col justify-between border-b md:border-b-0 md:border-r border-border gap-8">
          <div className="font-mono text-accent text-xs uppercase tracking-widest">[OP.SDE_01]</div>
          <div className="w-full aspect-square bg-[#18181b] border border-border relative overflow-hidden flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-700">
            {/* Placeholder for Profile */}
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1541560052-5e137f229371?q=80&w=600&auto=format&fit=crop')] bg-cover bg-center mix-blend-overlay opacity-30"></div>
            <span className="font-mono text-[10px] text-subtle absolute bottom-3 right-3 z-10">[IMAGE_PLACEHOLDER]</span>
          </div>
        </div>

        <div className="p-6 md:p-12 pl-6 md:pl-16 flex flex-col justify-center">
          <h1 className="text-5xl md:text-8xl font-black uppercase leading-[0.8] tracking-tighter mb-6">
            Raffi<br/>Achmad<br/>
            <span className="text-border text-transparent" style={{ WebkitTextStroke: "1px var(--foreground)" }}>Riandri</span>
          </h1>
          <div className="font-mono text-sm md:text-base text-subtle max-w-2xl leading-relaxed">
            Frontend-focused <span className="text-foreground">Software Development Engineer</span> combining deep Information Systems strategy with
            production-grade React, Next.js, and ML integrations. Architecting digital infrastructure for real people.
          </div>

          <div className="flex flex-wrap gap-4 mt-8 font-mono text-xs uppercase">
            <a href="mailto:raffiachmad93@gmail.com" className="border border-border px-4 py-2 hover:bg-accent hover:text-background hover:border-accent transition-colors">raffiachmad93@gmail.com</a>
            <a href="https://linkedin.com/in/raffi-achmad-r/" target="_blank" className="border border-border px-4 py-2 hover:bg-accent hover:text-background hover:border-accent transition-colors">LinkedIn</a>
            <a href="https://github.com/RaffiAchmadR" target="_blank" className="border border-border px-4 py-2 hover:bg-accent hover:text-background hover:border-accent transition-colors">GitHub</a>
          </div>
        </div>
      </header>

      {/* CORE EXPERTISE AS METRICS/TELEMETRY */}
      <section className="grid grid-cols-2 md:grid-cols-4 border-b border-border">
        {["Next.js & React", "Flutter & Mobile", "Machine Learning", "UI/UX Architecture"].map((skill, i) => (
          <div key={skill} className={`p-4 md:p-6 flex flex-col justify-between h-32 ${i !== 3 ? 'border-r border-border' : ''}`}>
            <span className="text-accent font-mono text-xs">0{i+1}.</span>
            <span className="font-bold text-sm uppercase">{skill}</span>
          </div>
        ))}
      </section>

      <div className="grid grid-cols-1 md:grid-cols-[1fr_3fr] flex-1">
        {/* SIDEBAR: EDUCATION & EXTRAS */}
        <aside className="border-r border-border">
          <div className="p-6 md:p-8 border-b border-border">
            <h2 className="font-mono text-xs uppercase text-subtle mb-6 tracking-widest">[ EDU_DATA ]</h2>
            <div className="mb-8">
              <h3 className="font-bold text-lg leading-tight mb-2">Universitas Airlangga</h3>
              <p className="text-subtle text-sm">Undergraduate Information Systems</p>
              <div className="font-mono text-accent text-xs mt-2">GPA: 3.38/4.00</div>
              <div className="font-mono text-xs text-subtle mt-1 opacity-50">Aug 2021 - Aug 2025</div>
            </div>
            <div>
              <h3 className="font-bold text-lg leading-tight mb-2">SMA Negeri 1</h3>
              <p className="text-subtle text-sm">Senior High School, Science</p>
              <div className="font-mono text-xs text-subtle mt-2 opacity-50">Jul 2018 - May 2021</div>
            </div>
          </div>

          <div className="p-6 md:p-8 border-b border-border md:border-b-0">
            <h2 className="font-mono text-xs uppercase text-subtle mb-6 tracking-widest">[ TECH_STACK ]</h2>
            <div className="flex flex-wrap gap-2 text-xs font-mono text-subtle">
               {["TypeScript", "React", "Next.js", "Python", "Flutter", "SQL", "TailwindCSS", "Figma"].map(s => (
                 <span key={s} className="px-2 py-1 border border-border">{s}</span>
               ))}
            </div>
          </div>
        </aside>

        {/* MAIN: EXPERIENCE & PROJECTS */}
        <main>
          {/* EXPERIENCE */}
          <div className="border-b border-border">
            <div className="p-6 md:p-8 bg-[#121214] border-b border-border flex justify-between items-center">
              <h2 className="font-sans text-xl uppercase font-black tracking-widest">Experiences</h2>
              <span className="font-mono text-accent text-xs">/LOG_01</span>
            </div>

            {/* ITEM 1 */}
            <article className="p-6 md:p-8 border-b border-border hover:bg-[#0c0c0e] transition-colors relative group">
              <div className="absolute top-0 left-0 w-1 h-0 bg-accent group-hover:h-full transition-all duration-300"></div>
              <header className="flex flex-col md:flex-row md:items-start justify-between mb-4">
                <div>
                  <h3 className="text-2xl font-bold uppercase">UI/UX Designer Intern</h3>
                  <div className="text-subtle text-sm mt-1">Ministry of Administrative and Bureaucratic Reform</div>
                </div>
                <div className="font-mono text-xs text-accent mt-2 md:mt-0 border border-border px-3 py-1 rounded inline-block">Nov 2025 - May 2026</div>
              </header>
              <ul className="text-sm text-subtle font-mono space-y-3 leading-relaxed">
                <li><span className="text-accent pr-2">&gt;</span>Designed end-to-end user experience for government digital services within INA Digital Design System.</li>
                <li><span className="text-accent pr-2">&gt;</span>Implemented SSO-based authentication flows and data-driven personalization.</li>
                <li><span className="text-accent pr-2">&gt;</span>Collaborated directly with major government agencies ensuring regulatory compliance.</li>
              </ul>
            </article>

            {/* ITEM 2 */}
            <article className="p-6 md:p-8 border-b border-border hover:bg-[#0c0c0e] transition-colors relative group">
              <div className="absolute top-0 left-0 w-1 h-0 bg-accent group-hover:h-full transition-all duration-300"></div>
              <header className="flex flex-col md:flex-row md:items-start justify-between mb-4">
                <div>
                  <h3 className="text-2xl font-bold uppercase">Independent Study (ML/Mobile)</h3>
                  <div className="text-subtle text-sm mt-1">Bangkit Academy Lead by Google, GoTo, Traveloka</div>
                </div>
                <div className="font-mono text-xs text-accent mt-2 md:mt-0 border border-border px-3 py-1 rounded inline-block">Feb 2024 - Jul 2024</div>
              </header>
              <ul className="text-sm text-subtle font-mono space-y-3 leading-relaxed">
                <li><span className="text-accent pr-2">&gt;</span>Designed and developed a mobile interface for real-time waste classification using image input.</li>
                <li><span className="text-accent pr-2">&gt;</span>Integrated image capture with a backend machine learning model.</li>
              </ul>
            </article>

            {/* ITEM 3 */}
            <article className="p-6 md:p-8 hover:bg-[#0c0c0e] transition-colors relative group">
              <div className="absolute top-0 left-0 w-1 h-0 bg-accent group-hover:h-full transition-all duration-300"></div>
              <header className="flex flex-col md:flex-row md:items-start justify-between mb-4">
                <div>
                  <h3 className="text-2xl font-bold uppercase">Fullstack Web & Mobile Dev</h3>
                  <div className="text-subtle text-sm mt-1">Nikah Yuk App & Web / E-Learning Web</div>
                </div>
                <div className="font-mono text-xs text-accent mt-2 md:mt-0 border border-border px-3 py-1 rounded inline-block">Feb 2023 - Jun 2023</div>
              </header>
              <ul className="text-sm text-subtle font-mono space-y-3 leading-relaxed">
                <li><span className="text-accent pr-2">&gt;</span>Architected E-Learning platform UI using HTML/JS/CSS & Bootstrap 5 with cross-device compatibility.</li>
                <li><span className="text-accent pr-2">&gt;</span>Developed "Nikah Yuk" mobile app using Flutter & Firebase real-time database.</li>
              </ul>
            </article>
          </div>

        </main>
      </div>

      <footer className="border-t border-border p-6 md:p-8 flex flex-col md:flex-row items-center justify-between font-mono text-xs text-subtle">
        <div>[ STATUS: ONLINE ]</div>
        <div className="mt-4 md:mt-0">&copy; {new Date().getFullYear()} RAFFI ACHMAD RIANDRI. ALL RIGHTS RESERVED.</div>
      </footer>
    </div>
  );
}
