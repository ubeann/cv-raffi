import Reveal from "../ui/Reveal";
import { CV_DATA } from "@/data/cv";
import type { Experience } from "@/data/types";

export default function Experience() {
  const experiences = CV_DATA.experience;

  return (
    <section className="min-h-screen flex flex-col border-b border-border bg-background relative z-20">
      <div className="p-6 md:p-8 bg-[#121214] border-b border-border flex justify-between items-center sticky top-0 z-30">
        <h2 className="font-sans text-xl uppercase font-black tracking-widest">Experience / Impact</h2>
        <span className="font-mono text-accent text-xs">/LOG_02</span>
      </div>

      <div className="flex-1 flex flex-col">
        {experiences.map((exp: Experience, i: number) => (
          <Reveal key={i} className="flex-1 flex flex-col">
            <article className="p-6 md:p-12 border-b border-border hover:bg-[#0c0c0e] transition-colors relative group flex-1 flex flex-col justify-center cursor-pointer">
              <div className="absolute top-0 left-0 w-1 h-0 bg-accent group-hover:h-full transition-all duration-300"></div>

              <header className="flex flex-col md:flex-row md:items-start justify-between mb-6">
                <div>
                  <h3 className="text-3xl font-bold uppercase mb-2">{exp.title}</h3>
                  <div className="text-subtle text-lg font-mono">{exp.company}</div>
                </div>
                <div className="font-mono text-sm text-accent mt-4 md:mt-0 border border-border bg-[#121214] px-4 py-2 inline-block">
                  {exp.period}
                </div>
              </header>

              <ul className="text-base text-subtle font-mono space-y-4 leading-relaxed max-w-4xl">
                {exp.points.map((point: string, j: number) => (
                  <li key={j} className="flex items-start gap-4">
                    <span className="text-accent mt-1 opacity-0 group-hover:opacity-100 transition-opacity">&gt;</span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}