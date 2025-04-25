import React, { useEffect, useState } from 'react';
import { db } from '../../../firebase'; // Adjust path as needed
import {
    collection,
    doc,
    getDoc,
    addDoc,
    serverTimestamp
} from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
import NavBar from '../../componets/NavBar';
import Footer from '../../componets/Footer_FIn';
import { strict } from 'assert';

const FeedbackPage: React.FC = () => {
    const [feedback, setFeedback] = useState('');
    const [userDetails, setUserDetails] = useState<{ name: string; branch: string ; rollNo:string ; Persona:string } | null>(null);
    const [loading, setLoading] = useState(true);

    const auth = getAuth();
    const currentUser = auth.currentUser;

    useEffect(() => {
        const fetchUserData = async () => {
            if (currentUser) {
                const userRef = doc(db, 'users', currentUser.uid);
                const userSnap = await getDoc(userRef);
                if (userSnap.exists()) {
                    const { name, branch ,Persona,rollNo} = userSnap.data();
                    setUserDetails({ name, branch, rollNo , Persona});
                } else {
                    console.warn('No user data found');
                }
            }
            setLoading(false);
        };

        fetchUserData();
    }, [currentUser]);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!feedback || !userDetails) return;

        try {
            await addDoc(collection(db, 'Feedback'), {
                uid: currentUser?.uid,
                name: userDetails.name,
                branch: userDetails.branch,
                rollNo: userDetails.rollNo,
                Email:userDetails.Persona,
                feedback,
                timestamp: serverTimestamp()
            });
            alert('Feedback submitted!');
            setFeedback('');
        } catch (err) {
            console.error('Error submitting feedback:', err);
            alert('Failed to submit feedback.');
        }
    };

    if (loading) return <p>Loading user data...</p>;

    return (<div className='bg-gray-200 dark:bg-[#1f1f1f]'>
        <NavBar /><div>
            <div className='min-h-screen bg-gray-200 dark:bg-[#1f1f1f]'>
                <div className="max-w-md  mx-auto p-4  rounded-xl shadow-md my-20 bg-white dark:bg-[#262626]">
                    <h2 className="text-xl font-semibold mb-4 text-black dark:text-orange-500">Submit Your Feedback</h2>
                    <form onSubmit={handleSubmit}>
                        <textarea
                            placeholder="Write your feedback here..."
                            value={feedback}
                            onChange={(e) => setFeedback(e.target.value)}
                            className="w-full p-2 mb-3 border:orange-500 rounded bg-gray-200 dark:bg-[#1f1f1f] dark:text-gray-100"
                            rows={5}
                            required
                        />
                        <button
                            type="submit"
                            className="w-full bg-blue-400 text-white p-2 rounded hover:bg-blue-600 dark:bg-orange-600 dark:hover:bg-orange-700 transition-all duration-300 ease-in-out"
                        >
                            Submit
                        </button>
                    </form>
                </div>
            </div>
        </div>
        <Footer />
    </div>
    );
};

export default FeedbackPage;