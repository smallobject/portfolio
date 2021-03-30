import React, { useState } from 'react';
import { ReactComponent as Sun } from '../../assets/sun.svg';

import useDarkMode from '../../hooks/useTheme';
import './ui.css';

const ThemeToggle = ({ selectedTheme }) => {
  const [colorTheme, setTheme] = useDarkMode();
  const [moon, setMoon] = useState(false);
  const [showTip, setShowTip] = useState('hide-tip');

  return (
    <div>
      <Sun
        fill='#FFC83D'
        className={`w-6 h-6 float-right m-2 relative ${
          moon ? 'dark' : null
        } cursor-pointer`}
        id='sun'
        onClick={() => {
          setTheme(colorTheme);
          setMoon(!moon);
        }}
        onMouseEnter={() => setShowTip('show-tip')}
        onMouseLeave={() => setShowTip('hide-tip')}
      />
      <span
        className={`text-xs w-48 m-bg-contrast text-white p-2 rounded absolute mt-1 ml-10 ${showTip} dark:bg-gray-200 dark:text-black`}
      >
        I designed this site for dark mode ONLY, this is only a proof of
        concept.
      </span>
    </div>
  );
};

export default ThemeToggle;
