import { motion } from 'framer-motion';
import _ from 'lodash';

import { use_github_repos } from '../../hooks/use_github_repos';
import { PERSONAL_INFO } from '../../data/portfolio';
import SectionTitle from '../SectionTitle/SectionTitle';

const LANGUAGE_COLORS: Record<string, string> = {
  JavaScript: '#f1e05a',
  TypeScript: '#3178c6',
  Python: '#3572A5',
  Java: '#b07219',
  'C++': '#f34b7d',
  HTML: '#e34c26',
  CSS: '#563d7c',
  Shell: '#89e051',
  Dart: '#00B4AB',
  Kotlin: '#A97BFF',
  Swift: '#F05138',
  Go: '#00ADD8',
  Rust: '#dea584',
  Ruby: '#701516',
  PHP: '#4F5D95',
  Jupyter: '#DA5B0B',
  C: '#555555',
};

const get_language_color = (language: string | null): string => {
  if (!language) return 'var(--text-muted)';
  return LANGUAGE_COLORS[language] || 'var(--accent)';
};

const get_github_username = (): string => {
  const url = PERSONAL_INFO.github;
  const parts = url.replace(/\/$/, '').split('/');
  return parts[parts.length - 1];
};

const format_date = (date_str: string): string => {
  const date = new Date(date_str);
  const now = new Date();
  const diff_ms = now.getTime() - date.getTime();
  const diff_days = Math.floor(diff_ms / (1000 * 60 * 60 * 24));

  if (diff_days < 1) return 'today';
  if (diff_days < 30) return `${diff_days}d ago`;
  if (diff_days < 365) return `${Math.floor(diff_days / 30)}mo ago`;
  return `${Math.floor(diff_days / 365)}yr ago`;
};

const CONTAINER_VARIANTS = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08 },
  },
};

const CARD_VARIANTS = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const GithubRepos = () => {
  const username = get_github_username();
  const { repos, is_loading, error } = use_github_repos(username);

  const filtered_repos = _.filter(repos, (r) => !r.fork);
  const sorted_repos = _.orderBy(filtered_repos, ['stargazers_count', 'updated_at'], ['desc', 'desc']);
  const display_repos = _.take(sorted_repos, 6);

  if (error) return null;

  return (
    <section className="section" id="github">
      <div className="container">
        <SectionTitle number="04" title="Open Source / GitHub" />
        {is_loading ? (
          <div className="github_loading">
            <div className="github_spinner" />
            <p>Fetching repos from GitHub...</p>
          </div>
        ) : (
          <>
            <motion.div
              className="github_grid"
              variants={CONTAINER_VARIANTS}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-50px' }}
            >
              {_.map(display_repos, (repo) => (
                <motion.div
                  key={repo.id}
                  className="github_card"
                  variants={CARD_VARIANTS}
                  onClick={() => window.open(repo.html_url, '_blank')}
                  role="link"
                  tabIndex={0}
                >
                  <div className="github_card_header">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z" /></svg>
                    <div className="github_card_links">
                      {repo.homepage && (
                        <a
                          href={repo.homepage}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="github_live_link"
                          onClick={(e) => e.stopPropagation()}
                          aria-label="Live demo"
                        >
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /><polyline points="15 3 21 3 21 9" /><line x1="10" y1="14" x2="21" y2="3" /></svg>
                        </a>
                      )}
                      <svg className="github_external" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" /></svg>
                    </div>
                  </div>
                  <h3 className="github_card_name">{repo.name}</h3>
                  <p className="github_card_desc">
                    {repo.description || 'No description provided'}
                  </p>
                  <div className="github_card_footer">
                    <div className="github_card_meta">
                      {repo.language && (
                        <span className="github_lang">
                          <span
                            className="github_lang_dot"
                            style={{ background: get_language_color(repo.language) }}
                          />
                          {repo.language}
                        </span>
                      )}
                      {repo.stargazers_count > 0 && (
                        <span className="github_stars">
                          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" /></svg>
                          {repo.stargazers_count}
                        </span>
                      )}
                      {repo.forks_count > 0 && (
                        <span className="github_forks">
                          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="18" r="3" /><circle cx="6" cy="6" r="3" /><circle cx="18" cy="6" r="3" /><path d="M18 9v1a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V9" /><path d="M12 12v3" /></svg>
                          {repo.forks_count}
                        </span>
                      )}
                    </div>
                    <span className="github_updated">
                      {format_date(repo.updated_at)}
                    </span>
                  </div>
                </motion.div>
              ))}
            </motion.div>
            <motion.div
              className="github_view_all"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn_outline"
              >
                View All Repositories
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" /></svg>
              </a>
            </motion.div>
          </>
        )}
      </div>
    </section>
  );
};

export default GithubRepos;
