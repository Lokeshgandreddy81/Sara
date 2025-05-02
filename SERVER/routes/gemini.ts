import express from 'express';
import axios from 'axios';
import dotenv from 'dotenv';

dotenv.config();

const router = express.Router();

router.post('/generate', async (req, res) => {
  const { topic, module, subject, contentSize } = req.body;

  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) {
    return res.status(500).json({ error: 'Gemini API key missing' });
  }

  const prompt = `Explain the topic "${topic}" ${module ? `from module "${module}"` : ''} in subject "${subject}" in ${contentSize} form.`;

  try {
    const geminiResponse = await axios.post(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${apiKey}`,
      {
        contents: [{ parts: [{ text: prompt }] }],
      },
      {
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );

    const result = geminiResponse.data?.candidates?.[0]?.content?.parts?.[0]?.text || '';
    res.json({ result });
  } catch (err) {
    console.error('Gemini API Error:', err);
    res.status(500).json({ error: 'Failed to fetch content from Gemini' });
  }
});

export default router;
