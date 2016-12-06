import React, {Component} from 'react';
import {connect} from 'react-redux';
import SearchTracks from '../components/SearchTracks';


class SearchResults extends Component {
  render() {
    return (
      <div>
                  <SearchTracks tracks={this.props}/>

      </div>
    );
  }

}

function mapStatetoProps(state) {
  return {
    searchresults: state.autocomplete
  };
}

export default connect(mapStatetoProps)(SearchResults);
