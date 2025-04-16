// src/components/ThemeImage.tsx
import { useEffect, useState } from 'react';
import lightImg from '/Public/har.png';
import darkImg from '/Public/Youtube_Video_Tutorials_Image.jpg';

const ThemeImage: React.FC = () => {
  const [isdark, setIsdark] = useState(false);

  useEffect(() => {
    const matchDark = window.matchMedia('(prefers-color-scheme: dark)');

    const updateTheme = (e: MediaQueryListEvent | MediaQueryList) => {
      setIsdark(e.matches);
    };

    updateTheme(matchDark); // initial check
    matchDark.addEventListener('change', updateTheme);

    return () => matchDark.removeEventListener('change', updateTheme);
  }, []);

  return (
    <img
      src={isdark ? darkImg : lightImg}
      alt="Theme-based"
      style={{ width: '100%', height: 'auto' }}
    />
  );
};

export default ThemeImage;