import React from 'react';

export const SearchBar = ({ onSearch }) => {
    return (
      <input
        type="text"
        placeholder="Buscar productos..."
        onChange={(e) => onSearch(e.target.value)}
        className="search-input"
      />
    )
  }
