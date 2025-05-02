import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ReactMarkdown from "react-markdown";
import { Navigate } from 'react-router-dom';

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
  }, [topic, module, subject, contentSize]); // contentSize changes

  const fetchFromGemini = async () => {
    setLoading(true);
    setOutput(null);
    setError(null);

    try {
      const response = await axios.post('http://192.168.137.1:5000/api/gemini', {
        topic,
        module,
        subject,
        contentSize,
      });
      setOutput(response.data.result);

    } catch (err: any) {
      console.error(err);
      setError('Failed to fetch explanation from Gemini.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-1 h-full">

      <div className="flex items-center gap-4 mb-4">
        <button
          onClick={() => setContentSize('short')}
          disabled={loading} // Disable  loading
          className={`px-4 py-2 rounded-md font-semibold transition ${contentSize === 'short' ? 'bg-blue-600 text-white' : 'bg-gray-300 dark:bg-gray-700 dark:text-white'
            } ${loading ? 'opacity-50 cursor-not-allowed' : ''}`} // disabled style
        >
          Summary
        </button>


        <button
          onClick={() => setContentSize('medium')}
          disabled={loading} // when loading
          className={`px-4 py-2 rounded-md font-semibold transition ${contentSize === 'medium' ? 'bg-blue-600 text-white' : 'bg-gray-300 dark:bg-gray-700 dark:text-white'
            } ${loading ? 'opacity-50 cursor-not-allowed' : ''}`} // Button  style
        >
          Explanation
        </button>
        <div className='mx-10'>
          <button
            onClick={() => {
              const encodedTopic = encodeURIComponent(topic); // Ensure spaces & special chars are handled
              window.open(`/VidSelect?topic=${encodedTopic}`, '_blank');
            }}
          >
            Related Videos
          </button>

        </div>
      </div>

      {loading && <p className="text-blue-500">Loading from SARA AI...</p>}
      {error && <p className="text-red-500">{error}</p>}
      {output && (
        <div className="prose dark:prose-invert min-w-100 text-gray-600 dark:text-gray-300">
          <div className="max-h-[100vh] overflow-y-auto p-4 bg-white dark:bg-[#2c2c2c] rounded-md shadow-inner">
            <ReactMarkdown>
              {output}
            </ReactMarkdown>
          </div>
        </div>
      )}

    </div>
  );
};

export default TopicExplainer;
