import React, { useEffect, useState } from 'react';
import { getAuth, signOut } from 'firebase/auth';
import { doc, DocumentData, getDoc, getFirestore } from 'firebase/firestore';
import { db } from '../../../../firebase';
import NavBar from '../../../componets/NavBar';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { ChevronLeft , SquarePen } from 'lucide-react';


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
        const auth = getAuth();
    
        const unsubscribe = auth.onAuthStateChanged(async (user) => {
            if(user && !user.emailVerified) {
                signOut(auth);
            }
            if (user) {
                try {
                    const docRef = doc(db, 'users', user.uid);
                    const docSnap = await getDoc(docRef);
    
                    if (docSnap.exists()) {
                        setUserData(docSnap.data() as UserProfile);
                    } else {
                        console.log("No such document!");
                    }
                } catch (error) {
                    console.error("Error fetching profile:", error);
                }
            } else {
                // User is not signed in, redirect to login
                navigate('/Signin');
            }
    
            setLoading(false);
        });
    
        return () => unsubscribe(); // cleanup
    }, []);

      
    if (loading) {
    return (
        <div className="p-8 max-w-3xl mx-auto mt-10 animate-pulse">
            <br /><br />    
            <div className="h-8 bg-gray-300 dark:bg-gray-700 rounded w-1/2 mb-6"></div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {Array.from({ length: 6 }).map((_, i) => (
                    <div key={i} className="h-6 bg-gray-200 dark:bg-gray-800 rounded w-full"></div>
                ))}
                <div className="sm:col-span-2 h-6 bg-gray-200 dark:bg-gray-800 rounded w-full"></div>
            </div>
        </div>
    );
}


    if (!userData) return <div className="p-8 text-lg">No profile data found.</div>;

    return (
        <>
        <NavBar />
        <div className='bg-[#fafafa] dark:bg-[#1f1f1f] min-h-screen flex items-center justify-center transition-all duration-300 ease-in-out '>
           
            <div className="p-8 max-w-3xl mx-auto bg-gray-200 dark:bg-[#262626] rounded-2xl shadow-lg mb-20 space-y-4 transition-all duration-300 ease-in-out">
                      <div className="flex items-center gap-2 mb-1 dark:text-orange-500 transition-all duration-300 ease-in-out">
                    <Link to="/" title='Home'>
                        <div className="flex items:center gap-2">
                            <ChevronLeft className="w-9 h-9 text-[#4F46E5] dark:text-orange-500 transition-all duration-300 ease-in-out" />
                        </div>
                    </Link>
                </div>
                <h2 className="text-3xl font-bold text-center mb-8 dark:text-orange-500">Your Profile</h2>
                <Link to="/Dashboard/EditProfile" className="text-blue-500 hover:underline mb-4 flex justify-end" title='Edit Profile'>
                    <SquarePen className='w-7 h-7 dark:text-orange-600' />
                </Link>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-lg">
                    <div className='text-[#1f1f1f] dark:text-gray-200 '><strong>Name:</strong> {userData.name}</div>
                    <div className='text-[#1f1f1f] dark:text-gray-200 '><strong>Year of Study:</strong> {userData.yearOfStudy}</div>
                    <div className='text-[#1f1f1f] dark:text-gray-200 '><strong>Branch:</strong> {userData.branch}</div>
                    <div className='text-[#1f1f1f] dark:text-gray-200 '><strong>Roll Number:</strong> {userData.rollNo}</div>
                    <div className='text-[#1f1f1f] dark:text-gray-200 '><strong>College Mail:</strong> {userData.email}</div>
                    <div className="sm:col-span-2text-[#1f1f1f] dark:text-gray-200 "><strong>Email:</strong> {userData.Persona}</div>
                    <div className="flex justify-end mb-4">
                        <button
                            onClick={handleLogout}
                            className="bg-red-500 text-white px-4 py-2 rounded-full hover:bg-red-600 transition-all"
                            title='Log Out'
                        >
                            Log Out
                        </button>

                    </div>
                    <div className="flex justify-end mb-4">
                        
                        <button
                            onClick={() => navigate('/ChangePass')}
                            className="bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-600 transition-all"
                            title='Change Password'
                        >
                            Change Password
                        </button>
                        </div>
                    
                </div>
            </div>
        </div>
        </>
    );
};

export default Dashboard;