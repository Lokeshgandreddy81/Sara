import React, { useState } from "react";
import NavBar from "./NavBar";
import Footer from "./Footer_FIn";

const faqs = [
  {
    question: "1. What is SARA AI?",
    answer:
      "SARA AI is an educational platform that offers AI-powered tools like YouTube interaction for learning, smart study guides from PDFs, mental health support, and personalized career content for students.",
  },
  {
    question: "2. How does the YouTube interaction feature work?",
    answer:
      "Our YouTube interaction system allows students to watch topic-related videos while displaying a  related video suggestions on the same page.",
  },
  {
    question: "3. What is the Smart Study Guide feature?",
    answer:
      "With Smart Study Guide, you can View PDFs or Subject Modules, and SARA AI summarizes the content, extracts key points, and provides a study Guidance.",
  },
  {
    question: "4. How does the mental health support chatbot work?",
    answer:
      "The chatbot offers real-time conversations, wellness tips, a toolkit, and answers user questions with motivational advice, stress relief tips, and mindfulness suggestions.",
  },
  {
    question: "5. Is SARA AI free to use?",
    answer:
      "Yes, most core features of SARA AI are free for students. Some premium services may be introduced in the future for advanced guidance or exclusive tools.",
  },
  {
    question: "6. Can I get personalized study recommendations?",
    answer:
      "Not Now... 😢 But Absolutely in Upcoming Updates! Based on your interests, uploads, and interactions, SARA AI provides personalized content suggestions, including videos, guides, and tips.",
  },
  {
    question: "7. How do I report a problem with a feature?",
    answer:
      "You can use the 'Report an Issue' form on our website's footer to submit details like the problem description, screenshots, and your contact info for follow-up.",
  },
  {
    question: "8. Is my personal information safe with SARA AI?",
    answer:
      "Yes, your data is protected. We follow strict privacy policies and only collect essential details to improve your learning experience. We never share your data without consent.",
  },
  {
    question: "9. Can I use SARA AI on mobile devices?",
    answer:
    "No For Now..... The Sara AI is not Fully Responsive But it works Well With Wide Range of Devices In Desktop Mode Soon... It will be Upgraded..😊"
    //   "Yes! SARA AI is fully responsive and works on phones, tablets, and desktops, so you can study or get help anywhere, anytime.",
  },
  {
    question: "10. How do I get in touch with the SARA AI team?",
    answer:
      "You can reach us through our Contact or Report sections or email us directly at saraaiweb21@gmail.com We’d love to hear from you!",
  },
];

const FAQs = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (<div>
    <NavBar />
    <section className="bg-gray-200 py-12 px-6 md:px-20 dark:bg-[#1f1f1f]">
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-8 dark:text-orange-600">❓ Frequently Asked Questions</h2>
      <div className="max-w-4xl mx-auto space-y-4">
        {faqs.map((faq, index) => (
          <div key={index} className="border rounded-xl shadow-sm overflow-hidden">
            <button
              className="w-full text-left p-4 bg-gray-50 hover:bg-gray-100 font-semibold text-gray-700 flex justify-between items-center dark:text-[#d6d6d6] dark:bg-[#262626]"
              onClick={() => toggleFAQ(index)}
            >
              {faq.question}
              <span className="text-xl">{activeIndex === index ? "−" : "+"}</span>
            </button>
            {activeIndex === index && (
              <div className="p-4 text-gray-600 dark:text-gray-200 bg-white transition-all duration-300 dark:bg-[#2f2f2f]">
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
    <Footer />
    </div>
  );
};

export default FAQs;