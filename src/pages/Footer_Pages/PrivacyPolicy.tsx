import React from "react";
import Footer from "../../componets/Footer_FIn";
import NavBar from "../../componets/NavBar";

const PrivacyPolicy: React.FC = () => {
  return (
    <>
    <NavBar />
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 dark:bg-[#1f1f1f] transition-all duration-300 ease-in-out">
    <div className="p-6 max-w-5xl mx-auto text-gray-800 dark:text-[#d6d6d6] bg-white dark:bg-[#1f1f1f] transition-all duration-300 ease-in-out">
      <h1 className="text-3xl font-bold mb-4">Privacy Policy</h1>

      <p className="mb-4">
        At <strong>SARA AI</strong>, your privacy is important to us. This Privacy Policy outlines how we collect, use, and protect your information across our platform, which includes YouTube video interactions, Smart Study Guide, Mental Health Support, and other educational features.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">1. Information We Collect</h2>
      <ul className="list-disc pl-6 mb-4">
        <li>Personal Information: Name, email, and profile data for account creation.</li>
        <li>Chat Logs: Conversations with AI chatbots for educational and wellness support.</li>
        <li>Media Access: YouTube video views and preferences.</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-6 mb-2">2. How We Use Your Information</h2>
      <ul className="list-disc pl-6 mb-4">
        <li>To provide personalized educational content and video suggestions.</li>
        <li>To assist with mental health support and provide wellness tips.</li>
        <li>To improve user experience through analytics and feedback.</li>
        <li>To send important updates and study reminders.</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-6 mb-2">3. Data Protection</h2>
      <p className="mb-4">
        We use encryption, secure servers, and anonymization techniques to protect your data. Access is limited to authorized personnel only.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">4. Third-Party Services</h2>
      <p className="mb-4">
        We may integrate third-party services like YouTube and AI APIs. These services have their own privacy policies. We do not share your personal data with them beyond what is necessary for functionality.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">5. Your Rights</h2>
      <ul className="list-disc pl-6 mb-4">
        <li>Access, modify, or delete your data at any time via your profile settings.</li>
        <li>Opt-out of data collection for analytics or communication.</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-6 mb-2">6. Contact Us</h2>
      <p className="mb-4">
        If you have questions or concerns about our Privacy Policy, feel free to reach out at <a href="mailto:sarachatbot21@gmail.com" className="text-blue-600">sarachatbot21@gmail.com</a>.
      </p>

      <p className="text-sm text-gray-500 mt-8">
        Last updated: April 15, 2025
      </p>
    </div>
    
    </div>
    <Footer /></>
  );
};

export default PrivacyPolicy;