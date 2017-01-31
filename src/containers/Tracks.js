import React, {Component} from 'react';
import Loading from 'react-loading';
import {connect} from 'react-redux';
import { Link } from 'react-router';
import FontAwesome from 'react-fontawesome';
import {getTracks} from '../actions/generateContentActions';
import {setTrack, addTrack} from '../actions/playActions';

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
          <FontAwesome
            className="playbutton-tracks"
            name="play"
            size="2x"
            onClick={() => this.props.setTrack(track)}/>
          <div>
            <p className="trackname" onClick={() => this.props.setTrack(track)}>{track.name}</p>
            <Link className="trackartist" to={'/artist/' + track.artist_id}>{track.artist_name}</Link>
          </div>
          <FontAwesome className="addbutton-tracks"
            onClick={() => this.props.addTrack(track)}
            name="plus"
            size="2x"
            title="Add to queue"
          />
        </li>
      );
    });
  }

  render() {
    if (!this.props.tracks) {
      return (
        <div className="spinner" >
          <Loading type='spin' color='#e3e3e3' />
        </div>
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

export default connect(mapStateTopProps, {getTracks, setTrack, addTrack})(Tracks);
