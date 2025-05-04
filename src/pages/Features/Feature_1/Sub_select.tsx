import React from 'react'
import NavBar from '../../../componets/NavBar'
import { useState, useEffect } from 'react'
import { Auth } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { onAuthStateChanged, User } from 'firebase/auth';
import DynamicSelect from '../Feature-Components/DynamicSelect';
const Sub_select = () => {
    return (
        <div className='dark:bg-[#1f1f1f] bg-gray-200'>
            <NavBar />
            <p className='dark:bg-[#1f1f1f] dark:text-orange-500 text-center my-2'> <span className='text-xl'>Smart Study Guide </span> </p>
            {/* <p>feature is Currently Available for School of compting Students Only...</p> */}
            <DynamicSelect />
        </div>
    );
};
export default Sub_select;
