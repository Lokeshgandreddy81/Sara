import axios from 'axios';
const res = await fetch("/videoCache.json");
const videoData = await res.json();
export interface Video {
  title: string;
  videoId: string;
  description: string;
  thumbnailUrl: string;
}

const BACKEND_URL = 'http://localhost:5000'; // adjust if hosted elsewhere
const YOUTUBE_API_KEY = 'AIzaSyCuNDW86oMT0yxbLNOeqJPo6bvO0go0MH4'; // still needed if no cache

export const getVideosForTopic = async (topic: string): Promise<Video[]> => {
  try {
    // 1. Check if topic is already cached on backend
    const cachedRes = await axios.get(`${BACKEND_URL}/videos`, {
      params: { topic }
    });
    
    if (cachedRes.data && cachedRes.data.length > 0) {
      console.log('Using cached data from server');
      return cachedRes.data;
    }

    // 2. Not cached? Fetch from YouTube
    const ytRes = await axios.get('https://www.googleapis.com/youtube/v3/search', {
      params: {
        key: YOUTUBE_API_KEY,
        q: topic,
        part: 'snippet',
        maxResults: 10,
        type: 'video',
      },
    });

    const videos: Video[] = ytRes.data.items.map((item: any) => ({
      title: item.snippet.title,
      videoId: item.id.videoId,
      description: item.snippet.description,
      thumbnailUrl: item.snippet.thumbnails.medium.url,
    }));

    // 3. Save the new data to the backend
    await axios.post(`${BACKEND_URL}/videos`, {
      topic,
      videos,
    });

    return videos;
  } catch (error) {
    console.error('Failed to fetch videos:', error);
    return [];
  }
};
