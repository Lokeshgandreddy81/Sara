import React from "react";
import NavBar from "../../../componets/NavBar";
import DynamicVid from "../Feature-Components/DynamicVid";
import Sidebar from "../Feature-Components/SideBar";
const VidSelect1 :React.FC = () => {
    return (
        <div className='dark:bg-[#1f1f1f] bg-gray-200'>
        <NavBar />
        <p className='dark:bg-[#1f1f1f] dark:text-orange-500 text-center my-2'> <span className='text-xl'>Youtube Tutorials </span> </p>
    
            <DynamicVid />
        </div>
    );
};
export default VidSelect1;