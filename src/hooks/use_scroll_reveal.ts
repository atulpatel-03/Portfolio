import { useEffect, useRef, useState } from 'react';

export const use_scroll_reveal = (threshold = 0.1) => {
  const ref = useRef<HTMLDivElement>(null);
  const [is_visible, set_is_visible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          set_is_visible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold, rootMargin: '0px 0px -50px 0px' }
    );

    const el = ref.current;
    if (el) observer.observe(el);

    return () => {
      if (el) observer.unobserve(el);
    };
  }, [threshold]);

  return { ref, is_visible };
};
