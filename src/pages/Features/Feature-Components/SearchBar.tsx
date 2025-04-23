import React, { useState } from 'react';
import { Search } from 'lucide-react';

const SearchBar: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
  };

  const handleSearchSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    console.log('Search query submitted:', searchQuery);
    // You can add logic here to perform a search or filter data
  };

  return (
    <div className='space-x-5 flex items-center justify-center  px-10 mx-auto bg-gray-200  dark:bg-[#1f1f1f] transition-all duration-300 ease-in-out'>
      <form onSubmit={handleSearchSubmit}>
        <input
        className="px-10 py-2 border rounded-lg focus:ring-2 focus:ring-[#4F46E5] focus:border-transparent dark:focus:ring-orange-600 dark:bg-[#1f1f1f] dark:text-white transition-all duration-300 ease-in-out"
          type="text"
          placeholder="Search Subject..."
          value={searchQuery}
          onChange={handleSearchChange}
        />
        {/* <button type="submit"><Search className='items justify-center text-black dark:text-white' /></button> */}
      </form>
    </div>
  );
};

export default SearchBar;
