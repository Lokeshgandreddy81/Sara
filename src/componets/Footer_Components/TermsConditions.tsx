import React from "react";
import { Link } from "react-router-dom";
import Footer from "../Footer_FIn";

const TermsConditions: React.FC = () => {
  return (
    <><div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 dark:bg-[#1f1f1f] transition-all duration-300 ease-in-out">
        <div className="p-6 max-w-5xl mx-auto text-gray-800 dark:text-[#d6d6d6] bg-white dark:bg-[#1f1f1f] rounded-lg shadow-md transition-all duration-300 ease-in-out">
      <h1 className="text-3xl font-bold mb-4">Terms and Conditions</h1>

      <p className="mb-4">
        Welcome to <strong>SARA AI</strong>. By using our services, including YouTube video interaction, Smart Study Guide, and Mental Health Support, you agree to the following terms and conditions. Please read them carefully.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">1. Use of Services</h2>
      <p className="mb-4">
        Our platform is intended for educational and mental wellness purposes. You agree not to misuse any part of the platform for unauthorized or harmful activities.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">2. User Accounts</h2>
      <ul className="list-disc pl-6 mb-4">
        <li>You are responsible for maintaining the confidentiality of your login credentials.</li>
        <li>Accounts must not be shared or transferred without permission.</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-6 mb-2">3. Content and Intellectual Property</h2>
      <p className="mb-4">
        All content, including study materials, video interactions, and AI responses, are either owned by SARA AI or properly licensed. You may not copy, reproduce, or redistribute any content without explicit permission.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">4. Third-Party Services</h2>
      <p className="mb-4">
        We may use third-party tools such as YouTube APIs or AI integrations. Their terms and privacy policies apply in conjunction with ours.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">5. Limitations of Liability</h2>
      <p className="mb-4">
        SARA AI is an educational and supportive platform, not a substitute for professional mental health services. We are not liable for any decisions or outcomes resulting from the use of our tools and advice.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">6. Account Suspension</h2>
      <p className="mb-4">
        We reserve the right to suspend or terminate accounts that violate our terms, misuse content, or pose harm to the community.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">7. Updates to Terms</h2>
      <p className="mb-4">
        We may update these terms from time to time. Continued use of the platform after updates implies acceptance of the revised terms.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">8. Contact Information</h2>
      <p className="mb-4">
        For any queries, reach out to us at <a href="mailto:sarachatbot21@gmail.com" className="text-blue-600">sarachatbot21@gmail.com</a>.
      </p>

      <p className="text-sm text-gray-500 mt-8">
        Last updated: April 15, 2025
      </p>
    </div>
    </div><Footer /></>
  );
};

export default TermsConditions;