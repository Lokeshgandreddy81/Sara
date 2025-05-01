import { Lightbulb, Clock, Heart, Globe, Pencil } from "lucide-react";
import { Link } from "react-router-dom";

const Features: React.FC = () => {
    return (
        <>
            <div className="bg-white dark:bg-[#1f1f1f] duration-300 ease-in-out py-16 md:py-24 relative" id='Features'>
                {/* Decorative elements - adjust positioning for responsiveness */}
                <div className="absolute left-5 top-10 md:left-10 md:top-20 bg-white dark:bg-[#1f1f1f] transition-all duration-300 ease-in-out">
                    <Lightbulb className="w-8 h-8 md:w-12 md:h-12 text-orange-400 animate-float hover:text-transparent duration-300 ease-in-out" />
                </div>
                <div className="absolute right-5 top-20 md:right-10 md:top-40">
                    <svg className="w-10 h-10 md:w-16 md:h-16 text-blue-400 animate-float hover:text-transparent duration-200 ease-in-out" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M4 12h16M12 4c8 0 8 16 0 16" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </div>

                <div className="container mx-auto px-6">
                    <div className="text-center mb-12 md:mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-black dark:text-orange-500 transition-all duration-300 ease-in-out">Our Features</h2>
                        <p className="text-gray-600 max-w-2xl mx-auto text-black dark:text-white transition-all duration-300 ease-in-out">Discover our comprehensive learning tracks designed to help you master new skills and advance your career.</p>
                    </div>

                    <br></br>
                    <div className='grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 '>
                        <div className="bg-white rounded-xl shadow-lg overflow-hidden transition-transform hover:-translate-y-2 transition-all duration-300 ease-in-out bg-white dark:bg-[#262626]  p-4 md:p-6 hover:shadow-xl transition-shadow">
                            <div className="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300">
                                <Link to='/select-sub'>
                                    <div className="relative">
                                        <img
                                            src='Public/Smart_Study_Guide_BGImage.png'
                                            alt='Smart_Study_Guide_BGImage'
                                            className="w-full h-48 md:h-64 object-cover" />
                                        <div className="absolute inset-0 bg-black/40 hover:bg-black/60 flex items-center justify-center">
                                            <h3 className="text-white text-xl md:text-2xl font-bold">Smart Study Guide</h3>
                                        </div>
                                    </div>
                                </Link>

                            </div>

                            <div className=" p-4 md:p-6 flex justify-center">
                                <a href='#Details_Smart_study_Guide'>
                                    <button className="bg-orange-500 text-white px-6 md:px-8 py-2 md:py-3 rounded-full hover:bg-orange-600 transform transition-all duration-300 ease-in-out  hover:scale-110 dark:text-black ">
                                        Learn More
                                    </button>
                                </a>
                            </div>
                        </div>

                        <div className="bg-white rounded-xl shadow-lg overflow-hidden transition-transform hover:-translate-y-2 transition-all duration-300 ease-in-out bg-white dark:bg-[#262626]  p-4 md:p-6 hover:shadow-xl transition-shadow">
                            <div className="bg-white rounded-xl shadow-lg overflow-hidden  transition-all duration-300">
                                <Link to='/VidSelect'>
                                    <div className="relative">
                                        <img
                                            src='Public/Youtube_Video_Tutorials_BGImage.png'
                                            alt='Youtube_Video_Tutorials_BGImage'
                                            className="w-full h-48 md:h-64 object-cover" />
                                        <div className="absolute inset-0 bg-black/40 hover:bg-black/60 flex items-center justify-center">
                                            <h3 className="text-white text-xl md:text-2xl font-bold">YouTube Tutorials</h3>
                                        </div>
                                    </div>
                                </Link>

                            </div>

                            <div className=" p-4 md:p-6 flex justify-center">
                                <a href='#Details_Youtube_Video_Tutorials'>
                                    <button className="bg-orange-500 text-white px-6 md:px-8 py-2 md:py-3 rounded-full hover:bg-orange-600 transform transition-all duration-300 ease-in-out  hover:scale-110 dark:text-black ">
                                        Learn More
                                    </button>
                                </a>
                            </div>
                        </div>
                        <div className="bg-white rounded-xl shadow-lg overflow-hidden transition-transform hover:-translate-y-2 transition-all duration-300 ease-in-out bg-white dark:bg-[#262626]  p-4 md:p-6 hover:shadow-xl transition-shadow">
                            <div className="bg-white rounded-xl shadow-lg overflow-hidden  transition-all duration-300">
                                <a href='{feature.Target}'>
                                    <div className="relative">
                                        <img
                                            src='Public/Mental_Health_Support_BGImage.png'
                                            alt='Mental_Health_Support_BGImage'
                                            className="w-full h-48 md:h-64 object-cover" />
                                        <div className="absolute inset-0 bg-black/40 hover:bg-black/60 flex items-center justify-center">
                                            <h3 className="text-white text-xl md:text-2xl font-bold">Mental Health Support</h3>
                                        </div>
                                    </div>
                                </a>

                            </div>

                            <div className=" p-4 md:p-6 flex justify-center">
                                <a href='#Details_Mental_Health_Support'>
                                    <button className="bg-orange-500 text-white px-6 md:px-8 py-2 md:py-3 rounded-full hover:bg-orange-600 transform transition-all duration-300 ease-in-out  hover:scale-110 dark:text-black ">
                                        Learn More
                                    </button>
                                </a>
                            </div>
                        </div>
                    </div>

                </div>
            </div><div className="py-16 md:py-24 bg-[#FDF8f6] dark:bg-[#1f1f1f] transition-all duration-300 ease-in-out" id='Details_Smart_study_Guide'>
                <div className="container mx-auto px-6">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div className="relative">
                            <img
                                src="Public/Smart_Study_Guide_Image.png"
                                alt="Student studying"
                                className="rounded-lg shadow-xl" />
                            <Clock className="absolute top-4 left-4 text-blue-400 w-8 h-8 animate-float" />
                            <Heart className="absolute top-4 right-4 text-red-400 w-8 h-8 animate-float" />
                            <Globe className="absolute bottom-4 left-4 text-green-400 w-8 h-8 animate-float" />
                            <Pencil className="absolute bottom-4 right-4 text-purple-400 w-8 h-8 animate-float" />
                        </div>
                        <div>
                            <h2 className="text-3xl md:text-4xl font-bold mb-6 md:mb-9 dark:text-orange-500 text-[#1f1f1f] transition-all duration-300 ease-in-out">
                                Smart <span className="text-orange-500 dark:text-white transition-all duration-300 ease-in-out">Study</span> Guide
                            </h2>
                            <div className="space-y-4 md:space-y-6">

                                <p className='text-base md:text-xl dark:text-[#d4d4d4] transition-all duration-300 ease-in-out'><b>Smart Study Guide</b> is an AI-powered learning tool that summarizes PDFs instantly, saving students valuable time. It generates concise, easy-to-understand notes from textbooks, research papers, and study materials. Along with summaries, it provides real-time quiz questions based on the content to enhance active recall. Users can upload any document and get an interactive, question-based summary. This smart approach boosts comprehension, retention, and exam readiness efficiently.</p>
                                <br /><br />
                            </div>
                            <Link to='/select-sub'>
                                <button className="bg-[#000000] text-white px-6 md:px-8 py-2 md:py-3 rounded-full w-fit flex items-center group transform transition-all duration-300 ease-in-out hover:-translate-y-1  hover:scale-105  dark:bg-[#8494e9] dark:text-[#000000] dark:hover:bg-orange-500 hover:bg-orange-500">
                                    Get Started
                                    <svg className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M5 12h14M12 5l7 7-7 7" />
                                    </svg>
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div><div className="py-16 md:py-24  dark:bg-[#1f1f1f] transition-all duration-300 ease-in-out" id="Details_Youtube_Video_Tutorials">
                <div className="container mx-auto px-6 ">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        {/* Text Details - Move this to the left */}
                        <div>
                            <h2 className="text-3xl md:text-4xl font-bold mb-6 md:mb-8 dark:text-[#6c7df0] text-[#1f1f1f] transition-all duration-300 ease-in-out">
                                Youtube <span className="text-orange-500 dark:text-white transition-all duration-300 ease-in-out">Video</span> Tutorials
                            </h2>
                            <div className="space-y-4 md:space-y-6">

                                <p className='text-base md:text-xl dark:text-[#d4d4d4] transition-all duration-300 ease-in-out'><b>YouTube Interactive Tutorials</b> is a smart platform that curates top-rated courses and playlists from YouTube, organized by subject and difficulty level. It offers interactive learning with embedded quizzes, progress tracking, and suggested practice based on video content. Students can follow structured learning paths using handpicked playlists from popular educators. Real-time questions appear during videos to test understanding instantly. This tool turns passive YouTube watching into active, guided learning.</p>
                            </div>
                            <br /><br />
                            <Link to ='/VidSelect'>
                                <button className="bg-[#000000] text-white px-6 md:px-8 py-2 md:py-3 rounded-full w-fit flex items-center group transform transition-all duration-300 ease-in-out hover:-translate-y-1  hover:scale-105 hover:text-[#ffffff] dark:hover:bg-[#8494e9] dark:text-black dark:bg-orange-500 hover:bg-[#8494e9]">
                                    Get Started
                                    <svg className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M5 12h14M12 5l7 7-7 7" />
                                    </svg>
                                </button>
                            </Link>
                        </div>
                        <div className="relative">
                            <img
                                src="Public/Youtube_Video_Tutorials_Image.jpg"
                                alt="Student studying"
                                className="rounded-lg shadow-xl" />
                            <Clock className="absolute top-4 left-4 text-blue-400 w-8 h-8 animate-float" />
                            <Heart className="absolute top-4 right-4 text-red-400 w-8 h-8 animate-float" />
                            <Globe className="absolute bottom-4 left-4 text-green-400 w-8 h-8 animate-float" />
                            <Pencil className="absolute bottom-4 right-4 text-purple-400 w-8 h-8 animate-float" />
                        </div>
                    </div>
                </div>
            </div><div className="py-16 md:py-24 bg-[#FDF8f6] dark:bg-[#1f1f1f] transition-all duration-300 ease-in-out" id='Details_Mental_Health_Support'>
                <div className="container mx-auto px-6">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div className="relative">
                            <img
                                src="Public/Mental_Health_Support_Image.jpg"
                                alt="Student studying"
                                className="rounded-lg shadow-xl" />
                            <Clock className="absolute top-4 left-4 text-blue-400 w-8 h-8 animate-float" />
                            <Heart className="absolute top-4 right-4 text-red-400 w-8 h-8 animate-float" />
                            <Globe className="absolute bottom-4 left-4 text-green-400 w-8 h-8 animate-float" />
                            <Pencil className="absolute bottom-4 right-4 text-purple-400 w-8 h-8 animate-float" />
                        </div>
                        <div>
                            <h2 className="text-3xl md:text-4xl font-bold mb-6 md:mb-8 text:black dark:text-orange-500 transition-all duration-300 ease-in-out">
                                Mental <span className="text-orange-500 dark:text-white transition-all duration-300 ease-in-out">Health</span> Support
                            </h2>
                            <div className="space-y-4 md:space-y-6">
                                <p className='text-base md:text-xl dark:text-[#d4d4d4] transition-all duration-300 ease-in-out'><b>Mental Health Support</b> Hub is a digital companion that offers daily motivation, personalized suggestions, and emotional support. It provides mood tracking, mindfulness exercises, and uplifting quotes to boost positivity. Users can chat with AI for stress relief or access expert-backed mental wellness tips. The platform encourages healthy habits and self-care routines tailored to individual needs. It's a safe space to stay inspired, balanced, and mentally strong every day.</p>
                                <br /><br />
                            </div>
                            <a href='#'>
                                <button className="bg-[#000000] text-white px-6 md:px-8 py-2 md:py-3 rounded-full w-fit flex items-center group transform transition-all duration-300 ease-in-out hover:-translate-y-1  hover:scale-105  dark:bg-[#8494e9] dark:text-[#000000] dark:hover:bg-orange-500 hover:bg-orange-500">
                                    Get Started
                                    <svg className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M5 12h14M12 5l7 7-7 7" />
                                    </svg>
                                </button>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Features;