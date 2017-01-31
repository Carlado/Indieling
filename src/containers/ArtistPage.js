import React, {Component} from 'react';
import Loading from 'react-loading';
import {getArtistTracks, getArtistInfo, getArtistAlbums} from '../actions/generateContentActions';
import {setTrack, addTrack, addAlbum} from '../actions/playActions';
import {connect} from 'react-redux';
import ArtistTopTracks from '../components/ArtistTopTracks';
import ArtistAlbums from '../components/ArtistAlbums';


class ArtistPage extends Component {

  componentDidMount() {
    this.props.getArtistTracks(this.props.params.id);
    this.props.getArtistInfo(this.props.params.id);
    this.props.getArtistAlbums(this.props.params.id);
  }

  componentDidUpdate() {
    window.scrollTo(0, 0);
  }

  render() {

    if (!this.props.tracks || !this.props.info || !this.props.albums) {
      return (
        <div className="spinner" >
          <Loading type='spin' color='#e3e3e3' />
        </div>
      );
    }

    const info = this.props.info.results[0];
    const tracks = this.props.tracks.results;
    const albums = this.props.albums.results;


    return (
      <div className="artist-page">
        <div className="content-top-box">
          <img className="content-image" src={info.image} />
          <h2 className="content-heading">{info.name}</h2>
        </div>
        <ArtistTopTracks
          tracks={tracks}
          setTrack={this.props.setTrack}
          addTrack={this.props.addTrack}/>
        <ArtistAlbums albums={albums} addAlbum={this.props.addAlbum}/>
      </div>
    );

  }
}

function mapStateTopProps(state) {
  return {
    tracks: state.artistTracks,
    info: state.artistInfo,
    albums: state.artistAlbums
  }
}

export default connect(mapStateTopProps, {getArtistInfo, getArtistTracks, getArtistAlbums, setTrack, addTrack, addAlbum})(ArtistPage);
