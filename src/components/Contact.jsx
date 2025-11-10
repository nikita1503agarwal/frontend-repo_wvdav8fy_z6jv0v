import { Mail, FileDown } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="py-20">
      <div className="max-w-6xl mx-auto px-4">
        <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold">Get in touch</h2>
              <p className="mt-2 text-white/80">Have a project or role in mind? I’m open to collaborations and new opportunities.</p>
            </div>
            <div className="flex gap-3">
              <a href="mailto:you@example.com" className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-gradient-to-r from-sky-500 to-indigo-600 text-white font-medium shadow hover:opacity-90 transition">
                <Mail className="h-4 w-4" /> Email me
              </a>
              <a href="#" className="inline-flex items-center gap-2 px-5 py-3 rounded-xl border border-white/20 text-white font-medium hover:bg-white/10 transition">
                <FileDown className="h-4 w-4" /> Download CV
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
