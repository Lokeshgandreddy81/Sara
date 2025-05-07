import React from "react";
import {
    Book,
    Youtube,
    BrainCircuit,
    Network,
    Workflow,
    BarChart2,
    Users,
    UserCheck,
    RefreshCcw
} from "lucide-react";
import NavBar from "../../componets/NavBar";
import Footer from "../../componets/Footer_FIn";

const Sarav1Insights = () => {
    return (
        <><NavBar/>
            <div className=" bg-gray-100 dark:bg-[#1f1f1f] text-white py-8 px-4 ">
                <div className="max-w-6xl mx-auto text-center space-y-6">
                    <h2 className="text-3xl font-bold text-[#000000] dark:text-white">✨ SARA AI – Version 1 Highlights</h2>
                    <br /><br />
                    {/* Section 1: Functional Features */}
                    <div className=" flex items-center justify-center">
                        <div>
                            <h3 className="text-2xl font-semibold mb-6 flex justify-center items-center gap-2 text-[#000000] dark:text-orange-500">
                                <BrainCircuit className="w-6 h-6 " />
                                Functional Capabilities 🚀
                            </h3>

                            <ul className="grid grid-cols-2 gap-4 text-lg text-center text-[#262626] dark:text-gray-200">
                                <li className="flex items-center gap-2 justify-center">
                                    <Book className="w-5" /> PDF by Module & Subject
                                </li>
                                <li className="flex items-center gap-2 justify-center">
                                    <Youtube className="w-5" /> Smart YouTube Integration
                                </li>
                                <li className="flex items-center gap-2 justify-center">
                                    <Network className="w-5" /> Branch-specific Content Support
                                </li>
                                <li className="flex items-center gap-2 justify-center">
                                    <RefreshCcw className="w-5" /> Real-Time Fast Response
                                </li>
                            </ul>
                        </div>
                    </div>

                    <br /><br />
                    {/* Section 2: System Workflow */}
                    <div>
                        <h3 className="text-2xl font-semibold mb-2 flex justify-center items-center gap-2 text-[#000000] dark:text-orange-500">
                            <Workflow className="w-6 h-6" />
                            System Workflow 
                        </h3>
                        <br />
                        <p className="text-lg text-[#262626] dark:text-gray-200">
                            Students select their <strong>Branch ➡ Subject ➡ Learning Mode ➡ Module</strong>, and get curated <em>PDFs or Videos</em> instantly via a smooth, low-latency interface built with <strong>Flask + AJAX</strong>.
                        </p>
                    </div>
                    <br /><br />
                    {/* Section 3: Usage Metrics */}
                    <div>
                        <h3 className="text-2xl font-semibold mb-2 flex justify-center items-center gap-2 text-[#000000] dark:text-orange-500">
                            <BarChart2 className="w-6 h-6" />
                            Student Engagement 
                        </h3>
                        <br /><br />
                        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-lg font-medium text-[#262626] dark:text-gray-200">
                            <div>📈 <strong>5,500+</strong> Times Users Accessed SARA v1</div>
                            <div>🌐 <strong>1,700+</strong> Unique Ip Adresses Detected</div>
                            <div>🧪 <strong>1,200+</strong> Unique Users Detected</div>
                            <div>🔥 <strong>556</strong> Peak Interactions in Single Day <br />(Apr 21,2023)</div>
                            <div>⏱️ <strong>3m 20s</strong> Avg Session Duration</div>
                            <div>📅 <strong>62%</strong> Active Daily Users For 2 Weeks</div>

                        </div>
                        <br /><br />
                        <p className="mt-2 text-base italic text-[#262626] dark:text-gray-200">
                            🔍 Spikes during exams hint at SARA's value during crucial academic times.
                        </p>
                    </div>

                    {/* CTA for future version */}
                    <div className="pt-4 text-xl font-semibold text-blue-600">
                        🌟 Your support fuels our vision – SARA v2 <br /> <span>more Powerful & Accessible!</span>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default Sarav1Insights;