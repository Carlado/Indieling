import React, {Component} from 'react';
import {connect} from 'react-redux';
import {getAutoComplete} from '../actions/searchActions';


class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {term: ''};
    this.onInputChange = this.onInputChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  onInputChange(event) {
    this.setState({term: event.target.value});
    this.props.getAutoComplete(this.state.term);
  }

  onFormSubmit(event) {
    event.preventDefault();
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

export default connect(null, {getAutoComplete})(SearchBar);
