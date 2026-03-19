import { useState, useEffect } from 'react';

export interface GithubRepo {
  id: number;
  name: string;
  description: string | null;
  html_url: string;
  language: string | null;
  stargazers_count: number;
  forks_count: number;
  updated_at: string;
  topics: string[];
  fork: boolean;
  homepage: string | null;
}

export const use_github_repos = (username: string) => {
  const [repos, set_repos] = useState<GithubRepo[]>([]);
  const [is_loading, set_is_loading] = useState(true);
  const [error, set_error] = useState<string | null>(null);

  useEffect(() => {
    const fetch_repos = async () => {
      try {
        set_is_loading(true);
        const response = await fetch(
          `https://api.github.com/users/${username}/repos?sort=updated&per_page=30&type=public`
        );

        if (!response.ok) {
          throw new Error('Failed to fetch repos');
        }

        const data: GithubRepo[] = await response.json();
        set_repos(data);
      } catch (err) {
        set_error(err instanceof Error ? err.message : 'Unknown error');
      } finally {
        set_is_loading(false);
      }
    };

    fetch_repos();
  }, [username]);

  return { repos, is_loading, error };
};
