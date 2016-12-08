import React, {Component} from 'react';
import {connect} from 'react-redux';

import {getTracks} from '../actions/generateContentActions';

class Tracks extends Component {
  componentWillMount() {
    this.props.getTracks();
  }

  listTracks() {
    return this.props.tracks.results.map((track) => {
      return (
        <li key={track.id}>{track.name} - {track.artist_name}</li>
      );
    });
  }

  render() {
    if (!this.props.tracks) {
      return (
        <div>Tracks...</div>
      );
    }
    return (
      <div>
        <h3>This months hottest tracks on Indieling</h3>
        <ul>{this.listTracks()}</ul>
      </div>
    );
  }
}

function mapStateTopProps(state) {
  return {
    tracks: state.tracks
  };
}

export default connect(mapStateTopProps, {getTracks})(Tracks);
