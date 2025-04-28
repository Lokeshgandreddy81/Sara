// ModuleDisplay.tsx
import React from 'react';

// Map each module to the PDF URL
const moduleMap: Record<string, string> = {
  'CSE-Module-1': 'Public/pdfs/School-of-Computing/CSE/SEM6/cse/CSE-MODULE-1.pdf',
  'CSE-Module-2': 'Public/pdfs/School-of-Computing/CSE/SEM6/cse/CSE-MODULE-2.pdf',
  'CSE-Module-3': 'Public/pdfs/School-of-Computing/CSE/SEM6/cse/CSE-MODULE-3.pdf',
  'CSE-Module-4': 'Public/pdfs/School-of-Computing/CSE/SEM6/cse/CSE-MODULE-4.pdf',
  'CSE-Module-5': 'Public/pdfs/School-of-Computing/CSE/SEM6/cse/CSE-MODULE-5.pdf',
  'ANN-Module-1': 'Public/pdfs/School-of-Computing/CSE/SEM6/ANN/ANN-1.pdf',
  'ANN-Module-2': 'Public/pdfs/School-of-Computing/CSE/SEM6/ANN/ANN-2.pdf',
  'ANN-Module-3': 'Public/pdfs/School-of-Computing/CSE/SEM6/ANN/ANN-3.pdf',
  'ANN-Module-4': 'Public/pdfs/School-of-Computing/CSE/SEM6/ANN/ANN-4.pdf',
  'ANN-Module-5': 'Public/pdfs/School-of-Computing/CSE/SEM6/ANN/ANN-5.pdf',

  // Add more mappings for other modules as needed
};

const ModuleDisplay: React.FC<{ moduleName: string }> = ({ moduleName }) => {
  if (!moduleName) {
    return <p className="p-6 italic text-gray-600 dark:text-gray-400">Choose a subject &amp; Select a module to view.</p>;
  }

  const pdfUrl = moduleMap[moduleName];

  if (!pdfUrl) {
    return (
      <p className="p-6 text-red-600">
        No PDF available for “{moduleName}”.
      </p>
    );
  }

  return (
    <div className="w-full h-screen">
      <iframe
        src={pdfUrl}
        title={moduleName}
        className="w-full h-full border-none"
      />
    </div>
  );
};

export default ModuleDisplay;
