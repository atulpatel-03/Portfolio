import { useEffect, useRef } from 'react';

const CursorGlow = () => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (window.innerWidth < 768) return;

    const handle_move = (e: MouseEvent) => {
      if (ref.current) {
        ref.current.style.left = e.clientX + 'px';
        ref.current.style.top = e.clientY + 'px';
      }
    };

    document.addEventListener('mousemove', handle_move);
    return () => document.removeEventListener('mousemove', handle_move);
  }, []);

  return <div ref={ref} className="cursor_glow" />;
};

export default CursorGlow;
