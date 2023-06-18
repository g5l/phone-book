import React from 'react';

const Search: React.FC = () => {
  return (
    <input
      type="text"
      placeholder="Search for a contact"
      className="py-3 px-4 w-full mt-7 mb-3 rounded-md"
    />
  );
}

export default Search;