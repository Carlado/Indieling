import React, {Component} from 'react';
import {connect} from 'react-redux';

import {getAlbums} from '../actions/generateContentActions';

import Dropdown from './TimeDropdown';

class Albums extends Component {
  componentWillMount() {
    this.props.getAlbums('week');
  }

  listAlbums() {
    return this.props.albums.results.map((album) => {
      return (
        <li key={album.id}>{album.name}</li>
      );
    })
  }

  render() {
    if (!this.props.albums) {
      return (
        <div>Albums...</div>
      );
    }
    return (
      <div>
        <h3 className="view-heading">This hottest albums of <Dropdown content="albums"/> on Indieling.</h3>
        <ul>{this.listAlbums()}</ul>
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
