import React, {Component} from 'react';
import SearchBar from './searchbar';

export default class Search extends Component {
  render() {
    return (
      <div>
        <h3>Search for tracks, albums, artists and tags</h3>
        <SearchBar />
      </div>
    );
  }
}
