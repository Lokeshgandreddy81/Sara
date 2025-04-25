import React from 'react';

const ThemeImage: React.FC = () => {
  return (
    <div>
      {/* Show img1.jpg in dark mode */}
      <img
        src="sara-logo.png"
        alt="Dark theme"
        className="hidden dark:block h-8 w-8"
      />
      {/* Show img2.jpg in light mode */}
      <img
        src="sara-dark-logo.png"
        alt="Light theme"
        className="block dark:hidden h-8 w-8"
      />
    </div>
  );
};

export default ThemeImage;
