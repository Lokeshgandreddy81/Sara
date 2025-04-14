import React from 'react';
import { Book, Lightbulb, Atom, Ruler, FlaskRound as Triangle, Clock, Heart, Globe, Pencil, Phone, Mail, MapPin } from 'lucide-react';
import BackToTopButton from '../componets/BackToTopButton';
import { useEffect, useState } from 'react';
import'../index.css';
import Footer from '../componets/Footer_FIn';

function FloatingIcon({ children, className }: { children: React.ReactNode; className: string }) {
  return (
    <div className={`absolute text-blue-600/80 animate-float ${className}`}>
      {children}
    </div>
  );
}

function HomePage() {
  
  const testimonials = [
    {
      name: "D V Yogesh",
      role: "Web Developer",
      text: "Teachings of the great explore of truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, pleasure itself.",
      image: "Public/Yogesh.png"
    },
    {
      name: "Ch Shesheer",
      role: "Web Design",
      text: "Complete account of the system and expound the actual are  Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots.",
      image: "Public/Shesheer.png"
    },
    {
      name: "G Lokesh",
      role: "UI/UX Design",
      text: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour.",
      image: "Public/Lokesh.png"
    }
  ];


  return (
      <div className="min-h-screen bg-gradient-to-b from-[#8494e9] to-white dark:from-[#4c5bd4] to-white transition-colors duration-300 ease-in-out">
        <div className="bg-[#8494e9] dark:bg-[#4c5bd4] transition-all duration-300 ease-in-out relative overflow-hidden">
          <FloatingIcon className="top-20 left-1/2 dark:text-[#4c5bd4] hover:text-transparent duration-2 00 ease-in-out"><Book size={50} /></FloatingIcon>
          {/* <FloatingIcon className="top-40 left-32 dark:text-[#4c5bd4] hover:text-transparent duration-200 ease-in-out"><Monitor size={50} /></FloatingIcon> */}
          <FloatingIcon className="bottom-32 left-1/4 dark:text-[#4c5bd4] hover:text-transparent duration-200 ease-in-out"><Lightbulb size={50} /></FloatingIcon>
          <FloatingIcon className="bottom-1 left-32 dark:text-[#4c5bd4] hover:text-transparent duration-200 ease-in-out"><Atom size={50} /></FloatingIcon>
          <FloatingIcon className="bottom-1 right-1/4 dark:text-[#4c5bd4] hover:text-transparent duration-200 ease-in-out"><Ruler size={50} /></FloatingIcon>
          {/* <FloatingIcon className="top-1/4 left-1/4 dark:text-[#4c5bd4] hover:text-transparent duration-200 ease-in-out"><Flask size={50} /></FloatingIcon> */}
          <FloatingIcon className="bottom-1/4 right-1/2 dark:text-[#4c5bd4] hover:text-transparent duration-200 ease-in-out"><Triangle size={50} /></FloatingIcon>

          <div className="container mx-auto px-6 pt-20 pb-32 grid grid-cols-2 gap-12">
            <div className="flex flex-col justify-center">
              <h1 className="text-6xl font-bold mb-4">
                <span className="text-white dark:text-black transition all duration-300 ease-in-out">The Best</span><br />
                <span className="text-black dark:text-white transition all duration-300 ease-in-out">Choice For</span>
                <span className="text-white dark:text-black transition all duration-300 ease-in-out"> Future</span>
              </h1>
              <p className="text-white dark:text-white transition all duration-300 ease-in-out text-2xl mb-8 leading-relaxed">
                Sara is your AI-powered educational companion, designed to make learning smarter and more personalized. From study guides to career mentorship, Sara supports every aspect of student life — helping you grow, succeed, and thrive. Let's shape the future of education together!
              </p>
              <div className="flex items-center space-x-10">
                <a href='#Features'>
                  <button className="bg-black text-white dark:text-black dark:bg-white px-8 py-3 rounded-full w-fit flex items-center group transform transition-all duration-300 ease-in-out hover:-translate-y-1  transform hover:scale-105">
                    Explore
                    <svg className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </button>
                </a>
                <a href='#Tutorial'>
                  <button className="bg-white text-black dark:text-white dark:bg-black px-8 py-3 rounded-full hover:bg-white/80 w-fit flex items-center group transform transition-all duration-300 ease-in-out hover:-translate-y-1  transform hover:scale-105">
                    How to Use It ?
                    <svg className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </button>
                </a>
              </div>
            </div>
            <div className="relative">
              <div className="bg-[#8494e9] dark:bg-[#4c5bd4] duration-300 ease-in-out">
                <img
                  src="Public/har.png"
                  alt="AI Education Illustration"
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>


        <div className="py-24 relative bg-[#8494e9] dark:bg-[#4c5bd4] transition-all duration-300 ease-in-out flex items-center justify-center">
          <div className="container mx-auto px-5" id="Tutorial">
            <div className="aspect-video relative" >
              {/* <iframe
              className="w-full h-full rounded-xl"
              src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1&mute=1&controls=0&loop=1&playlist=dQw4w9WgXcQ"
              title="Platform Tutorial"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe> */}
              {/* <iframe
              className="w-full h-full rounded-xl"
              src="https://www.youtube-nocookie.com/embed/tnFAQxc9Ll4?si=6Y9dNZ_CwjA72WHy&amp;start=85&autoplay=1&mute=1&controls=0&loop=1"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" >
            </iframe> */}
              <iframe
                className="w-full h-full rounded-xl"
                src="https://www.youtube-nocookie.com/embed/x_dhgg1xI_4?si=rkrWCmsDwnnfIbsu&amp;start=93&autoplay=1&mute=1&controls=0&loop=1"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen>
              </iframe>
              <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center rounded-xl">
                <h2 className="text-5xl font-bold text-white mb-4 text-center">
                  How to Use This Website ?
                </h2>
                <p className="text-xl text-white/80 max-w-2xl text-center">
                  Watch this quick guide to understand the platform better
                </p>
                <a href='https://youtu.be/W8a4sUabCUo?si=KHTrf77ZnmiKpaLf' target="_blank" rel="noopener noreferrer">
                  <button className="mt-8 bg-white/20 hover:bg-white/50 text-white px-8 py-3 rounded-full backdrop-blur-sm transition-all duration-300 flex items-center hover:text-black">
                    Watch Tutorial
                    <svg className="ml-2 w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </button>
                </a>

              </div>
            </div>
            <p className='left-align text-[#1f1f1f] dark:text-[#1f1f1f]'>BackGround Video Credits : <a href='https://www.youtube.com/@8kEarth' target='_blank'className='text-white dark:text-black'>8K video</a></p>
          </div>
        </div>


        <div className="bg-white dark:bg-[#1f1f1f] py-24 relative" id='Features'>
          <div className="absolute left-10 top-20 bg-white dark:bg-[#1f1f1f] transition-all duration-300 ease-in-out">
            <Lightbulb className="w-12 h-12 text-orange-400 animate-float hover:text-transparent duration-200 ease-in-out" />
          </div>
          <div className="absolute right-10 top-40">
            <svg className="w-16 h-16 text-blue-400 animate-float hover:text-transparent duration-200 ease-in-out" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M4 12h16M12 4c8 0 8 16 0 16" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>

          <div className="container mx-auto px-6" >
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4 text-black dark:text-orange-500 transition-all duration-300 ease-in-out">Our Features</h2>
              <p className="text-gray-600 max-w-2xl mx-auto text-black dark:text-white transition-all duration-300 ease-in-out">Discover our comprehensive learning tracks designed to help you master new skills and advance your career.</p>
            </div>

            {/* <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden transition-transform hover:-translate-y-2 transition-all duration-300">
                  <a href='{feature.Target}'>
                    <div className="relative">
                      <img
                        src={feature.image}
                        alt={feature.title}
                        className="w-full h-64 object-cover"
                      />
                      <div className="absolute inset-0 bg-black/40 hover:bg-black/60 flex items-center justify-center">
                        <h3 className="text-white text-2xl font-bold">{feature.title}</h3>
                      </div>
                    </div>
                  </a>

                </div>
              ))}
            </div> */}
            <br></br>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-8 '>
              <div className="bg-white rounded-xl shadow-lg overflow-hidden transition-transform hover:-translate-y-2 transition-all duration-300 ease-in-out bg-white dark:bg-[#262626] rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
                <div className="bg-white rounded-xl shadow-lg overflow-hidden  transition-all duration-300">
                  <a href='{feature.Target}'>
                    <div className="relative">
                      <img
                        src='Public/Smart_Study_Guide_BGImage.png'
                        alt='Smart_Study_Guide_BGImage'
                        className="w-full h-64 object-cover"
                      />
                      <div className="absolute inset-0 bg-black/40 hover:bg-black/60 flex items-center justify-center">
                        <h3 className="text-white text-2xl font-bold">Smart Study Guide</h3>
                      </div>
                    </div>
                  </a>

                </div>
                
                <div className="p-6 flex justify-center">
                  <a href='#Details_Smart_study_Guide'>
                    <button className="bg-orange-500 text-white px-8 py-3 rounded-full hover:bg-orange-600 transform transition-all duration-300 ease-in-out transform hover:scale-110 dark:text-black ">
                      Learn More
                    </button>
                  </a>
                </div>
              </div>

              <div className="bg-white rounded-xl shadow-lg overflow-hidden transition-transform hover:-translate-y-2 transition-all duration-300 ease-in-out bg-white dark:bg-[#262626] rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
                <div className="bg-white rounded-xl shadow-lg overflow-hidden  transition-all duration-300">
                  <a href='{feature.Target}'>
                    <div className="relative">
                      <img
                        src='Public/Youtube_Video_Tutorials_BGImage.png'
                        alt='Youtube_Video_Tutorials_BGImage'
                        className="w-full h-64 object-cover"
                      />
                      <div className="absolute inset-0 bg-black/40 hover:bg-black/60 flex items-center justify-center">
                        <h3 className="text-white text-2xl font-bold">YouTube Tutorials</h3>
                      </div>
                    </div>
                  </a>

                </div>
                
                <div className="p-6 flex justify-center">
                  <a href='#Details_Youtube_Video_Tutorials'>
                    <button className="bg-orange-500 text-white px-8 py-3 rounded-full hover:bg-orange-600 transform transition-all duration-300 ease-in-out transform hover:scale-110 dark:text-black ">
                      Learn More
                    </button>
                  </a>
                </div>
              </div>
              <div className="bg-white rounded-xl shadow-lg overflow-hidden transition-transform hover:-translate-y-2 transition-all duration-300 ease-in-out bg-white dark:bg-[#262626] p-6 hover:shadow-xl transition-shadow">
                <div className="bg-white rounded-xl shadow-lg overflow-hidden  transition-all duration-300">
                  <a href='{feature.Target}'>
                    <div className="relative">
                      <img
                        src='Public/Mental_Health_Support_BGImage.png'
                        alt='Mental_Health_Support_BGImage'
                        className="w-full h-64 object-cover"
                      />
                      <div className="absolute inset-0 bg-black/40 hover:bg-black/60 flex items-center justify-center">
                        <h3 className="text-white text-2xl font-bold">Mental Health Support</h3>
                      </div>
                    </div>
                  </a>

                </div>
                
                <div className="p-6 flex justify-center">
                  <a href='#Details_Mental_Health_Support'>
                    <button className="bg-orange-500 text-white px-8 py-3 rounded-full hover:bg-orange-600 transform transition-all duration-300 ease-in-out transform hover:scale-110 dark:text-black ">
                      Learn More
                    </button>
                  </a>
                </div>
              </div>
            </div>
            {/* <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

              <div className="p-6 flex justify-center">
                <a href='#Details_Smart_study_Guide'>
                  <button className="bg-orange-500 text-white px-8 py-3 rounded-full hover:bg-orange-600 transform transition-all duration-300 ease-in-out transform hover:scale-110 dark:text-black ">
                    Learn More
                  </button>
                </a>
              </div>

              <div className="p-6 flex justify-center">
                <a href='#Details_Youtube_Video_Tutorials'>
                  <button className="bg-orange-500 text-white px-8 py-3 rounded-full hover:bg-orange-600 transform transition-all duration-300 ease-in-out transform hover:scale-110 dark:text-black">
                    Learn More
                  </button>
                </a>
              </div>


              <div className="p-6 flex justify-center">
                <a href='#Details_Mental_Health_Support'>
                  <button className="bg-orange-500 text-white px-8 py-3 rounded-full hover:bg-orange-600 transform transition-all duration-300 ease-in-out transform hover:scale-110 dark:text-black">
                    Learn More
                  </button>
                </a>
              </div>
            </div> */}
          </div>
        </div>


        <div className="py-24 bg-[#FDF8f6] dark:bg-[#1f1f1f] transition-all duration-300 ease-in-out" id='Details_Smart_study_Guide'>
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-2 gap-12 items-center">
              <div className="relative">
                <img
                  src="Public/Smart_Study_Guide_Image.png"
                  alt="Student studying"
                  className="rounded-lg shadow-xl"
                />
                <Clock className="absolute top-4 left-4 text-blue-400 w-8 h-8 animate-float" />
                <Heart className="absolute top-4 right-4 text-red-400 w-8 h-8 animate-float" />
                <Globe className="absolute bottom-4 left-4 text-green-400 w-8 h-8 animate-float" />
                <Pencil className="absolute bottom-4 right-4 text-purple-400 w-8 h-8 animate-float" />
              </div>
              <div>
                <h2 className="text-4xl font-bold mb-9 dark:text-orange-500 text-[#1f1f1f] transition-all duration-300 ease-in-out">
                  Smart <span className="text-orange-500 dark:text-white transition-all duration-300 ease-in-out">Study</span> Guide
                </h2>
                <div className="space-y-6">
                  {/* <div className="flex items-start space-x-4">
                  <div className="bg-purple-600 p-3 rounded-lg">
                    <Heart className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Easily Accessible</h3>
                    <p className="text-gray-600">Learning Will fell Very Comfortable With Color.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="bg-purple-600 p-3 rounded-lg">
                    <Brain className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Fun learning expe</h3>
                    <p className="text-gray-600">Learning Will fell Very Comfortable With Color.</p>
                  </div>
                </div> */}
                  <p className='text-xl dark:text-[#d4d4d4] transition-all duration-300 ease-in-out'><b>Smart Study Guide</b> is an AI-powered learning tool that summarizes PDFs instantly, saving students valuable time. It generates concise, easy-to-understand notes from textbooks, research papers, and study materials. Along with summaries, it provides real-time quiz questions based on the content to enhance active recall. Users can upload any document and get an interactive, question-based summary. This smart approach boosts comprehension, retention, and exam readiness efficiently.</p>
                  <br /><br />
                </div>
                <a href='#'>
                  <button className="bg-[#000000] text-white px-8 py-3 rounded-full w-fit flex items-center group transform transition-all duration-300 ease-in-out hover:-translate-y-1  transform hover:scale-105 hover:bg-[#8494e9] hover:text-[#000000] dark:bg-[#8494e9] dark:text-[#000000] dark:hover:bg-orange-500">
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


        <div className="py-24 bg-[#FDF83] dark:bg-[#1f1f1f] transition-all duration-300 ease-in-out" id="Details_Youtube_Video_Tutorials">
          <div className="container mx-auto px-6 ">
            <div className="grid grid-cols-2 gap-12 items-center">
              {/* Text Details - Move this to the left */}
              <div>
                <h2 className="text-4xl font-bold mb-8 dark:text-[#6c7df0] text-[#1f1f1f] transition-all duration-300 ease-in-out">
                  Youtube <span className="text-orange-500 dark:text-white transition-all duration-300 ease-in-out">Video</span> Tutorials
                </h2>
                <div className="space-y-6">
                  {/* <div className="flex items-start space-x-4">
                  <div className="bg-purple-600 p-3 rounded-lg">
                    <Heart className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Easily Accessible</h3>
                    <p className="text-gray-600">Learning Will feel Very Comfortable With SARA AI</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="bg-purple-600 p-3 rounded-lg">
                    <Brain className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Fun learning expe</h3>
                    <p className="text-gray-600">Learning Will feel Very Comfortable With SARA AI</p>
                  </div>
                </div> */}
                  <p className='text-xl dark:text-[#d4d4d4] transition-all duration-300 ease-in-out'><b>YouTube Interactive Tutorials</b> is a smart platform that curates top-rated courses and playlists from YouTube, organized by subject and difficulty level. It offers interactive learning with embedded quizzes, progress tracking, and suggested practice based on video content. Students can follow structured learning paths using handpicked playlists from popular educators. Real-time questions appear during videos to test understanding instantly. This tool turns passive YouTube watching into active, guided learning.</p>
                </div>
                <br /><br />
                <a href='#'>
                  <button className="bg-[#000000] text-white px-8 py-3 rounded-full w-fit flex items-center group transform transition-all duration-300 ease-in-out hover:-translate-y-1  transform hover:scale-105 hover:bg-orange-500 hover:text-[#000000] dark:hover:bg-[#8494e9] dark:text-black dark:bg-orange-500">
                    Get Started
                    <svg className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </button>
                </a>
              </div>
              <div className="relative">
                <img
                  src="Public/Youtube_Video_Tutorials_Image.jpg"
                  alt="Student studying"
                  className="rounded-lg shadow-xl"
                />
                <Clock className="absolute top-4 left-4 text-blue-400 w-8 h-8 animate-float" />
                <Heart className="absolute top-4 right-4 text-red-400 w-8 h-8 animate-float" />
                <Globe className="absolute bottom-4 left-4 text-green-400 w-8 h-8 animate-float" />
                <Pencil className="absolute bottom-4 right-4 text-purple-400 w-8 h-8 animate-float" />
              </div>
            </div>
          </div>
        </div>



        <div className="py-24 bg-[#FDF8F3] dark:bg-[#1f1f1f] transition-all duration-300 ease-in-out" id='Details_Mental_Health_Support'>
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-2 gap-12 items-center">
              <div className="relative">
                <img
                  src="Public/Mental_Health_Support_Image.jpg"
                  alt="Student studying"
                  className="rounded-lg shadow-xl"
                />
                <Clock className="absolute top-4 left-4 text-blue-400 w-8 h-8 animate-float" />
                <Heart className="absolute top-4 right-4 text-red-400 w-8 h-8 animate-float" />
                <Globe className="absolute bottom-4 left-4 text-green-400 w-8 h-8 animate-float" />
                <Pencil className="absolute bottom-4 right-4 text-purple-400 w-8 h-8 animate-float" />
              </div>
              <div>
                <h2 className="text-4xl font-bold mb-8 text:black dark:text-orange-500 transition-all duration-300 ease-in-out">
                  Mental <span className="text-orange-500 dark:text-white transition-all duration-300 ease-in-out">Health</span> Support
                </h2>
                <div className="space-y-6">
                  {/* <div className="flex items-start space-x-4">
                  <div className="bg-purple-600 p-3 rounded-lg">
                    <Heart className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Easily Accessible</h3>
                    <p className="text-gray-600">Learning Will fell Very Comfortable With Color.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="bg-purple-600 p-3 rounded-lg">
                    <Brain className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Fun learning expe</h3>
                    <p className="text-gray-600">Learning Will fell Very Comfortable With Color.</p>
                  </div>
                </div> */}
                  <p className='text-xl dark:text-[#d4d4d4] transition-all duration-300 ease-in-out'><b>Mental Health Support</b> Hub is a digital companion that offers daily motivation, personalized suggestions, and emotional support. It provides mood tracking, mindfulness exercises, and uplifting quotes to boost positivity. Users can chat with AI for stress relief or access expert-backed mental wellness tips. The platform encourages healthy habits and self-care routines tailored to individual needs. It's a safe space to stay inspired, balanced, and mentally strong every day.</p>
                  <br /><br />
                </div>
                <a href='#'>
                  <button className="bg-[#000000] text-white px-8 py-3 rounded-full w-fit flex items-center group transform transition-all duration-300 ease-in-out hover:-translate-y-1  transform hover:scale-105 hover:bg-[#8494e9] hover:text-[#000000] dark:bg-[#8494e9] dark:text-[#000000] dark:hover:bg-orange-500">
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



        <div className="py-24 bg-white dark:bg-[#1f1f1f] transition-all duration-300 ease-in-out">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4 dark:text-[#d4d4d4] transition-all duration-300 ease-in-out">What Student's Say</h2>
              <p className="text-gray-600 dark:text-[#d4d4d4] transition-all duration-300 ease-in-out">Lorem Ipsum is simply dummy text of the printing.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="bg-white dark:bg-[#262626] rounded-xl shadow-lg p-6 hover:shadow-2xl transition-shadow">
                  <p className="text-gray-600 mb-6 italic dark:text-[#d4d4d4]">"{testimonial.text}"</p>
                  <div className="flex items-center space-x-4">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div>
                      <h4 className="font-semibold dark:text-white">{testimonial.name}</h4>
                      <p className="text-gray-500 text-sm dark:text-[#d4d4d4]">{testimonial.role}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>



        <Footer />
        <BackToTopButton />
        {/* <TeamPortfolio /> */}
      </div>
      



  );
}

export default HomePage;