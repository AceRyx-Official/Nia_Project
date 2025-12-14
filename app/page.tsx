import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import LoaderAnimation from '@/components/LoaderAnimation';
import About from '@/components/About';
import Services from '@/components/Services';
import Projects from '@/components/Projects';
import Machinery from '@/components/Machinery';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import PageTransitionWrapper from '@/components/PageTransitionWrapper';

export default function Home() {
  return (
    <>
      {/* Navbar MUST live outside page transitions */}
      <Navbar />

      <PageTransitionWrapper>
        <main className="min-h-screen">

          {/* HERO / HOME */}
          <section id="home">
            <Hero />
          </section>
          {/* <div className="section hero-section" id="home"> 
          <LoaderAnimation /> 
          </div> */}
          {/* ABOUT */}
          {/* <section id="about">
            <About />
          </section> */}

          {/* SERVICES */}
          <section id="services">
            <Services />
          </section>

          {/* PROJECTS */}
          <section id="projects">
            <Projects />
          </section>

          {/* MACHINERY */}
          <section id="machinery">
            <Machinery />
          </section>

          {/* CONTACT */}
          <section id="contact">
            <Contact />
          </section>

          {/* FOOTER */}
          <Footer />

        </main>
      </PageTransitionWrapper>
    </>
  );
}
