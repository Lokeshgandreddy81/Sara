const express = require('express');
const fs = require('fs');
const path = require('path');
const axios = require('axios');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

const CACHE_FILE = path.join(__dirname, 'videoCache.json');

// Load cache
let videoCache = {};
if (fs.existsSync(CACHE_FILE)) {
  videoCache = JSON.parse(fs.readFileSync(CACHE_FILE));
}

// Route to get videos by topic
app.get('/api/videos', async (req, res) => {
  const topic = req.query.topic;

  if (!topic) {
    return res.status(400).json({ error: 'Topic is required' });
  }

  if (videoCache[topic]) {
    console.log(`Serving cached results for: ${topic}`);
    return res.json(videoCache[topic]);
  }

  try {
    const response = await axios.get(
      `https://www.googleapis.com/youtube/v3/search`,
      {
        params: {
          key: process.env.YT_API_KEY,
          q: topic,
          part: 'snippet',
          maxResults: 10,
          type: 'video',
        },
      }
    );

    const filteredVideos = response.data.items.filter(
      (item) => !item.id.videoId.startsWith('shorts')
    );

    const videoResults = filteredVideos.map((item) => ({
      title: item.snippet.title,
      videoId: item.id.videoId,
      thumbnail: item.snippet.thumbnails.medium.url,
      channel: item.snippet.channelTitle,
    }));

    videoCache[topic] = videoResults;

    fs.writeFileSync(CACHE_FILE, JSON.stringify(videoCache, null, 2));
    console.log(`Cached new result for topic: ${topic}`);

    res.json(videoResults);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to fetch YouTube videos' });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
