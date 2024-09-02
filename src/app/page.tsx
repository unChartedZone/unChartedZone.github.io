import "./_styles/main.scss";
import Home from "./_components/Home";
import About from "./_components/About";
import Experience from "./_components/Experience";
import Projects from "./_components/Projects";
import Contact from "./_components/Contact";

export default function HomePage() {
  return (
    <main>
      <Home />
      <About />
      <Experience />
      <Projects />
      <Contact />
    </main>
  );
}
