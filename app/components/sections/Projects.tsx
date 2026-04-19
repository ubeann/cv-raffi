import Reveal from "../ui/Reveal";
import { CV_DATA } from "@/data/cv";

export default function Projects() {
  const { projects } = CV_DATA;

  return (
    <section className="min-h-screen flex flex-col border-b border-border bg-background relative z-20">
      <div className="p-6 md:p-8 bg-[#121214] border-b border-border flex justify-between items-center sticky top-0 z-30">
        <h2 className="font-sans text-xl uppercase font-black tracking-widest">Selected Works</h2>
        <span className="font-mono text-accent text-xs">/DEV_OUTPUT</span>
      </div>

      <div className="flex-1 flex flex-col">
        {projects?.map((project, i) => (
          <Reveal key={i} className="flex-1 flex flex-col">
            <article className="grid grid-cols-1 lg:grid-cols-[1.5fr_2fr] border-b border-border group">
              {/* Project Image/Media */}
              <div className="relative aspect-video lg:aspect-auto border-b lg:border-b-0 lg:border-r border-border overflow-hidden bg-[#18181b]">
                <div
                  className="absolute inset-0 bg-cover bg-center bg-no-repeat grayscale group-hover:grayscale-0 transition-all duration-700 opacity-60 group-hover:opacity-100 scale-100 group-hover:scale-105"
                  style={{ backgroundImage: `url(${project.image})` }}
                ></div>
                <div className="absolute inset-0 bg-background/20 group-hover:bg-transparent transition-colors"></div>
                <span className="font-mono text-[10px] text-subtle absolute bottom-3 right-3 z-10 bg-background/80 px-2 py-1 backdrop-blur-sm border border-border">
                  [IMG_{i+1}_PREVIEW]
                </span>
              </div>

              {/* Project Details */}
              <div className="p-6 md:p-12 flex flex-col justify-center bg-background group-hover:bg-[#0c0c0e] transition-colors relative">
                <div className="absolute top-0 left-0 w-1 h-0 bg-accent group-hover:h-full transition-all duration-300"></div>

                <h3 className="text-3xl lg:text-5xl font-black uppercase mb-6 tracking-tight">{project.title}</h3>

                <p className="text-subtle text-base md:text-lg leading-relaxed mb-8 max-w-2xl">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-10">
                  {project.tech.map((t, j) => (
                    <span key={j} className="font-mono text-xs border border-border px-3 py-1 text-subtle uppercase">
                      {t}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4 font-mono text-sm uppercase mt-auto">
                  {project.links.live && (
                    <a href={project.links.live} target="_blank" rel="noopener noreferrer" className="border border-border px-6 py-3 hover:bg-accent hover:text-background transition-colors flex items-center gap-2">
                       Launch
                       <span className="text-accent group-hover:text-background transition-colors">↗</span>
                    </a>
                  )}
                  {project.links.github && (
                    <a href={project.links.github} target="_blank" rel="noopener noreferrer" className="border border-transparent hover:border-border px-6 py-3 text-subtle hover:text-foreground transition-colors flex items-center gap-2">
                       Source
                    </a>
                  )}
                </div>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}