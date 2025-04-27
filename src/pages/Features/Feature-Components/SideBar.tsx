// Sidebar.tsx
import React from 'react';

interface SidebarProps {
  subject: string;
  onModuleClick: (moduleName: string) => void;
}

const moduleData: Record<string, string[]> = {
  'Object-Oriented-Modeling-and-Design': ['OOMD-Module-1', 'OOMD-Module-2', 'OOMD-Module-3', 'OOMD-Module-4', 'OOMD-Module-5'],
  'Artificial-Neural-Networks': ['ANN-Module-1', 'ANN-Module-2', 'ANN-Module-3', 'ANN-Module-4', 'ANN-Module-5'],
  'Mobile-Application-Development': ['MAD-Module-1', 'MAD-Module-2', 'MAD-Module-3', 'MAD-Module-4', 'MAD-Module-5'],
  'Cyber-Security-Essentials': ['CSE-Module-1', 'CSE-Module-2', 'CSE-Module-3', 'CSE-Module-4', 'CSE-Module-5'],
  'Cloud-Computing': ['CC-Module-1', 'CC-Module-2', 'CC-Module-3', 'CC-Module-4', 'CC-Module-5'],
  'Compiler-Design':['CD-Module-1', 'CD-Module-2', 'CD-Module-3', 'CD-Module-4', 'CD-Module-5'],
  'Deep-Learning':['DL-Module-1', 'DL-Module-2', 'DL-Module-3', 'DL-Module-4', 'DL-Module-5'],
  'Software-Systems':['SS-Module-1', 'SS-Module-2', 'SS-Module-3', 'SS-Module-4', 'SS-Module-5'],
  'Disturbuted-Systems':['DiS-Module-1', 'DiS-Module-2', 'DiS-Module-3', 'DiS-Module-4', 'DiS-Module-5'],
  'Computer-Architecture':['CA-Module-1', 'CA-Module-2', 'CA-Module-3', 'CA-Module-4', 'CA-Module-5'],
  'Artificial-Intelligence':['AI-Module-1', 'AI-Module-2', 'AI-Module-3', 'AI-Module-4', 'AI-Module-5'],
  
  // Add other subjects and their modules here
};

const Sidebar: React.FC<SidebarProps> = ({ subject, onModuleClick }) => {
  const modules = moduleData[subject] || [];

  return (
    <aside className="w-64 bg-gray-100 dark:bg-[#2c2c2c] p-4 shadow-lg transition-all duration-300 ease-in-out">
      <h2 className="text-lg font-semibold mb-4 text-black dark:text-white">Modules for: {subject || 'None Selected'}</h2>
      <ul className="list-disc list-inside text-black dark:text-gray-300">
        {modules.length > 0 ? (
          modules.map((module) => (
            <li key={module}>
              <button
                onClick={() => onModuleClick(module)}
                className="w-full text-left px-2 py-1 rounded hover:bg-indigo-200 dark:hover:bg-indigo-700"
              >
                {module}
              </button>
            </li>
          ))
        ) : (
          <li>No modules available</li>
        )}
      </ul>
    </aside>
  );
};

export default Sidebar;
