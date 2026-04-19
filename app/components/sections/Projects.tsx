"use client";

export default function Projects() {
  const projects = [
    {
      title: "Project One",
      description: "A brief description of your first project and its impact.",
      tags: ["React", "TypeScript", "Tailwind CSS"],
      link: "#",
    },
    {
      title: "Project Two",
      description: "A brief description of your second project and its impact.",
      tags: ["Next.js", "PostgreSQL", "Vercel"],
      link: "#",
    },
    {
      title: "Project Three",
      description: "A brief description of your third project and its impact.",
      tags: ["Node.js", "Express", "MongoDB"],
      link: "#",
    },
  ];

  return (
    <section id="projects" className="py-20 bg-white px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-slate-900 mb-12 text-center">Featured Projects</h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <a
              key={project.title}
              href={project.link}
              className="p-6 border border-slate-200 rounded-lg hover:shadow-lg hover:border-purple-400 transition-all duration-300 group"
            >
              <h3 className="text-xl font-semibold text-slate-900 mb-2 group-hover:text-purple-600 transition-colors">
                {project.title}
              </h3>
              <p className="text-slate-600 mb-4 text-sm">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-1 text-xs bg-purple-100 text-purple-700 rounded"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
