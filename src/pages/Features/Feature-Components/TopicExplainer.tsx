import React, { useEffect, useState } from 'react';
import axios from 'axios';

interface GeminiProps {
  topic: string;
  module: string;
  subject: string;
}

const TopicExplainer: React.FC<GeminiProps> = ({ topic, module, subject }) => {
  const [output, setOutput] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [contentSize, setContentSize] = useState<'short' | 'medium'>('short');

  useEffect(() => {
    if (!topic || !module || !subject) return;
    fetchFromGemini();
  }, [topic, module, subject, contentSize]); // 👈 also trigger when contentSize changes

  const fetchFromGemini = async () => {
    setLoading(true);
    setOutput(null);
    setError(null);

    try {
      const apiKey = 'AIzaSyAmKd2Bm9K_3LhirWi1qydY6LhsQitqGkw'; // <-- Replace with your API key
      const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${apiKey}`;

      const prompt = `Explain the following topic: "${topic}" in module "${module}" in the subject "${subject}" in ${contentSize} form.`; // 👈 dynamically insert contentSize

      const payload = {
        contents: [{ parts: [{ text: prompt }] }],
      };

      const response = await axios.post(url, payload, {
        headers: {
          'Content-Type': 'application/json',
        },
      });

      const generatedText = response.data?.candidates?.[0]?.content?.parts?.[0]?.text || 'No response from Gemini.';
      setOutput(generatedText);
    } catch (err: any) {
      console.error(err);
      setError('Failed to fetch explanation from Gemini.');
    } finally {
      setLoading(false);
    }
  };

  const formatOutput = (text: string) => {
    const lines = text.split('\n').filter(line => line.trim() !== '');
  
    return lines.map((line, index) => {
      const cleanLine = line.replace(/^\*+/, '').replace(/^\-+/, '').trim(); // Remove * or - from beginning
  
      if (line.startsWith('*')) {
        // Optional: If you still want big headings when line started with *, keep this
        return (
          <h2 key={index} className="text-xl font-semibold mt-4 mb-2">
            {cleanLine}
          </h2>
        );
      } else if (line.startsWith('-')) {
        // Optional: If you still want bullets
        return (
          <li key={index} className="ml-6 list-disc">
            {cleanLine}
          </li>
        );
      } else {
        // Default: just paragraph
        return (
          <p key={index} className="mb-2">
            {cleanLine}
          </p>
        );
      }
    });
  };
  

  return (
    <div className="min-h-screen max-w-4xl mx-auto p-6">
      <div className="flex items-center gap-4 mb-4">
        <button
          onClick={() => setContentSize('short')}
          disabled={loading} // 👈 Disable when loading
          className={`px-4 py-2 rounded-md font-semibold transition ${
            contentSize === 'short' ? 'bg-blue-600 text-white' : 'bg-gray-300 dark:bg-gray-700 dark:text-white'
          } ${loading ? 'opacity-50 cursor-not-allowed' : ''}`} // 👈 Button disabled style
        >
          Short
        </button>

        <button
          onClick={() => setContentSize('medium')}
          disabled={loading} // 👈 Disable when loading
          className={`px-4 py-2 rounded-md font-semibold transition ${
            contentSize === 'medium' ? 'bg-blue-600 text-white' : 'bg-gray-300 dark:bg-gray-700 dark:text-white'
          } ${loading ? 'opacity-50 cursor-not-allowed' : ''}`} // 👈 Button disabled style
        >
          Medium
        </button>
      </div>

      {loading && <p className="text-blue-500">Loading from SARA AI...</p>}
      {error && <p className="text-red-500">{error}</p>}
      {output && (
        <div className="prose dark:prose-invert max-w-none text-black dark:text-white">
          {formatOutput(output)}
        </div>
      )}
    </div>
  );
};

export default TopicExplainer;
