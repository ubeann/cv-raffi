import Reveal from "../ui/Reveal";
import { CV_DATA } from "@/data/cv";
import type { Education, TechStackCategory } from "@/data/types";
import { Database } from "lucide-react";

export default function Foundation() {
  const { education, techStack } = CV_DATA.foundation;

  return (
    <section id="foundation" className="min-h-screen flex flex-col border-b border-border bg-background relative z-20">
      <div className="p-6 md:p-8 bg-[#121214] border-b border-border flex justify-between items-center sticky top-0 z-30">
        <h2 className="font-sans text-xl uppercase font-black tracking-widest flex items-center gap-3">
          <Database className="w-5 h-5 text-accent" />
          Foundation
        </h2>
        <span className="font-mono text-accent text-xs">/DATA_CORE</span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 flex-1">
        {/* EDUCATION */}
        <div className="p-10 md:p-16 border-b md:border-b-0 md:border-r border-border">
          <Reveal>
            <h2 className="font-mono text-xs uppercase text-subtle mb-10 tracking-widest flex items-center gap-2">
              <span className="w-2 h-2 bg-accent inline-block shadow-[0_0_10px_2px_rgba(204,255,0,0.5)]"></span> [ EDU_DATA ]
            </h2>
          </Reveal>

          <div className="space-y-16">
            {education.map((edu: Education, i: number) => (
              <Reveal key={i}>
                <div className="relative pl-8 border-l border-border hover:border-accent transition-colors duration-500 group">
                  <div className={`absolute w-3 h-3 bg-background border ${i === 0 ? 'border-accent' : 'border-border'} group-hover:border-accent group-hover:bg-accent transition-colors duration-300 -left-[6.5px] top-1`}></div>
                  <h3 className="font-bold text-2xl md:text-3xl leading-tight mb-3 uppercase group-hover:text-accent transition-colors duration-300">{edu.institution}</h3>
                  <p className="text-subtle text-lg mb-6">{edu.degree}</p>
                  {edu.gpa && (
                    <div className="font-mono text-accent text-sm inline-block border border-border px-4 py-2 bg-[#121214]">GPA: {edu.gpa}</div>
                  )}
                  <div className="font-mono text-xs text-subtle mt-6 opacity-70 group-hover:opacity-100 transition-opacity">{edu.period}</div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        {/* TECH STACK */}
        <div className="p-10 md:p-16 relative">
          <div className="sticky top-24 z-20 bg-background/90 backdrop-blur-md pb-6 pt-2 -mt-2">
            <Reveal>
              <h2 className="font-mono text-xs uppercase text-subtle tracking-widest flex items-center gap-2">
                <span className="w-2 h-2 bg-accent inline-block shadow-[0_0_10px_2px_rgba(204,255,0,0.5)]"></span> [ TECH_STACK ]
              </h2>
            </Reveal>
          </div>

          <div className="space-y-10 mt-8">
            {techStack.map((stack: TechStackCategory, idx: number) => (
              <Reveal key={idx}>
                <div className="font-mono text-sm text-subtle mb-4 uppercase flex items-center gap-2">
                  <span className="w-1 h-1 bg-border rounded-full inline-block"></span> {stack.category}
                </div>
                <div className="flex flex-wrap gap-3 text-sm font-mono">
                  {stack.skills.map((skill: string) => (
                    <span key={skill} className="px-5 py-3 border border-border hover:border-accent hover:text-background hover:bg-accent cursor-pointer transition-all duration-300 hover:-translate-y-1 shadow-sm">
                      {skill}
                    </span>
                  ))}
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}