import React from 'react'
import NavBar from '../../../componets/NavBar'
import { useState, useEffect } from 'react'
import { Auth } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { onAuthStateChanged, User } from 'firebase/auth';
import DynamicSelect from '../Feature-Components/DynamicSelect';
const Sub_select = () => {
    return (
        <div>
            <NavBar />
            <DynamicSelect />
        </div>
    );
};
export default Sub_select;
