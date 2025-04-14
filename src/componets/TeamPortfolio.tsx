import React from 'react';
import { membersData } from '../data/members';
import './TeamPortfolio.css'; // Import CSS for styling
import  Footer  from './Footer_FIn';

interface TeamPortfolioProps { }

const TeamPortfolio: React.FC<TeamPortfolioProps> = () => {
    return (
        <div className="team-portfolio bg-[#fafafa] dark:bg-[#1f1f1f]">
            <h2 className='text-black dark:text-white text-3xl'>Our Talented Team</h2>
            <div className="members-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
                {membersData.map((member) => (

                    <div key={member.id} className="member-card bg-[#f0f0f0] dark:bg-[#262626] rounded-xl shadow-lg p-6 hover:shadow-2xl transition-shadow duration-300 ease-in-out">
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
            </div>
            <Footer />
        
        </div>
    );
};

export default TeamPortfolio;