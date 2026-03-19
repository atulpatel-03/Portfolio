import { motion } from 'framer-motion';
import _ from 'lodash';

import { use_scroll_reveal } from '../../hooks/use_scroll_reveal';
import type { SkillCategoryItem } from '../../data/portfolio';
import { SKILL_CATEGORIES } from '../../data/portfolio';
import SectionTitle from '../SectionTitle/SectionTitle';

const ICONS: Record<string, JSX.Element> = {
  code: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="16 18 22 12 16 6" /><polyline points="8 6 2 12 8 18" /></svg>,
  monitor: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="3" width="20" height="14" rx="2" ry="2" /><line x1="8" y1="21" x2="16" y2="21" /><line x1="12" y1="17" x2="12" y2="21" /></svg>,
  database: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><ellipse cx="12" cy="5" rx="9" ry="3" /><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" /><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" /></svg>,
  pen: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 20h9" /><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z" /></svg>,
};

interface SkillCardProps {
  category: SkillCategoryItem;
  index: number;
}

const SkillCard = ({ category, index }: SkillCardProps) => {
  const { ref, is_visible } = use_scroll_reveal();

  return (
    <motion.div
      ref={ref}
      className="skill_category"
      initial={{ opacity: 0, y: 30 }}
      animate={is_visible ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1 }}
    >
      <div className="skill_category_icon">{ICONS[category.icon]}</div>
      <h3>{category.title}</h3>
      <div className="skill_tags">
        {_.map(category.skills, (skill) => (
          <span key={skill} className="skill_tag">{skill}</span>
        ))}
      </div>
    </motion.div>
  );
};

const Skills = () => {
  return (
    <section className="section" id="skills">
      <div className="container">
        <SectionTitle number="03" title="Skills & Technologies" />
        <div className="skills_grid">
          {_.map(SKILL_CATEGORIES, (cat, i) => (
            <SkillCard key={cat.title} category={cat} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
