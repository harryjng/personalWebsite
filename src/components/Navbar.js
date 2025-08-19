import './Navbar.css';
import { useScrollSpy } from '../hooks/useScrollSpy';
import { useEffect } from 'react';

export default function Navbar() {
  const sectionIds = ['AboutMe', 'Experience', 'Projects', 'Contact'];
  const activeSection = useScrollSpy(sectionIds, {
    // Changed: More generous margins - section becomes active when it takes up 30% of screen
    rootMargin: '-20% 0px -60% 0px',  // Top 30%, Bottom 40% = Active zone is middle 30%
    minIntersectionRatio: 0.1
  });

  // Debug logging
  useEffect(() => {
    console.log('Active section changed to:', activeSection);
  }, [activeSection]);

  const handleNavClick = (e, id) => {
    e.preventDefault();
    console.log('Navbar clicked:', id);
    
    const scrollContainer = document.querySelector('.right-scrollable');
    const target = document.getElementById(id);
    
    if (scrollContainer && target) {
      // Add offset for sections that need top spacing
      const offset = (id === 'Experience' || id === 'Projects') ? 64 : 0; // 64px = 4rem
      
      // Special handling for About section - scroll to very top
      if (id === 'AboutMe') {
        scrollContainer.scrollTo({
          top: 0,
          behavior: 'smooth',
        });
      } else {
        scrollContainer.scrollTo({
          top: target.offsetTop - offset,
          behavior: 'smooth',
        });
      }
    }
  };

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