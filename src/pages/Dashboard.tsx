import React, { useEffect, useState } from 'react';
import { getAuth, signOut } from 'firebase/auth';
import { doc, DocumentData, getDoc, getFirestore } from 'firebase/firestore';
import { db } from '../../firebase';
import NavBar from '../componets/NavBar';
import { useNavigate } from 'react-router-dom';


interface UserProfile {
    name: string;
    yearOfStudy: string;
    branch: string;
    rollNo: string;
    email: string;
    Persona: string;
}

const Dashboard: React.FC = () => {
    const [userData, setUserData] = useState<UserProfile | null>(null);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

    const handleLogout = async () => {
        const auth = getAuth();
        try {
            await signOut(auth);
            navigate('/Signin'); // redirect after logout
        } catch (error) {
            console.error("Error signing out:", error);
        }
    };


    useEffect(() => {
        const fetchUserData = async () => {
          const auth = getAuth();
          const user = auth.currentUser;
      
          if (user) {
            const docRef = doc(db, 'users', user.uid);
            const docSnap = await getDoc(docRef);
      
            if (docSnap.exists()) {
              setUserData(docSnap.data() as UserProfile);
            } else {
              console.log("No such document!");
            }
            setLoading(false);
          }
        };
      
        fetchUserData();
      }, []);
      
    if (loading) return <div className="p-8 text-lg">Loading your profile...</div>;

    if (!userData) return <div className="p-8 text-lg">No profile data found.</div>;

    return (
        <>
            <NavBar />
            <div className="p-8 max-w-3xl mx-auto bg-white dark:bg-black rounded-2xl shadow-lg mt-10">
                <h2 className="text-3xl font-bold text-center mb-8 dark:text-white">Your Profile</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-lg">
                    <div><strong>Name:</strong> {userData.name}</div>
                    <div><strong>Year of Study:</strong> {userData.yearOfStudy}</div>
                    <div><strong>Branch:</strong> {userData.branch}</div>
                    <div><strong>Roll Number:</strong> {userData.rollNo}</div>
                    <div><strong>College Mail:</strong> {userData.email}</div>
                    <div className="sm:col-span-2"><strong>Email:</strong> {userData.Persona}</div>
                    <div className="flex justify-end mb-4">
                        <button
                            onClick={handleLogout}
                            className="bg-red-500 text-white px-4 py-2 rounded-full hover:bg-red-600 transition-all"
                        >
                            Log Out
                        </button>

                    </div>
                    <div className="flex justify-end mb-4">
                        <button
                            onClick={() => navigate('/EditProfile')}
                            className="bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-600 transition-all"
                        >
                            Edit Profile
                        </button>
                        </div>

                </div>
            </div>
        </>
    );
};

export default Dashboard;


