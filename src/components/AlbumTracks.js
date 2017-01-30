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
          <div className="click-play" onClick={() => this.props.setTrack(track)}>
            <FontAwesome
              className="nav-icon album-track-play"
              name="play"
              size="lg"
              />
            <span className="album-position">{track.position}</span>
            <span className="album-trackname">{track.name}</span>
          </div>
          <FontAwesome className="addbutton-album"
            onClick={() => this.props.addTrack(track)}
            name="plus"
            title="Add to queue" size="lg" />
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
