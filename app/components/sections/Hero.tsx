"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { CV_DATA } from "@/data/cv";

export default function Hero() {
  const containerRef = useRef<HTMLElement>(null);
  const { hero } = CV_DATA;

  useGSAP(
    () => {
      if (typeof window !== "undefined") {
        gsap.registerPlugin(ScrollTrigger);
      }

      const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      const isMobile = window.innerWidth < 768;

      if (prefersReducedMotion) return;

      // 1. HERO REVEAL (Entry animation)
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
      tl.from(".hero-line", {
        y: 40,
        opacity: 0,
        duration: 1,
        stagger: 0.15,
        delay: 0.2,
      })
      .from(".hero-metric", {
        y: 20,
        opacity: 0,
        duration: 0.8,
        stagger: 0.1,
      }, "-=0.5");

      // 2. PARALLAX EFFECTS (Scrubbed animations - Desktop Only)
      if (!isMobile) {
        gsap.to(".parallax-bg", {
          yPercent: 30,
          ease: "none",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top top",
            end: "bottom top",
            scrub: true,
          },
        });

        gsap.to(".hero-text-block", {
          yPercent: 15,
          ease: "none",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top top",
            end: "bottom top",
            scrub: true,
          },
        });
      }
    },
    { scope: containerRef }
  );

  return (
    <section id="hero" ref={containerRef} className="hero-section min-h-screen flex flex-col border-b border-border relative">
      <header className="grid grid-cols-1 md:grid-cols-[1fr_3fr] flex-1 relative z-10">
        <div className="p-6 md:p-8 flex flex-col justify-between border-b md:border-b-0 md:border-r border-border gap-8 bg-background">
          <div className="hero-line font-mono text-accent text-xs uppercase tracking-widest">[OP.SDE_01]</div>
          <div className="hero-line w-full aspect-square md:aspect-9/16 bg-[#18181b] border border-border relative overflow-hidden flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-700">
            <div className="parallax-bg absolute inset-0 bg-[url('/img/profile.png')] bg-cover bg-top will-change-transform transform-gpu scale-110"></div>
            <span className="font-mono text-[10px] text-subtle absolute bottom-3 right-3 z-10 mix-blend-difference">[IMAGE_PLACEHOLDER]</span>
          </div>
        </div>

        <div className="p-6 md:p-12 pl-6 md:pl-16 flex flex-col justify-center bg-background hero-text-block will-change-transform transform-gpu">
          <h1 className="text-5xl md:text-8xl font-black uppercase leading-[0.8] tracking-tighter mb-6 overflow-hidden">
            <div className="hero-line">{hero.name[0]}</div>
            <div className="hero-line">{hero.name[1]}</div>
            <div className="hero-line">
              <span className="text-transparent" style={{ WebkitTextStroke: "1px var(--foreground)" }}>{hero.name[2]}</span>
            </div>
          </h1>
          <div className="hero-line font-mono text-sm md:text-base text-subtle max-w-2xl leading-relaxed mt-4">
            {hero.description.split("Software Development Engineer").map((part: string, i: number, arr: string[]) =>
              i === arr.length - 1 ? <span key={i}>{part}</span> : <span key={i}>{part}<span className="text-foreground">Software Development Engineer</span></span>
            )}
          </div>

          <div className="hero-line flex flex-wrap gap-4 mt-8 font-mono text-xs uppercase">
            <a href={`mailto:${hero.email}`} className="border border-border bg-background px-6 py-3 hover:bg-accent hover:text-background hover:border-accent transition-colors duration-200 cursor-pointer flex items-center gap-2 group">
              <svg className="w-4 h-4 group-hover:animate-pulse" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
              {hero.email}
            </a>
            <a href={hero.linkedin} target="_blank" rel="noopener noreferrer" className="border border-border bg-background px-6 py-3 hover:bg-accent hover:text-background hover:border-accent transition-colors duration-200 cursor-pointer flex items-center gap-2 group">
              <svg className="w-4 h-4 group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24"><path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd"></path></svg>
              LinkedIn
            </a>
            <a href={hero.github} target="_blank" rel="noopener noreferrer" className="border border-border bg-background px-6 py-3 hover:bg-accent hover:text-background hover:border-accent transition-colors duration-200 cursor-pointer flex items-center gap-2 group">
              <svg className="w-4 h-4 group-hover:rotate-12 transition-transform" fill="currentColor" viewBox="0 0 24 24"><path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd"></path></svg>
              GitHub
            </a>
          </div>
        </div>
      </header>

      {/* CORE EXPERTISE AS METRICS/TELEMETRY */}
      <div className="grid grid-cols-2 md:grid-cols-4 border-t border-border mt-auto relative z-20 bg-background">
        {hero.metrics.map((skill: string, i: number) => (
          <div key={skill} className={`hero-metric p-4 md:p-6 flex flex-col justify-between h-32 ${i !== hero.metrics.length - 1 ? 'border-r border-border' : ''} will-change-transform transform-gpu`}>
            <span className="text-accent font-mono text-xs">0{i+1}.</span>
            <span className="font-bold text-sm uppercase">{skill}</span>
          </div>
        ))}
      </div>
    </section>
  );
}