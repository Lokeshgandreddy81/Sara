import React, { useState } from 'react';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { Lock } from 'lucide-react';

const Login :React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [loginError, setLoginError] = useState('');
  const navigate = useNavigate();
  

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoginError('');
    setIsSubmitting(true);

    const auth = getAuth();
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      if (!user.emailVerified) {
        setLoginError('Please verify your email before logging in.');
        setIsSubmitting(false);
        return;
      }

      // ✅ Successful login
      navigate('/dashboard'); // or wherever you want to redirect
    } catch (error: any) {
      console.error(error);
      setLoginError(error.message || 'Login failed');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#1e4d8c]">
      <div className="w-full max-w-md p-6 bg-white rounded-3xl shadow-md">
        <h2 className="text-2xl font-semibold text-gray-900 mb-4 text-center">
          Welcome back
        </h2>
        <p className="text-gray-600 mb-6 text-center">
          Please login to your account
        </p>
        <div className="flex justify-center mb-8">
          <div className="bg-blue-100 p-4 rounded-xl">
            <Lock className="w-12 h-12 text-blue-500" />
          </div>
        </div>
        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email Address
            </label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className={`mt-1 w-full p-2 rounded border focus:outline-none ${
                loginError
                  ? 'border-red-500 focus:ring-red-500 focus:border-red-500'
                  : 'border-gray-300 focus:ring-blue-500 focus:border-blue-500'
              }`}
              disabled={isSubmitting}
              placeholder="Enter your email"
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className={`mt-1 w-full p-2 rounded border focus:outline-none ${
                loginError
                  ? 'border-red-500 focus:ring-red-500 focus:border-red-500'
                  : 'border-gray-300 focus:ring-blue-500 focus:border-blue-500'
              }`}
              disabled={isSubmitting}
              placeholder="Enter your password"
            />
          </div>

          {loginError && (
            <p className="text-red-500 text-sm">{loginError}</p>
          )}

          <button
            type="submit"
            className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Logging in...' : 'Login'}
          </button>
        </form>
        <div className="mt-4 text-center">
          <p className="text-gray-600">
            Don’t have an account?{' '}
            <a href="/signup" className="text-blue-500 hover:underline">
              Sign up
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}   

export default Login;
