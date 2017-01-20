import React, {Component} from 'react';
import FontAwesome from 'react-fontawesome';
import {setTrack} from '../actions/playActions';
import {connect} from 'react-redux';

class AlbumTracks extends Component {

  constructor(props) {
    super(props);
  }

  listTrack() {
    return this.props.tracks.map(track => {
      return (
        <li key={track.id} className="album-track-item" onClick={() => this.props.setTrack(track)}>
          <FontAwesome className="nav-icon album-track-play" name="play" size="1x"/>
          <span className="album-position">{track.position}</span>
          <span>{track.name}</span>
        </li>
      );
    });
  }

  render() {
    return (
      <ul className="album-tracks-list">{this.listTrack()}</ul>
    );
  }


}

export default connect(null, {setTrack})(AlbumTracks);
