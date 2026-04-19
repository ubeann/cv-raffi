export default function About() {
  return (
    <section id="about" className="py-20 bg-slate-50 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-slate-900 mb-12 text-center">About Me</h2>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Left column */}
          <div className="space-y-4">
            <p className="text-lg text-slate-700 leading-relaxed">
              I'm a passionate full-stack developer with a keen interest in building scalable,
              user-friendly applications. With expertise in modern web technologies, I transform
              ideas into elegant digital solutions.
            </p>
            <p className="text-lg text-slate-700 leading-relaxed">
              When I'm not coding, you can find me exploring new technologies, contributing to
              open-source projects, or sharing knowledge with the developer community.
            </p>
          </div>

          {/* Right column - Skills */}
          <div>
            <h3 className="text-xl font-semibold text-slate-900 mb-4">Key Skills</h3>
            <div className="space-y-3">
              {[
                { category: "Frontend", skills: "React, Next.js, TypeScript, Tailwind CSS" },
                { category: "Backend", skills: "Node.js, Express, PostgreSQL, MongoDB" },
                { category: "Tools", skills: "Git, Docker, Vercel, AWS" },
              ].map((skill) => (
                <div key={skill.category}>
                  <p className="font-semibold text-slate-900">{skill.category}</p>
                  <p className="text-slate-600">{skill.skills}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
