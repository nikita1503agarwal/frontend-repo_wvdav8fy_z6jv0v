import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Contact from "./components/Contact";

function Footer() {
  return (
    <footer className="py-10 text-center text-sm text-neutral-600 dark:text-neutral-400">
      <p>
        © {new Date().getFullYear()} Aerospace Portfolio. Built with passion for flight.
      </p>
    </footer>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-white dark:bg-neutral-950 text-neutral-900 dark:text-white">
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
