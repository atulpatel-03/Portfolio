import { useEffect, useRef } from 'react';

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  opacity: number;
}

const ParticleBackground = () => {
  const canvas_ref = useRef<HTMLCanvasElement>(null);
  const mouse_ref = useRef({ x: -1000, y: -1000 });

  useEffect(() => {
    const canvas = canvas_ref.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animation_id: number;
    let particles: Particle[] = [];

    const get_particle_color = () => {
      const style = getComputedStyle(document.documentElement);
      return style.getPropertyValue('--particle-color').trim() || '6, 182, 212';
    };

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const init = () => {
      const count = Math.min(70, Math.floor((window.innerWidth * window.innerHeight) / 18000));
      particles = [];
      for (let i = 0; i < count; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * 0.35,
          vy: (Math.random() - 0.5) * 0.35,
          radius: Math.random() * 1.5 + 0.5,
          opacity: Math.random() * 0.4 + 0.1,
        });
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const color = get_particle_color();

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${color}, ${p.opacity})`;
        ctx.fill();

        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dx = p.x - p2.x;
          const dy = p.y - p2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 140) {
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = `rgba(${color}, ${0.07 * (1 - dist / 140)})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }

        const mdx = p.x - mouse_ref.current.x;
        const mdy = p.y - mouse_ref.current.y;
        const m_dist = Math.sqrt(mdx * mdx + mdy * mdy);
        if (m_dist < 180) {
          ctx.beginPath();
          ctx.moveTo(p.x, p.y);
          ctx.lineTo(mouse_ref.current.x, mouse_ref.current.y);
          ctx.strokeStyle = `rgba(${color}, ${0.12 * (1 - m_dist / 180)})`;
          ctx.lineWidth = 0.5;
          ctx.stroke();
        }
      }

      animation_id = requestAnimationFrame(animate);
    };

    const handle_resize = () => { resize(); init(); };
    const handle_mouse = (e: MouseEvent) => { mouse_ref.current = { x: e.clientX, y: e.clientY }; };

    resize();
    init();
    animate();
    window.addEventListener('resize', handle_resize);
    window.addEventListener('mousemove', handle_mouse);

    return () => {
      cancelAnimationFrame(animation_id);
      window.removeEventListener('resize', handle_resize);
      window.removeEventListener('mousemove', handle_mouse);
    };
  }, []);

  return (
    <canvas
      ref={canvas_ref}
      style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', zIndex: 0, pointerEvents: 'none' }}
    />
  );
};

export default ParticleBackground;
