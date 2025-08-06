import './Navbar.css';
import { useEffect, useState, useRef } from 'react';

export default function Navbar() {
  const [activeSection, setActiveSection] = useState('AboutMe');
  const observerRef = useRef(null);

  const handleNavClick = (e, id) => {
    e.preventDefault();

    const scrollContainer = document.querySelector('.right-scrollable');
    const target = document.getElementById(id);

    if (scrollContainer && target) {
      // Add offset for sections that need top spacing
      const offset = id === 'Experience' ? 64 : 0; // 64px = 4rem
      scrollContainer.scrollTo({
        top: target.offsetTop - offset,
        behavior: 'smooth',
      });
    }

    setActiveSection(id);
  };

  useEffect(() => {
    const scrollContainer = document.querySelector('.right-scrollable');
    const sections = document.querySelectorAll('.right-scrollable section');

    // Create a more robust intersection observer
    const observerOptions = {
      root: scrollContainer,
      rootMargin: '-10% 0px -60% 0px', // Section is active when it's in the top 40% of viewport
      threshold: [0, 0.1, 0.25, 0.5, 0.75, 1], // More granular thresholds for better detection
    };

    const observer = new IntersectionObserver((entries) => {
      // Find the section that is most visible in the viewport
      let maxIntersectionRatio = 0;
      let mostVisibleSection = null;

      entries.forEach((entry) => {
        if (entry.isIntersecting && entry.intersectionRatio > maxIntersectionRatio) {
          maxIntersectionRatio = entry.intersectionRatio;
          mostVisibleSection = entry.target;
        }
      });

      if (mostVisibleSection && maxIntersectionRatio > 0.05) { // Lowered threshold for better detection
        const id = mostVisibleSection.getAttribute('id');
        console.log('Active section:', id, 'Ratio:', maxIntersectionRatio); // Debug log
        setActiveSection(id);
      }
    }, observerOptions);

    observerRef.current = observer;

    sections.forEach((section) => {
      observer.observe(section);
      console.log('Observing section:', section.id); // Debug log
    });

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, []);

  return (
    <nav className="Navbar">
      <ul className="nav-links">
        <li className={activeSection === 'AboutMe' ? 'active' : ''}>
          <a href="#AboutMe" onClick={(e) => handleNavClick(e, 'AboutMe')}>ABOUT</a>
        </li>
        <li className={activeSection === 'Experience' ? 'active' : ''}>
          <a href="#Experience" onClick={(e) => handleNavClick(e, 'Experience')}>EXPERIENCE</a>
        </li>
        <li className={activeSection === 'Projects' ? 'active' : ''}>
          <a href="#Projects" onClick={(e) => handleNavClick(e, 'Projects')}>PROJECTS</a>
        </li>
        <li className={activeSection === 'Contact' ? 'active' : ''}>
          <a href="#Contact" onClick={(e) => handleNavClick(e, 'Contact')}>CONTACT</a>
        </li>
      </ul>
    </nav>
  );
}
