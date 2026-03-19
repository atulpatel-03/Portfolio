import { motion } from 'framer-motion';
import _ from 'lodash';

import { use_scroll_reveal } from '../../hooks/use_scroll_reveal';
import type { AchievementItem } from '../../data/portfolio';
import { ACHIEVEMENTS } from '../../data/portfolio';
import SectionTitle from '../SectionTitle/SectionTitle';

const ICONS: Record<string, JSX.Element> = {
  trophy: <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="8" r="7" /><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88" /></svg>,
  star: <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" /></svg>,
  users: <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /></svg>,
};

interface AchievementCardProps {
  achievement: AchievementItem;
  index: number;
}

const AchievementCard = ({ achievement, index }: AchievementCardProps) => {
  const { ref, is_visible } = use_scroll_reveal();

  return (
    <motion.div
      ref={ref}
      className="achievement_card"
      initial={{ opacity: 0, y: 30 }}
      animate={is_visible ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1 }}
    >
      <div className="achievement_icon">{ICONS[achievement.icon]}</div>
      <h3>{achievement.title}</h3>
      <p>{achievement.description}</p>
    </motion.div>
  );
};

const Achievements = () => {
  return (
    <section className="section" id="achievements">
      <div className="container">
        <SectionTitle number="06" title="Achievements" />
        <div className="achievements_grid">
          {_.map(ACHIEVEMENTS, (ach, i) => (
            <AchievementCard key={ach.title} achievement={ach} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
