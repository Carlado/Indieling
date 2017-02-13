import React, {Component} from 'react';
import {connect} from 'react-redux';
import {setTrack, addTrack} from '../actions/playActions';
import SearchTracks from '../components/SearchTracks';
import SearchArtists from '../components/SearchArtists';
import SearchAlbums from '../components/SearchAlbums';


class SearchResults extends Component {
  render() {
    return (
      <section>
        <SearchArtists artists={this.props.artistResults}/>
        <SearchAlbums albums={this.props.albumResults}/>
        <SearchTracks
          tracks={this.props.trackResults}
          setTrack={this.props.setTrack}
          addTrack={this.props.addTrack}/>
      </section>
    );
  }
}

SearchResults.propTypes = {
  setTrack: React.PropTypes.func,
  addTrack: React.PropTypes.func,
  albumResults: React.PropTypes.object,
  trackResults: React.PropTypes.object,
  artistResults: React.PropTypes.object,
};

function mapStatetoProps(state) {
  return {
    trackResults: state.trackSearch,
    artistResults: state.artistSearch,
    albumResults: state.albumSearch
  };
}

export default connect(mapStatetoProps,{addTrack, setTrack})(SearchResults);
