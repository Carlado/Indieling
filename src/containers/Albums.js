import React, {Component} from 'react';
import Loading from 'react-loading';
import {connect} from 'react-redux';
import { Link } from 'react-router';
import Attribution from '../components/Attribution';
import {getAlbums} from '../actions/generateContentActions';

import Dropdown from './TimeDropdown';

class Albums extends Component {
  componentWillMount() {
    this.props.getAlbums('week');
  }

  listAlbums() {
    return this.props.albums.results.map((album) => {
      return (
        <li key={album.id} className="artist-album-item">
          <Link to={'/album/' + album.id}>
            <div className="artistbox">
              {album.image ? <img src={album.image} /> : <img src={require('../images/album.jpg')} />}
              <div className="artist-album-namebox">
                <p className="album-albumname">{album.name}</p>
                <span>{album.artist_name}</span>
              </div>
            </div>
          </Link>
        </li>
      );
    });
  }

  render() {
    if (!this.props.albums) {
      return (
        <div className="spinner" >
          <Loading type="spin" color="#e3e3e3" />
        </div>
      );
    }
    return (
      <section>
        <h3 className="view-heading">This hottest albums of <Dropdown content="albums"/> on Indieling.</h3>
        <Attribution />
        <ul className="albums-list">{this.listAlbums()}</ul>
      </section>
    );
  }
}

Albums.propTypes = {
    getAlbums: React.PropTypes.func,
    albums: React.PropTypes.object
};

function mapStateTopProps(state) {
  return {
    albums: state.albums
  };
}

export default connect(mapStateTopProps, {getAlbums})(Albums);
