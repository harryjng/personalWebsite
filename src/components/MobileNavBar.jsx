// MobileNavBar.jsx
import { useState, useEffect } from 'react';
import './MobileNavBar.css';

export default function MobileNavBar() {
  const [currentSection, setCurrentSection] = useState('About Me');
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check if we're on mobile
    const checkMobile = () => {
      const isMobile = window.innerWidth <= 768;
      setIsVisible(isMobile);
    };

    // Initial check
    checkMobile();

    // Listen for resize events
    window.addEventListener('resize', checkMobile);

    // Set up Intersection Observer for section detection
    const observerOptions = {
      root: null,
      rootMargin: '-20% 0px -60% 0px', // Same as your existing navbar
      threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
      // Only proceed if we're on mobile
      if (window.innerWidth > 768) return;

      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const sectionId = entry.target.id;
          
          // Map section IDs to display names
          const sectionNames = {
            'AboutMe': 'About Me',
            'Experience': 'Experience',
            'Projects': 'Projects',
            'Contact': 'Contact'
          };

          const displayName = sectionNames[sectionId] || sectionId;
          setCurrentSection(displayName);
        }
      });
    }, observerOptions);

    // Observe all sections
    const sections = ['AboutMe', 'Experience', 'Projects', 'Contact'];
    const sectionElements = sections.map(id => document.getElementById(id)).filter(Boolean);
    
    sectionElements.forEach((section) => {
      observer.observe(section);
    });

    // Set initial section on page load
    const setInitialSection = () => {
      if (window.innerWidth > 768) return;

      const scrollContainer = document.querySelector('.right-scrollable');
      if (!scrollContainer) return;

      // Find the section that's currently most visible
      let closestSection = sectionElements[0];
      let closestDistance = Infinity;

      sectionElements.forEach((section) => {
        const rect = section.getBoundingClientRect();
        const sectionCenter = rect.top + rect.height / 2;
        const viewportCenter = window.innerHeight / 2;
        const distance = Math.abs(sectionCenter - viewportCenter);

        if (distance < closestDistance) {
          closestDistance = distance;
          closestSection = section;
        }
      });

      if (closestSection) {
        const sectionId = closestSection.id;
        const sectionNames = {
          'AboutMe': 'About Me',
          'Experience': 'Experience',
          'Projects': 'Projects',
          'Contact': 'Contact'
        };
        const displayName = sectionNames[sectionId] || sectionId;
        setCurrentSection(displayName);
      }
    };

    // Set initial section after a brief delay
    setTimeout(setInitialSection, 100);

    // Cleanup
    return () => {
      window.removeEventListener('resize', checkMobile);
      observer.disconnect();
    };
  }, []);

  // Don't render if not visible (not on mobile)
  if (!isVisible) {
    return null;
  }

  return (
    <div className="mobile-nav-bar">
      <span className="mobile-nav-section">{currentSection}</span>
    </div>
  );
}