import React from 'react';
import { BookOpen, Video, Brain, HeartPulse, ShieldCheck, Clock } from 'lucide-react';
import Footer from '../Footer_FIn';

const services = [
  {
    icon: <Video className="h-8 w-8 text-blue-600" />,
    title: "YouTube Interaction",
    description: "Explore topic-related YouTube videos directly within our platform. Learn visually and stay focused with curated educational content.",
  },
  {
    icon: <BookOpen className="h-8 w-8 text-green-600" />,
    title: "Smart Study Guide",
    description: "Upload notes, PDFs, and textbooks — SARA AI summarizes, explains, and answers questions for smart, interactive learning.",
  },
  {
    icon: <HeartPulse className="h-8 w-8 text-pink-600" />,
    title: "Mental Health Chat Support",
    description: "Our AI chatbot offers a safe space for emotional support, wellness tips, and stress management strategies.",
  },
  {
    icon: <Brain className="h-8 w-8 text-yellow-500" />,
    title: "Personalized Learning",
    description: "Custom study plans and tailored content help you stay productive and meet your academic goals.",
  },
  {
    icon: <Clock className="h-8 w-8 text-purple-600" />,
    title: "24/7 Availability",
    description: "SARA AI is always online — ready to assist any time of day or night with your learning and wellness needs.",
  },
  {
    icon: <ShieldCheck className="h-8 w-8 text-red-500" />,
    title: "Privacy & Confidentiality",
    description: "We prioritize your privacy. All chats and personal data are fully protected and confidential.",
  },
];

const OurServices :React.FC = () => {
  return (
    <><div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 dark:bg-[#1f1f1f] transition-all duration-300 ease-in-out">
    <section className="bg-gray-100 py-12 px-6 lg:px-24 bg-gray-100 dark:bg-[#1f1f1f] transition-all duration-300 ease-in-ou" id="services">
      <div className="text-center mb-10 bg-gray-100 dark:bg-[#1f1f1f] transition-all duration-300 ease-in-ou">
        <h2 className="text-3xl font-bold text-gray-800 dark:text-white">Our Services</h2>
        <p className="text-gray-600 dark:text-gray-300 mt-2">AI-powered support for smarter learning and student well-being</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 bg-gray-100 dark:bg-[#1f1f1f] transition-all duration-300 ease-in-ou">
        {services.map((service, index) => (
          <div key={index} className="bg-[#f0f0f0] dark:bg-[#262626] rounded-xl shadow-lg p-6 hover:shadow-2xl transition-shadow duration-300 ease-in-out">
            <div className="mb-4">{service.icon}</div>
            <h3 className="text-gray-900 dark:text-white mt-4">{service.title}</h3>
            <p className="text-gray-600 dark:text-gray-400 mt-2">{service.description}</p>
          </div>
        ))}
      </div>
    </section>
    </div>
    <Footer />
    </>
  );
};

export default OurServices;