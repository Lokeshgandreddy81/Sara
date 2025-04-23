// Sidebar.tsx
import React from 'react';

interface SidebarProps {
  subject: string;
}

const moduleData: Record<string, string[]> = {
  'Object Oriented Modeling and Design': ['Module 1', 'Module 2', 'Module 3', 'Module 4', 'Module 5'],
  'Physics': ['Kinematics', 'Optics', 'Thermodynamics'],
  'Programming Basics': ['Variables', 'Loops', 'Functions'],
  'Data Structures': ['Arrays', 'Linked Lists', 'Stacks', 'Queues'],
  'Machine Learning': ['Supervised Learning', 'Unsupervised Learning', 'Neural Networks'],
  // Add other subjects and their modules here
};

const Sidebar: React.FC<SidebarProps> = ({ subject }) => {
  const modules = moduleData[subject] || [];

  return (
    <aside className="w-64 bg-gray-100 dark:bg-[#2c2c2c] p-4 shadow-lg transition-all duration-300 ease-in-out">
      <h2 className="text-lg font-semibold mb-4 text-black dark:text-white">Modules for: {subject || 'None Selected'}</h2>
      <ul className="list-disc list-inside text-black dark:text-gray-300">
        {modules.length > 0 ? (
          modules.map((module, index) => <li key={index}>{module}</li>)
        ) : (
          <li>No modules available</li>
        )}
      </ul>
    </aside>
  );
};

export default Sidebar;
