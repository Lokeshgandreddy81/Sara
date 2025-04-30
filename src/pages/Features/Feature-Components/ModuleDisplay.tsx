// ModuleDisplay.tsx
import React from 'react';

// Map each module to the PDF URL
const moduleMap: Record<string, string> = {
  //SCHOOL OF COMPUTING
  ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
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
  //Computer Organization&Architecture[COA] IS IN CYS SEM6

  //IT SEM6
  'STQA-MODULE-1': 'Public/pdfs/School-of-Computing/IT/SEM6/SOFTWARE TESTINGQA/Module1.pdf',
  'STQA-MODULE-2': 'Public/pdfs/School-of-Computing/IT/SEM6/SOFTWARE TESTINGQA/Module2.pdf',
  'STQA-MODULE-3': 'Public/pdfs/School-of-Computing/IT/SEM6/SOFTWARE TESTINGQA/Module3.pdf',
  'STQA-MODULE-4': 'Public/pdfs/School-of-Computing/IT/SEM6/SOFTWARE TESTINGQA/Module4.pdf',
  'STQA-MODULE-5': 'Public/pdfs/School-of-Computing/IT/SEM6/SOFTWARE TESTINGQA/Module5.pdf',
  //Computer-Organization&Architecture[CAO] IS IN CYS SEM6
  // Artificial-Intelligence [AI] IS IN DS SEM6
  // Deep-Learning[DL] IS IN AIML SEM6
  // Distributed-Systems[DS] IS IN DS SEM6


  //CY S SEM6
  'COA-Module-1': 'Public/pdfs/School-of-Computing/CYBER/SEM6/COMPUTER-ARCHITECTURE-AND-ORGANIZATION/COA1.pdf',
  'COA-Module-2': 'Public/pdfs/School-of-Computing/CYBER/SEM6/COMPUTER-ARCHITECTURE-AND-ORGANIZATION/COA2.pdf',
  'COA-Module-3': 'Public/pdfs/School-of-Computing/CYBER/SEM6/COMPUTER-ARCHITECTURE-AND-ORGANIZATION/COA3.pdf',
  'COA-Module-4': 'Public/pdfs/School-of-Computing/CYBER/SEM6/COMPUTER-ARCHITECTURE-AND-ORGANIZATION/COA4.pdf',
  'COA-Module-5': 'Public/pdfs/School-of-Computing/CYBER/SEM6/COMPUTER-ARCHITECTURE-AND-ORGANIZATION/COA5.pdf',
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
  'WAS-Module-1': 'Public/pdfs/School-of-Computing/CYBER/SEM6/WEB-APPLICATION-SECURITY/',
  'WAS-Module-2': 'Public/pdfs/School-of-Computing/CYBER/SEM6/WEB-APPLICATION-SECURITY/',
  'WAS-Module-3': 'Public/pdfs/School-of-Computing/CYBER/SEM6/WEB-APPLICATION-SECURITY/',
  'WAS-Module-4': 'Public/pdfs/School-of-Computing/CYBER/SEM6/WEB-APPLICATION-SECURITY/',
  'WAS-Module-5': 'Public/pdfs/School-of-Computing/CYBER/SEM6/WEB-APPLICATION-SECURITY/',
  //------------------------------------------------------------------------------------------------------------------------------------------------
  //  CSE SEM2
  'BEEE-MODULE-1': 'Public/pdfs/School-of-Computing/CSE/SEM2/BEEE/BEEE-1.pdf',
  'BEEE-MODULE-2': 'Public/pdfs/School-of-Computing/CSE/SEM2/BEEE/BEEE-2.pdf',
  'BEEE-MODULE-3': 'Public/pdfs/School-of-Computing/CSE/SEM2/BEEE/BEEE-3.pdf',
  'BEEE-MODULE-4': 'Public/pdfs/School-of-Computing/CSE/SEM2/BEEE/BEEE-4.pdf',
  'BEEE-MODULE-5': 'Public/pdfs/School-of-Computing/CSE/SEM2/BEEE/BEEE-5.pdf',
  //**** */
  'CTT-MODULE-1': 'Public/pdfs/School-of-Computing/CSE/SEM2/CTT/CTT-Module-1.pdf',
  'CTT-MODULE-2': 'Public/pdfs/School-of-Computing/CSE/SEM2/CTT/CTT-Module-2.pdf',
  'CTT-MODULE-3': 'Public/pdfs/School-of-Computing/CSE/SEM2/CTT/CTT-Module-3.pdf',
  'CTT-MODULE-4': 'Public/pdfs/School-of-Computing/CSE/SEM2/CTT/CTT-Module-4.pdf',
  'CTT-MODULE-5': 'Public/pdfs/School-of-Computing/CSE/SEM2/CTT/CTT-Module-5.pdf',
  'DMS-MODULE-1': 'Public/pdfs/School-of-Computing/CSE/SEM2/DMS/MODULE-1.pdf',
  'DMS-MODULE-2': 'Public/pdfs/School-of-Computing/CSE/SEM2/DMS/MODULE-2.pdf',
  'DMS-MODULE-3': 'Public/pdfs/School-of-Computing/CSE/SEM2/DMS/MODULE-3.pdf',
  'DMS-MODULE-4': 'Public/pdfs/School-of-Computing/CSE/SEM2/DMS/MODULE-4.pdf',
  'DMS-MODULE-5': 'Public/pdfs/School-of-Computing/CSE/SEM2/DMS/MODULE-5.pdf',
  'OOPJ-MODULE-1': 'Public/pdfs/School-of-Computing/CSE/SEM2/OOPJ/OOPJModule-1.pdf',
  'OOPJ-MODULE-2': 'Public/pdfs/School-of-Computing/CSE/SEM2/OOPJ/OOPJModule-2.pdf',
  'OOPJ-MODULE-3': 'Public/pdfs/School-of-Computing/CSE/SEM2/OOPJ/OOPJModule-3.pdf',
  'OOPJ-MODULE-4': 'Public/pdfs/School-of-Computing/CSE/SEM2/OOPJ/OOPJModule-4.pdf',
  'OOPJ-MODULE-5': 'Public/pdfs/School-of-Computing/CSE/SEM2/OOPJ/OOPJModule-5.pdf',
  'PHEV-MODULE-1': 'Public/pdfs/School-of-Computing/CSE/SEM2/PE-&-HV/PE & HV-Module-1.pdf',
  'PHEV-MODULE-2': 'Public/pdfs/School-of-Computing/CSE/SEM2/PE-&-HV/PE & HV-Module-2.pdf',
  'PHEV-MODULE-3': 'Public/pdfs/School-of-Computing/CSE/SEM2/PE-&-HV/PE & HV-Module-3.pdf',
  'PHEV-MODULE-4': 'Public/pdfs/School-of-Computing/CSE/SEM2/PE-&-HV/PE & HV-Module-4.pdf',
  'PHEV-MODULE-5': 'Public/pdfs/School-of-Computing/CSE/SEM2/PE-&-HV/PE & HV-Module-5.pdf',
//----------------------------------------------------------------------------------------------------------------------------------------------
  //CSE SEM4
  'CN-MODULE-1': 'Public/pdfs/School-of-Computing/CSE/SEM4/CN/MODULE1.pdf',
  'CN-MODULE-2': 'Public/pdfs/School-of-Computing/CSE/SEM4/CN/MODULE2.pdf',
  'CN-MODULE-3': 'Public/pdfs/School-of-Computing/CSE/SEM4/CN/MODULE3.pdf',
  'CN-MODULE-4': 'Public/pdfs/School-of-Computing/CSE/SEM4/CN/MODULE4.pdf',
  'CN-MODULE-5': 'Public/pdfs/School-of-Computing/CSE/SEM4/CN/MODULE5.pdf',
  'DAA-MODULE-1': 'Public/pdfs/School-of-Computing/CSE/SEM4/DAA/DAA-1.pdf',
  'DAA-MODULE-2': 'Public/pdfs/School-of-Computing/CSE/SEM4/DAA/DAA-2.pdf',
  'DAA-MODULE-3': 'Public/pdfs/School-of-Computing/CSE/SEM4/DAA/DAA-3.pdf',
  'DAA-MODULE-4': 'Public/pdfs/School-of-Computing/CSE/SEM4/DAA/DAA-4.pdf',
  'DAA-MODULE-5': 'Public/pdfs/School-of-Computing/CSE/SEM4/DAA/DAA-5.pdf',
  //*** */
  'SE-MODULE-1': 'Public/pdfs/School-of-Computing/CSE/SEM4/SE/SE-1.pdf',
  'SE-MODULE-2': 'Public/pdfs/School-of-Computing/CSE/SEM4/SE/SE-2.pdf',
  'SE-MODULE-3': 'Public/pdfs/School-of-Computing/CSE/SEM4/SE/SE-3.pdf',
  'SE-MODULE-4': 'Public/pdfs/School-of-Computing/CSE/SEM4/SE/SE-4.pdf',
  'SE-MODULE-5': 'Public/pdfs/School-of-Computing/CSE/SEM4/SE/SE-5.pdf',
  //Artificial-Intelligence[AI] is in DS SEM 6
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
