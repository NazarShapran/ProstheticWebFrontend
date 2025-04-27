import React from 'react';
import { Search } from '@mui/icons-material';

const SearchBar = ({ searchQuery, onSearchChange }) => {
  return (
    <div className="search-bar">
      <Search className="search-icon" />
      <input
        type="text"
        placeholder="Пошук протезів..."
        value={searchQuery}
        onChange={(e) => onSearchChange(e.target.value)}
        className="search-input"
      />
    </div>
  );
};

export default SearchBar;
