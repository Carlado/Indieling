import React, {Component} from 'react';
import {connect} from 'react-redux';
import SearchTracks from '../components/SearchTracks';
import SearchArtists from '../components/SearchArtists';


class SearchResults extends Component {
  render() {
    return (
      <div>
        <SearchTracks tracks={this.props.trackresults}/>
        <SearchArtists artists={this.props.artistresults}/>
      </div>
    );
  }

}

function mapStatetoProps(state) {
  return {
    trackresults: state.trackSearch,
    artistresults: state.artistSearch
  };
}

export default connect(mapStatetoProps)(SearchResults);
