export default function Experience() {
  const roles = [
    {
      role: "Aerospace Engineer",
      org: "Orbital Dynamics Lab",
      period: "2022 — Present",
      points: [
        "Lead GNC engineer for 2-stage launch vehicle simulation stack",
        "Built mission analysis tooling for ascent and re-entry",
        "Validated flight software in HIL with sensor-in-the-loop"
      ]
    },
    {
      role: "Aerodynamics Researcher",
      org: "Aero Innovation Center",
      period: "2020 — 2022",
      points: [
        "Designed wind tunnel experiments and data pipelines",
        "Optimized airfoil families for low-Re applications",
        "Published 3 peer-reviewed papers"
      ]
    }
  ];

  return (
    <section id="experience" className="py-20">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 dark:text-white">Experience</h2>
        <div className="mt-10 grid gap-6">
          {roles.map((r) => (
            <div key={r.role} className="rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 p-6">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                <div>
                  <h3 className="text-xl font-semibold text-neutral-900 dark:text-white">{r.role}</h3>
                  <p className="text-neutral-600 dark:text-neutral-400">{r.org}</p>
                </div>
                <p className="text-sm text-neutral-600 dark:text-neutral-400">{r.period}</p>
              </div>
              <ul className="mt-4 list-disc pl-5 space-y-1 text-neutral-700 dark:text-neutral-300">
                {r.points.map((p) => (
                  <li key={p}>{p}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
