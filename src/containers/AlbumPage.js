import React, {Component} from 'react';
import {fetchAlbum} from '../actions/generateContentActions';
import {addAlbum} from '../actions/playActions';
import {connect} from 'react-redux';
import { Link } from 'react-router';
import AlbumTracks from './AlbumTracks';

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
      <section className="album-page">
        <article className="album-item">
          <div className="album-heading-box">
            <img className="content-image" src={album.image} />
            <h3 className="content-heading">{album.name}</h3>
          </div>
          <p className="album-release">Released by <Link to={'/artist/' + album.artist_id}>{album.artist_name}</Link> on {album.releasedate}.</p>
          <button className="default-button" onClick={() => this.props.addAlbum(album.tracks)}>Add to queue</button>
          <AlbumTracks tracks={album.tracks}/>
        </article>
      </section>
    );
  }
}

AlbumPage.propTypes = {
    fetchAlbum: React.PropTypes.func,
    addAlbum: React.PropTypes.func,
    params: React.PropTypes.object,
    album: React.PropTypes.object
};

function mapStateTopProps(state) {
  return {
    album: state.album
  };
}

export default connect(mapStateTopProps, {fetchAlbum, addAlbum})(AlbumPage);
