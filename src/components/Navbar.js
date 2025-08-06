import './Navbar.css';
import { useEffect, useState, useRef } from 'react';

export default function Navbar() {
  const [activeSection, setActiveSection] = useState('AboutMe');
  const sectionPositions = useRef(new Map());
  const justClicked = useRef(false);

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
    justClicked.current = true;
    // Reset the flag after a short delay
    setTimeout(() => {
      justClicked.current = false;
    }, 500);
  };

  useEffect(() => {
    const scrollContainer = document.querySelector('.right-scrollable');
    const sections = document.querySelectorAll('.right-scrollable section');

    // Calculate the target scroll positions for each section (same as when clicked)
    sections.forEach((section) => {
      const id = section.getAttribute('id');
      const offset = id === 'Experience' ? 64 : 0; // Same offset as click handler
      const targetPosition = section.offsetTop - offset;
      sectionPositions.current.set(id, targetPosition);
    });

    const handleScroll = () => {
      const scrollTop = scrollContainer.scrollTop;
      
      // Get the Experience-2 section position to calculate the full Experience zone
      const experience2Section = document.getElementById('Experience-2');
      const experienceEndPosition = experience2Section ? 
        experience2Section.offsetTop + experience2Section.offsetHeight : 
        Infinity;
      
      // Get the Projects section position
      const projectsSection = document.getElementById('Projects');
      const projectsEndPosition = projectsSection ? 
        projectsSection.offsetTop + projectsSection.offsetHeight : 
        Infinity;
      
      // Get the Contact section position (exact same as click handler)
      const contactTargetPosition = sectionPositions.current.get('Contact');
      
      // Don't override if user just clicked a navbar item
      if (!justClicked.current) {
        let currentSection = 'AboutMe';
        
        // Check Contact first - activate at exact same position as click handler
        if (scrollTop >= contactTargetPosition) {
          currentSection = 'Contact';
        }
        // Check Projects - extended for entire Projects section
        else if (scrollTop >= sectionPositions.current.get('Projects') - 100 && 
                 scrollTop < projectsEndPosition) {
          currentSection = 'Projects';
        }
        // Check Experience - extended for entire Experience section (both boxes)
        else if (scrollTop >= sectionPositions.current.get('Experience') - 100 && 
                 scrollTop < experienceEndPosition + 100) {
          currentSection = 'Experience';
        }
        // Check About - extended until you reach Experience
        else if (scrollTop >= 0 && 
                 scrollTop < sectionPositions.current.get('Experience') - 100) {
          currentSection = 'AboutMe';
        }

        setActiveSection(currentSection);
      }
    };

    // Add scroll listener
    scrollContainer.addEventListener('scroll', handleScroll, { passive: true });
    
    // Initial check
    handleScroll();

    return () => {
      scrollContainer.removeEventListener('scroll', handleScroll);
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
