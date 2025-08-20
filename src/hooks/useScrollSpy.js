import { useEffect, useState } from 'react';

export function useScrollSpy(sectionIds, options = {}) {
  const [activeSection, setActiveSection] = useState(sectionIds[0] || '');

  useEffect(() => {
    const scrollContainer = document.querySelector('.right-scrollable');
    
    if (!scrollContainer) {
      console.warn('Scroll container not found');
      return;
    }

    // Get all sections that exist
    const sections = sectionIds
      .map(id => ({
        id,
        element: document.getElementById(id)
      }))
      .filter(section => section.element);

    if (sections.length === 0) {
      console.warn('No sections found to observe');
      return;
    }

    const handleScroll = () => {
      const containerRect = scrollContainer.getBoundingClientRect();
      const viewportTop = containerRect.top;
      const viewportCenter = viewportTop + containerRect.height / 2;
      
      let activeSection = sections[0].id;
      
      // Find the section that is currently most visible in the viewport
      // Priority: section that contains the viewport center, or the last section that has passed the top
      for (let i = sections.length - 1; i >= 0; i--) {
        const { id, element } = sections[i];
        const rect = element.getBoundingClientRect();
        
        // If the section top is above or at the viewport center, this section is active
        // This ensures proper detection when scrolling up from bottom
        if (rect.top <= viewportCenter) {
          activeSection = id;
          break;
        }
      }
      
      // Special case: if we're very close to the top (within 100px), always show About
      if (scrollContainer.scrollTop < 100) {
        activeSection = 'AboutMe';
      }

      setActiveSection(activeSection);
    };

    // Initial check
    handleScroll();

    // Add scroll event listener
    scrollContainer.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      scrollContainer.removeEventListener('scroll', handleScroll);
    };
  }, [sectionIds]);

  return activeSection;
}