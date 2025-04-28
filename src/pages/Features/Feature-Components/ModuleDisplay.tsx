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
  'CD-Module-1': 'Public/pdfs/School-of-Computing/AIML/SEM6/CD/CD-1.pdf',
  'CD-Module-2': 'Public/pdfs/School-of-Computing/AIML/SEM6/CD/CD-2.pdf',
  'CD-Module-3': 'Public/pdfs/School-of-Computing/AIML/SEM6/CD/CD-3.pdf',
  'CD-Module-4': 'Public/pdfs/School-of-Computing/AIML/SEM6/CD/CD-4.pdf',
  'CD-Module-5': 'Public/pdfs/School-of-Computing/AIML/SEM6/CD/CD-5.pdf',
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
  'AI-Module-1': 'Public/pdfs/School-of-Computing/DS/SEM6/AI/Module1.pdf',
  'AI-Module-2': 'Public/pdfs/School-of-Computing/DS/SEM6/AI/Module2.pdf',
  'AI-Module-3': 'Public/pdfs/School-of-Computing/DS/SEM6/AI/Module3.pdf',
  'AI-Module-4': 'Public/pdfs/School-of-Computing/DS/SEM6/AI/Module4.pdf',
  'AI-Module-5': 'Public/pdfs/School-of-Computing/DS/SEM6/AI/Module5.pdf',
  'CA-Module-1': 'Public/pdfs/School-of-Computing/DS/SEM6/Computer-Architecture/CA1.pdf',
  'CA-Module-2': 'Public/pdfs/School-of-Computing/DS/SEM6/Computer-Architecture/CA2.pdf',
  'CA-Module-3': 'Public/pdfs/School-of-Computing/DS/SEM6/Computer-Architecture/CA3.pdf',
  'CA-Module-4': 'Public/pdfs/School-of-Computing/DS/SEM6/Computer-Architecture/CA4.pdf',
  'CA-Module-5': 'Public/pdfs/School-of-Computing/DS/SEM6/Computer-Architecture/CA5.pdf',
  // Deep learning[DL] is in AIML SEM 6
  //CY S SEM6
  'CAO-Module-1': 'Public/pdfs/School-of-Computing/CYBER/SEM6/COMPUTER-ARCHITECTURE-AND-ORGANIZATION/CAO1.pdf',
  'CAO-Module-2': 'Public/pdfs/School-of-Computing/CYBER/SEM6/COMPUTER-ARCHITECTURE-AND-ORGANIZATION/CAO2.pdf',
  'CAO-Module-3': 'Public/pdfs/School-of-Computing/CYBER/SEM6/COMPUTER-ARCHITECTURE-AND-ORGANIZATION/CAO3.pdf',
  'CAO-Module-4': 'Public/pdfs/School-of-Computing/CYBER/SEM6/COMPUTER-ARCHITECTURE-AND-ORGANIZATION/CAO4.pdf',
  'CAO-Module-5': 'Public/pdfs/School-of-Computing/CYBER/SEM6/COMPUTER-ARCHITECTURE-AND-ORGANIZATION/CAO5.pdf',
  'CNS-Module-1': 'Public/pdfs/School-of-Computing/CYBER/SEM6/CRYPTOGRAPHY-AND-NETWORK/MODULE-1Notes.pdf',
  'CNS-Module-2': 'Public/pdfs/School-of-Computing/CYBER/SEM6/CRYPTOGRAPHY-AND-NETWORK/MODULE-2Notes.pdf',
  'CNS-Module-3': 'Public/pdfs/School-of-Computing/CYBER/SEM6/CRYPTOGRAPHY-AND-NETWORK/MODULE-3Notes.pdf',
  'CNS-Module-4': 'Public/pdfs/School-of-Computing/CYBER/SEM6/CRYPTOGRAPHY-AND-NETWORK/MODULE-4Notes.pdf',
  'CNS-Module-5': 'Public/pdfs/School-of-Computing/CYBER/SEM6/CRYPTOGRAPHY-AND-NETWORK/MODULE-5Notes.pdf',
  'EH-Module-1': 'Public/pdfs/School-of-Computing/CYBER/SEM6/ETHICAL-HACKING/EthicalHackingModule1.pdf',
  'EH-Module-2': 'Public/pdfs/School-of-Computing/CYBER/SEM6/ETHICAL-HACKING/EthicalHackingModule2.pdf',
  'EH-Module-3': 'Public/pdfs/School-of-Computing/CYBER/SEM6/ETHICAL-HACKING/EthicalHackingModule3.pdf',
  'EH-Module-4': 'Public/pdfs/School-of-Computing/CYBER/SEM6/ETHICAL-HACKING/EthicalHackingModule4.pdf',
  'EH-Module-5': 'Public/pdfs/School-of-Computing/CYBER/SEM6/ETHICAL-HACKING/EthicalHackingModule5.pdf',
  'WAS-Module-1':'Public/pdfs/School-of-Computing/CYBER/SEM6/WEB-APPLICATION-SECURITY/',
  'WAS-Module-2':'Public/pdfs/School-of-Computing/CYBER/SEM6/WEB-APPLICATION-SECURITY/',
  'WAS-Module-3':'Public/pdfs/School-of-Computing/CYBER/SEM6/WEB-APPLICATION-SECURITY/',
  'WAS-Module-4':'Public/pdfs/School-of-Computing/CYBER/SEM6/WEB-APPLICATION-SECURITY/',
  'WAS-Module-5':'Public/pdfs/School-of-Computing/CYBER/SEM6/WEB-APPLICATION-SECURITY/',

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
