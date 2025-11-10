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
        <h2 className="text-3xl md:text-4xl font-bold">Experience</h2>
        <div className="mt-10 grid gap-6">
          {roles.map((r) => (
            <div key={r.role} className="rounded-2xl border border-white/10 bg-white/[0.04] p-6">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                <div>
                  <h3 className="text-xl font-semibold">{r.role}</h3>
                  <p className="text-white/70">{r.org}</p>
                </div>
                <p className="text-sm text-white/60">{r.period}</p>
              </div>
              <ul className="mt-4 list-disc pl-5 space-y-1 text-white/80">
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
