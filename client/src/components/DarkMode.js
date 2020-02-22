import React from 'react';
import useDarkMode from '../hooks/useDarkMode';

const DarkMode = () => {
  const [darkMode, setDarkMode] = useDarkMode(false);
  const toggleMode = e => {
    e.preventDefault();
    setDarkMode(!darkMode);
  };
  return (
    <div className="dark-mode-container">
      <div className="dark-mode__toggle">
        <button
          onClick={toggleMode}
          className={darkMode ? 'toggle toggled' : 'toggle'}
        > Click for Dark Mode! </button>
      </div>
    </div>
  );
};

export default DarkMode;