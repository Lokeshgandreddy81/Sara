// Sidebar.tsx
import React from 'react';

interface SidebarProps {
  subject: string;
  onModuleClick: (moduleName: string) => void; 
}

const moduleData: Record<string, string[]> = {
  'Object Oriented Modeling and Design': ['OOMD_Module 1', 'OOMD_Module 2', 'OOMD_Module 3', 'OOMD_Module 4', 'OOMD_Module 5'],
    'Artificial Neural Networks': ['ANN_Module 1', 'ANN_Module 2', 'ANN_Module 3', 'ANN_Module 4' , 'ANN_Module 5'],
    'Mobile Application Development': ['MAD_Module 1', 'MAD_Module 2', 'MAD_Module 3', 'MAD_Module 4', 'MAD_Module 5'],
    'Cyber Security Essentials': ['CSE_Module 1', 'CSE_Module 2', 'CSE_Module 3', 'CSE_Module 4', 'CSE_Module 5'],

  'Physics': ['Kinematics', 'Optics', 'Thermodynamics'],
  'Programming Basics': ['Variables', 'Loops', 'Functions'],
  'Data Structures': ['Arrays', 'Linked Lists', 'Stacks', 'Queues'],
  'Machine Learning': ['Supervised Learning', 'Unsupervised Learning', 'Neural Networks'],
  // Add other subjects and their modules here
};

const Sidebar: React.FC<SidebarProps> = ({ subject, onModuleClick }) => {
  const modules = moduleData[subject] || [];

  return (
    <aside className="w-64 bg-gray-100 dark:bg-[#2c2c2c] p-4 shadow-lg transition-all duration-300 ease-in-out">
      <h2 className="text-lg font-semibold mb-4 text-black dark:text-white">Modules for: {subject || 'None Selected'}</h2>
      <a>
      <ul className="list-disc list-inside text-black dark:text-gray-300">
        {modules.length > 0 ? (
          modules.map((module, index) => <li key={module}>
          <button
            onClick={() => onModuleClick(module)}       // ← NEW: notify parent
            className="w-full text-left px-2 py-1 rounded
                       hover:bg-indigo-200 dark:hover:bg-indigo-700"
          >
            {module}
          </button>
        </li>
        )
        ) : (
          <li>No modules available</li>
        )}
      </ul></a>
    </aside>
  );
};

export default Sidebar;
