import React, { useState } from 'react';
import { Send, Star } from 'lucide-react';

interface Message {
  id: number;
  text: string;
  sender: 'user' | 'ai';
  timestamp: string;
}

interface Resource {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  type: 'meditation' | 'relaxation';
  duration?: string;
  buttonText: string;
}

export default function ChatPage() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: "Hi there, I'm your wellness assistant. How are you feeling today?",
      sender: 'ai',
      timestamp: '12:34 PM'
    }
  ]);

  const [inputMessage, setInputMessage] = useState('');

  const resources: Resource[] = [
    {
      id: 1,
      title: 'Mindful Meditation',
      description: 'Perfect for study breaks - 7 min session to restore concentration.',
      imageUrl: 'https://images.unsplash.com/photo-1511632765486-a01980e01a18?auto=format&fit=crop&w=800&q=80',
      type: 'meditation',
      duration: '7 min',
      buttonText: 'Explore'
    },
    {
      id: 2,
      title: 'Relaxation Techniques',
      description: 'Curated music to reduce stress and improve mood.',
      imageUrl: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=800&q=80',
      type: 'relaxation',
      buttonText: 'Try Now'
    }
  ];

  const exercises = [
    {
      id: 1,
      title: '4-7-8 Breathing',
      duration: '3 min',
      description: 'Inhale for 4 seconds, hold for 7 seconds, exhale for 8 seconds. Helps reduce anxiety and promote sleep.',
      completed: true
    },
    {
      id: 2,
      title: 'Body Scan Meditation',
      duration: '10 min',
      description: 'Bring awareness to each part of your body, noticing sensations without judgment.',
      completed: false
    },
    {
      id: 3,
      title: 'Desk Stretches',
      duration: '5 min',
      description: 'Simple stretches to release tension in your neck, shoulders, and back while at your desk.',
      completed: false
    }
  ];

  const handleSendMessage = () => {
    if (!inputMessage.trim()) return;

    const newMessage: Message = {
      id: messages.length + 1,
      text: inputMessage,
      sender: 'user',
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setMessages([...messages, newMessage]);
    setInputMessage('');

    // Simulate AI response
    setTimeout(() => {
      const aiResponse: Message = {
        id: messages.length + 2,
        text: "I understand what you're going through. Would you like to try some self-help exercises?",
        sender: 'ai',
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };
      setMessages(prev => [...prev, aiResponse]);
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="grid grid-cols-3 gap-8">
          {/* Chat Section */}
          <div className="col-span-2 bg-white rounded-lg shadow-lg overflow-hidden">
            {/* Chat Header */}
            <div className="bg-blue-600 text-white p-4">
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                  <img
                    src="https://images.unsplash.com/photo-1531746790731-6c087fecd65a?auto=format&fit=crop&w=100&h=100&q=80"
                    alt="AI Assistant"
                    className="w-8 h-8 rounded-full"
                  />
                </div>
                <div>
                  <h2 className="font-semibold">Wellness Assistant</h2>
                  <p className="text-sm opacity-80">AI-powered support available 24/7</p>
                </div>
              </div>
            </div>

            {/* Chat Messages */}
            <div className="h-[500px] overflow-y-auto p-4 space-y-4">
              {messages.map(message => (
                <div
                  key={message.id}
                  className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-[70%] rounded-lg p-3 ${
                      message.sender === 'user'
                        ? 'bg-blue-600 text-white'
                        : 'bg-gray-100 text-gray-800'
                    }`}
                  >
                    <p>{message.text}</p>
                    <p className="text-xs mt-1 opacity-70">{message.timestamp}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Chat Input */}
            <div className="p-4 border-t">
              <div className="flex gap-2">
                <input
                  type="text"
                  value={inputMessage}
                  onChange={(e) => setInputMessage(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                  placeholder="Type your message..."
                  className="flex-1 rounded-lg border border-gray-300 px-4 py-2 focus:outline-none focus:border-blue-500"
                />
                <button
                  onClick={handleSendMessage}
                  className="bg-blue-600 text-white rounded-lg px-4 py-2 hover:bg-blue-700 transition-colors"
                >
                  <Send className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>

          {/* Resources Section */}
          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-gray-800 flex items-center gap-2">
              <Star className="w-5 h-5 text-blue-600" />
              Recommended Resources
            </h3>

            {/* Featured Resources */}
            {resources.map(resource => (
              <div key={resource.id} className="relative overflow-hidden rounded-lg shadow-lg">
                <img
                  src={resource.imageUrl}
                  alt={resource.title}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4">
                  <h4 className="text-white font-semibold">{resource.title}</h4>
                  <p className="text-gray-200 text-sm">{resource.description}</p>
                  <button className="mt-2 bg-blue-600 text-white px-4 py-1 rounded-full text-sm hover:bg-blue-700 transition-colors">
                    {resource.buttonText}
                  </button>
                </div>
              </div>
            ))}

            {/* Exercise Cards */}
            {exercises.map(exercise => (
              <div key={exercise.id} className="bg-white rounded-lg shadow-md p-4">
                <div className="flex justify-between items-start mb-2">
                  <h4 className="font-semibold text-gray-800">{exercise.title}</h4>
                  <span className="text-sm text-gray-500">{exercise.duration}</span>
                </div>
                <p className="text-gray-600 text-sm mb-3">{exercise.description}</p>
                <div className="flex gap-2">
                  <button className="bg-blue-100 text-blue-600 px-4 py-1 rounded-full text-sm hover:bg-blue-200 transition-colors">
                    Favorite
                  </button>
                  {exercise.completed ? (
                    <button className="bg-green-100 text-green-600 px-4 py-1 rounded-full text-sm">
                      Completed
                    </button>
                  ) : (
                    <button className="bg-blue-600 text-white px-4 py-1 rounded-full text-sm hover:bg-blue-700 transition-colors">
                      Start
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}