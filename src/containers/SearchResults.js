import React, {Component} from 'react';
import {connect} from 'react-redux';
import SearchTracks from '../components/SearchTracks';
import SearchArtists from '../components/SearchArtists';
import SearchAlbums from '../components/SearchAlbums';


class SearchResults extends Component {
  render() {
    return (
      <div>
        <SearchArtists artists={this.props.artistresults}/>
        <SearchTracks tracks={this.props.trackresults}/>
        <SearchAlbums albums={this.props.albumresults}/>
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
