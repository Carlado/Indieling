import React, {Component} from 'react';
import {connect} from 'react-redux';
import FontAwesome from 'react-fontawesome';
import {searchGetTracks, searchGetArtists, searchGetAlbums} from '../actions/searchActions';
import smartOutline from 'smart-outline';


class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {term: ''};
    //Smart outline to preserve focus when keyboard is used to preserve accessibility
    smartOutline.init();
    this.onInputChange = this.onInputChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  onInputChange(event) {
    this.setState({term: event.target.value});
  }

  onFormSubmit(event) {
    event.preventDefault();
    if (this.state.term.length > 2) {
      this.props.searchGetTracks(this.state.term);
      this.props.searchGetArtists(this.state.term);
      this.props.searchGetAlbums(this.state.term);
    }
  }

  render() {
    return (
      <div>
        <form onSubmit={this.onFormSubmit} className="searchbar">
          <button className="search-submit" type="submit"><FontAwesome className="nav-icon" name="search"/></button>
          <input value={this.state.term} onChange={this.onInputChange} />
        </form>
      </div>
    );

  }
}

export default connect(null, {searchGetTracks, searchGetArtists, searchGetAlbums})(SearchBar);
