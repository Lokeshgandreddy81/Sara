import React, { useState, useEffect } from 'react';
import { db, storage } from '../../../firebase';
import { collection, addDoc, Timestamp } from 'firebase/firestore';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import NavBar from '../../componets/NavBar';
import Footer from '../../componets/Footer_FIn';

const ReportIssue: React.FC = () => {
  const [confirmationVisible, setConfirmationVisible] = useState(false);
  const [screenshotFile, setScreenshotFile] = useState<File | null>(null);
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    environment: '',
    email: '',
    rollNumber: '',
  });

  // Check authentication status
  useEffect(() => {
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      if (user) {
        console.log('User is signed in:', user.uid);
      } else {
        console.log('No user is signed in');
      }
    });
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, files } = e.target as any;
    if (name === 'screenshot' && files.length > 0) {
      setScreenshotFile(files[0]);
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      let screenshotURL = '';

      if (screenshotFile) {
        const storageRef = ref(storage, `screenshots/${Date.now()}_${screenshotFile.name}`);
        console.log('Trying to upload file:', screenshotFile.name);
        const snapshot = await uploadBytes(storageRef, screenshotFile);
        screenshotURL = await getDownloadURL(snapshot.ref);
        console.log('File uploaded successfully, URL:', screenshotURL);
      }

      await addDoc(collection(db, "issueReports"), {
        ...formData,
        // screenshotURL,
        createdAt: Timestamp.now(),
      });

      setConfirmationVisible(true);
      setFormData({
        title: '',
        description: '',
        environment: '',
        email: '',
        rollNumber: '',
      });
      setScreenshotFile(null);

      setTimeout(() => {
        setConfirmationVisible(false);
      }, 5000);
    } catch (error: any) {
      console.error('Error details:', error.code, error.message);
      alert('Failed to submit issue: ' + error.message);
    }
  };

  return (
    <div className='bg-white dark:bg-[#1f1f1f] transition-all duration-300 ease-in-out'>
      <NavBar />
      <div className="max-w-xl mx-auto p-6 bg-white shadow-lg rounded-xl mt-10 dark:bg-[#2c2c2c]">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-6 dark:text-orange-600">📢 Report an Issue - Sara AI</h2>
        <form onSubmit={handleSubmit}>
          <label className="block text-sm font-semibold dark:text-[#d2d2d2]">Issue Title <span className='text-red-600'>*</span></label>
          <input name="title" type="text" required value={formData.title} onChange={handleChange} placeholder="E.g. Video not loading" className="w-full p-3 border rounded-md mb-4 dark:bg-[#1f1f1f] dark:text-gray-200" />

          <label className="block text-sm font-semibold dark:text-[#d2d2d2]">Description <span className='text-red-600'>*</span></label>
          <textarea name="description" required value={formData.description} onChange={handleChange} rows={4} placeholder="Describe the issue..." className="w-full p-3 border rounded-md mb-4 dark:bg-[#1f1f1f] dark:text-gray-200" />

          <label className="block text-sm font-semibold dark:text-[#d2d2d2]">Environment Details <span className='text-red-600'>*</span></label>
          <input name="environment" type="text" required value={formData.environment} onChange={handleChange} placeholder="E.g. Chrome" className="w-full p-3 border rounded-md mb-4 dark:bg-[#1f1f1f] dark:text-gray-200" />
{/* 
          <label className="block text-sm font-semibold dark:text-[#d2d2d2]">Attach Screenshot (optional)</label>
          <input name="screenshot" type="file" accept="image/*" onChange={handleChange} className="w-full mb-4 dark:text-gray-200" /> */}

          <label className="block text-sm font-semibold dark:text-[#d2d2d2]">Your Email (optional)</label>
          <input name="email" type="email" value={formData.email} onChange={handleChange} placeholder="you@example.com" className="w-full p-3 border rounded-md mb-4 dark:bg-[#1f1f1f] dark:text-gray-200" />

          <label className="block text-sm font-semibold dark:text-[#d2d2d2]">Your RollNumber <span className='text-red-600'>*</span></label>
          <input name="rollNumber" type="text" required value={formData.rollNumber} onChange={handleChange} placeholder="22102A040748" className="w-full p-3 border rounded-md mb-4 dark:bg-[#1f1f1f] dark:text-gray-200" />

          <button type="submit" className="w-full bg-blue-600 text-white py-3 rounded-md font-semibold hover:bg-blue-700 dark:bg-orange-600 hover:dark:bg-orange-700">
            Submit Issue
          </button>

          {confirmationVisible && (
            <div className="text-green-600 text-center mt-4">
              ✅ Thank you! We’ve received your report.
            </div>
          )}
        </form>
      </div>
      <Footer />
    </div>
  );
};

export default ReportIssue;