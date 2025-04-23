import React, { useState } from 'react';
import SearchBar from './SearchBar';
import Sidebar from './SideBar';
import Footer from '../../../componets/Footer_FIn';

// Full hierarchy: School → Branch → Semester → Subjects
const schoolData: Record<
  string,
  Record<
    string,
    Record<string, string[]>  
  >
> = {
  'School of Computing': {
    CSE: {
      '1st Sem': ['Maths I', 'Physics', 'Programming Basics'],
      '2nd Sem': ['Maths II', 'Data Structures', 'Digital Logic'],
      '3rd Sem': ['Algorithms', 'Computer Networks'],
        '4th Sem': ['Database Management', 'Operating Systems'],
        '5th Sem': ['Software Engineering', 'Web Development'],
        '6th Sem': ['Object Oriented Modeling and Design', 'Artificial Neural Networks', 'Mobile Application Development', 'Cyber Security Essentials'],
        '7th Sem': ['Artificial Intelligence', 'Data Mining'],
        '8th Sem': ['Cyber Security', 'Big Data'],
    },
    IT: {
      '1st Sem': ['Discrete Maths', 'Introduction to IT'],
      '2nd Sem': ['Data Structures', 'Web Technologies'],
        '3rd Sem': ['Database Systems', 'Software Engineering'],
            '4th Sem': ['Computer Networks', 'Operating Systems'],
            '5th Sem': ['Mobile Computing', 'Cloud Computing'],
            '6th Sem': ['Data Mining', 'Machine Learning'],
            '7th Sem': ['Cyber Security', 'Big Data'],
            '8th Sem': ['Artificial Intelligence', 'Web Development'],
    },
  },
  'School of Electronics': {
    ECE: {
      '1st Sem': ['Basic Electronics', 'Circuit Theory'],
      '2nd Sem': ['Signal Processing', 'Network Analysis'],
        '3rd Sem': ['Microprocessors', 'Control Systems'],
            '4th Sem': ['Digital Electronics', 'Communication Systems'],
            '5th Sem': ['Embedded Systems', 'VLSI Design'],
            '6th Sem': ['Wireless Communication', 'Optical Communication'],
            '7th Sem': ['Digital Signal Processing', 'Image Processing'],
            '8th Sem': ['IoT', 'Machine Learning'],
    },
    EEE: {
      '1st Sem': ['Electrical Machines I', 'Engineering Physics'],
      '2nd Sem': ['Power Systems', 'Analog Electronics'],
      '3rd Sem': ['Electrical Machines II', 'Control Systems Lab'],
        '4th Sem': ['Power Electronics', 'Microcontrollers'],
        '5th Sem': ['Renewable Energy', 'Electrical Drives'],   
        '6th Sem': ['Power System Analysis', 'Electrical Measurements'],
        '7th Sem': ['High Voltage Engineering', 'Electrical Safety'],
        '8th Sem': ['Smart Grids', 'Electrical System Design'],
    },
  },
  'School of Engineering': {
    Polytechnic: {
      '1st Sem': ['Applied Physics', 'Technical Drawing'],
      '2nd Sem': ['Engineering Maths', 'Workshop Practice'],   
      '3rd Sem': ['Engineering Mechanics', 'Thermodynamics'],
        '4th Sem': ['Fluid Mechanics', 'Material Science'],
        '5th Sem': ['Machine Design', 'Manufacturing Process'],
        '6th Sem': ['Thermal Engineering', 'CAD/CAM'],
        
    },
  },
};

const DynamicSelect: React.FC = () => {
  const [selectedSchool, setSelectedSchool] = useState('');
  const [selectedBranch, setSelectedBranch] = useState('');
  const [selectedSemester, setSelectedSemester] = useState('');
  const [selectedSubject, setSelectedSubject] = useState('');

  const branches = selectedSchool ? Object.keys(schoolData[selectedSchool]) : [];
  const semesters =
    selectedSchool && selectedBranch
      ? Object.keys(schoolData[selectedSchool][selectedBranch])
      : [];
  const subjects =
    selectedSchool && selectedBranch && selectedSemester
      ? schoolData[selectedSchool][selectedBranch][selectedSemester]
      : [];

  return (
    <>
    <div className='flex max-h-full bg-gray-200 dark:bg-[#1f1f1f] transition-all duration-300 ease-in-out'>
    <div className="flex  gap-4 max-w-full p-4 mx-auto bg-gray-200 shadow-md dark:bg-[#1f1f1f] transition-all duration-300 ease-in-out">
      {/* School Select */}
      <label className="block text-black mb-2 dark:text-gray-200 transition-all duration-300 ease-in-out  ">
        Select School
        <select className=" px-2 py-2 border rounded-lg focus:ring-2 focus:ring-[#4F46E5] focus:border-transparent dark:focus:ring-orange-600 dark:bg-[#1f1f1f] dark:text-white transition-all duration-300 ease-in-out" 
          value={selectedSchool}
          onChange={(e) => {
            setSelectedSchool(e.target.value);
            setSelectedBranch('');
            setSelectedSemester('');
            setSelectedSubject('');
          }}
          
        >
          <option value="">-- Select School --</option>
          {Object.keys(schoolData).map((school) => (
            <option key={school} value={school}>
              {school}
            </option>
          ))}
        </select>
      </label>

      {/* Branch Select */}
      <label className="block text-black mb-2 dark:text-gray-200 transition-all duration-300 ease-in-out  ">
        Select Branch
        <select className=" px-4 py-2 border rounded-lg focus:ring-2 focus:ring-[#4F46E5] focus:border-transparent dark:focus:ring-orange-600 dark:bg-[#1f1f1f] dark:text-white transition-all duration-300 ease-in-out"
          value={selectedBranch}
          onChange={(e) => {
            setSelectedBranch(e.target.value);
            setSelectedSemester('');
            setSelectedSubject('');
          }}
          disabled={!selectedSchool}
       
        >
          <option value="">-- Select Branch --</option>
          {branches.map((branch) => (
            <option key={branch} value={branch}>
              {branch}
            </option>
          ))}
        </select>
      </label>

      {/* Semester Select */}
      <label className="block text-black mb-2 dark:text-gray-200 transition-all duration-300 ease-in-out  ">
        Select Semester
        <select className=" px-4 py-2 border rounded-lg focus:ring-2 focus:ring-[#4F46E5] focus:border-transparent dark:focus:ring-orange-600 dark:bg-[#1f1f1f] dark:text-white transition-all duration-300 ease-in-out"
          value={selectedSemester}
          onChange={(e) => {
            setSelectedSemester(e.target.value);
            setSelectedSubject('');
          }}
          disabled={!selectedBranch}
        >
          <option value="">-- Select Semester --</option>
          {semesters.map((sem) => (
            <option key={sem} value={sem}>
              {sem}
            </option>
          ))}
        </select>
      </label>

      {/* Subject Select */}
      <label className="block text-black mb-2 dark:text-gray-200 transition-all duration-300 ease-in-out justify-center">
        Select Subject
        <select className=" px-4 py-2 border rounded-lg focus:ring-2 focus:ring-[#4F46E5] focus:border-transparent dark:focus:ring-orange-600 dark:bg-[#1f1f1f] dark:text-white transition-all duration-300 ease-in-out"
          value={selectedSubject}
          onChange={(e) => setSelectedSubject(e.target.value)}
          disabled={!selectedSemester}
        >
          <option value="">-- Select Subject --</option>
          {subjects.map((subj) => (
            <option key={subj} value={subj}>
              {subj}
            </option>
          ))}
        </select>
      </label>
        <SearchBar />
    </div>
    </div>
    <div className="flex min-h-screen min-w-30 bg-gray-200 dark:bg-[#1f1f1f] transition-all duration-300 ease-in-out">
      <Sidebar subject={selectedSubject} />
    </div>
    <Footer />
    </>
  );
};

export default DynamicSelect;
