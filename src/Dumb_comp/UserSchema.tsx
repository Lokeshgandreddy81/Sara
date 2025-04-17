import React, { useState } from 'react';
import { BookOpen } from 'lucide-react';
import {Eye, EyeOff} from 'lucide-react';
import { Timestamp } from 'firebase/firestore';

function UserSchema() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    yearOfStudy: '',
    branch: '',
    rollNo: '',
    email: '',
    password: '',
    confirmPassword: '',
    createdAt:Timestamp.now(),  
    agreeToTerms: false
  });

  const [showPassword, setShowPassword] = useState(false);
  const [formErrors, setFormErrors] = useState<string[]>([]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const errors: string[] = [];

    // Validate first name and last name
    if (!formData.firstName) {
      errors.push('First Name cannot be empty');
    }
    if (!formData.lastName) {
      errors.push('Last Name cannot be empty');
    }

    // Validate email
    if (!formData.email.endsWith('@gmail.com')) {
      errors.push('Email must end with @gmail.com');
    }

    // Validate password strength
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;
    if (!passwordRegex.test(formData.password)) {
      errors.push('Password must be at least 8 characters long, contain one uppercase letter, one lowercase letter, and one number');
    }

    // Check if passwords match
    if (formData.password !== formData.confirmPassword) {
      errors.push('Password and confirm password must match');
    }

    // Ensure year of study and branch are selected
    if (!formData.yearOfStudy) {
      errors.push('Please select a Year of Study');
    }
    if (!formData.branch) {
      errors.push('Please select a Branch');
    }

    // Ensure terms are agreed to
    if (!formData.agreeToTerms) {
      errors.push(' Agree to the Terms and Conditions');
    }

    // If there are errors, prevent form submission
    if (errors.length > 0) {
      setFormErrors(errors);
      return;
    }

    // If no errors, submit the form
    console.log('Form submitted:', formData);
  };

  return (
    <div className="min-h-screen bg-[#1e3a8a] p-4 flex items-center justify-center">
      <div className="w-full max-w-4xl flex items-center justify-center ">
        {/* Right side form */}
        <div className="w-full lg:w-1/2 bg-white rounded-3xl p-8 shadow-xl">
          <div className="flex items-center gap-2 mb-6">
            <BookOpen className="w-8 h-8 text-[#4F46E5]" />
            <span className="text-[#4F46E5] text-xl font-bold">SARA</span>
          </div>

          <h1 className="text-3xl font-bold text-gray-900 mb-2">Sign up with us</h1>
          <p className="text-gray-600 mb-8">Let's get you all set up so you can access your personal account.</p>

          {/* Display errors */}
          {formErrors.length > 0 && (
            <div className="bg-red-100 text-red-800 p-4 mb-6 rounded-lg">
              <ul>
                {formErrors.map((error, index) => (
                  <li key={index}>{error}</li>
                ))}
              </ul>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-gray-700 mb-2">First Name</label>
                <input
                  type="text"
                  placeholder="David"
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-[#4F46E5] focus:border-transparent"
                  value={formData.firstName}
                  onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                />
              </div>
              <div>
                <label className="block text-gray-700 mb-2">Last Name</label>
                <input
                  type="text"
                  placeholder="Goliath"
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-[#4F46E5] focus:border-transparent"
                  value={formData.lastName}
                  onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-gray-700 mb-2">Branch</label>
                <select
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-[#4F46E5] focus:border-transparent"
                  value={formData.branch}
                  onChange={(e) => setFormData({ ...formData, branch: e.target.value })}
                >
                  <option value="">Select Branch</option>
                  <option value="ai">AIML</option>
                  <option value="ci">Civil</option>
                  <option value="cse">CSE</option>
                  <option value="ec">Cyber Security</option>
                  <option value="ds">Data Science</option>
                  <option value="ece">ECE</option>
                  <option value="eee">EEE</option>
                  <option value="it">IT</option>
                  <option value="me">Mechanical</option>
                </select>
              </div>

              <div>
                <label className="block text-gray-700 mb-2">Year Of Study</label>
                <select
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-[#4F46E5] focus:border-transparent"
                  value={formData.yearOfStudy}
                  onChange={(e) => setFormData({ ...formData, yearOfStudy: e.target.value })}
                >
                  <option value="">Select Year</option>
                  <option value="1">1st-Year</option>
                  <option value="2">2nd-Year</option>
                  <option value="3">3rd-Year</option>
                  <option value="4">4th-Year</option>
                </select>
              </div>
            </div>
            <div>
              <label className="block text-gray-700 mb-2">Roll No</label>
              <input
                type="rollNo"
                placeholder="Ex : 22102A040748"
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-[#4F46E5] focus:border-transparent"
                value={formData.rollNo}
                onChange={(e) => setFormData({ ...formData, rollNo: e.target.value })}
              />
            </div>
            <div>
              <label className="block text-gray-700 mb-2">Email</label>
              <input
                type="email"
                placeholder="DavidGoliath@gmail.com"
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-[#4F46E5] focus:border-transparent"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="relative">
                <label className="block text-gray-700 mb-2">Password</label>
                <input
                  type={showPassword ? 'text' : 'password'}
                  placeholder="Password"
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-[#4F46E5] focus:border-transparent"
                  value={formData.password}
                  onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                />
                <button
                  type="button"
                  className="absolute right-3 top-[38px] text-gray-500"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <EyeOff size={25} /> : <Eye size={25} />}
                </button>
              </div>
              <div>
                <label className="block text-gray-700 mb-2">Confirm Password</label>
                <input
                  type="password"
                  placeholder='Confirm Password'
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-[#4F46E5] focus:border-transparent"
                  value={formData.confirmPassword}
                  onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
                />
              </div>
            </div>

            <div className="flex items-center">
              <input
                type="checkbox"
                id="terms"
                className="mr-2"
                checked={formData.agreeToTerms}
                onChange={(e) => setFormData({ ...formData, agreeToTerms: e.target.checked })}
              />
              <label htmlFor="terms" className="text-gray-600">
                I agree to all the{' '}
                <a href="#" className="text-[#4F46E5]">
                  Terms & Conditions
                </a>{' '}
                
              </label>
            </div>

            <button
              type="submit"
              className="w-full bg-[#4F46E5] text-white py-3 rounded-lg hover:bg-[#4338CA] transition-colors"
            >
              Create Account
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default UserSchema;
