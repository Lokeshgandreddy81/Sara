// TopicExplainer.tsx
import React, { useEffect, useState } from 'react';
import axios from 'axios';

interface TopicExplainerProps {
  topic: string;
  module: string;
  subject: string;
}

const TopicExplainer: React.FC<TopicExplainerProps> = ({ topic, module, subject }) => {
  const [explanation, setExplanation] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  

  useEffect(() => {
    if (!topic || !module || !subject) return; // Don't fetch if missing info
    fetchExplanation();
  }, [topic, module, subject]);

  const fetchExplanation = async () => {
    setLoading(true);
    setExplanation(null);
    setError(null);

    try {
      const apiKey = 'YOUR_GEMINI_API_KEY'; // <-- your API key
      const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${apiKey}`;

      const prompt = `Explain the topic "${topic}" in module "${module}" in subject "${subject}".`;

      const payload = {
        contents: [{ parts: [{ text: prompt }] }],
      };

      const response = await axios.post(url, payload, {
        headers: {
          'Content-Type': 'application/json',
        },
      });

      const generatedExplanation = response.data?.candidates?.[0]?.content?.parts?.[0]?.text || 'No explanation found.';
      setExplanation(generatedExplanation);
    } catch (err: any) {
      console.error(err);
      setError('Failed to fetch explanation. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full max-w-4xl mx-auto p-6">
      {loading && <p className="text-blue-500">Loading explanation...</p>}
      {error && <p className="text-red-500">{error}</p>}
      {explanation && (
        <div className="prose dark:prose-invert max-w-none">
          {explanation.split('\n').map((line, index) => (
            <p key={index}>{line}</p>
          ))}
        </div>
      )}
    </div>
  );
};

export default TopicExplainer;
