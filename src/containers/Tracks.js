import React, {Component} from 'react';
import {connect} from 'react-redux';
import { Link } from 'react-router';
import FontAwesome from 'react-fontawesome';
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
          <img src={track.album_image} />
          <FontAwesome className="nav-icon" name="play" size="2x"/>
          <div>
            <p className="trackname">{track.name}</p>
            <Link className="trackartist" to={'/artist/' + track.artist_id}>{track.artist_name}</Link>
          </div>

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
