import { useEffect } from 'react';
import './App.css';
import Hero from './components/Hero';
import About from './components/About';
import Platforms from './components/Platforms.jsx';
import Experience from './components/Experience';
import Project from './components/Project';
import Contact from './components/Contact';
import Navbar from './components/Navbar';

function App() {
  useEffect(() => {
    const spotlight = document.getElementById('spotlight');
    const left = document.querySelector('.left-fixed');
    const right = document.querySelector('.right-scrollable');
    const isMobile = window.innerWidth <= 768;

    if (isMobile && spotlight) {
      spotlight.style.background = `radial-gradient(600px at 30px 60px, rgba(29, 78, 216, 0.15), transparent 100%)`;
    }

    const handleMouseMove = (e) => {
      if (spotlight && !isMobile) {
        const { clientX, clientY } = e;
        spotlight.style.background = `radial-gradient(600px at ${clientX}px ${clientY}px, rgba(29, 78, 216, 0.15), transparent 80%)`;
      }
    };

    const redirectScroll = (e) => {
      if (!isMobile && right) {
        e.preventDefault();
        e.stopPropagation();
        right.scrollTop += e.deltaY;
      }
    };

    if (!isMobile) {
      window.addEventListener('mousemove', handleMouseMove);
    }

    if (left && right && !isMobile) {
      left.addEventListener('wheel', redirectScroll, {
        passive: false,
        capture: false
      });
    }

    return () => {
      if (!isMobile) {
        window.removeEventListener('mousemove', handleMouseMove);
        if (left) {
          left.removeEventListener('wheel', redirectScroll);
        }
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