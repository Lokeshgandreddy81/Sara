import React, { useState } from 'react';

interface SearchBarProps {
  onSubjectSelect: (subject: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSubjectSelect }) => {
  const subjects = [
    //CSE SEM6
    'Object-Oriented-Modeling-and-Design[OOMD]', 'Artificial-Neural-Networks[ANN]', 'Mobile-Application-Development[MAD]', 'Cyber-Security-Essentials[CSE]',

    //AIML SEM6
    'Cloud-Computing[CC]', 'Compiler-Design[CD]', 'Deep-Learning[DL]',

    //DS SEM6
    'Software-Systems[SS]', 'Distributed-Systems[DS]', 'Computer-Architecture[CA]', 'Artificial-Intelligence[AI]',
    // Deep learning[DL] is in AIML SEM 6

    //CYBER SEM6
    'Computer-Architecture & Organization[CAO]', 'Cryptography-and-Network-Security[CNS]', 'Ethical-Hacking[EH]', 'Web-Application-Security[WAS]',
    //IT SEM6
  'Software-Testing&QA[STQA]',

/////////////////////////////////////////////////////////////////////////////////////////////////////

  //SEM4
    //CSE SEM4
    'Computer-Networks[CN]', 'Design-Analysis&Algorithms[DAA]', 'Software Engineering[SE]',
    //Artificial-Intelligence[AI] is in DS SEM 6
    //IT SEM4
  'Data-Mining[DM]',

  //DS SEM4
  'Theory-of-Computation[TOC]','R-Programming[RP]',

  //CS SEM4
  'Internet-of-Things[IOT]',

  //SEM2
    //CSE SEM2
    'Professional-Ethics&HV[PEHV]', 'JAVA[OOPJ]', 'Calculus-T&T[CTT]', 'Basic-EEE[BEEE]',

    //IT SEM2
    'Discrete-Math-Structures[DMS]','Python-Programming[PP]',
    
  //DS SEM2

  'Digital-Logic-Design[DLD]','Matrix-Theory[MTLA]','Physics-for-Computing[PC]',
  ];
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredSubjects, setFilteredSubjects] = useState<string[]>([]);

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const query = event.target.value;
    setSearchQuery(query);

    if (query.length > 0) {
      const filtered = subjects.filter(subject =>
        subject.toLowerCase().includes(query.toLowerCase())
      );
      setFilteredSubjects(filtered);
    } else {
      setFilteredSubjects([]);
    }
  };

  const handleSearchSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if (searchQuery.trim() !== '') {
      onSubjectSelect(searchQuery.trim());
      setFilteredSubjects([]);
    }
  };

  const handleSuggestionClick = (subject: string) => {
    setSearchQuery(subject);
    onSubjectSelect(subject);
    setFilteredSubjects([]);
  };

  return (
    <div>
      <h2 className='relative w-full max-w-md mx-auto items-center justify-center text-black dark:text-white'>Search Subject</h2>
      <div className="relative w-full max-w-md mx-auto">
        <form onSubmit={handleSearchSubmit} className="flex space-x-2">
          <div></div>
          <input
            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-[#4F46E5] focus:border-transparent dark:focus:ring-orange-600 dark:bg-[#1f1f1f] dark:text-white transition-all duration-300 ease-in-out"
            type="text"
            placeholder="Here..."
            value={searchQuery}
            onChange={handleSearchChange}
          />
        </form>

        {filteredSubjects.length > 0 && (
          <ul className="absolute z-10 w-full bg-white dark:bg-[#2a2a2a] border rounded-lg mt-2 max-h-60 overflow-y-auto shadow-md dark:text-white">
            {filteredSubjects.map((subject, index) => (
              <li
                key={index}
                className="px-4 py-2 cursor-pointer text-blue hover:bg-gray-100 dark:hover:bg-gray-700"
                onClick={() => handleSuggestionClick(subject)}
              >
                {subject}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default SearchBar;
