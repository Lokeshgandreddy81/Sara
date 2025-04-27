// ModuleDisplay.tsx
import React from 'react';

// Map each module to the PDF URL
const moduleMap: Record<string, string> = {
  'ANN_Module_2': '/pdfs/',
  'CSE_Module_1': '/pdfs/CSE_Module_1.pdf',
  'ANN_Module_1': '/pdfs/ANN_Module_1.pdf',   
  // Add more mappings for other modules as needed
};

const ModuleDisplay: React.FC<{ moduleName: string }> = ({ moduleName }) => {
  if (!moduleName) {
    return <p className="p-6 italic text-gray-600">Select a subject &amp; module to view.</p>;
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
