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
      const viewportCenter = containerRect.top + containerRect.height / 2;
      
      let closestSection = sections[0].id;
      let closestDistance = Infinity;

      sections.forEach(({ id, element }) => {
        const rect = element.getBoundingClientRect();
        const sectionCenter = rect.top + rect.height / 2;
        const distance = Math.abs(sectionCenter - viewportCenter);

        if (distance < closestDistance) {
          closestDistance = distance;
          closestSection = id;
        }
      });

      setActiveSection(closestSection);
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