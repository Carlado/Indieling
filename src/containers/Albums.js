import React, {Component} from 'react';
import Loading from 'react-loading';
import {connect} from 'react-redux';
import { Link } from 'react-router';

import {getAlbums} from '../actions/generateContentActions';

import Dropdown from './TimeDropdown';

class Albums extends Component {
  componentWillMount() {
    this.props.getAlbums('week');
  }

  listAlbums() {
    return this.props.albums.results.map((album) => {
      return (
        <li key={album.id}>
          <Link to={'/album/' + album.id}>
            <div className="artistbox">
              {album.image ? <img src={album.image} /> : <img src={require('../images/album.jpg')} />}
              <div>
                <p className="album-albumname">{album.name}</p>
                <span>{album.artist_name}</span>
              </div>
            </div>
          </Link>
        </li>
      );
    })
  }

  render() {
    if (!this.props.albums) {
      return (
        <div className="spinner" >
          <Loading type='spin' color='#e3e3e3' />
        </div>
      );
    }
    return (
      <div>
        <h3 className="view-heading">This hottest albums of <Dropdown content="albums"/> on Indieling.</h3>
        <ul className="albums-list">{this.listAlbums()}</ul>
      </div>
    );
  }
}

function mapStateTopProps(state) {
  return {
    albums: state.albums
  }
}

export default connect(mapStateTopProps, {getAlbums})(Albums);
