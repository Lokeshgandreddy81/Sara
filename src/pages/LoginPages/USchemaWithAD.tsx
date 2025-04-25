import React, { useState, useEffect } from 'react';
import { getAuth, createUserWithEmailAndPassword, sendEmailVerification } from 'firebase/auth';
import { useNavigate, Link } from 'react-router-dom';
import ThemeToggle from '../../componets/ThemeToggle';
import { Monitor, Eye, EyeOff, ChevronLeft } from 'lucide-react';
import { getFirestore, doc, setDoc, serverTimestamp } from 'firebase/firestore';
import ThemeImageLogin from '../../componets/ThemeImage_login';

function USchemaWithAD() {

    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        name: '',
        yearOfStudy: '',
        branch: '',
        rollNo: '',
        email: '',
        Persona: '',
        password: '',
        confirmPassword: '',
        agreeToTerms: false,
    });

    const [showPassword, setShowPassword] = useState(false);
    const [formErrors, setFormErrors] = useState<string[]>([]);
    const navigate = useNavigate();
    const [isSubmitting, setIsSubmitting] = useState(false);

    const isValidRollNumber = (rollNumber: string) => {
        const isCorrectLength = rollNumber.length === 12;
        const isAlphabetAt6th = /^[A-Za-z]$/.test(rollNumber[5]);

        return isCorrectLength && isAlphabetAt6th;
    };


    useEffect(() => {
        if (formData.rollNo) {
            setFormData(prevFormData => ({
                ...prevFormData,
                email: `${prevFormData.rollNo}@mbu.asia`,
            }));
        }
    }, [formData.rollNo]); // Only run when rollNo changes
    useEffect(() => {
        if (formData.firstName || formData.lastName) {
            setFormData(prevFormData => ({
                ...prevFormData,
                name: `${prevFormData.firstName} ${prevFormData.lastName}`.trim(),
            }));
        }
    }, [formData.firstName, formData.lastName]);



    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        const errors: string[] = [];
        setIsSubmitting(true);

        // if (formData.lastName.length < 3) {
        //     errors.push('First name must be at least 3 characters long.');
        //     setIsSubmitting(false);
        // }
        if (formData.password !== formData.confirmPassword) {
            errors.push('Password and Confirm Password do not match.');
            setIsSubmitting(false);
        }


        if (!formData.firstName || !formData.lastName || !formData.password || formData.password !== formData.confirmPassword || !formData.agreeToTerms) {
            errors.push('Please fill in all fields correctly.');
            setIsSubmitting(false);
        }

        if (!isValidRollNumber(formData.rollNo)) {
            errors.push('Roll number must be 12 characters long and the 6th character must be an alphabet.');
            setIsSubmitting(false);
        }
        if (formData.email && !/\S+@\S+\.\S+/.test(formData.email)) {
            errors.push('Please enter a valid email address.');
            setIsSubmitting(false);
        }

        // Validate password strength
        const passwordRegex = /^(?=.*[a-z])(?=.*\d).{8,}$/;
        if (!passwordRegex.test(formData.password)) {
            errors.push('Password must be at least 8 characters long, one lowercase letter, and one number.');
        }

        if (errors.length > 0) {
            setFormErrors(errors);
            return;
        }

        const auth = getAuth();
        const db = getFirestore();  // Get Firestore instance

        try {
            // Create user with email and password
            const userCredential = await createUserWithEmailAndPassword(auth, formData.email, formData.password);
            const user = userCredential.user;

            // Store additional data in Firestore
            const userDocRef = doc(db, 'users', user.uid); // Create a reference to the user document in Firestore
            await setDoc(userDocRef, {
                firstName: formData.firstName,
                lastName: formData.lastName,
                name: formData.name,
                yearOfStudy: formData.yearOfStudy,
                branch: formData.branch,
                rollNo: formData.rollNo,
                email: formData.email,
                Persona: formData.Persona,
                createdAt: serverTimestamp(),
            });

            // Send email verification
            await sendEmailVerification(user);

            if (window.confirm(`A verification email has been sent to "${formData.email}". Please check your inbox and verify it before signing in.`)) {
                navigate('/Signin');
            }
        } catch (error) {
            if (error instanceof Error) {
                console.error("Error creating user:", error.message);
            } else {
                console.error("Error creating user:", error);
            }
            if (error instanceof Error) {
                setFormErrors([error.message]);
            } else {
                setFormErrors(['An unknown error occurred.']);
            }
        } finally {
            setIsSubmitting(false);
        }
    };
    return (
        <>
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


            <div className="min-h-screen dark:bg-[#1f1f1f] bg-[#1e3a8a] p-4 flex items-center justify-center transition-all duration-300 ease-in-out">
                <div className="w-full max-w-4xl flex items-center justify-center  ">
                    <div className="w-full lg:w-1/2 bg-white rounded-3xl p-8 shadow-xl dark:bg-[#262626] transition-all duration-300 ease-in-out">
                        <div className="flex items-center gap-2 mb-6 dark:text-orange-500 transition-all duration-300 ease-in-out">
                            <Link to="/Signup" >
                                <div className="flex items:center gap-2">
                                    <ChevronLeft className="w-8 h-8 text-[#4F46E5] dark:text-orange-500 transition-all duration-300 ease-in-out" />
                                    <span className="text-[#4F46E5] text-xl font-bold dark:text-orange-500 transition-all duration-300 ease-in-out">Back To Sign up</span>
                                </div>
                            </Link>
                        </div>

                        <h1 className="text-3xl font-bold text-gray-900 mb-2 dark:text-white transition-all duration-300 ease-in-out">Sign up with us</h1>
                        <p className="text-gray-600 text-lg mb-8 dark:text-[#d6d6d6] transition-all duration-300 ease-in-out">Let's get you all set up so you can access your personal account.</p>

                        {/* Display errors */}
                        {formErrors.length > 0 && (
                            <div className="bg-red-50 text-red-900 p-4 mb-6 rounded-lg dark:bg-red-800 dark:text-red-100 transition-all duration-300 ease-in-out">
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
                                    <label className="block text-gray-700 mb-2 dark:text-gray-200 transition-all duration-300 ease-in-out">First Name</label>
                                    <input
                                        type="text"
                                        placeholder="Jaya"
                                        className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-[#4F46E5] focus:border-transparent dark:focus:ring-orange-600 dark:bg-[#1f1f1f] dark:text-white transition-all duration-300 ease-in-out"
                                        value={formData.firstName}
                                        onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                                        disabled={isSubmitting}
                                    />
                                </div>
                                <div>
                                    <label className="block text-gray-700 mb-2 dark:text-gray-200 transition-all duration-300 ease-in-out">Last Name</label>
                                    <input
                                        type="text"
                                        placeholder="Sri"
                                        className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-[#4F46E5] focus:border-transparent dark:focus:ring-orange-600 dark:bg-[#1f1f1f] dark:text-white transition-all duration-300 ease-in-out"
                                        value={formData.lastName}
                                        onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                                        disabled={isSubmitting}
                                    />
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-gray-700 mb-2 dark:text-gray-200 transition-all duration-300 ease-in-out  ">Branch</label>
                                    <select
                                        className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-[#4F46E5] focus:border-transparent dark:focus:ring-orange-600 dark:bg-[#1f1f1f] dark:text-white transition-all duration-300 ease-in-out"
                                        value={formData.branch}
                                        onChange={(e) => setFormData({ ...formData, branch: e.target.value })}
                                    >
                                        <option value="">Select Branch</option>
                                        <option value="Artificial Intelligence & Machine Learning">AIML</option>
                                        <option value="Civil Engineering">Civil</option>
                                        <option value="Computer Science and Engineering">CSE</option>
                                        <option value="Cyber Security">Cyber Security</option>
                                        <option value="Data Science">Data Science</option>
                                        <option value="Electronics and Communication Engineering ">ECE</option>
                                        <option value="Electrical and Electronics Engineering">EEE</option>
                                        <option value="Information and Technology">IT</option>
                                        <option value="Mechanical Engineering">Mechanical</option>
                                    </select>
                                </div>

                                <div>
                                    <label className="block text-gray-700 mb-2 dark:text-gray-200 transition-all duration-300 ease-in-out">Year Of Study</label>
                                    <select
                                        className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-[#4F46E5] focus:border-transparent dark:focus:ring-orange-600 dark:bg-[#1f1f1f] dark:text-white transition-all duration-300 ease-in-out"
                                        value={formData.yearOfStudy}
                                        onChange={(e) => setFormData({ ...formData, yearOfStudy: e.target.value })}
                                    >
                                        <option value="">Select Year</option>
                                        <option value="1st Year">1st Year</option>
                                        <option value="2nd Year">2nd Year</option>
                                        <option value="3rd Year">3rd Year</option>
                                        <option value="4th Year">4th Year</option>
                                    </select>
                                </div>
                            </div>
                            <div>
                                <label className="block text-gray-700 mb-2 dark:text-gray-200 transition-all duration-300 ease-in-out">Roll No</label>
                                <input
                                    type="text" // Changed to text to allow any input
                                    placeholder="Ex : 22102A040748"
                                    className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-[#4F46E5] focus:border-transparent dark:focus:ring-orange-600 dark:bg-[#1f1f1f] dark:text-white transition-all duration-300 ease-in-out"
                                    value={formData.rollNo}
                                    onChange={(e) => setFormData({ ...formData, rollNo: e.target.value })}
                                    disabled={isSubmitting}
                                />
                            </div>

                            <div>
                                <label className="block text-gray-700 mb-2 dark:text-gray-200 transition-all duration-300 ease-in-out">Your Email</label>
                                <input
                                    type="email"
                                    placeholder="Ex: jayasri@gmail.com"
                                    className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-[#4F46E5] focus:border-transparent dark:focus:ring-orange-600 dark:bg-[#1f1f1f] dark:text-white transition-all duration-300 ease-in-out"
                                    value={formData.Persona}
                                    onChange={(e) => setFormData({ ...formData, Persona: e.target.value })}
                                    disabled={isSubmitting}
                                />
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div className="relative">
                                    <label className="block text-gray-700 mb-2 dark:text-gray-200 transition-all duration-300 ease-in-out">Password</label>
                                    <input
                                        type={showPassword ? 'text' : 'password'}
                                        placeholder="Password"
                                        className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-[#4F46E5] focus:border-transparent dark:focus:ring-orange-600 dark:bg-[#1f1f1f] dark:text-white transition-all duration-300 ease-in-out"
                                        value={formData.password}
                                        onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                                        disabled={isSubmitting}
                                    />
                                    <button
                                        type="button"
                                        className="absolute right-3 top-[38px] text-gray-500 dark:text-gray-200 transition-all duration-300 ease-in-out"
                                        onClick={() => setShowPassword(!showPassword)}
                                    >
                                        {showPassword ? <EyeOff size={25} /> : <Eye size={25} />}
                                    </button>
                                </div>
                                <div>
                                    <label className="block text-gray-700 mb-2 dark:text-gray-200 transition-all duration-300 ease-in-out">Confirm Password</label>
                                    <input
                                        type={showPassword ? 'text' : 'password'}

                                        placeholder='Confirm Password'
                                        className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-[#4F46E5] focus:border-transparent dark:focus:ring-orange-600 dark:bg-[#1f1f1f] dark:text-white transition-all duration-300 ease-in-out"
                                        value={formData.confirmPassword}
                                        onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
                                        disabled={isSubmitting}
                                    />

                                </div>
                            </div>

                            <div className="flex items-center">
                                <input
                                    type="checkbox"
                                    id="terms"
                                    className="mr-2 "
                                    checked={formData.agreeToTerms}
                                    onChange={(e) => setFormData({ ...formData, agreeToTerms: e.target.checked })}
                                    disabled={isSubmitting}
                                />
                                <label htmlFor="terms" className="text-gray-600 dark:text-gray-200 transition-all duration-300 ease-in-out">
                                    I agree to {' '}
                                    <a href="/TermsConditions" target='_blank' className="text-[#4F46E5] dark:text-orange-500 transition-all duration-300 ease-in-out">
                                        Terms & Conditions
                                    </a>{' '}

                                </label>
                            </div>

                            <button
                                type="submit"
                                className="w-full bg-[#4F46E5] dark:bg-orange-500 text-white py-3 rounded-lg hover:bg-[#4338CA] hover:dark:bg-orange-700 transition-colors transition -all Duration-300 ease-in-out"
                                disabled={isSubmitting}
                            >
                                {isSubmitting ? 'Creating Account....' : 'Create Account'}
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
}

export default USchemaWithAD;
