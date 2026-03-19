import { motion } from 'framer-motion';
import _ from 'lodash';

import { use_scroll_reveal } from '../../hooks/use_scroll_reveal';
import type { ProjectItem } from '../../data/portfolio';
import { PROJECTS } from '../../data/portfolio';
import SectionTitle from '../SectionTitle/SectionTitle';

interface ProjectCardProps {
  project: ProjectItem;
  index: number;
}

const ProjectCard = ({ project, index }: ProjectCardProps) => {
  const { ref, is_visible } = use_scroll_reveal();

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={is_visible ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1 }}
    >
      <div className={`project_card_inner${project.featured ? ' featured' : ''}`}>
        <div className="project_overline">{project.overline}</div>
        <h3 className="project_title">{project.title}</h3>
        <div className="project_description">
          <p>{project.description}</p>
        </div>
        <div className="project_tech">
          {_.map(project.tech, (t) => (
            <span key={t}>{t}</span>
          ))}
        </div>
        {project.github && (
          <div className="project_links">
            <a href={project.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" /></svg>
            </a>
          </div>
        )}
      </div>
    </motion.div>
  );
};

const Projects = () => {
  return (
    <section className="section" id="projects">
      <div className="container">
        <SectionTitle number="05" title="Things I've Built" />
        <div className="projects_grid">
          {_.map(PROJECTS, (project, i) => (
            <ProjectCard key={project.title} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
