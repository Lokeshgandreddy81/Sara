import { useEffect, useState } from "react";
import { getAuth } from "firebase/auth";
import { doc, getDoc, updateDoc } from "firebase/firestore";
import { db } from "../../../../firebase";
import { ChevronLeft } from "lucide-react";
import NavBar from "../../../componets/NavBar";
import { Link, useNavigate } from "react-router-dom";

const branches = ["Artificial Intelligence and Machine Learning", "Civil Engineering", "Cyber Security", "Computer Science and Engineering", "Data Science", "Electrical Communications Engineering", "Electrical and Electronics Engineering", "Information Technology", "Mechanical Engineering",];
const years = ["1st Year", "2nd Year", "3rd Year", "4th Year"];

export default function EditProfile() {
    const [name, setName] = useState("");
    const [year, setYear] = useState("");
    const [branch, setBranch] = useState("");
    const [loading, setLoading] = useState(true);

    const auth = getAuth();
    const navigate = useNavigate();
    const user = auth.currentUser;  

    useEffect(() => {
        const fetchUser = async () => {
            if (!user) return;

            const docRef = doc(db, "users", user.uid);
            const userSnap = await getDoc(docRef);

            if (userSnap.exists()) {
                const data = userSnap.data();
                setName(data.name || "");
                setYear(data.year || "");
                setBranch(data.branch || "");
            }
            setLoading(false);
        };

        fetchUser();
    }, [user]);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!user) return;

        const docRef = doc(db, "users", user.uid);
        await updateDoc(docRef, {
            name,
            year,
            branch,
        });

        window.alert("Profile updated!");
        navigate('/Dashboard');
        
    };

    if (loading) return <div className="p-4 text-center">Loading...</div>;

    return (
        <>
            <NavBar />
            <div className="bg-gray-100 dark:bg-[#1f1f1f] min-h-screen transition-all duration-300 ease-in-out flex flex-col items-center justify-center">

                <div className="max-w-md mx-auto mt-10 p-6 bg-white shadow-xl rounded-2xl space-y-4 dark:bg-[#262626] transition-all duration-300 ease-in-out mb-20">

                    <div className="flex items-center gap-2 mb-6 dark:text-orange-500 transition-all duration-300 ease-in-out">
                        <Link to="/Dashboard"title="Dashboard" >
                            <div className="flex items:center gap-2">
                                <ChevronLeft className="w-8 h-8 text-[#4F46E5] dark:text-orange-500 transition-all duration-300 ease-in-out" />
                            </div>
                        </Link>
                    </div>

                    <h2 className="text-2xl font-bold text-center text-blue-600 dark:text-orange-600">Edit Profile</h2>
                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div>
                            <label className="block mb-1 font-medium dark:text-gray-200 text-black">Name</label>
                            <input
                                type="text"
                                className="w-full p-2 border rounded-md dark:text-gray-200 text-gray-800 bg-white dark:bg-[#1f1f1f] transition-all duration-300 ease-in-out focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                required
                            />
                        </div>

                        <div>
                            <label className="block mb-1 font-medium dark:text-gray-200 text-black">Year</label>
                            <select
                                className="w-full p-2 border rounded-md dark:text-gray-200 text-gray-800 bg-white dark:bg-[#1f1f1f] transition-all duration-300 ease-in-out"
                                value={year}
                                onChange={(e) => setYear(e.target.value)}
                                required
                            >
                                <option value="">Select Year</option>
                                {years.map((y) => (
                                    <option key={y} value={y}>
                                        {y}
                                    </option>
                                ))}
                            </select>
                        </div>

                        <div>
                            <label className="block mb-1 font-medium dark:text-gray-200 text-black">Branch</label>
                            <select
                                className="w-full p-2 border rounded-md dark:text-gray-200 text-gray-800 bg-white dark:bg-[#1f1f1f] transition-all duration-300 ease-in-out "
                                value={branch}
                                onChange={(e) => setBranch(e.target.value)}
                                required
                            >
                                <option value="">Select Branch</option>
                                {branches.map((b) => (
                                    <option key={b} value={b}>
                                        {b}
                                    </option>
                                ))}
                            </select>
                        </div>

                        <button
                            type="submit"
                            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-xl transition duration-200 dark:text-black dark:bg-orange-600 dark:hover:bg-orange-700"
                        >
                            Save Changes
                        </button>

                    </form>
                </div>
            </div>
        </>
    );
}
