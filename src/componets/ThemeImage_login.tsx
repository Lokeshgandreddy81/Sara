import React from 'react';

const ThemeImageLogin: React.FC = () => {
  return (
    <div>
      {/* Show img1.jpg in dark mode */}
      <img
        src="Public/SaraDarkLoginLogo.png"
        alt="Dark theme"
        className="hidden dark:block h-10 w-10"
      />
      {/* Show img2.jpg in light mode */}
      <img
        src="Public/SaraDarkLogo.png"
        alt="Light theme"
        className="block dark:hidden h-10 w-10"
      />
    </div>
  );
};

export default ThemeImageLogin;
