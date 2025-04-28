import React, { useState } from 'react';

interface SearchBarProps {
  onSubjectSelect: (subject: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSubjectSelect }) => {
  const subjects = ['Object-Oriented-Modeling-and-Design[OOMD]', 'Artificial-Neural-Networks[ANN]', 'Mobile-Application-Development[MAD]', 'Cyber-Security-Essentials[CSE]',
    'Cloud-Computing[CC]', 'Compiler-Design[CD]', 'Deep-Learning[DL]', 'Software-Systems[SS]','Disturbuted-Systems[DS]', 'Computer-Architecture[CA]', 'Artificial-Intelligence[AI]',
    
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
      setFilteredSubjects([]); // Hide suggestions when search is cleared
    }
  };

  const handleSearchSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if (searchQuery.trim() !== '') {
      onSubjectSelect(searchQuery.trim());
      setFilteredSubjects([]); // Hide suggestions after selection
    }
  };

  const handleSuggestionClick = (subject: string) => {
    setSearchQuery(subject);
    onSubjectSelect(subject);
    setFilteredSubjects([]); // Hide suggestions after selection
  };

  return (
    <div className="relative w-full max-w-md mx-auto">
      <form onSubmit={handleSearchSubmit} className="flex space-x-2">
        <input
          className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-[#4F46E5] focus:border-transparent dark:focus:ring-orange-600 dark:bg-[#1f1f1f] dark:text-white transition-all duration-300 ease-in-out"
          type="text"
          placeholder="Search Subject..."
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
  );
};

export default SearchBar;
