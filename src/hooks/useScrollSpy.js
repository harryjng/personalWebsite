import { useEffect, useState, useRef } from 'react';

export function useScrollSpy(sectionIds, options = {}) {
  const [activeSection, setActiveSection] = useState(sectionIds[0] || '');
  const observerRef = useRef(null);

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

    const {
      rootMargin = '-20% 0px -60% 0px',
      threshold = [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1],
      minIntersectionRatio = 0.1
    } = options;

    const observerOptions = {
      root: scrollContainer,
      rootMargin,
      threshold,
    };

    const observer = new IntersectionObserver((entries) => {
      // Create a map of intersection ratios for each section
      const sectionRatios = new Map();
      
      entries.forEach(entry => {
        const sectionId = entry.target.getAttribute('id');
        if (sectionId) {
          sectionRatios.set(sectionId, entry.intersectionRatio);
        }
      });

      // Find the section with the highest intersection ratio
      let bestSection = sections[0]?.id || '';
      let bestRatio = 0;

      sections.forEach(({ id }) => {
        const ratio = sectionRatios.get(id) || 0;
        if (ratio > bestRatio) {
          bestRatio = ratio;
          bestSection = id;
        }
      });

      // Special handling for when we're at the very top of the page
      const scrollTop = scrollContainer.scrollTop;
      const containerHeight = scrollContainer.clientHeight;
      
      // Check if we're at the top or if the first section is mostly visible
      if (scrollTop < 100) { // If we're very close to the top
        bestSection = sections[0]?.id || ''; // Default to first section (About)
        bestRatio = 1; // Force it to be considered active
      } else {
        // Check if the first section is mostly visible in the viewport
        const firstSection = sections[0]?.element;
        if (firstSection) {
          const rect = firstSection.getBoundingClientRect();
          const visibleHeight = Math.min(rect.bottom, containerHeight) - Math.max(rect.top, 0);
          const sectionHeight = rect.height;
          const visibilityRatio = visibleHeight / sectionHeight;
          
          if (visibilityRatio > 0.5 && rect.top < containerHeight * 0.3) {
            bestSection = sections[0]?.id || '';
            bestRatio = visibilityRatio;
          }
        }
      }

      // Only update if we have a meaningful intersection or we're at the top
      if (bestRatio > minIntersectionRatio || scrollTop < 100) {
        setActiveSection(bestSection);
      }
    }, observerOptions);

    observerRef.current = observer;

    // Observe all sections
    sections.forEach(({ id, element }) => {
      if (element) {
        observer.observe(element);
        console.log(`Observing section: ${id}`);
      }
    });

    // Add scroll event listener as backup for top detection
    const handleScroll = () => {
      const scrollTop = scrollContainer.scrollTop;
      if (scrollTop < 100) {
        setActiveSection(sections[0]?.id || '');
      }
    };

    scrollContainer.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
      scrollContainer.removeEventListener('scroll', handleScroll);
    };
  }, [sectionIds, options]);

  return activeSection;
} 