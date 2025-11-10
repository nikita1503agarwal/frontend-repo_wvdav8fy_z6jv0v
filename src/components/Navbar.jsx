import { Rocket, Github, Linkedin } from "lucide-react";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur bg-white/70 dark:bg-neutral-900/60 border-b border-neutral-200/60 dark:border-neutral-800">
      <nav className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <a href="#home" className="flex items-center gap-2 text-neutral-900 dark:text-white font-semibold">
          <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-sky-500 to-indigo-600 text-white">
            <Rocket className="h-5 w-5" />
          </span>
          <span className="tracking-tight">Japkaran Singh</span>
        </a>
        <div className="hidden md:flex items-center gap-6 text-sm text-neutral-700 dark:text-neutral-300">
          <a href="#projects" className="hover:text-neutral-900 dark:hover:text-white transition">Projects</a>
          <a href="#experience" className="hover:text-neutral-900 dark:hover:text-white transition">Experience</a>
          <a href="#contact" className="hover:text-neutral-900 dark:hover:text-white transition">Contact</a>
        </div>
        <div className="flex items-center gap-3">
          <a
            href="https://github.com/"
            target="_blank"
            rel="noreferrer"
            className="p-2 rounded-md hover:bg-neutral-100 dark:hover:bg-neutral-800"
            aria-label="GitHub"
          >
            <Github className="h-5 w-5" />
          </a>
          <a
            href="https://www.linkedin.com/"
            target="_blank"
            rel="noreferrer"
            className="p-2 rounded-md hover:bg-neutral-100 dark:hover:bg-neutral-800"
            aria-label="LinkedIn"
          >
            <Linkedin className="h-5 w-5" />
          </a>
        </div>
      </nav>
    </header>
  );
}
