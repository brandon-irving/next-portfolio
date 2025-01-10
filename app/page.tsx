import About from "@/components/About";
import BackToTop from "@/components/BackToTop";
import Contact from "@/components/Contact";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Resume from "@/components/Resume";
import ScrollProgress from "@/components/ScrollProgress";
import Showcase from "@/components/Showcase";
import Skills from "@/components/Skills";
import Testimonials from "@/components/Testimonials";

export default function Home() {
  return (
    <main className="relative">
      <Header />
      <ScrollProgress />
      <section id="hero">
        <Hero />
      </section>
      <section id="about">
        <About />
      </section>
      <section id="projects">
        <Projects />
      </section>
      <section id="resume">
        <Resume />
      </section>
      <section id="skills">
        <Skills />
      </section>
      <section id="testimonials">
        <Testimonials />
      </section>
      <section id="showcase">
        <Showcase />
      </section>
      <section id="contact">
        <Contact />
      </section>
      <BackToTop />
    </main>
  );
}
