import React from 'react';
import { membersData } from '../data/members';
import '../componets/TeamPortfolio.css'; // Import CSS for styling
import  Footer  from '../componets/Footer_FIn';
import AbtSara from '../componets/AbtSara'
import NavBar from '../componets/NavBar';
import NavBar2 from '../componets/NavBar2';

interface TeamPortfolioProps { }

const TeamPortfolio: React.FC<TeamPortfolioProps> = () => {
    return (
        <>
        {/* <NavBar2 /> */}
        <NavBar />
        <AbtSara />
        <div className="team-portfolio bg-[#fafafa] dark:bg-[#1f1f1f]">
            <h2 className='text-black dark:text-orange-500 text-3xl'>Meet Our Team</h2>
            <br></br>
            <p className='text-xm text-gray-800 dark:text-[#d6d6d6]'>Behind SARA AI is a passionate and driven team united by a shared vision — to revolutionize education through innovation, empathy, and technology. With a strong spirit of collaboration, each member contributes unique expertise while working closely together to bring the best learning and wellness experience to life for students.</p>
            <div className="members-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 p-4">
                {membersData.map((member) => (

                    <div key={member.id} className="member-card bg-[#f0f0f0] dark:bg-[#262626] rounded-xl shadow-lg p-4 md:p-6 hover:shadow-2xl transition-shadow duration-300 ease-in-out">
                        <div>
                            <img src={member.photoUrl} alt={member.name} className="member-photo" />
                            <h3 className='text-xl text-black dark:text-white '>{member.name}</h3>
                            <p className="member-role text-orange-500">{member.role}</p>
                        </div>
                        <ul className="member-details text-gray-900 dark:text-gray-300 mt-4">
                            {member.details.map((detail, index) => (
                                <li key={index}>{detail}</li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div><br/><br/><br/><br/><br/>
            
        
        </div><Footer />
        </>
    );
};

export default TeamPortfolio;