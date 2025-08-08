import { useEffect, useRef } from 'react';

const useScrollAnimation = (animationType = 'fadeInUp', threshold = 0.1, delay = 0) => {
  const elementRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            entry.target.classList.add('animate', animationType);
          }, delay);
          observer.unobserve(entry.target);
        }
      },
      { 
        threshold,
        rootMargin: '0px 0px -50px 0px' // Ativa a animação um pouco antes
      }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => observer.disconnect();
  }, [animationType, threshold, delay]);

  return elementRef;
};

export default useScrollAnimation;