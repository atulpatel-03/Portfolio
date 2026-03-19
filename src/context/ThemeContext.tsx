import { createContext, useContext, useState, useEffect, type ReactNode } from 'react';

interface ThemeContextProps {
  theme: 'dark' | 'light';

  toggle_theme: () => void;
}

interface ThemeProviderProps {
  children: ReactNode;
}

const ThemeContext = createContext<ThemeContextProps>({
  theme: 'dark',
  toggle_theme: () => {},
});

export const useTheme = () => useContext(ThemeContext);

const ThemeProvider = ({ children }: ThemeProviderProps) => {
  const [theme, set_theme] = useState<'dark' | 'light'>(() => {
    const saved = localStorage.getItem('portfolio-theme');
    return (saved === 'light' || saved === 'dark') ? saved : 'dark';
  });

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('portfolio-theme', theme);
  }, [theme]);

  const toggle_theme = () => {
    set_theme((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggle_theme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
