import { motion } from 'framer-motion';

import { use_scroll_reveal } from '../../hooks/use_scroll_reveal';
import { EDUCATION } from '../../data/portfolio';
import SectionTitle from '../SectionTitle/SectionTitle';

const Education = () => {
  const { ref, is_visible } = use_scroll_reveal();

  return (
    <section className="section" id="education">
      <div className="container">
        <SectionTitle number="07" title="Education" />
        <motion.div
          ref={ref}
          className="education_card"
          initial={{ opacity: 0, y: 30 }}
          animate={is_visible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="education_icon">
            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 10v6M2 10l10-5 10 5-10 5z" /><path d="M6 12v5c0 2 2 3 6 3s6-1 6-3v-5" /></svg>
          </div>
          <div className="education_details">
            <h3>{EDUCATION.institution}</h3>
            <p className="education_degree">{EDUCATION.degree}</p>
            <p className="education_period">{EDUCATION.period} | {EDUCATION.location}</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Education;
