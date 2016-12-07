import React, {Component} from 'react';
import {connect} from 'react-redux';
import {getTracks, getArtists} from '../actions/searchActions';


class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {term: ''};
    this.onInputChange = this.onInputChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  onInputChange(event) {
    this.setState({term: event.target.value});
  }

  onFormSubmit(event) {
    event.preventDefault();
    if (this.state.term.length > 2) {
      this.props.getTracks(this.state.term);
      this.props.getArtists(this.state.term);
    }
  }

  render() {
    return (
      <div>
        <form onSubmit={this.onFormSubmit} className="searchbar">
          <input value={this.state.term} onChange={this.onInputChange} />
        </form>
      </div>
    );

  }
}

export default connect(null, {getTracks, getArtists})(SearchBar);
