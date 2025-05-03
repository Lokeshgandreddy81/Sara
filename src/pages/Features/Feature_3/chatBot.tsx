import React, { useState, useEffect } from 'react';
import { GoogleGenerativeAI, GenerativeModel } from '@google/generative-ai';
import ThemeImagechat from '../../../componets/ThemeImageChat';
import NavBar from '../../../componets/NavBar';
import ThemeImageChat from '../../../componets/ThemeImageChat';
import { Send } from 'lucide-react';
import ReactMarkdown from "react-markdown";

// Interface for a chat message
interface ChatMessage {
    sender: string;
    message: string;
    time: string;
}

const chatBot: React.FC = () => {
    // Initialize the Gemini API client
    const genAI = new GoogleGenerativeAI(import.meta.env.VITE_GEMINI_API_KEY);
    const model: GenerativeModel = genAI.getGenerativeModel({ model: 'gemini-2.0-flash' });

    // State for messages and user input
    const [messages, setMessages] = useState<ChatMessage[]>([
        {
            sender: 'Wellness Assistant',
            message: "Hi there! I'm your Wellness Assistant. How are you feeling today?",
            time: '12:34 PM',
        },
    ]);
    const [newMessage, setNewMessage] = useState<string>('');
    const [isLoading, setIsLoading] = useState<boolean>(false);

    // Function to fetch a response from Gemini API
    const fetchBotResponse = async (userMessage: string, chatHistory: ChatMessage[]): Promise<string> => {
        try {
            // Construct the conversation history for context
            const history = chatHistory.map((msg) => ({
                role: msg.sender === 'User' ? 'user' : 'model',
                parts: [{ text: msg.message }],
            }));

            // Add the current user message
            const currentPrompt = [...history, { role: 'user', parts: [{ text: userMessage }] }];

            // Call the Gemini API
            const result = await model.generateContent({
                contents: currentPrompt,
            });

            const response = await result.response;
            const text = response.text();
            return text;
        } catch (error) {
            console.error('Error fetching bot response:', error);
            return "I'm sorry, I couldn't process your request. Please try again.";
        }
    };

    // Handle sending a new message
    const handleSendMessage = async () => {
        if (newMessage.trim() === '') return;

        const currentTime = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

        // Add user's message to the chat
        const userMessage: ChatMessage = { sender: 'User', message: newMessage, time: currentTime };
        setMessages((prev) => [...prev, userMessage]);
        setNewMessage('');
        setIsLoading(true);

        // Fetch bot response
        const botResponse = await fetchBotResponse(newMessage, [...messages, userMessage]);
        const botMessage: ChatMessage = {
            sender: 'Wellness Assistant',
            message: botResponse,
            time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        };

        setMessages((prev) => [...prev, botMessage]);
        setIsLoading(false);
    };

    return (
        <div className='bg-white dark:bg-[#1f1f1f]'>
            <NavBar />
            <div className="flex h-screen bg-white dark:bg-[#1f1f1f]">
                {/* Sidebar */}
                <div className="w-1/3 bg-white flex flex-col items-center justify-between p-4  dark:bg-[#1f1f1f] ">
                    <div className="text-center dark:bg-[#1f1f1f]">
                        <div className='mt-20 dark:bg-[#1f1f1f] rounded-2xl ml-10'>
                            <img
                                src="/Chatf.png" // Replace with your robot image URL
                                alt="Wellness Assistant Robot"
                                className="mt-4 rounded-2xl"
                                height={400}
                                width={400}

                            /></div>
                        <button
                            className="bg-blue-600 text-white py-2 px-6 rounded-lg hover:bg-blue-700 my-20"
                            onClick={() =>
                                setMessages([
                                    {
                                        sender: 'Wellness Assistant',
                                        message: "Hi there! I'm your Wellness Assistant. How are you feeling today?",
                                        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
                                    },
                                ])
                            }
                        >
                            New Chat
                        </button>
                    </div >
                    <div className='mt-10'>

                    </div>
                </div>

                {/* Chat Area */}
                <div className="w-2/3 flex flex-col rounded-xl  bg-[#f8f9fb]  dark:bg-[#262626] ml-40 mt-14 rounded-md mr-20 mb-28 " >
                    {/* Navigation Bar */}


                    <div className="bg-[#b4c7d8] p-4 flex justify-between items-center rounded-md">
                        <div className="flex items-center space-x-2 flex flex items-center justify-center  h-full">
                            <ThemeImageChat />
                            <div >
                                <h2 className="font-bold ">Wellness Assistant </h2>
                                <p className="text-sm text-gray-600">This is not for any Therapy - Just Simple, Caring Support</p>
                            </div>
                        </div>
                    </div>

                    {/* Chat Messages */}
                    <div className="flex-1 p-3 overflow-y-auto">
                        {messages.map((msg, index) => (
                            <div
                                key={index}
                                className={`mb-4 flex ${msg.sender === 'User' ? 'justify-end' : 'justify-start'
                                    }`}
                            >
                                {msg.sender !== 'User' && (
                                    <></>
                                )}
                                <div
                                    className={`p-2 rounded-xl ${msg.sender === 'User'
                                        ? 'bg-blue-600 text-white dark:bg-[#2e3033] dark:text-[#fcfcfc] px-7 py-3'
                                        : 'bg-[#f1f1f7] text-gray-800 dark:bg-[#262626] dark:text-[#f8f8f8]'
                                        }`}
                                >
                                    <ReactMarkdown>{msg.message}</ReactMarkdown>

                                </div>
                            </div>
                        ))}
                        {isLoading && (
                            <div className="flex justify-start mb-4">

                                <div className="p-3 rounded-lg bg-[#f1f1f7] text-gray-800 dark:bg-[#262626] dark:text-[#f8f8f8]">
                                    <p>Typing...</p>
                                </div>
                            </div>
                        )}
                    </div>

                    {/* Message Input */}
                    <div className="bg-white p-4  flex items-center space-x-2 dark:bg-[#1f1f1f]">
                        <input
                            type="text"
                            value={newMessage}
                            onChange={(e) => setNewMessage(e.target.value)}
                            placeholder="Type your message..."
                            className="flex-1 p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 bg-white dark:bg-[#1f1f1f] text-black dark:text-[#f8f8f8]"
                            onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                            disabled={isLoading}

                        />
                        <div className='ml-10'>
                            <button
                                onClick={handleSendMessage}
                                className="bg-blue-600 text-white p-2 rounded-lg hover:bg-blue-700 mx-2"
                                disabled={isLoading}
                            >
                                <Send />
                            </button></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default chatBot;