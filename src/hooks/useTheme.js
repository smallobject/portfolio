import { useState, useEffect } from 'react';

const useDarkMode = () => {
  const [theme, setTheme] = useState('light');
  const colorTheme = theme === 'dark' ? 'light' : 'dark';
  useEffect(
    () => {
      const root = window.document.documentElement;
      root.classList.remove(colorTheme);
      root.classList.add(theme);
    },
    [theme, colorTheme],
    colorTheme
  );
  return [colorTheme, setTheme];
};

export default useDarkMode;
