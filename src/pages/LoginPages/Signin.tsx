import React, { useState } from 'react';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { Lock, Eye, EyeOff, Monitor, ChevronLeft, ArrowLeft } from 'lucide-react';
import ThemeToggle from '../../componets/ThemeToggle';
import { Link } from 'react-router-dom';
import ThemeImageLogin from '../../componets/ThemeImage_login';
import FullPageLoader from '../../componets/FullpageLoader';

const Signin: React.FC = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState<string | null>(null);
  const [password, setPassword] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [loginError, setLoginError] = useState('');
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  


  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoginError('');
    setIsSubmitting(true);
    setLoading(true);

    const auth = getAuth();
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      if (!user.emailVerified) {
        setLoginError('Please verify your email before signing in.');
        await auth.signOut();
        setIsSubmitting(false);
        setLoading(false);
        return;
      }
      const mbuRegex = /^[a-zA-Z0-9._%+-]+@mbu\.asia$/;
      if (!mbuRegex.test(email.trim().toLowerCase())) {
        setEmailError('Only @mbu.asia email addresses are allowed.');
        setIsSubmitting(false);
        setLoading(false);
        return;
      }
      

      // ✅ Successful login
      navigate('/');
    } catch (error: any) {
      console.error(error);
      const errorCode = error.code;

      const errorMessages: Record<string, string> = {
        'auth/invalid-credential': 'Invalid User Credentials. Please check again.',
        'auth/user-not-found': 'No user found with this email.',
        'auth/wrong-password': 'Incorrect password.',
        'auth/too-many-requests': 'Too many login attempts. Please try again later.',
        'auth/network-request-failed': 'Network error. Please check your connection.',
      };

      setLoginError(errorMessages[errorCode] || 'Sign in failed. Please try again.');
    } finally {
      setIsSubmitting(false);
      setLoading(false);
    }
  };

  return (<>
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


    <div className="flex flex-col items-center justify-center min-h-screen bg-[#1e3a8a] dark:bg-[#1f1f1f]  transition-all duration-300 ease-in-out my:">
      <div className="w-full max-w-md p-6 bg-white rounded-3xl shadow-md dark:bg-[#262626] transition-all duration-300 ease-in-out">
        <div className="flex items-center gap-2 mb-6 dark:text-orange-500 transition-all duration-300 ease-in-out">
          <Link to="/" >
            <div className="flex items:center gap-2">
              <ArrowLeft className="w-8 h-8 text-[#4F46E5] dark:text-orange-500 transition-all duration-300 ease-in-out" />
              {/* <span className="text-[#4F46E5] text-xl font-bold dark:text-orange-500 transition-all duration-300 ease-in-out">Back To Sign up</span> */}
            </div>
          </Link>
        </div>
        <h2 className="text-2xl font-semibold text-gray-900 mb-4 text-center dark:text-orange-500 transition-all duration-300 ease-in-out">
          Welcome back
        </h2>
        <p className="text-gray-800 mb-6 text-center dark:text-gray-200 transition-all duration-300 ease-in-out">
          Please Sign in to your account
        </p>
        <div className="flex justify-center mb-8">
          <div className="bg-blue-200 p-4 rounded-xl dark:bg-orange-800 transition-all duration-300 ease-in-out">
            <Lock className="w-12 h-12 text-blue-500 dark:text-orange-200 transition-all duration-300 ease-in-out" />
          </div>
        </div>
        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-200 transition-all duration-300 ease-in-out">
              College Mail Address
            </label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-[#4F46E5] focus:border-transparent dark:focus:ring-orange-600 dark:bg-[#1f1f1f] dark:text-white transition-all duration-300 ease-in-out ${loginError
                ? 'border-red-500 focus:ring-red-500 focus:border-red-500'
                : 'border-gray-300 focus:ring-blue-500 focus:border-blue-500'
                }`}
              disabled={isSubmitting}

              placeholder="Enter your College Mail Address"
              required
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-1 gap-4">
            <div className="relative">
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700 dark:text-gray-200 transition-all duration-300 ease-in-out mb-1"
              >
                Password
              </label>

              <div className="relative">
                <input
                  id="password"
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className={`w-full px-4 py-2 pr-10 border rounded-lg focus:ring-2 focus:ring-[#4F46E5] focus:border-transparent dark:focus:ring-orange-600 dark:bg-[#1f1f1f] dark:text-white transition-all duration-300 ease-in-out ${loginError
                    ? 'border-red-500 focus:ring-red-500 focus:border-red-500'
                    : 'border-gray-300 focus:ring-blue-500 focus:border-blue-500'
                    }`}
                  disabled={isSubmitting}
                  placeholder="Enter your password"
                  required
                />
                <div className='text-blue-500 dark:text-orange-500 hover:underline my-1'>
                  <Link to='/ForgotPassword'>
                    Forgot Password?</Link>
                </div>

                <button
                  type="button"
                  className="absolute top-[12px] right-3 flex items-center text-gray-500 dark:text-gray-200"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <EyeOff size={20} className='text-gray-700 dark:text-gray-100'/> : <Eye size={20} className='text-gray-700 dark:text-gray-100' />}
                </button>
              </div>
            </div>
          </div>


          {loginError && (
            <p className="text-red-500 text-sm">{loginError}</p>
          )}

          <button
            type="submit"
            className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded focus:outline-none focus:shadow-outline dark:bg-orange-600 hover:dark:bg-orange-700 transition-all duration-300 ease-in-out"
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Signing in...' : 'Sign in'}
          </button>
        </form>
        <div className="mt-4 text-center">
          <p className="text-gray-600 dark:text-gray-200 transition-all duration-300 ease-in-out">
            Don’t have an account?{' '}
            <Link to="/signup" className="text-blue-500 hover:underline dark:text-orange-500 transition-all duration-300 ease-in-out">
              Sign up here
            </Link>
          </p>
          {loading && <FullPageLoader />}

        </div>
      </div>
    </div>
  </>
  );
}

export default Signin;
