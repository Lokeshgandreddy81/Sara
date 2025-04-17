import React, { useState } from 'react';
import { auth } from '../../../firebase'; // adjust path based on your folder structure
import { getAuth, fetchSignInMethodsForEmail } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { Mail } from 'lucide-react';
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

  const gmailRegex = /^[a-zA-Z0-9._%+-]+@mbu\.asia$/;
  if (!gmailRegex.test(email)) {
    setEmailError('Only MBU Mail addresses are allowed.');
    setIsSubmitting(false);
    return;
  }

  try {
    const methods = await fetchSignInMethodsForEmail(auth, email);

    if (methods.length > 0) {
      // Email already exists
      setEmailError('Email already in use. Please login.');
      setIsSubmitting(false);
      return;
    }

    // Email doesn't exist → proceed to next step
    navigate('/UserSchema2'); // Or your route for setting password or profile
  } catch (error: any) {
    console.error(error);
    setEmailError(error.message || 'Something went wrong. Please try again.');
  } finally {
    setIsSubmitting(false);
  }
};


  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#1e4d8c]">
      <div className="w-full max-w-md p-6 bg-white rounded-3xl shadow-md">
        <h2 className="text-2xl font-semibold text-gray-900 mb-4 text-center">
          Create an account
        </h2>
        <p className="text-gray-600 mb-6 text-center">
          Create an account and verify your details to start learning
        </p>
        <div className="flex justify-center mb-8">
          <div className="bg-blue-100 p-4 rounded-xl">
            <Mail className="w-12 h-12 text-blue-500" />
          </div>
        </div>
        <form onSubmit={handleSignUp} className="space-y-4">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email Address
            </label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={handleEmailChange}
              placeholder="Enter your email address"
              className={`mt-1 w-full p-2 rounded border focus:outline-none ${emailError
                ? 'border-red-500 focus:ring-red-500 focus:border-red-500'
                : 'border-gray-300 focus:ring-blue-500 focus:border-blue-500'
                }`}
              disabled={isSubmitting}
            />
            {emailError && (
              <p className="text-red-500 text-sm mt-1">{emailError}</p>
            )}
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Signing up...' : 'Sign up'}
          </button>
        </form>
        <div className="mt-4 text-center">
          <p className="text-gray-600">
            Already have an account?{' '}
            <a href="/login" className="text-blue-500 hover:underline">
              Login
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Signup;
