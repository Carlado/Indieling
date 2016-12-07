import React, {Component} from 'react';
import SearchBar from './searchbar';
import SearchResults from './SearchResults';

export default class Search extends Component {
  render() {
    return (
      <div>
        <h3>Search for tracks or artists</h3>
        <SearchBar />
        <SearchResults />
      </div>
    );
  }
}
