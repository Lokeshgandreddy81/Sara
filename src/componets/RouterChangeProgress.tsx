// src/components/RouteChangeProgress.tsx
import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';

const RouteChangeProgress = () => {
  const location = useLocation();

  useEffect(() => {
    NProgress.start();
    const timeout = setTimeout(() => {
      NProgress.done();
    }, 300); // simulate slight delay

    return () => clearTimeout(timeout);
  }, [location]);

  return null;
};

export default RouteChangeProgress;
