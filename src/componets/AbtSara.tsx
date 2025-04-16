import React from "react";

const AbtSara: React.FC = () => {
  return (
    <section className="bg-white py-12 px-6 md:px-16 lg:px-24 dark:bg-[#1f1f1f] transition-all duration-300 ease-in-out" id="about">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-800 text-center mb-6 dark:text-orange-500 transition-all duration-300 ease-in-out">
          About Us
        </h2>
        <p className="text-gray-700 text-lg text-center max-w-3xl mx-auto mb-10 dark:text-[#d4d4d4] transition-all duration-300 ease-in-out">
          <strong>Welcome to SARA AI — Your Smart Academic and Wellness Companion</strong><br />
          At <strong>SARA AI</strong>, we believe education and mental wellness go hand in hand.
          We’ve built an AI-powered platform designed to support students, educators, and learners
          with tools that make learning more engaging, interactive, and personalized.
        </p>
        <br />  
        
          <div>
            <h3 className="text-2xl font-semibold text-gray-800 mb-3 dark:text-white transition-all duration-300 ease-in out">🎯 Our Mission</h3>
            <p className="text-gray-600 dark:text-[#d4d4d4] transition-all duration-300 ease-in-out">
              To revolutionize the student learning experience by combining intelligent
              educational assistance with real-time mental health support, enabling students
              to thrive both academically and emotionally.
            </p>
          </div>
            <br /><br></br>
          <div>
            <h3 className="text-2xl font-semibold text-gray-800 mb-3 dark:text-white transition-all duration-300 ease-in out">💡 What We Do</h3>
            <ul className="list-disc list-inside text-gray-600 space-y-2 dark:text-[#d4d4d4] transition-all duration-300 ease-in-out">
              <li><strong>YouTube Interaction:</strong> Watch and learn from curated educational videos, explained and categorized for easy understanding.</li>
              <li><strong>Smart Study Guide:</strong> Upload PDFs or notes and receive summaries, Q&A, and concept explanations using AI.</li>
              <li><strong>Mental Health Chat Support:</strong> Chat privately with our AI for wellness support, motivation, and mindfulness tips.</li>
              <li><strong>Personalized Dashboard:</strong> Track progress, get recommendations, and organize your study routine effectively.</li>
            </ul>
          </div>
        
        <br></br><br />
        <div>
          <h3 className="text-2xl font-semibold text-gray-800 mb-3 dark:text-white transition-all duration-300 ease-in out">🔐 Our Values</h3>
          <ul className="list-disc list-inside text-gray-600 space-y-2 dark:text-[#d4d4d4] transition-all duration-300 ease-in-out">
            <li><strong>Innovation:</strong> We’re redefining how students interact with learning and emotional support tools.</li>
            <li><strong>Privacy:</strong> User trust is our top priority — all conversations and data are secure and confidential.</li>
            <li><strong>Empathy:</strong> We provide a safe, helpful, and motivating environment that understands student challenges.</li>
          </ul>
        </div>
      </div>
      <br></br>
    </section>
  );
};

export default AbtSara;