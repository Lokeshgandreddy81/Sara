import React from 'react';
import { Book, Lightbulb, Atom, Ruler, FlaskRound as Triangle, Clock, Heart, Globe, Pencil, Phone, Mail, MapPin } from 'lucide-react';
import BackToTopButton from '../componets/BackToTopButton';
import { useEffect, useState } from 'react';
import'../index.css';
import Footer from '../componets/Footer_FIn';
import Features from '../componets/Features';
import HowToUseV from '../componets/HowToUseV';

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
        <HowToUseV />

        
                <Features />
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