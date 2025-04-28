// ModuleDisplay.tsx
import React from 'react';

// Map each module to the PDF URL
const moduleMap: Record<string, string> = {
  //CSE SEM 6
  'CSE-Module-1': 'Public/pdfs/School-of-Computing/CSE/SEM6/CSE/CSE-MODULE-1.pdf',
  'CSE-Module-2': 'Public/pdfs/School-of-Computing/CSE/SEM6/CSE/CSE-MODULE-2.pdf',
  'CSE-Module-3': 'Public/pdfs/School-of-Computing/CSE/SEM6/CSE/CSE-MODULE-3.pdf',
  'CSE-Module-4': 'Public/pdfs/School-of-Computing/CSE/SEM6/CSE/CSE-MODULE-4.pdf',
  'CSE-Module-5': 'Public/pdfs/School-of-Computing/CSE/SEM6/CSE/CSE-MODULE-5.pdf',
  'ANN-Module-1': 'Public/pdfs/School-of-Computing/CSE/SEM6/ANN/ANN-1.pdf',
  'ANN-Module-2': 'Public/pdfs/School-of-Computing/CSE/SEM6/ANN/ANN-2.pdf',
  'ANN-Module-3': 'Public/pdfs/School-of-Computing/CSE/SEM6/ANN/ANN-3.pdf',
  'ANN-Module-4': 'Public/pdfs/School-of-Computing/CSE/SEM6/ANN/ANN-4.pdf',
  'ANN-Module-5': 'Public/pdfs/School-of-Computing/CSE/SEM6/ANN/ANN-5.pdf',
  'OOMD-Module-1': 'Public/pdfs/School-of-Computing/CSE/SEM6/OOMD/OOMD-1.pdf',
  'OOMD-Module-2': 'Public/pdfs/School-of-Computing/CSE/SEM6/OOMD/OOMD-2.pdf',
  'OOMD-Module-3': 'Public/pdfs/School-of-Computing/CSE/SEM6/OOMD/OOMD-3.pdf',
  'OOMD-Module-4': 'Public/pdfs/School-of-Computing/CSE/SEM6/OOMD/OOMD-4.pdf',
  'OOMD-Module-5': 'Public/pdfs/School-of-Computing/CSE/SEM6/OOMD/OOMD-5.pdf',
  'MAD-Module-1': 'Public/pdfs/School-of-Computing/CSE/SEM6/MAD/MADFULLMATERIAL-1.pdf',
  'MAD-Module-2': 'Public/pdfs/School-of-Computing/CSE/SEM6/MAD/MADFULLMATERIAL-2.pdf',
  'MAD-Module-3': 'Public/pdfs/School-of-Computing/CSE/SEM6/MAD/MADFULLMATERIAL-3.pdf',
  'MAD-Module-4': 'Public/pdfs/School-of-Computing/CSE/SEM6/MAD/MADFULLMATERIAL-4.pdf',
  'MAD-Module-5': 'Public/pdfs/School-of-Computing/CSE/SEM6/MAD/MADFULLMATERIAL-5.pdf',
  //AIML SEM6
  'CC-Module-1': 'Public/pdfs/School-of-Computing/AIML/SEM6/CC/CC-1.pdf',
  'CC-Module-2': 'Public/pdfs/School-of-Computing/AIML/SEM6/CC/CC-2.pdf',
  'CC-Module-3': 'Public/pdfs/School-of-Computing/AIML/SEM6/CC/CC-3.pdf',
  'CC-Module-4': 'Public/pdfs/School-of-Computing/AIML/SEM6/CC/CC-4.pdf',
  'CC-Module-5': 'Public/pdfs/School-of-Computing/AIML/SEM6/CC/CC-5.pdf',
  'DL-Module-1': 'Public/pdfs/School-of-Computing/AIML/SEM6/DL/DL(MODULE-I).pdf',
  'DL-Module-2': 'Public/pdfs/School-of-Computing/AIML/SEM6/DL/DL(MODULE-II).pdf',
  'DL-Module-3': 'Public/pdfs/School-of-Computing/AIML/SEM6/DL/DL(MODULE-III).pdf',
  'DL-Module-4': 'Public/pdfs/School-of-Computing/AIML/SEM6/DL/DL(MODULE-IV).pdf',
  'DL-Module-5': 'Public/pdfs/School-of-Computing/AIML/SEM6/DL/DL(MODULE-V).pdf',
  //DS SEM6
  'DiS-Module-1': 'Public/pdfs/School-of-Computing/DS/SEM6/Distributed-systems/Module-1.pdf',
  'DiS-Module-2': 'Public/pdfs/School-of-Computing/DS/SEM6/Distributed-systems/Module-2.pdf',
  'DiS-Module-3': 'Public/pdfs/School-of-Computing/DS/SEM6/Distributed-systems/Module-3.pdf',
  'DiS-Module-4': 'Public/pdfs/School-of-Computing/DS/SEM6/Distributed-systems/Module-4.pdf',
  'DiS-Module-5': 'Public/pdfs/School-of-Computing/DS/SEM6/Distributed-systems/Module-5.pdf',
  'SS-Module-5': 'Public/pdfs/School-of-Computing/DS/SEM6/Software-Systems/Module1.pdf',
  'SS-Module-1': 'Public/pdfs/School-of-Computing/DS/SEM6/Software-Systems/Module2.pdf',
  'SS-Module-2': 'Public/pdfs/School-of-Computing/DS/SEM6/Software-Systems/Module3.pdf',
  'SS-Module-3': 'Public/pdfs/School-of-Computing/DS/SEM6/Software-Systems/Module4.pdf',
  'SS-Module-4': 'Public/pdfs/School-of-Computing/DS/SEM6/Software-Systems/Module5.pdf',
  'AI-Module-1': 'Public/pdfs/School-of-Computing/DS/SEM6/AI/',
  'AI-Module-2': 'Public/pdfs/School-of-Computing/DS/SEM6/AI/',
  'AI-Module-3': 'Public/pdfs/School-of-Computing/DS/SEM6/AI/',
  'AI-Module-4': 'Public/pdfs/School-of-Computing/DS/SEM6/AI/',
  'AI-Module-5': 'Public/pdfs/School-of-Computing/DS/SEM6/AI/',
  'CA-Module-1': 'Public/pdfs/School-of-Computing/DS/SEM6/Computer-Architecture/',
  'CA-Module-2': 'Public/pdfs/School-of-Computing/DS/SEM6/Computer-Architecture/',
  'CA-Module-3': 'Public/pdfs/School-of-Computing/DS/SEM6/Computer-Architecture/',
  'CA-Module-4': 'Public/pdfs/School-of-Computing/DS/SEM6/Computer-Architecture/',
  'CA-Module-5': 'Public/pdfs/School-of-Computing/DS/SEM6/Computer-Architecture/',

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
