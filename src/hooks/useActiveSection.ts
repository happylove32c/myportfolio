import { useState, useEffect } from 'react';

export function useActiveSection() {
  const [activeSection, setActiveSection] = useState<string>('home');

  useEffect(() => {
    const observers = new Map();
    
    const sections = document.querySelectorAll('section[id]');
    
    const observerCallback: IntersectionObserverCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && entry.intersectionRatio >= 0.5) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observerOptions: IntersectionObserverInit = {
      threshold: 0.5,
      rootMargin: '-50% 0px -50% 0px'
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    sections.forEach((section) => {
      observer.observe(section);
      observers.set(section.id, observer);
    });

    return () => {
      sections.forEach((section) => {
        const observer = observers.get(section.id);
        if (observer) {
          observer.unobserve(section);
        }
      });
    };
  }, []);

  return activeSection;
}