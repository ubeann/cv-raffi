export default function Hero() {
  const name = process.env.NEXT_PUBLIC_FULL_NAME || "Your Name";
  const title = "Full Stack Developer";
  const description = "Building exceptional web experiences with modern technologies";

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <div className="space-y-6">
          {/* Animated greeting */}
          <div className="inline-block">
            <span className="text-lg text-purple-400 font-semibold">Hello, I'm</span>
          </div>

          {/* Main heading */}
          <h1 className="text-5xl md:text-7xl font-bold text-white tracking-tighter">
            {name}
          </h1>

          {/* Title with gradient */}
          <p className="text-2xl md:text-3xl font-semibold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            {title}
          </p>

          {/* Description */}
          <p className="text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
            {description}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
            <a
              href="#projects"
              className="px-8 py-3 bg-purple-600 hover:bg-purple-700 text-white font-semibold rounded-lg transition-colors duration-200"
            >
              View My Work
            </a>
            <a
              href="#contact"
              className="px-8 py-3 border-2 border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white font-semibold rounded-lg transition-colors duration-200"
            >
              Get in Touch
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
