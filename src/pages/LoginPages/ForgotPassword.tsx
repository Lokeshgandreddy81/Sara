// src/components/ForgotPassword.tsx
import React, { useState } from "react";
import { sendPasswordResetEmail } from "firebase/auth";
import { auth } from "../../../firebase";
import { Link } from "react-router-dom";
import { Monitor, ChevronLeft } from "lucide-react";
import ThemeToggle from "../../componets/ThemeToggle";
import ThemeImageLogin from "../../componets/ThemeImage_login";


const ForgotPassword: React.FC = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState<{ text: string; color: string } | null>(null);

  const handleReset = async () => {
    if (!email) {
      setMessage({ text: "Please enter your email.", color: "red" });
      return;
    }

    try {
      await sendPasswordResetEmail(auth, email);
      setMessage({ text: "Password reset email sent!", color: "green" });
    } catch (error: any) {
      setMessage({ text: error.message, color: "red" });
    }
  };

  return (
    <>
      <nav className='bg-[#1e3a8a] dark:bg-[#1f1f1f] p-4 flex justify-between items-center transition-all duration-300 ease-in-out'>
        <Link to="/" className="flex items-center space-x-2">
          <ThemeImageLogin />
          {/* <Monitor className="h-8 w-8 text-white dark:text-orange-600" /> */}
          {/* <img
          src="/sara-dark-logo.png"
          className="h-10 w-10"></img> */}
          <span className="text-white text-xl font-bold  dark:text-orange-600">Sara AI</span>
        </Link>

        <ThemeToggle />
      </nav>

      <div className="flex flex-col items-center  min-h-screen bg-[#1e3a8a] dark:bg-[#1f1f1f] transition-all duration-300 ease-in-out">
        <div className="w-full max-w-md p-6 bg-white rounded-3xl my-20 shadow-md dark:bg-[#262626] transition-all duration-300 ease-in-out">
          <Link to='/Signin'>
            <ChevronLeft className="h-8 w-8 text-blue-500 dark:text-orange-500" />
          </Link>
          <h2 className="flex items-center justify-center mx-15 dark:text-orange-500 text-blue-500  ">Forgot Password</h2>
          <br />
          <input
            type="email"
            placeholder="Enter your college email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-[#4F46E5] focus:border-transparent dark:focus:ring-orange-600 dark:bg-[#1f1f1f] dark:text-white transition-all duration-300 ease-in-out"
          />
          <br />
          <button onClick={handleReset}
            className="w-full py-2 my-5 bg-blue-500 dark:bg-orange-500 text-white dark:text-[#1f1f1f] rounded-md font-semibold transition-all duration-200 ease-in-out"
          >
            Send Reset Link
          </button>
          {message && <p style={{ color: message.color }}>{message.text}</p>}
        </div>
      </div>
    </>
  );
};

export default ForgotPassword;
