import React, { useState } from "react";
import {
  sendPasswordResetEmail,
  fetchSignInMethodsForEmail,
  getAuth,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../../../firebase";
import { Link } from "react-router-dom";
import { ChevronLeft } from "lucide-react";
import ThemeToggle from "../../componets/ThemeToggle";
import ThemeImageLogin from "../../componets/ThemeImage_login";

const ForgotPassword: React.FC = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState<{ text: string; color: string } | null>(null);

  const handleReset = async () => {
    setMessage(null);
  
    if (!email) {
      setMessage({ text: "Please enter your email.", color: "red" });
      return;
    }
  
    const normalizedEmail = email.trim().toLowerCase();
  
    // Step 1: Check for @mbu.asia domain
    const mbuRegex = /^[a-zA-Z0-9._%+-]+@mbu\.asia$/;
    if (!mbuRegex.test(normalizedEmail)) {
      setMessage({ text: "Only @mbu.asia email addresses are allowed.", color: "red" });
      return;
    }
  
    try {
      // Step 2: Check if email exists
      const methods = await fetchSignInMethodsForEmail(auth, normalizedEmail);
  
  
      // Step 3: Send password reset email
      await sendPasswordResetEmail(auth, normalizedEmail);
      setMessage({ text: "A password reset email will be sent if the verified user exists..!", color: "blue" });
  
    } catch (error: any) {
      console.error("Error sending reset email:", error);
      setMessage({
        text: error.message || "Something went wrong.",
        color: "red"
      });
    }
  };
  

  return (
    <>
      <nav className='bg-[#1e3a8a] dark:bg-[#1f1f1f] p-4 flex justify-between items-center'>
        <Link to="/" className="flex items-center space-x-2">
          <ThemeImageLogin />
          <span className="text-white text-xl font-bold dark:text-orange-600">Sara AI</span>
        </Link>
        <ThemeToggle />
      </nav>

      <div className="flex flex-col items-center min-h-screen bg-[#1e3a8a] dark:bg-[#1f1f1f]">
        <div className="w-full max-w-md p-6 bg-white rounded-3xl my-20 shadow-md dark:bg-[#262626]">
          <Link to='/Signin'>
            <ChevronLeft className="h-8 w-8 text-blue-500 dark:text-orange-500" />
          </Link>
          <h2 className="text-center text-lg font-semibold text-blue-500 dark:text-orange-500">
            Forgot Password
          </h2>
          <br />
          <input
            type="email"
            placeholder="Enter your college email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-[#4F46E5] focus:border-transparent dark:focus:ring-orange-600 dark:bg-[#1f1f1f] dark:text-white"
          />
          <br />
          <button
            onClick={handleReset}
            className="w-full py-2 my-5 bg-blue-500 dark:bg-orange-500 text-white dark:text-[#1f1f1f] rounded-md font-semibold"
          >
            Send Reset Link
          </button>
          {message && (
            <p className={`text-center text-${message.color}-500 font-medium`}>
              {message.text}
            </p>
          )}
        </div>
      </div>
    </>
  );
};

export default ForgotPassword;
  