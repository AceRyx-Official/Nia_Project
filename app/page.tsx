import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Services from '@/components/Services';
import Projects from '@/components/Projects';
import Machinery from '@/components/Machinery';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import PageTransitionWrapper from '@/components/PageTransitionWrapper';

export default function Home() {
  return (
    <PageTransitionWrapper>
      <main className="min-h-screen">
        <div className="navbar">
          <Navbar />
        </div>
        <div className="section hero-section" id="home">
          <Hero />
        </div>
        <div className="section" id="about">
          <About />
        </div>
        <div className="section" id="services">
          <Services />
        </div>
        <div className="section" id="projects">
          <Projects />
        </div>
        <div className="section" id="machinery">
          <Machinery />
        </div>
        <div className="section" id="contact">
          <Contact />
        </div>
        <div className="section">
          <Footer />
        </div>
      </main>
    </PageTransitionWrapper>
  );
}
