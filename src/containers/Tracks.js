import React, {Component} from 'react';
import {connect} from 'react-redux';

import {getTracks} from '../actions/generateContentActions';

import Dropdown from './TimeDropdown';

class Tracks extends Component {
  componentWillMount() {
    this.props.getTracks('week');
  }

  listTracks() {
    return this.props.tracks.results.map((track) => {
      return (
        <li key={track.id} className="track">
          <p className="trackname">{track.name}</p>
          <p className="trackartist">{track.artist_name}</p>
        </li>
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
        <h3 className="view-heading">This hottest tracks of <Dropdown content="tracks"/> on Indieling.</h3>
        <ul className="tracks-list">{this.listTracks()}</ul>
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
