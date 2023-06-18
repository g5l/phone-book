import React from 'react';

interface Props {
  onSearch: Function
}

const Search: React.FC<Props> = ({onSearch}) => {

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onSearch && onSearch(event.target.value);
  }

  return (
    <input
      type="text"
      placeholder="Search for a contact"
      className="py-3 px-4 w-full mt-7 mb-3 rounded-md"
      onChange={handleChange}
    />
  );
}

export default Search;