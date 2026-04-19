export const metadata = {
  title: "RAFFI ACHMAD R. — SDE // CV",
};

export default function Home() {
  return (
    <div className="flex flex-col w-full border-x border-border min-h-screen bg-background">

      {/* =========================================
          SECTION 01: HERO & IDENTITY
          ========================================= */}
      <section className="min-h-screen flex flex-col border-b border-border snap-start">
        <header className="grid grid-cols-1 md:grid-cols-[1fr_3fr] flex-1">
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
              <a href="mailto:raffiachmad93@gmail.com" className="border border-border bg-background px-6 py-3 hover:bg-accent hover:text-background hover:border-accent transition-colors duration-200 cursor-pointer flex items-center gap-2">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                raffiachmad93@gmail.com
              </a>
              <a href="https://linkedin.com/in/raffi-achmad-r/" target="_blank" rel="noopener noreferrer" className="border border-border bg-background px-6 py-3 hover:bg-accent hover:text-background hover:border-accent transition-colors duration-200 cursor-pointer flex items-center gap-2">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd"></path></svg>
                LinkedIn
              </a>
              <a href="https://github.com/RaffiAchmadR" target="_blank" rel="noopener noreferrer" className="border border-border bg-background px-6 py-3 hover:bg-accent hover:text-background hover:border-accent transition-colors duration-200 cursor-pointer flex items-center gap-2">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd"></path></svg>
                GitHub
              </a>
            </div>
          </div>
        </header>

        {/* CORE EXPERTISE AS METRICS/TELEMETRY */}
        <div className="grid grid-cols-2 md:grid-cols-4 border-t border-border mt-auto">
          {["Next.js & React", "Flutter & Mobile", "Machine Learning", "UI/UX Architecture"].map((skill, i) => (
            <div key={skill} className={`p-4 md:p-6 flex flex-col justify-between h-32 ${i !== 3 ? 'border-r border-border' : ''}`}>
              <span className="text-accent font-mono text-xs">0{i+1}.</span>
              <span className="font-bold text-sm uppercase">{skill}</span>
            </div>
          ))}
        </div>
      </section>

      {/* =========================================
          SECTION 02: FOUNDATION (EDUCATION & SKILLS)
          ========================================= */}
      <section className="min-h-screen flex flex-col border-b border-border snap-start">
        <div className="p-6 md:p-8 bg-[#121214] border-b border-border flex justify-between items-center">
          <h2 className="font-sans text-xl uppercase font-black tracking-widest">Foundation</h2>
          <span className="font-mono text-accent text-xs">/DATA_CORE</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 flex-1">
          {/* EDUCATION */}
          <div className="p-6 md:p-12 border-b md:border-b-0 md:border-r border-border">
            <h2 className="font-mono text-xs uppercase text-subtle mb-10 tracking-widest flex items-center gap-2">
              <span className="w-2 h-2 bg-accent inline-block"></span> [ EDU_DATA ]
            </h2>

            <div className="space-y-12">
              <div className="relative pl-6 border-l border-border">
                <div className="absolute w-3 h-3 bg-background border border-accent -left-[6.5px] top-1"></div>
                <h3 className="font-bold text-2xl leading-tight mb-2 uppercase">Universitas Airlangga</h3>
                <p className="text-subtle text-base mb-4">Undergraduate Information Systems</p>
                <div className="font-mono text-accent text-sm inline-block border border-border px-3 py-1 bg-[#121214]">GPA: 3.38/4.00</div>
                <div className="font-mono text-xs text-subtle mt-4 opacity-70">Aug 2021 - Aug 2025</div>
              </div>

              <div className="relative pl-6 border-l border-border">
                <div className="absolute w-3 h-3 bg-background border border-border -left-[6.5px] top-1"></div>
                <h3 className="font-bold text-2xl leading-tight mb-2 uppercase">SMA Negeri 1</h3>
                <p className="text-subtle text-base mb-4">Senior High School, Science</p>
                <div className="font-mono text-xs text-subtle mt-4 opacity-70">Jul 2018 - May 2021</div>
              </div>
            </div>
          </div>

          {/* TECH STACK */}
          <div className="p-6 md:p-12">
            <h2 className="font-mono text-xs uppercase text-subtle mb-10 tracking-widest flex items-center gap-2">
              <span className="w-2 h-2 bg-accent inline-block"></span> [ TECH_STACK ]
            </h2>

            <div className="space-y-8">
              <div>
                <div className="font-mono text-sm text-subtle mb-3 uppercase">Languages & Frameworks</div>
                <div className="flex flex-wrap gap-3 text-sm font-mono">
                  {["TypeScript", "React", "Next.js", "Vue", "Python", "Flutter", "Django", "HTML/CSS"].map(s => (
                    <span key={s} className="px-4 py-2 border border-border hover:border-accent hover:text-accent cursor-pointer transition-colors">{s}</span>
                  ))}
                </div>
              </div>

              <div>
                <div className="font-mono text-sm text-subtle mb-3 uppercase">Data & Cloud</div>
                <div className="flex flex-wrap gap-3 text-sm font-mono">
                  {["SQL", "Firebase", "Basic Data Manipulation", "Database Management", "Loker Data Studio"].map(s => (
                    <span key={s} className="px-4 py-2 border border-border hover:border-accent hover:text-accent cursor-pointer transition-colors">{s}</span>
                  ))}
                </div>
              </div>

              <div>
                <div className="font-mono text-sm text-subtle mb-3 uppercase">Design & Architecture</div>
                <div className="flex flex-wrap gap-3 text-sm font-mono">
                  {["Figma", "TailwindCSS", "UI/UX Design", "Data Visualization", "Data Ethics"].map(s => (
                    <span key={s} className="px-4 py-2 border border-border hover:border-accent hover:text-accent cursor-pointer transition-colors">{s}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================
          SECTION 03: PROFESSIONAL EXPERIENCE
          ========================================= */}
      <section className="min-h-screen flex flex-col border-b border-border snap-start">
        <div className="p-6 md:p-8 bg-[#121214] border-b border-border flex justify-between items-center">
          <h2 className="font-sans text-xl uppercase font-black tracking-widest">Experience / Impact</h2>
          <span className="font-mono text-accent text-xs">/LOG_02</span>
        </div>

        <div className="flex-1 flex flex-col">
          {/* EXP ITEM 1 */}
          <article className="p-6 md:p-12 border-b border-border hover:bg-[#0c0c0e] transition-colors relative group flex-1 flex flex-col justify-center cursor-pointer">
            <div className="absolute top-0 left-0 w-1 h-0 bg-accent group-hover:h-full transition-all duration-300"></div>
            <header className="flex flex-col md:flex-row md:items-start justify-between mb-6">
              <div>
                <h3 className="text-3xl font-bold uppercase mb-2">UI/UX Designer Intern</h3>
                <div className="text-subtle text-lg font-mono">Ministry of Administrative & Bureaucratic Reform</div>
              </div>
              <div className="font-mono text-sm text-accent mt-4 md:mt-0 border border-border bg-[#121214] px-4 py-2 inline-block">Nov 2025 - May 2026</div>
            </header>
            <ul className="text-base text-subtle font-mono space-y-4 leading-relaxed max-w-4xl">
              <li className="flex items-start gap-4">
                <span className="text-accent mt-1 opacity-0 group-hover:opacity-100 transition-opacity">&gt;</span>
                <span>Designed end-to-end UX for government digital services (housing, hajj, civil registration, mining) within INA Digital Design System.</span>
              </li>
              <li className="flex items-start gap-4">
                <span className="text-accent mt-1 opacity-0 group-hover:opacity-100 transition-opacity">&gt;</span>
                <span>Implemented SSO-based authentication flows and data-driven personalization.</span>
              </li>
              <li className="flex items-start gap-4">
                <span className="text-accent mt-1 opacity-0 group-hover:opacity-100 transition-opacity">&gt;</span>
                <span>Collaborated with Dukcapil, Kemenkes, KemenPAN-RB, Minerba, and Tapera to align UX with regulations.</span>
              </li>
            </ul>
          </article>

          {/* EXP ITEM 2 */}
          <article className="p-6 md:p-12 border-b border-border hover:bg-[#0c0c0e] transition-colors relative group flex-1 flex flex-col justify-center cursor-pointer">
            <div className="absolute top-0 left-0 w-1 h-0 bg-accent group-hover:h-full transition-all duration-300"></div>
            <header className="flex flex-col md:flex-row md:items-start justify-between mb-6">
              <div>
                <h3 className="text-3xl font-bold uppercase mb-2">Independent Study (ML/Mobile)</h3>
                <div className="text-subtle text-lg font-mono">Bangkit Academy</div>
              </div>
              <div className="font-mono text-sm text-accent mt-4 md:mt-0 border border-border bg-[#121214] px-4 py-2 inline-block">Feb 2024 - Jul 2024</div>
            </header>
            <ul className="text-base text-subtle font-mono space-y-4 leading-relaxed max-w-4xl">
              <li className="flex items-start gap-4">
                <span className="text-accent mt-1 opacity-0 group-hover:opacity-100 transition-opacity">&gt;</span>
                <span>Designed and developed a mobile app interface for real-time waste classification using image input.</span>
              </li>
              <li className="flex items-start gap-4">
                <span className="text-accent mt-1 opacity-0 group-hover:opacity-100 transition-opacity">&gt;</span>
                <span>Integrated image capture functionality directly with a backend machine learning model.</span>
              </li>
            </ul>
          </article>

          {/* EXP ITEM 3 & 4 */}
          <article className="p-6 md:p-12 hover:bg-[#0c0c0e] transition-colors relative group flex-1 flex flex-col justify-center cursor-pointer">
            <div className="absolute top-0 left-0 w-1 h-0 bg-accent group-hover:h-full transition-all duration-300"></div>
            <header className="flex flex-col md:flex-row md:items-start justify-between mb-6">
              <div>
                <h3 className="text-3xl font-bold uppercase mb-2">Fullstack Web & Mobile Dev</h3>
                <div className="text-subtle text-lg font-mono">Nikah Yuk App & Web / E-Learning Web</div>
              </div>
              <div className="font-mono text-sm text-accent mt-4 md:mt-0 border border-border bg-[#121214] px-4 py-2 inline-block">Feb 2023 - Jun 2023</div>
            </header>
            <ul className="text-base text-subtle font-mono space-y-4 leading-relaxed max-w-4xl">
              <li className="flex items-start gap-4">
                <span className="text-accent mt-1 opacity-0 group-hover:opacity-100 transition-opacity">&gt;</span>
                <span>Architected E-Learning platform UI using HTML/JS/CSS & Bootstrap 5 with focus on cross-device responsiveness.</span>
              </li>
              <li className="flex items-start gap-4">
                <span className="text-accent mt-1 opacity-0 group-hover:opacity-100 transition-opacity">&gt;</span>
                <span>Developed "Nikah Yuk" mobile app using Flutter, leveraging Firebase for real-time DB and authentication.</span>
              </li>
            </ul>
          </article>
        </div>
      </section>

      {/* =========================================
          SECTION 04: ORGANISATIONAL & LEADERSHIP
          ========================================= */}
      <section className="min-h-screen flex flex-col border-b border-border snap-start">
        <div className="p-6 md:p-8 bg-[#121214] border-b border-border flex justify-between items-center">
          <h2 className="font-sans text-xl uppercase font-black tracking-widest">Leadership / Organization</h2>
          <span className="font-mono text-accent text-xs">/LOG_03</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 flex-1">
          {/* ORG COL 1 */}
          <div className="flex flex-col border-b lg:border-b-0 lg:border-r border-border">
            <article className="p-6 md:p-10 border-b border-border group cursor-pointer transition-colors hover:bg-[#0c0c0e]">
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-xl font-bold uppercase">Himpunan Mahasiswa S1 SI</h3>
                <span className="font-mono text-xs text-subtle border border-border px-2 py-1">2023</span>
              </div>
              <div className="font-mono text-accent text-sm mb-4">Arts and Sports Expert Staff</div>
              <p className="text-sm text-subtle font-mono leading-relaxed">
                Coordinated and developed strategic plans for faculty art and sports activities, ensuring proper promotion and execution.
              </p>
            </article>

            <article className="p-6 md:p-10 border-b border-border group cursor-pointer transition-colors hover:bg-[#0c0c0e]">
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-xl font-bold uppercase">Dekan Cup FST</h3>
                <span className="font-mono text-xs text-subtle border border-border px-2 py-1">2023</span>
              </div>
              <div className="font-mono text-accent text-sm mb-4">Volley Expert Staff</div>
              <p className="text-sm text-subtle font-mono leading-relaxed">
                Collected and analyzed technical data on tournaments and team performances. Provided data-driven recommendations to enhance resource management and team strategy.
              </p>
            </article>

            <article className="p-6 md:p-10 group cursor-pointer transition-colors hover:bg-[#0c0c0e]">
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-xl font-bold uppercase">ISAC (Competition)</h3>
                <span className="font-mono text-xs text-subtle border border-border px-2 py-1">2023</span>
              </div>
              <div className="font-mono text-accent text-sm mb-4">Equipment Coordinator</div>
              <p className="text-sm text-subtle font-mono leading-relaxed">
                Managed the technical infrastructure and equipment procurement for UI/UX Design competition participants, actively communicating with external vendors.
              </p>
            </article>
          </div>

          {/* ORG COL 2 */}
          <div className="flex flex-col">
            <article className="p-6 md:p-10 border-b border-border group cursor-pointer transition-colors hover:bg-[#0c0c0e]">
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-xl font-bold uppercase">Information System Festival</h3>
                <span className="font-mono text-xs text-subtle border border-border px-2 py-1">2022</span>
              </div>
              <div className="font-mono text-accent text-sm mb-4">Public Relation & Licensing Staff</div>
              <p className="text-sm text-subtle font-mono leading-relaxed">
                Acted as the primary liaison between academic batches. Managed event information, multi-channel promotions, and coordinated participant healthcare/security.
              </p>
            </article>

            <article className="p-6 md:p-10 group cursor-pointer transition-colors hover:bg-[#0c0c0e] flex-1">
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-xl font-bold uppercase">POINTER</h3>
                <span className="font-mono text-xs text-subtle border border-border px-2 py-1">2023</span>
              </div>
              <div className="font-mono text-accent text-sm mb-4">Evaluator Expert Staff</div>
              <p className="text-sm text-subtle font-mono leading-relaxed">
                Oversaw the orientation and character development process. Managed offline/online media channels, ensured security collaboration, and administered event health protocols.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* =========================================
          FOOTER
          ========================================= */}
      <footer className="p-6 md:p-8 flex flex-col md:flex-row items-center justify-between font-mono text-xs text-subtle bg-background">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-accent animate-pulse"></span>
          [ SYSTEM: ONLINE / OPTIMIZED ]
        </div>
      </footer>
    </div>
  );
}