import React from "react";

interface PlaylistViewerProps {
  moduleName: string;
}

const PlaylistViewer: React.FC<PlaylistViewerProps> = ({ moduleName }) => {
  const playlistMap: Record<string, string> = {
    "OOMD-Module-1": "PLu0W_9lII9agICnT8t4iYVSZ3eykIAOME",
    "OOMD-Module-2": "PL9ooVrP1hQOEgpiVXX0u_Tw4zA0m5X2dt",
    "OOMD-Module-3": "PLz_0gS0ydV-YChdo2xwTeEXWc1ZoyLhR5",
    // Add all your module-to-playlist mappings here
  };

  const playlistId = playlistMap[moduleName];

  if (!playlistId) {
    return (
      <p className="text-red-500">No playlist found for <strong>{moduleName}</strong>.</p>
    );
  }

  const embedUrl = `https://www.youtube.com/embed/videoseries?list=${playlistId}`;

  return (
    <div className="w-full h-[500px] mt-4">
      <iframe
        className="w-full h-full rounded-xl shadow-lg"
        src={embedUrl}
        title={`YouTube Playlist for ${moduleName}`}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    </div>
  );
};

export default PlaylistViewer;
