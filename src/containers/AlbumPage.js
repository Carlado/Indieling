import React, {Component} from 'react';
import {fetchAlbum} from '../actions/generateContentActions';
import {connect} from 'react-redux';
import AlbumTracks from '../components/AlbumTracks';

class AlbumPage extends Component {
  componentDidMount() {
    this.props.fetchAlbum(this.props.params.id);
  }

  componentDidUpdate() {
    window.scrollTo(0, 0);
  }

  render() {
    if (!this.props.album) {
      return (
        <div>Loading album..</div>
      );
    }

    const album = this.props.album.results[0];

    return (
      <div className="album-page">
        <div className="album-item">
          <div className="album-heading-box">
            <img src={album.image} />
            <h3 className="content-heading">{album.name}</h3>
          </div>
          <AlbumTracks tracks={album.tracks}/>
        </div>
      </div>
    );
  }
}

function mapStateTopProps(state) {
  return {
    album: state.album
  }
}

export default connect(mapStateTopProps, {fetchAlbum})(AlbumPage);
