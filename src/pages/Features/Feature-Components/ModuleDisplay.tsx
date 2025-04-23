import React from 'react';

/* ---------------------------------------------------------
   1.  IMPORT every module component you want to show here
       (One import per real module file you have created)
   --------------------------------------------------------- */
// import OOMD_Module1 from '../modules/OOMD_Module1';
// import OOMD_Module2 from '../modules/OOMD_Module2';
// import ANN_Module1  from '../modules/ANN_Module1';
// import ANN_Module2  from '../modules/ANN_Module2';   // later, etc.

/* ---------------------------------------------------------
   2.  Map the sidebar label → the imported component
       Keep adding entries as you add new module files.
   --------------------------------------------------------- */
const moduleMap: Record<string, React.FC> = {
//   'OOMD_Module 1': OOMD_Module1,
//   'OOMD_Module 2': OOMD_Module2,
//   'ANN_Module 1' : ANN_Module1,
  // 'ANN_Module 2': ANN_Module2,
};

/* ---------------------------------------------------------
   3.  Component that chooses what to render
   --------------------------------------------------------- */
const ModuleDisplay: React.FC<{ moduleName: string }> = ({ moduleName }) => {
  if (!moduleName) {
    return <p className="p-6 italic text-gray-600">Select a subject &amp; module.</p>;
  }

  const Selected = moduleMap[moduleName];

  if (!Selected) {
    return (
      <p className="p-6 text-red-600">
        No component registered for “{moduleName}”.
      </p>
    );
  }

  return <Selected />;
};

export default ModuleDisplay;
