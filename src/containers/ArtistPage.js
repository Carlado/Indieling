import React, {Component} from 'react';
import {getArtistTracks, getArtistAlbums} from '../actions/generateContentActions';
import {connect} from 'react-redux';
import ArtistTopTracks from '../components/ArtistTopTracks';
import ArtistAlbums from '../components/ArtistAlbums';


class ArtistPage extends Component {

  componentDidMount() {
    this.props.getArtistTracks(this.props.params.id);
    this.props.getArtistAlbums(this.props.params.id);
  }

  componentDidUpdate() {
    window.scrollTo(0, 0);
  }

  render() {
    if (!this.props.tracks || !this.props.albums) {
      return (
        <div>...</div>
      );
    }

    const album = this.props.albums.results[0];
    const tracks = this.props.tracks.results;

    return (
      <div className="artist-page">
        <div className="content-top-box">
          <img className="content-image" src={album.image} />
          <h2 className="content-heading">{album.name}</h2>
        </div>
        <ArtistTopTracks tracks={tracks} />
        <ArtistAlbums />
      </div>
    );

  }
}

function mapStateTopProps(state) {
  return {
    tracks: state.artistTracks,
    albums: state.artistAlbums
  }
}

export default connect(mapStateTopProps, {getArtistAlbums, getArtistTracks})(ArtistPage);
