// const express = require('express');
// const fs = require('fs');
// const cors = require('cors');
// const axios = require('axios');
// const app = express();
// const PORT = 3001;

// const CACHE_FILE = './SERVER/cache.json';
// const YOUTUBE_API_KEY = 'YOUR_YOUTUBE_API_KEY';

// app.use(cors());

// // Utility: Read and Write JSON Cache
// const loadCache = () => {
//   try {
//     return JSON.parse(fs.readFileSync(CACHE_FILE));
//   } catch {
//     return {};
//   }
// };

// const saveCache = (data) => {
//   fs.writeFileSync(CACHE_FILE, JSON.stringify(data, null, 2));
// };

// // API Endpoint
// app.get('/videos', async (req, res) => {
//   const { topic } = req.query;
//   if (!topic) return res.status(400).json({ error: 'Topic required' });

//   const cache = loadCache();

//   if (cache[topic]) {
//     console.log(`[CACHE HIT] ${topic}`);
//     return res.json(cache[topic]);
//   }

//   try {
//     console.log(`[API CALL] ${topic}`);
//     const { data } = await axios.get('https://www.googleapis.com/youtube/v3/search', {
//       params: {
//         key: YOUTUBE_API_KEY,
//         q: topic,
//         part: 'snippet',
//         maxResults: 10,
//         type: 'video',
//       },
//     });

//     const filtered = data.items.filter(
//       (item) => !item.snippet.title.toLowerCase().includes('shorts')
//     );

//     cache[topic] = filtered;
//     saveCache(cache);

//     res.json(filtered);
//   } catch (err) {
//     console.error(err.message);
//     res.status(500).json({ error: 'YouTube API failed' });
//   }
// });

// app.listen(PORT, () => {
//   console.log(`Server running on http://localhost:${PORT}`);
// });
