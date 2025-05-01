import React from 'react';
import { Video } from '../../../utils/YoutubeAPI';

interface Props {
  videos: Video[];
}

const VideoListViewer: React.FC<Props> = ({ videos }) => {
  if (!videos.length) return <p className="text-white">No videos found</p>;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
      {videos.map((video) => (
        <div key={video.videoId} className="bg-[#2c2c2c] p-4 rounded shadow">
          <iframe
            className="w-full h-60"
            src={`https://www.youtube.com/embed/${video.videoId}`}
            title={video.title}
            
            allowFullScreen
          />
          <h3 className="mt-2 text-white font-semibold">{video.title}</h3>
        </div>
      ))}
    </div>
  );
};

export default VideoListViewer;
