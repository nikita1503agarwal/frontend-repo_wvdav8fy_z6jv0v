import Spline from "@splinetool/react-spline";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[80vh] flex items-center">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/rh6G9mA1d86rNQqs/scene.splinecode"
          style={{ width: "100%", height: "100%" }}
        />
      </div>

      <div className="relative max-w-6xl mx-auto px-4 w-full grid md:grid-cols-2 gap-10 py-24">
        <div className="backdrop-blur-sm bg-white/60 dark:bg-neutral-900/60 rounded-2xl p-8 shadow-lg">
          <p className="text-sm uppercase tracking-widest text-sky-600 font-medium">Aerospace Engineer</p>
          <h1 className="mt-3 text-4xl md:text-5xl font-extrabold leading-tight text-neutral-900 dark:text-white">
            Hi, I’m Japkaran Singh
          </h1>
          <p className="mt-4 text-neutral-700 dark:text-neutral-300">
            Designing the future of flight and space exploration. I specialize in aerodynamics, propulsion,
            and systems integration — building reliable aircraft and spacecraft solutions from concept to flight.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a href="#projects" className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-gradient-to-r from-sky-500 to-indigo-600 text-white font-medium shadow hover:opacity-90 transition">
              View Projects <ArrowRight className="h-4 w-4" />
            </a>
            <a href="#contact" className="inline-flex items-center gap-2 px-5 py-3 rounded-xl border border-neutral-300 dark:border-neutral-700 text-neutral-900 dark:text-white font-medium hover:bg-neutral-50 dark:hover:bg-neutral-800 transition">
              Contact Me
            </a>
          </div>
        </div>

        <ul className="relative grid grid-cols-2 md:grid-cols-2 gap-4 self-end">
          {[
            { label: "Aerodynamics", value: "CFD, Wind Tunnels" },
            { label: "Propulsion", value: "Turbomachinery, Rockets" },
            { label: "Structures", value: "FEA, Composites" },
            { label: "GNC", value: "Flight Dynamics, Control" },
          ].map((item) => (
            <li key={item.label} className="rounded-2xl border border-neutral-200/70 dark:border-neutral-800/70 bg-white/70 dark:bg-neutral-900/70 p-5 shadow-sm">
              <p className="text-sm text-neutral-600 dark:text-neutral-400">{item.label}</p>
              <p className="mt-1 font-semibold text-neutral-900 dark:text-white">{item.value}</p>
            </li>
          ))}
        </ul>
      </div>

      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-white dark:from-neutral-950 to-transparent" />
    </section>
  );
}
