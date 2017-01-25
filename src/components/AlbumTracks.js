import React, {Component} from 'react';
import FontAwesome from 'react-fontawesome';
import {setTrack, addTrack} from '../actions/playActions';
import {connect} from 'react-redux';

class AlbumTracks extends Component {

  constructor(props) {
    super(props);
  }

  listTrack() {
    return this.props.tracks.map(track => {
      return (
        <li key={track.id} className="album-track-item">
          <FontAwesome
            className="nav-icon album-track-play"
            name="play"
            size="1x"
            onClick={() => this.props.setTrack(track)}
            />
          <span className="album-position">{track.position}</span>
          <span>{track.name}</span>
          <FontAwesome className="addbutton-album"
            onClick={() => this.props.addTrack(track)}
            name="plus"
            size="1x"
            title="Add to queue" />
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

export default connect(null, {setTrack, addTrack})(AlbumTracks);
