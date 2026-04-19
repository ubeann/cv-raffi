"use client";

export default function Contact() {
  const email = process.env.NEXT_PUBLIC_EMAIL || "your.email@example.com";
  const github = process.env.NEXT_PUBLIC_GITHUB_URL || "#";
  const linkedin = process.env.NEXT_PUBLIC_LINKEDIN_URL || "#";

  return (
    <section id="contact" className="py-20 bg-slate-900 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-white mb-6">Let's Connect</h2>
        <p className="text-lg text-slate-300 mb-12 max-w-2xl mx-auto">
          I'm always interested in hearing about new projects and opportunities. Feel free to
          reach out!
        </p>

        {/* Contact Links */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <a
            href={`mailto:${email}`}
            className="px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white font-semibold rounded-lg transition-colors duration-200"
          >
            📧 Email Me
          </a>
          <a
            href={linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors duration-200"
          >
            💼 LinkedIn
          </a>
          <a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 bg-slate-700 hover:bg-slate-800 text-white font-semibold rounded-lg transition-colors duration-200"
          >
            🔗 GitHub
          </a>
        </div>

        {/* Footer */}
        <div className="mt-16 pt-8 border-t border-slate-700">
          <p className="text-slate-400 text-sm">
            © {new Date().getFullYear()} {process.env.NEXT_PUBLIC_FULL_NAME || "Your Name"}. Built with Next.js & Bun.
          </p>
        </div>
      </div>
    </section>
  );
}
