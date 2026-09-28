import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import Skills from "./components/Skills.jsx";
import Projects from "./components/Projects.jsx";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";

export default function App() {
  return (
    <div className="min-h-screen bg-[#0a0a14] text-white">
      <Navbar />
      <main>
        <Hero />
        <div className="h-px bg-gradient-to-r from-transparent via-emerald-500/20 to-transparent"/>
        <Skills />
        <div className="h-px bg-gradient-to-r from-transparent via-emerald-500/20 to-transparent"/>
        <Projects />
      </main>
      <Contact />
      <Footer />
    </div>
  );
}