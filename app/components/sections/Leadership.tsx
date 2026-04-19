import Reveal from "../ui/Reveal";
import { CV_DATA } from "@/data/cv";
import type { Leadership } from "@/data/types";
import { Users } from "lucide-react";

export default function Leadership() {
  const leaderships = CV_DATA.leadership;

  // Split into two columns for layout
  const col1 = leaderships.slice(0, Math.ceil(leaderships.length / 2));
  const col2 = leaderships.slice(Math.ceil(leaderships.length / 2));

  return (
    <section id="leadership" className="min-h-[80vh] flex flex-col bg-background relative z-20">
      <div className="p-6 md:p-8 bg-[#121214] border-y border-border flex justify-between items-center sticky top-0 z-30">
        <h2 className="font-sans text-xl uppercase font-black tracking-widest flex items-center gap-3">
          <Users className="w-5 h-5 text-accent" />
          Leadership / Organization
        </h2>
        <span className="font-mono text-accent text-xs">/LOG_03</span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 flex-1">
        {/* ORG COL 1 */}
        <div className="flex flex-col border-b lg:border-b-0 lg:border-r border-border">
          {col1.map((item: Leadership, i: number) => (
            <Reveal key={i}>
              <article className="p-8 md:p-12 border-b border-border group cursor-pointer transition-all duration-300 hover:bg-[#0c0c0e] hover:-translate-y-1 hover:shadow-2xl hover:shadow-black">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-bold uppercase group-hover:text-accent transition-colors duration-300">{item.title}</h3>
                  <span className="font-mono text-xs text-subtle border border-border px-3 py-1 group-hover:border-accent/50 transition-colors duration-300">{item.year}</span>
                </div>
                <div className="font-mono text-accent text-sm mb-4">{item.role}</div>
                <p className="text-sm text-subtle font-mono leading-relaxed group-hover:text-foreground/80 transition-colors duration-300 max-w-prose">
                  {item.description}
                </p>
              </article>
            </Reveal>
          ))}
        </div>

        {/* ORG COL 2 */}
        <div className="flex flex-col">
          {col2.map((item: Leadership, i: number) => (
            <Reveal key={i} className={i === col2.length - 1 ? 'flex-1' : ''}>
              <article className={`p-8 md:p-12 group cursor-pointer transition-all duration-300 hover:bg-[#0c0c0e] hover:-translate-y-1 hover:shadow-2xl hover:shadow-black h-full ${i !== col2.length - 1 ? 'border-b border-border' : 'border-b lg:border-b-0 border-border'}`}>
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-bold uppercase group-hover:text-accent transition-colors duration-300">{item.title}</h3>
                  <span className="font-mono text-xs text-subtle border border-border px-3 py-1 group-hover:border-accent/50 transition-colors duration-300">{item.year}</span>
                </div>
                <div className="font-mono text-accent text-sm mb-4">{item.role}</div>
                <p className="text-sm text-subtle font-mono leading-relaxed group-hover:text-foreground/80 transition-colors duration-300 max-w-prose">
                  {item.description}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}