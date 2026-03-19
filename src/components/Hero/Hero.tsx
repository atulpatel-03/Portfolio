import { motion } from 'framer-motion';

import { use_typewriter } from '../../hooks/use_typewriter';
import { PERSONAL_INFO } from '../../data/portfolio';
import profile_img from '../../assets/profile.jpg';

const fade_up = (delay: number) => ({
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, delay, ease: 'easeOut' },
});

const Hero = () => {
  const typed = use_typewriter(PERSONAL_INFO.typing_words);

  const handle_scroll_to = (e: React.MouseEvent<HTMLAnchorElement>, selector: string) => {
    e.preventDefault();
    document.querySelector(selector)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="hero" id="hero">
      <div className="hero_content">
        <motion.p className="hero_greeting" {...fade_up(0.2)}>
          {PERSONAL_INFO.greeting}
        </motion.p>
        <motion.h1 className="hero_name" {...fade_up(0.4)}>
          {PERSONAL_INFO.name}.
        </motion.h1>
        <motion.h2 className="hero_tagline" {...fade_up(0.6)}>
          I <span className="typed_text">{typed}</span>
          <span className="cursor_blink">|</span>
        </motion.h2>
        <motion.p className="hero_description" {...fade_up(0.8)}>
          {PERSONAL_INFO.description}
        </motion.p>
        <motion.div className="hero_cta" {...fade_up(1.0)}>
          <a href="#contact" className="btn btn_primary" onClick={(e) => handle_scroll_to(e, '#contact')}>
            Get In Touch
          </a>
          <a href="#projects" className="btn btn_outline" onClick={(e) => handle_scroll_to(e, '#projects')}>
            View My Work
          </a>
        </motion.div>
        <motion.div className="hero_socials" {...fade_up(1.2)}>
          <a href={PERSONAL_INFO.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" /></svg>
          </a>
          <a href={PERSONAL_INFO.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect x="2" y="9" width="4" height="12" /><circle cx="4" cy="4" r="2" /></svg>
          </a>
          <a href={`mailto:${PERSONAL_INFO.email}`} aria-label="Email">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12,13 2,6" /></svg>
          </a>
        </motion.div>
      </div>
      <motion.div
        className="hero_image"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 1 }}
      >
        <div className="hero_image_wrapper">
          <img src={profile_img} alt="Atul Patel" />
          <div className="hero_image_glow" />
        </div>
      </motion.div>
      <div className="scroll_indicator">
        <div className="mouse">
          <div className="mouse_wheel" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
