import React, {Component} from 'react';
import {connect} from 'react-redux';
import {setTrack, addTrack} from '../actions/playActions';
import SearchTracks from '../components/SearchTracks';
import SearchArtists from '../components/SearchArtists';
import SearchAlbums from '../components/SearchAlbums';


class SearchResults extends Component {
  render() {
    return (
      <div>
        <SearchArtists artists={this.props.artistresults}/>
        <SearchAlbums albums={this.props.albumresults}/>
        <SearchTracks
          tracks={this.props.trackresults}
          setTrack={this.props.setTrack}
          addTrack={this.props.addTrack}/>
      </div>
    );
  }

}

function mapStatetoProps(state) {
  return {
    trackresults: state.trackSearch,
    artistresults: state.artistSearch,
    albumresults: state.albumSearch
  };
}

export default connect(mapStatetoProps,{addTrack, setTrack})(SearchResults);
