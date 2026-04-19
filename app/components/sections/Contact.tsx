import Reveal from "../ui/Reveal";
import { CV_DATA } from "@/data/cv";
import { ArrowRight } from "lucide-react";

export default function Contact() {
  const { contact } = CV_DATA;

  return (
    <section id="contact" className="flex flex-col border-b border-border bg-[#09090b] relative z-20 overflow-hidden">
      {/* Decorative Grid Background */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCI+CjxyZWN0IHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjMjcyNzJhIiBzdHJva2Utd2lkdGg9IjAuNSIvPgo8L3N2Zz4=')] opacity-20 pointer-events-none"></div>

      <div className="p-6 md:p-24 py-32 flex flex-col items-center justify-center text-center relative z-10 min-h-[60vh]">
        <Reveal className="w-full flex flex-col items-center">
          <span className="font-mono text-accent text-sm tracking-widest uppercase mb-8 border border-accent px-4 py-2 bg-accent/10">
            [ STATUS: AVAILABLE FOR HIRE ]
          </span>

          <h2 className="text-5xl md:text-7xl lg:text-8xl font-black uppercase tracking-tighter leading-[0.9] max-w-5xl mb-8">
            {contact?.heading || "Let's build something impactful."}
          </h2>

          <p className="text-subtle text-lg md:text-xl max-w-2xl mb-12 font-mono leading-relaxed">
            {contact?.subheading || "Currently open for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!"}
          </p>

          <a
            href={`mailto:${contact?.email}`}
            className="group relative px-8 py-5 border-2 border-border hover:border-accent bg-background overflow-hidden transition-colors focus:outline-none focus:ring-4 focus:ring-accent"
          >
            <div className="absolute inset-0 bg-accent translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out"></div>
            <span className="relative z-10 flex items-center gap-3 font-mono font-bold uppercase text-lg group-hover:text-background transition-colors">
              Initiate Comms
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </span>
          </a>
        </Reveal>
      </div>
    </section>
  );
}