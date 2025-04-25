import React from 'react';

const ThemeImage: React.FC = () => {
  return (
    <div>
      {/* Show img1.jpg in dark mode */}
      <img
        src="Public/SaraLogo.png"
        alt="SaraAI"
        className="hidden dark:block h-8 w-8"
      />
      {/* Show img2.jpg in light mode */}
      <img
        src="Public/SaraDarkLogo.png"
        alt="SaraAI"
        className="block dark:hidden h-8 w-8"
      />
    </div>
  );
};

export default ThemeImage;
