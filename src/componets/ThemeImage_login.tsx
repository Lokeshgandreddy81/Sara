import React from 'react';

const ThemeImageLogin: React.FC = () => {
  return (
    <div>
      {/* Show img1.jpg in dark mode */}
      <img
        src="sara-dark-login-logo.png"
        alt="Dark theme"
        className="hidden dark:block h-10 w-10"
      />
      {/* Show img2.jpg in light mode */}
      <img
        src="sara-dark-logo.png"
        alt="Light theme"
        className="block dark:hidden h-10 w-10"
      />
    </div>
  );
};

export default ThemeImageLogin;
