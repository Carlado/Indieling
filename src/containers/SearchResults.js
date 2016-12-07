import React, {Component} from 'react';
import {connect} from 'react-redux';
import SearchTracks from '../components/SearchTracks';


class SearchResults extends Component {
  render() {
    return (
      <div>
        <SearchTracks tracks={this.props.searchresults}/>
      </div>
    );
  }

}

function mapStatetoProps(state) {
  return {
    searchresults: state.search
  };
}

export default connect(mapStatetoProps)(SearchResults);
