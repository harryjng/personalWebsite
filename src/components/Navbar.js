import './Navbar.css';
import { useEffect, useState } from 'react';

export default function Navbar() {
  const [activeSection, setActiveSection] = useState('AboutMe');

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

    setActiveSection(id); // optional: update immediately on click
  };

  useEffect(() => {
    const scrollContainer = document.querySelector('.right-scrollable');
    const sections = document.querySelectorAll('.right-scrollable section');

    const observerOptions = {
      root: scrollContainer,
      rootMargin: '0px',
      threshold: 0.6, // Section is considered active when 60% visible
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const id = entry.target.getAttribute('id');
          setActiveSection(id);
        }
      });
    }, observerOptions);

    sections.forEach((section) => {
      observer.observe(section);
    });

    return () => {
      sections.forEach((section) => observer.unobserve(section));
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
