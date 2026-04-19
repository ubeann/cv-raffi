import Reveal from "../ui/Reveal";
import { CV_DATA } from "@/data/cv";
import type { Education, TechStackCategory } from "@/data/types";

export default function Foundation() {
  const { education, techStack } = CV_DATA.foundation;

  return (
    <section className="min-h-screen flex flex-col border-b border-border bg-background relative z-20">
      <div className="p-6 md:p-8 bg-[#121214] border-b border-border flex justify-between items-center sticky top-0 z-30">
        <h2 className="font-sans text-xl uppercase font-black tracking-widest">Foundation</h2>
        <span className="font-mono text-accent text-xs">/DATA_CORE</span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 flex-1">
        {/* EDUCATION */}
        <div className="p-6 md:p-12 border-b md:border-b-0 md:border-r border-border">
          <Reveal>
            <h2 className="font-mono text-xs uppercase text-subtle mb-10 tracking-widest flex items-center gap-2">
              <span className="w-2 h-2 bg-accent inline-block"></span> [ EDU_DATA ]
            </h2>
          </Reveal>

          <div className="space-y-12">
            {education.map((edu: Education, i: number) => (
              <Reveal key={i}>
                <div className="relative pl-6 border-l border-border">
                  <div className={`absolute w-3 h-3 bg-background border ${i === 0 ? 'border-accent' : 'border-border'} -left-[6.5px] top-1`}></div>
                  <h3 className="font-bold text-2xl leading-tight mb-2 uppercase">{edu.institution}</h3>
                  <p className="text-subtle text-base mb-4">{edu.degree}</p>
                  {edu.gpa && (
                    <div className="font-mono text-accent text-sm inline-block border border-border px-3 py-1 bg-[#121214]">GPA: {edu.gpa}</div>
                  )}
                  <div className="font-mono text-xs text-subtle mt-4 opacity-70">{edu.period}</div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        {/* TECH STACK */}
        <div className="p-6 md:p-12 relative">
          <div className="sticky top-24 z-20 bg-background/90 backdrop-blur-md pb-4 pt-2 -mt-2">
            <Reveal>
              <h2 className="font-mono text-xs uppercase text-subtle tracking-widest flex items-center gap-2">
                <span className="w-2 h-2 bg-accent inline-block"></span> [ TECH_STACK ]
              </h2>
            </Reveal>
          </div>

          <div className="space-y-8 mt-6">
            {techStack.map((stack: TechStackCategory, idx: number) => (
              <Reveal key={idx}>
                <div className="font-mono text-sm text-subtle mb-3 uppercase">{stack.category}</div>
                <div className="flex flex-wrap gap-3 text-sm font-mono">
                  {stack.skills.map((skill: string) => (
                    <span key={skill} className="px-4 py-2 border border-border hover:border-accent hover:text-accent cursor-pointer transition-colors delay-0">
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