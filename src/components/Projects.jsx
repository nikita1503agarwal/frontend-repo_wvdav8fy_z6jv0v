import { Rocket, Plane, Satellite, Wrench } from "lucide-react";

const projects = [
  {
    title: "Reusable Rocket Stage",
    description:
      "Designed and simulated a reusable first stage with autonomous landing guidance. Achieved 12% payload increase using staged-combustion engine cycle assumptions.",
    icon: Rocket,
    tags: ["GNC", "Propulsion", "Simulation"],
    link: "#",
  },
  {
    title: "High-Lift Wing for eVTOL",
    description:
      "CFD-driven optimization of a distributed propulsion wing. Reduced induced drag by 9% with flap-slot redesign.",
    icon: Plane,
    tags: ["Aerodynamics", "CFD", "Optimization"],
    link: "#",
  },
  {
    title: "CubeSat ADCS",
    description:
      "Developed attitude determination and control for a 3U CubeSat using reaction wheels and magnetorquers.",
    icon: Satellite,
    tags: ["GNC", "Embedded", "Kalman"],
    link: "#",
  },
  {
    title: "Composite Fuselage Panel",
    description:
      "Finite element analysis and layup schedule for a carbon fiber fuselage skin with lightning strike protection.",
    icon: Wrench,
    tags: ["Structures", "FEA", "Composites"],
    link: "#",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-neutral-50 dark:bg-neutral-950">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 dark:text-white">Highlighted Projects</h2>
        <p className="mt-2 text-neutral-700 dark:text-neutral-300">A selection of work spanning aircraft, spacecraft, and research.</p>

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map(({ title, description, icon: Icon, tags, link }) => (
            <a key={title} href={link} className="group rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 p-6 hover:shadow-xl transition shadow-sm">
              <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-sky-500 to-indigo-600 text-white">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-neutral-900 dark:text-white group-hover:text-sky-600">{title}</h3>
              <p className="mt-2 text-sm text-neutral-700 dark:text-neutral-300">{description}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {tags.map((t) => (
                  <span key={t} className="text-xs px-2.5 py-1 rounded-full bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 border border-neutral-200 dark:border-neutral-700">
                    {t}
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
