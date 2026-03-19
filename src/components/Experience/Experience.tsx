import { motion } from 'framer-motion';
import _ from 'lodash';

import { use_scroll_reveal } from '../../hooks/use_scroll_reveal';
import type { ExperienceItem } from '../../data/portfolio';
import { EXPERIENCES } from '../../data/portfolio';
import SectionTitle from '../SectionTitle/SectionTitle';

interface TimelineItemProps {
  exp: ExperienceItem;
  index: number;
}

const TimelineItem = ({ exp, index }: TimelineItemProps) => {
  const { ref, is_visible } = use_scroll_reveal();

  return (
    <motion.div
      ref={ref}
      className="timeline_item"
      initial={{ opacity: 0, y: 30 }}
      animate={is_visible ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1 }}
    >
      <div className="timeline_dot" />
      <div className="timeline_content">
        <div className="timeline_header">
          <div>
            <h3>{exp.title}</h3>
            <p className="timeline_company">
              {exp.company} <span className="timeline_location">{exp.location}</span>
            </p>
          </div>
          <span className="timeline_date">{exp.date}</span>
        </div>
        <ul className="timeline_details">
          {_.map(exp.details, (detail, i) => (
            <li key={i}>{detail}</li>
          ))}
        </ul>
        <div className="timeline_tags">
          {_.map(exp.tags, (tag) => (
            <span key={tag}>{tag}</span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

const Experience = () => {
  return (
    <section className="section" id="experience">
      <div className="container">
        <SectionTitle number="02" title="Experience" />
        <div className="timeline">
          {_.map(EXPERIENCES, (exp, i) => (
            <TimelineItem key={i} exp={exp} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
