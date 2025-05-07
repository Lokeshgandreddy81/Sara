import React, { useState } from 'react';
import {
  getAuth,
  updatePassword,
  reauthenticateWithCredential,
  EmailAuthProvider,
} from 'firebase/auth';
import NavBar from '../../../componets/NavBar';
import { Eye, EyeOff, ChevronLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const ChangePassword: React.FC = () => {
  const auth = getAuth(); // assumes Firebase is initialized
  const user = auth.currentUser;

  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [message, setMessage] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handleChangePassword = async (e: React.FormEvent) => {
    e.preventDefault();
    setMessage(null);

    if (newPassword !== confirmPassword) {
      setMessage('❌ New passwords do not match.');
      return;
    }

    if (newPassword.length < 6) {
      setMessage('❌ Password must be at least 6 characters.');
      return;
    }

    if (!user || !user.email) {
      setMessage('❌ No authenticated user.');
      return;
    }

    setLoading(true);

    try {
      const credential = EmailAuthProvider.credential(user.email, currentPassword);
      await reauthenticateWithCredential(user, credential);
      await updatePassword(user, newPassword);
      setMessage('✅ Password updated successfully!');
    } catch (error: any) {
      setMessage('❌ ${error.code}: ${error.message}');
    } finally {
      setLoading(false);
      setCurrentPassword('');
      setNewPassword('');
      setConfirmPassword('');
    }
  };

  return (<>
    <NavBar />
    <div className='bg-white dark:bg-[#1f1f1f] min-h-screen flex items-center justify-center transition-all duration-300 ease-in-out'>

      <div className="max-w-md mx-auto p-6 bg-gray-200 dark:bg-[#262626] rounded-xl shadow-md transition-all duration-300 ease-in-out">
        <Link to='/Dashboard' title='Dashboard'>
          <ChevronLeft className='h-8 w-8 text-blue-600 dark:text-orange-600' />
        </Link>
        <h2 className="text-3xl font-semibold mb-4 text-center text-blue-600 dark:text-orange-600 transition-all duration-300 ease-in-out">Change Password</h2>
        <form onSubmit={handleChangePassword} className="space-y-5">
          <div className="relative">
            <input
              type={showPassword ? 'text' : 'password'}
              placeholder="Current Password"
              value={currentPassword}
              onChange={(e) => setCurrentPassword(e.target.value)}
              className="w-full px-4 py-2 border rounded-md dark:bg-[#1f1f1f] dark:text-gray-200 transition-all duration-300 ease-in-out border-blue-500 dark:border-orange-500"
              required
            />
            <button
              type="button"
              aria-label={showPassword ? "Hide password" : "Show password"}
              title={showPassword ? "Hide password" : "Show password"}
              className="absolute inset-y-0 right-3 my-auto text-gray-500 dark:text-gray-200 transition-all duration-300 ease-in-out cursor-pointer"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <EyeOff size={25} /> : <Eye size={25} />}
            </button>
          </div>

          <div className="relative">
            <input
              type={showPassword ? 'text' : 'password'}
              placeholder="New Password"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              className="w-full px-4 py-2 border rounded-md dark:bg-[#1f1f1f] dark:text-gray-200 transition-all duration-300 ease-in-out border-blue-500 dark:border-orange-500"
              required
            />
          </div>

          <input
            type={showPassword ? 'text' : 'password'}
            placeholder="Confirm New Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            className="w-full px-4 py-2 border rounded-md dark:bg-[#1f1f1f] dark:text-gray-200 transition-all duration-300 ease-in-out border-blue-500 dark:border-orange-500"
            required
          />

          <button
            type="submit"
            disabled={loading}
            className={`w-full py-2 px-4 text-white rounded-md ${loading ? 'bg-gray-400' : 'bg-blue-600 hover:bg-blue-800 dark:bg-orange-600 dark:hover:bg-orange-700 transition-all duration-500 ease-in-out'
              }`}
          >
            {loading ? 'Updating...' : 'Change Password'}
          </button>
        </form>

        {message && (
          <p className="mt-4 text-center text-sm font-medium text-red-600">
            {message}
          </p>
        )}
      </div>
    </div>
  </>
  );
};

export default ChangePassword;