import React, { useState } from 'react';
import { auth } from '../../../firebase'; // adjust path based on your folder structure
import { getAuth, fetchSignInMethodsForEmail } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { Mail } from 'lucide-react';
import ThemeToggle from '../../componets/ThemeToggle'; 
import { Link } from 'react-router-dom';
import { Monitor } from 'lucide-react';
// Removed the import as the module '@/lib/utils' cannot be resolved

function Signup() {
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const navigate = useNavigate();

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
    setEmailError(null);
  };

  const handleSignUp = async (e: React.FormEvent) => {
    e.preventDefault();
    setEmailError(null);
    setIsSubmitting(true);
    if (!email) {
      setEmailError('Email is required.');
      setIsSubmitting(false);
      return;
    }
  
    // ✅ MBU email check
    const mbuRegex = /^[a-zA-Z0-9._%+-]+@mbu\.asia$/;
    if (!mbuRegex.test(email.trim().toLowerCase())) {
      setEmailError('Only @mbu.asia email addresses are allowed.');
      setIsSubmitting(false);
      return;
    }
  
    try {
      const normalizedEmail = email.trim().toLowerCase();
      const signInMethods = await fetchSignInMethodsForEmail(auth, normalizedEmail);
  
      if (signInMethods.length > 0) {
        // Email already exists in Firebase Auth
        setEmailError('User already exists. Please Sign in instead.');
      } else {
        // Email is new, proceed to next step
        navigate('/UserSchema2', { state: { email: normalizedEmail } });
      }
    } catch (error: any) {
      console.error('Error checking email:', error);
      setEmailError('Something went wrong. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };
  
  


  return (
    <>
    <nav className='bg-[#1e3a8a] dark:bg-[#1f1f1f] p-4 flex justify-between items-center transition-all duration-300 ease-in-out'>
      <Link to="/" className="flex items-center space-x-2">
        <Monitor className="h-8 w-8 text-white dark:text-orange-600" />
        <span className="text-white dark:text-black text-xl font-bold dark:text-orange-600">Sara AI</span>
      </Link>

      <ThemeToggle />
    </nav>



    <div className="flex flex-col items-center justify-center min-h-screen bg-[#1e3a8a] dark:bg-[#1f1f1f] transition-all duration-300 ease-in-out">
      <div className="w-full max-w-md p-6 bg-white rounded-3xl shadow-md dark:bg-[#262626] transition-all duration-300 ease-in-out">
        <h2 className="text-2xl font-semibold text-gray-900 mb-4 text-center dark:text-orange-500 transition-all duration-300 ease-in-out">
          Create an account
        </h2>
        <p className="text-gray-600 mb-6 text-center dark:text-gray-300 transition-all duration-300 ease-in-out">
          Create an account and verify your details to start learning
        </p>
        <div className="flex justify-center mb-8">
          <div className="bg-blue-100 p-4 rounded-xl dark:bg-orange-800 transition-all duration-300 ease-in-out">
            <Mail className="w-12 h-12 text-blue-500 dark:text-orange-200" />
          </div>
        </div>
        <form onSubmit={handleSignUp} className="space-y-4">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-200 transition-all duration-300 ease-in-out">
              Enter Your College Mail Address
            </label>
            <br />
            <input
              id="email"
              type="email"
              value={email}
              onChange={handleEmailChange}
              placeholder="Ex : 22102A040748@mbu.asia"
              className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-[#4F46E5] focus:border-transparent dark:focus:ring-orange-600 dark:bg-[#1f1f1f] dark:text-white transition-all duration-300 ease-in-out ${emailError
                ? 'border-red-500 focus:ring-red-500 focus:border-red-500'
                : 'border-gray-300 focus:ring-blue-500 focus:border-blue-500'
                }`}
              disabled={isSubmitting}
            />
            {emailError && (
              <p className="text-red-500 text-sm mt-1">{emailError}</p>
            )}
          </div>
          <br />
          <button
            type="submit"
            className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded focus:outline-none focus:shadow-outline dark:bg-orange-600 hover:dark:bg-orange-700 transition-all duration-300 ease-in-out"
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Signing up...' : 'Sign up'}
          </button>
        </form>
        
        <div className="mt-4 text-center">
          <p className="text-gray-800 dark:text-gray-200 transition-all duration-300 ease-in-out">
            Already have an account?{' '}
            <a href="/Signin" className="text-blue-500 hover:underline dark:text-orange-500 transition-all duration-300 ease-in-out">
              Sign in
            </a>
          </p>
        </div>
      </div>
    </div>
    </>
  );
}

export default Signup;
