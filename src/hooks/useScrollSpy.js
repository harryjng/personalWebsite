import { useEffect, useState } from 'react';

export const useScrollSpy = (sectionIds, offset = 0) => {
  const [activeSection, setActiveSection] = useState(sectionIds[0]);

  useEffect(() => {
    const scrollContainer = document.querySelector('.right-scrollable');
    
    if (!scrollContainer) return;

    const handleScroll = () => {
      const scrollTop = scrollContainer.scrollTop;
      const containerHeight = scrollContainer.clientHeight;

      // Find which section is currently most visible
      let currentSection = sectionIds[0];
      let maxVisibility = 0;

      sectionIds.forEach((sectionId) => {
        const element = document.getElementById(sectionId);
        if (!element) return;

        const rect = element.getBoundingClientRect();
        const elementTop = rect.top;
        const elementHeight = rect.height;

        // Calculate how much of the section is visible in the viewport
        const visibleTop = Math.max(0, elementTop);
        const visibleBottom = Math.min(containerHeight, elementTop + elementHeight);
        const visibleHeight = Math.max(0, visibleBottom - visibleTop);
        const visibility = visibleHeight / elementHeight;

        if (visibility > maxVisibility) {
          maxVisibility = visibility;
          currentSection = sectionId;
        }
      });

      setActiveSection(currentSection);
    };

    // Add scroll listener
    scrollContainer.addEventListener('scroll', handleScroll, { passive: true });
    
    // Initial check
    handleScroll();

    return () => {
      scrollContainer.removeEventListener('scroll', handleScroll);
    };
  }, [sectionIds, offset]);

  return activeSection;
}; 