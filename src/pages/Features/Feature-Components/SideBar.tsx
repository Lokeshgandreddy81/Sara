// Sidebar.tsx
import React from 'react';

interface SidebarProps {
  subject: string;
  onModuleClick: (moduleName: string) => void;
}

const moduleData: Record<string, string[]> = {
  //SCHOOL OF COMPUTING
  //CSE SEM6
  'Object-Oriented-Modeling-and-Design[OOMD]': ['OOMD-Module-1', 'OOMD-Module-2', 'OOMD-Module-3', 'OOMD-Module-4', 'OOMD-Module-5'],
  'Artificial-Neural-Networks[ANN]': ['ANN-Module-1', 'ANN-Module-2', 'ANN-Module-3', 'ANN-Module-4', 'ANN-Module-5'],
  'Mobile-Application-Development[MAD]': ['MAD-Module-1', 'MAD-Module-2', 'MAD-Module-3', 'MAD-Module-4', 'MAD-Module-5'],
  'Cyber-Security-Essentials[CSE]': ['CSE-Module-1', 'CSE-Module-2', 'CSE-Module-3', 'CSE-Module-4', 'CSE-Module-5'],

  //IT SEM6
  'Software-Testing&QA[STQA]': ['STQA-MODULE-1', 'STQA-MODULE-2', 'STQA-MODULE-3', 'STQA-MODULE-4', 'STQA-MODULE-5',],
  //Computer-Organization&Architecture[CAO] IS IN CYS SEM6
  // Artificial-Intelligence [AI] IS IN DS SEM6
  // Deep-Learning[DL] IS IN AIML SEM6
  // Distributed-Systems[DS] IS IN DS SEM6


  // DS SEM6
  'Software-Testing&QS[STQS]': ['STQS-Module-1', 'STQS-Module-2', 'STQS-Module-3', 'STQS-Module-4', 'STQS-Module-5'],
  'Distributed-Systems[DS]': ['DiS-Module-1', 'DiS-Module-2', 'DiS-Module-3', 'DiS-Module-4', 'DiS-Module-5'],
  'Artificial-Intelligence[AI]': ['AI-Module-1', 'AI-Module-2', 'AI-Module-3', 'AI-Module-4', 'AI-Module-5'],
  // Deep learning[DL] is in AIML SEM 6
  //Computer-Organization&Architecture[CAO] IS IN CYS SEM6


  //  AIML SEM6
  'Cloud-Computing[CC]': ['CC-Module-1', 'CC-Module-2', 'CC-Module-3', 'CC-Module-4', 'CC-Module-5'],
  'Compiler-Design[CD]': ['CD-Module-1', 'CD-Module-2', 'CD-Module-3', 'CD-Module-4', 'CD-Module-5'],
  'Deep-Learning[DL]': ['DL-Module-1', 'DL-Module-2', 'DL-Module-3', 'DL-Module-4', 'DL-Module-5'],


  //CYS SEM6
  'Computer-Architecture&Organization[CAO]': ['CAO-Module-1', 'CAO-Module-2', 'CAO-Module-3', 'CAO-Module-4', 'CAO-Module-5'],
  'Cryptography-and-Network-Security[CNS]': ['CNS-Module-1', 'CNS-Module-2', 'CNS-Module-3', 'CNS-Module-4', 'CNS-Module-5'],
  'Ethical-Hacking[EH]': ['EH-Module-1', 'EH-Module-2', 'EH-Module-3', 'EH-Module-4', 'EH-Module-5'],
  'Web-Application-Security[WAS]': ['WAS-Module-1', 'WAS-Module-2', 'WAS-Module-3', 'WAS-Module-4', 'WAS-Module-5'],

  //CSE SEM4
  'Computer-Networks[CN]': ['CN-MODULE-1', 'CN-MODULE-2', 'CN-MODULE-3', 'CN-MODULE-4', 'CN-MODULE-5'],
  'Design-Analysis&Algorithms[DAA]': ['DAA-MODULE-1', 'DAA-MODULE-2', 'DAA-MODULE-3', 'DAA-MODULE-4', 'DAA-MODULE-5'],
  'Software Engineering[SE]': ['SE-MODULE-1', 'SE-MODULE-2', 'SE-MODULE-3', 'SE-MODULE-4', 'SE-MODULE-5'],
  //Artificial-Intelligence[AI] is in DS SEM 6

  //IT SEM4
  'Data-Mining[DM]': ['DM-MODULE-1', 'DM-MODULE-2', 'DM-MODULE-3', 'DM-MODULE-4', 'DM-MODULE-5'],
  // 'Computer-Networks[CN]'&'Design-Analysis&Algorithms[DAA]' is in CSE SEM4

  //DS SEM4
  'Theory-of-Computation[TOC]': ['TOC-MODULE-1', 'TOC-MODULE-2', 'TOC-MODULE-3', 'TOC-MODULE-4', 'TOC-MODULE-5'],
  'R-Programming[RP]': ['RP-MODULE-1', 'RP-MODULE-2', 'RP-MODULE-3', 'RP-MODULE-4', 'RP-MODULE-5'],
  //'Computer-Networks[CN]'& 'Software-Engineering[SE]' IS IN CSE SEM4

  //AIML SEM4
  //'Computer-Networks[CN]'& 'Software-Engineering[SE]' IS IN CSE SEM4
  //'Theory-of-Computation[TOC]' IS IN DS SEM4
  //Artificial-Intelligence[AI] is in DS SEM 6

  //CS SEM4
  'Internet-of-Things[IOT]': ['IOT-MODULE-1', 'IOT-MODULE-2', 'IOT-MODULE-3', 'IOT-MODULE-4', 'IOT-MODULE-5'],
  // 'Software-Engineering[SE]' IS IN CSE SEM4
  //Data-Mining[DM] IS IN IT SEM4
  //'Theory-of-Computation[TOC]' IS IN DS SEM4

  //CSE SEM2
  'Basic-EEE[BEEE]': ['BEEE-MODULE-1', 'BEEE-MODULE-2', 'BEEE-MODULE-3', 'BEEE-MODULE-4', 'BEEE-MODULE-5'],
  'Calculus-T&T[CTT]': ['CTT-MODULE-1', 'CTT-MODULE-2', 'CTT-MODULE-3', 'CTT-MODULE-4', 'CTT-MODULE-5'],
  'Discrete-Math-Structures[DMS]': ['DMS-MODULE-1', 'DMS-MODULE-2', 'DMS-MODULE-3', 'DMS-MODULE-4', 'DMS-MODULE-5'],
  'JAVA[OOPJ]': ['OOPJ-MODULE-1', 'OOPJ-MODULE-2', 'OOPJ-MODULE-3', 'OOPJ-MODULE-4', 'OOPJ-MODULE-5'],
  'Professional-Ethics&HV[PEHV]': ['PHEV-MODULE-1', 'PHEV-MODULE-2', 'PHEV-MODULE-3', 'PHEV-MODULE-4', 'PHEV-MODULE-5'],

  //IT SEM2
  // 'Python-Programming[PP]': ['PP-MODULE-1', 'PP-MODULE-2', 'PP-MODULE-3', 'PP-MODULE-4', 'PP-MODULE-5'],
  //'Basic-EEE[BEEE]', 'Calculus-T&T[CTT]', 'Discrete-Math-Structures[DMS]','JAVA[OOPJ]' IN CSE SEM2

  //DS SEM2

  'Digital-Logic-Design[DLD]': ['DLD-MODULE-1', 'DLD-MODULE-2', 'DLD-MODULE-3', 'DLD-MODULE-4', 'DLD-MODULE-5'],
  'Matrix-Theory[MTLA]': ['MTLA-MODULE-1', 'MTLA-MODULE-2', 'MTLA-MODULE-3', 'MTLA-MODULE-4', 'MTLA-MODULE-5'],
  'Physics-for-Computing[PC]': ['PC-MODULE-1', 'PC-MODULE-2', 'PC-MODULE-3', 'PC-MODULE-4', 'PC-MODULE-5'],
  //'JAVA[OOPJ]',   'Basic-EEE[BEEE]', IS IN CSE SEM2

  //AIML SEM2 & CS SEM2  HAS SAME SUBJECTS AS DS SEM2

  //SCHOOL OF ENGINEERING
  //CIVIL SEM6
  'Steel Structures[SS]': ['SS-MODULE-1', 'SS-MODULE-2', 'SS-MODULE-3', 'SS-MODULE-4', 'SS-MODULE-5'],
  'Geospatial Technologies[GT]': ['GT-MODULE-1', 'GT-MODULE-2', 'GT-MODULE-3', 'GT-MODULE-4', 'GT-MODULE-5'],

  //ECE SEM6
  'Satellite-Communications[SC]': ['SC-MODULE-1', 'SC-MODULE-2', 'SC-MODULE-3', 'SC-MODULE-4', 'SC-MODULE-5'],
  'Antennas&Propagations[AP]': ['AP-MODULE-1', 'AP-MODULE-2', 'AP-MODULE-3', 'AP-MODULE-4', 'AP-MODULE-5'],
  'Digital-Signal-Processing[DSP]': ['DSP-MODULE-1', 'DSP-MODULE-2', 'DSP-MODULE-3', 'DSP-MODULE-4', 'DSP-MODULE-5'],
  'Embedded-Systems[ES]': ['ES-MODULE-1', 'ES-MODULE-2', 'ES-MODULE-3', 'ES-MODULE-4', 'ES-MODULE-5'],

  //EEE SEM6
  'Interfacing with Microcontollers[IWM]': ['IWM-MODULE-1', 'IWM-MODULE-2', 'IWM-MODULE-3', 'IWM-MODULE-4', 'IWM-MODULE-5'],
  'Power Electronics[PE]': ['PE-MODULE-1', 'PE-MODULE-2', 'PE-MODULE-3', 'PE-MODULE-4', 'PE-MODULE-5'],
  'Power System Analysis[PSA]': ['PSA-MODULE-1', 'PSA-MODULE-2', 'PSA-MODULE-3', 'PSA-MODULE-4', 'PSA-MODULE-5'],

  //MECH SEM6
  'OPERATIONS-RESEARCH[OR]': ['OR-MODULE-1', 'OR-MODULE-2', 'OR-MODULE-3', 'OR-MODULE-4', 'OR-MODULE-5'],
  'DESIGN-OF-TRANSMISSION-SYSTEMS[DTS]': ['DTS-MODULE-1', 'DTS-MODULE-2', 'DTS-MODULE-3', 'DTS-MODULE-4', 'DTS-MODULE-5'],
  'COMPUTER-AIDED-DESIGN-AND-MANUFACTURING[CADM]': ['CADM-MODULE-1', 'CADM-MODULE-2', 'CADM-MODULE-3', 'CADM-MODULE-4', 'CADM-MODULE-5'],

  //EIE SEM6
  'Wireless-Sensor-Networks[WSN]': ['WSN-MODULE-1', 'WSN-MODULE-2', 'WSN-MODULE-3', 'WSN-MODULE-4', 'WSN-MODULE-5'],
  'Powerplant-Instrumentation[PI]': ['PI-MODULE-1', 'PI-MODULE-2', 'PI-MODULE-3', 'PI-MODULE-4', 'PI-MODULE-5'],
  'Programmable-Logic-Controllers[PLC]': ['PLC-MODULE-1', 'PLC-MODULE-2', 'PLC-MODULE-3', 'PLC-MODULE-4', 'PLC-MODULE-5'],
  // 'Digital-Signal-Processing[DSP] IS IN ECE SEM6
  // 'Embedded-Systems[ES] IS IN ECE SEM6

  //CIVIL SEM4
  'Hydrology & Water Resources Engineering[HWRE]': ['HWRE-MODULE-1', 'HWRE-MODULE-2', 'HWRE-MODULE-3', 'HWRE-MODULE-4', 'HWRE-MODULE-5'],
  'Structural Analysis[SA]': ['SA-MODULE-1', 'SA-MODULE-2', 'SA-MODULE-3', 'SA-MODULE-4', 'SA-MODULE-5'],
  'Fire Engineering[FE]': ['FE-MODULE-1', 'FE-MODULE-2', 'FE-MODULE-3', 'FE-MODULE-4', 'FE-MODULE-5'],
  'Sustainable Engineering[SE]': ['SuE-MODULE-1', 'SuE-MODULE-2', 'SuE-MODULE-3', 'SuE-MODULE-4', 'SuE-MODULE-5'],
  'Soil Mechanics[SM]': ['SM-MODULE-1', 'SM-MODULE-2', 'SM-MODULE-3', 'SM-MODULE-4', 'SM-MODULE-5'],

  //ECE SEM4
  'Analog Communications[AC]': ['AC-MODULE-1', 'AC-MODULE-2', 'AC-MODULE-3', 'AC-MODULE-4', 'AC-MODULE-5'],
  'Linear-IC-Applications[LICA]': ['LICA-MODULE-1', 'LICA-MODULE-2', 'LICA-MODULE-3', 'LICA-MODULE-4', 'LICA-MODULE-5'],
  'VLSI-System-Designs[VLSI]': ['VLSI-MODULE-1', 'VLSI-MODULE-2', 'VLSI-MODULE-3', 'VLSI-MODULE-4', 'VLSI-MODULE-5'],
  'Probability and Stochastic Processes[PSP]': ['PSP-MODULE-1', 'PSP-MODULE-2', 'PSP-MODULE-3', 'PSP-MODULE-4', 'PSP-MODULE-5'],

  //EEE SEM4
  'Transmission and Distribution[TD]': ['TD-MODULE-1', 'TD-MODULE-2', 'TD-MODULE-3', 'TD-MODULE-4', 'TD-MODULE-5'],
  'Electrical Machines-2[EM2]': ['EM2-MODULE-1', 'EM2-MODULE-2', 'EM2-MODULE-3', 'EM2-MODULE-4', 'EM2-MODULE-5'],
  'Control Systems[CS]': ['CS-MODULE-1', 'CS-MODULE-2', 'CS-MODULE-3', 'CS-MODULE-4', 'CS-MODULE-5'],
  'Data Structures And Algorithms[DSA]': ['DSA-MODULE-1', 'DSA-MODULE-2', 'DSA-MODULE-3', 'DSA-MODULE-4', 'DSA-MODULE-5'],

  //MECH SEM4
  'FLUID-MECHANICS[FM]': ['FM-MODULE-1', 'FM-MODULE-2', 'FM-MODULE-3', 'FM-MODULE-4', 'FM-MODULE-5'],
  'DYNAMICS-OF-MACHINERY[DOM]': ['DOM-MODULE-1', 'DOM-MODULE-2', 'DOM-MODULE-3', 'DOM-MODULE-4', 'DOM-MODULE-5'],
  'THERMAL-ENGINEERING[TE]': ['TE-MODULE-1', 'TE-MODULE-2', 'TE-MODULE-3', 'TE-MODULE-4', 'TE-MODULE-5'],

  //EIE SEM 4
  'Microelecricalmechanical-Systems[MS]':['MS-MODULE-1', 'MS-MODULE-2', 'MS-MODULE-3', 'MS-MODULE-4', 'MS-MODULE-5'],
  'Industrial-Instrumentation[II]':['II-MODULE-1', 'II-MODULE-2', 'II-MODULE-3', 'II-MODULE-4', 'II-MODULE-5'],
  'Linear-Control-Systems[LCS]':['LCS-MODULE-1', 'LCS-MODULE-2', 'LCS-MODULE-3', 'LCS-MODULE-4', 'LCS-MODULE-5'],
    // 'Linear-IC-Applications[LICA]','VLSI-System-Designs[VLSI]' IS IN ECE SEM4

  //CIVIL SEM2
  'Civil-Engg-Materials-&-Concrete-Tech[CEMCT]':['CEMCT-MODULE-1', 'CEMCT-MODULE-2', 'CEMCT-MODULE-3', 'CEMCT-MODULE-4', 'CEMCT-MODULE-5'],
  'Programming-in-C-&-Data-Structures[PCDS]':['PCDS-MODULE-1', 'PCDS-MODULE-2', 'PCDS-MODULE-3', 'PCDS-MODULE-4', 'PCDS-MODULE-5'],
  'Transformation-Techniques&Linear-Algebra[TTLA]':['TTLA-MODULE-1', 'TTLA-MODULE-2', 'TTLA-MODULE-3', 'TTLA-MODULE-4', 'TTLA-MODULE-5'],
    // 'Basic-EEE[BEEE]', IS IN CSE SEM2

  //ECE SEM2
  // 'Data-Structures&Algorithms[DSA]', IN ECE SEM4
  'Engineering-Chemistry[EC]':['EC-MODULE-1', 'EC-MODULE-2', 'EC-MODULE-3', 'EC-MODULE-4', 'EC-MODULE-5'],
  'Sensors&Measuring-Instruments[SMT]':['SMT-MODULE-1', 'SMT-MODULE-2', 'SMT-MODULE-3', 'SMT-MODULE-4', 'SMT-MODULE-5'],
  'Semiconductors-Devices&Circuits[SDC]':['SDC-MODULE-1', 'SDC-MODULE-2', 'SDC-MODULE-3', 'SDC-MODULE-4', 'SDC-MODULE-5'],

  //EEE SEM2
 
  // 'Semiconductors-Devices&Circuits[SDC]', IN ECE SEM2
  // 'Transformation-Techniques&Linear-Algebra[TTLA]' IN CIVIL SEM2
   // 'Data-Structures&Algorithms[DSA]',IN ECE SEM4

   //MECH SEM2
'Manufacturing-Technology[MT]':['MT-MODULE-1', 'MT-MODULE-2', 'MT-MODULE-3', 'MT-MODULE-4', 'MT-MODULE-5'],
'Engineering-Workshop[EW]':['EW-MODULE-1', 'EEW-MODULE-2', 'EW-MODULE-3', 'EW-MODULE-4', 'EW-MODULE-5'],
'ENGINEERING CHEMISTRY[EC]':['EC-MODULE-1', 'EC-MODULE-2', 'EC-MODULE-3', 'EC-MODULE-4', 'EC-MODULE-5'],
'BASIC ENGG MECHANICS[BE]':['BEE-MODULE-1', 'BE-MODULE-2', 'BE-MODULE-3', 'BE-MODULE-4', 'BE-MODULE-5'],
'MATERIAL SCIENCE AND ENGG[MSE]':['MSE-MODULE-1', 'MSE-MODULE-2', 'MSE-MODULE-3', 'MSE-MODULE-4', 'MSE-MODULE-5'],
// 'Transformation-Techniques&Linear-Algebra[TTLA]' IS IN CIVIL SEM2

//EIE SEM2

'Sensors&Transducers[ST]':['ST-MODULE-1', 'ST-MODULE-2', 'ST-MODULE-3', 'ST-MODULE-4', 'ST-MODULE-5'],
'Network-Analysis[NA]':['NA-MODULE-1', 'NA-MODULE-2', 'NA-MODULE-3', 'NA-MODULE-4', 'NA-MODULE-5'],
// 'Transformation-Techniques&Linear-Algebra[TTLA]' IN CIVIL SEM2
// 'Data-Structures&Algorithms[DSA]'IN SCE SEM4
// 'Engineering-Chemistry[EC]', IN ECE SEM2
// 'Semiconductors-Devices&Circuits[SDC]', IN ECE SEM2

};


const Sidebar: React.FC<SidebarProps> = ({ subject, onModuleClick }) => {
  const modules = moduleData[subject] || [];

  return (
    <aside className="w-64 bg-gray-100 dark:bg-[#2c2c2c] p-5 shadow-lg transition-all duration-300 ease-in-out rounded-xl my-1">
      <h2 className="text-lg font-semibold mb-4 text-black dark:text-white">Modules for: {subject || 'None Selected'}</h2>
      <ul className="list-disc list-inside text-black dark:text-gray-300">
        {modules.length > 0 ? (
          modules.map((module) => (
            <li key={module}>
              <button
                onClick={() => onModuleClick(module)}
                className="w-full text-left px-2 py-1 rounded hover:bg-indigo-200 dark:hover:bg-orange-800"
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
