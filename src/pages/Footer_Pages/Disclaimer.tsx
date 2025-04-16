import React from "react";
import Footer from "../../componets/Footer_FIn";
import NavBar from "../../componets/NavBar";

const Disclaimer: React.FC = () => {
  return (
    <>
      <NavBar />
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 dark:bg-[#1f1f1f] transition-all duration-300 ease-in-out">
        <div className="p-6 max-w-5xl mx-auto text-gray-800 dark:text-[#d6d6d6] bg-white dark:bg-[#1f1f1f] rounded-lg shadow-md transition-all duration-300 ease-in-out">
          <div><h1 className="text-3xl font-bold mb-4 text:orange-500">Disclaimer</h1></div>

          <p className="mb-4">
            The information provided by <strong>SARA AI</strong> on this platform is for general educational and mental wellness purposes only. While we strive to offer accurate, updated, and supportive content, we make no guarantees about its completeness, reliability, or effectiveness.
          </p>

          <h2 className="text-2xl font-semibold mt-6 mb-2">1. Not Professional Advice</h2>
          <p className="mb-4">
            The mental health tips and AI chatbot conversations are not a replacement for professional counseling or medical treatment. Always seek the advice of a qualified healthcare provider for diagnosis or treatment of any condition.
          </p>

          <h2 className="text-2xl font-semibold mt-6 mb-2">2. Educational Use</h2>
          <p className="mb-4">
            The learning materials, YouTube video interactions, and smart study guides are meant for academic support only. Users should verify important academic information through their institution or official sources.
          </p>

          <h2 className="text-2xl font-semibold mt-6 mb-2">3. External Links</h2>
          <p className="mb-4">
            This site may contain links to third-party websites (e.g., YouTube). We are not responsible for the content, privacy, or practices of any external sites.
          </p>

          <h2 className="text-2xl font-semibold mt-6 mb-2">4. Limitation of Liability</h2>
          <p className="mb-4">
            SARA AI is not liable for any loss or damage arising from the use of our services. Use the platform at your own discretion and risk.
          </p>

          <h2 className="text-2xl font-semibold mt-6 mb-2">5. Changes to Disclaimer</h2>
          <p className="mb-4">
            We reserve the right to modify this Disclaimer at any time. Changes will be posted on this page with the updated date.
          </p>

          <p className="text-sm text-gray-500 mt-8">
            Last updated: April 15, 2025
          </p>
        </div>
      </div>
      <Footer /></>
  );
};

export default Disclaimer;