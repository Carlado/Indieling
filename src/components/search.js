import React from 'react';
import SearchBar from '../containers/SearchBar';
import SearchResults from '../containers/SearchResults';
import Attribution from './Attribution';

const Search = () => {
  return (
    <div>
      <h3 className="search-heading">Search for artists, tracks or albums</h3>
      <Attribution />
      <SearchBar />
      <SearchResults />
    </div>
  );
};

export default Search;
