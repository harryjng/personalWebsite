import './App.css';
import Hero from './components/Hero';
import About from './components/About';
import { useEffect } from 'react';

function App() {
  useEffect(() => {
    const spotlight = document.getElementById('spotlight');

    const handleMouseMove = (e) => {
      const { clientX, clientY } = e;
      if (spotlight) {
        spotlight.style.background = `radial-gradient(600px at ${clientX}px ${clientY}px, rgba(29, 78, 216, 0.15), transparent 80%)`;
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="split-layout">
      <div id="spotlight" className="spotlight-overlay"></div> {/* ✨ Spotlight */}
      
      <aside className="left-fixed">
        <Hero />
      </aside>

      <main className="right-scrollable">
        <About />
        <section id="Experience" className="section">Experience</section>
        <section id="Projects" className="section">Projects</section>
        <section id="Contact" className="section">Contact Me</section>
      </main>
    </div>
  );
}

export default App;
