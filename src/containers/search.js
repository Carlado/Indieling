import React, {Component} from 'react';
import SearchBar from './searchbar';
import SearchResults from './SearchResults';
import Attribution from '../components/Attribution';

export default class Search extends Component {
  render() {
    return (
      <div>
        <h3 className="search-heading">Search for artists, tracks or albums</h3>
        <Attribution />
        <SearchBar />
        <SearchResults />
      </div>
    );
  }
}
