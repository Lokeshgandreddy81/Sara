import React from 'react';

const ThemeImageChat: React.FC = () => {
  return (
    <div>
      {/* Show img1.jpg in dark mode */}
      <img
        src="/SaraDarkLogo.png"
        alt="SaraAI"
        className="hidden dark:block h-8 w-8"
      />
      {/* Show img2.jpg in light mode */}
      <img
        src="/SaraLogo.png"
        alt="SaraAI"
        className="block dark:hidden h-8 w-8"
      />
    </div>
  );
};

export default ThemeImageChat;
