import React, {Component} from 'react';
import {connect} from 'react-redux';

import {getAlbums} from '../actions/generateContentActions';

class Albums extends Component {
  componentWillMount() {
    this.props.getAlbums();
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
        <h3>This months hottest albums on Indieling</h3>
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
