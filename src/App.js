import { useEffect } from 'react';
import './App.css';
import Hero from './components/Hero';
import About from './components/About';
import Platforms from './components/Platforms';
import Experience from './components/Experience';
import Project from './components/Project';
import Contact from './components/Contact';
function App() {
  useEffect(() => {
    const spotlight = document.getElementById('spotlight');
    const left = document.querySelector('.left-fixed');
    const right = document.querySelector('.right-scrollable');

    // Mouse spotlight effect
    const handleMouseMove = (e) => {
      const { clientX, clientY } = e;
      if (spotlight) {
        spotlight.style.background = `radial-gradient(600px at ${clientX}px ${clientY}px, rgba(29, 78, 216, 0.15), transparent 80%)`;
      }
    };

    // High-performance scroll redirection for 1:1 speed matching
    const redirectScroll = (e) => {
      if (right) {
        e.preventDefault();
        e.stopPropagation();

        // Use deltaY directly for immediate, 1:1 speed matching
        // This matches exactly what the browser would do natively
        right.scrollTop += e.deltaY;

        // Alternative: If you want to match native scroll multiplier exactly
        // const scrollMultiplier = 3; // Adjust if needed to match your system
        // right.scrollTop += e.deltaY * scrollMultiplier;
      }
    };

    // Add event listeners
    window.addEventListener('mousemove', handleMouseMove);

    if (left && right) {
      // Use passive: false for immediate response without throttling
      left.addEventListener('wheel', redirectScroll, {
        passive: false,
        capture: false
      });
    }

    // Cleanup
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      if (left) {
        left.removeEventListener('wheel', redirectScroll);
      }
    };
  }, []);

  return (
    <div className="split-layout">
      <div id="spotlight" className="spotlight-overlay"></div>
      <aside className="left-fixed">
        <Hero />
        <Navbar />
        <Platforms />
      </aside>
      <main className="right-scrollable">
        <About />
        <Experience />
        <Project />
        <Contact />
      </main>
    </div>
  );
}

export default App;