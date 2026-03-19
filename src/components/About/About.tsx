import { motion } from 'framer-motion';
import _ from 'lodash';

import { use_scroll_reveal } from '../../hooks/use_scroll_reveal';
import { use_count_up } from '../../hooks/use_count_up';
import { ABOUT_TEXT, STATS } from '../../data/portfolio';
import SectionTitle from '../SectionTitle/SectionTitle';

interface StatCardProps {
  label: string;
  value: number;
  suffix: string;
}

const render_text = (html: string) => {
  return html.replace(/<highlight>(.*?)<\/highlight>/g, '<span class="highlight">$1</span>');
};

const StatCard = ({ label, value, suffix }: StatCardProps) => {
  const { ref, is_visible } = use_scroll_reveal(0.5);
  const count = use_count_up(value, is_visible);

  return (
    <div ref={ref} className="stat_card">
      <span className="stat_number">{count}</span>
      {suffix && <span className="stat_suffix">{suffix}</span>}
      <span className="stat_label">{label}</span>
    </div>
  );
};

const About = () => {
  const { ref, is_visible } = use_scroll_reveal();

  return (
    <section className="section" id="about">
      <div className="container">
        <SectionTitle number="01" title="About Me" />
        <motion.div
          ref={ref}
          className="about_content"
          initial={{ opacity: 0, y: 30 }}
          animate={is_visible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="about_text">
            {_.map(ABOUT_TEXT, (text, i) => (
              <p key={i} dangerouslySetInnerHTML={{ __html: render_text(text) }} />
            ))}
          </div>
          <div className="about_stats">
            {_.map(STATS, (stat) => (
              <StatCard key={stat.label} {...stat} />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
