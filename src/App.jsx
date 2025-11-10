import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Contact from "./components/Contact";

function Footer() {
  return (
    <footer className="py-10 text-center text-sm text-white/70">
      <p>
        © {new Date().getFullYear()} Japkaran Singh. Built with passion for flight.
      </p>
    </footer>
  );
}

export default function App() {
  return (
    <div className="min-h-screen text-white bg-[radial-gradient(1000px_600px_at_-10%_-10%,rgba(56,189,248,0.15),transparent),radial-gradient(800px_500px_at_110%_10%,rgba(79,70,229,0.18),transparent),linear-gradient(to_bottom_right,#0b1020,#0a0f1a)]">
      <Navbar />
      <main>
        <Hero />
        <Projects />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
