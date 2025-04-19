import React, { useEffect, useState } from 'react';

const NoInternetOverlay: React.FC = () => {
  const [isOnline, setIsOnline] = useState(true);

  useEffect(() => {
    const updateOnlineStatus = () => setIsOnline(navigator.onLine);

    window.addEventListener('online', updateOnlineStatus);
    window.addEventListener('offline', updateOnlineStatus);

    // Initial check
    updateOnlineStatus();

    return () => {
      window.removeEventListener('online', updateOnlineStatus);
      window.removeEventListener('offline', updateOnlineStatus);
    };
  }, []);

  if (isOnline) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black bg-opacity-70 flex flex-col items-center justify-center text-white">
      <div className="bg-gray-800 p-6 rounded-2xl shadow-lg text-center max-w-sm w-full">
        <h2 className="text-2xl font-semibold mb-2">No Internet Connection</h2>
        <p className="mb-4">Please check your connection and try again.</p>
        <button
          onClick={() => window.location.reload()}
          className="bg-white text-black px-4 py-2 rounded-lg font-medium hover:bg-gray-300 transition"
        >
          Refresh
        </button>
      </div>
    </div>
  );
};

export default NoInternetOverlay;
