import React, {Component} from 'react';
import {connect} from 'react-redux';
import {clearList, replayList, setTrack} from '../actions/playActions';
import FontAwesome from 'react-fontawesome';
import { Link } from 'react-router';

class PlayList extends Component {

  listItems() {
    return this.props.list.list.map(track => {
      return (
        <li key={track.id} className="track">
          <img src={track.album_image} />
          <div>
            <p className="trackname" onClick={() => this.props.setTrack(track)}>{track.name}</p>
            <Link className="trackartist" to={'/artist/' + track.artist_id}>{track.artist_name}</Link>
          </div>
        </li>
      );
    });
  }

  render() {
    if (!this.props.list) {
      return <div>Hiii</div>
    }
    console.log(this.props.list);
    return (
      <div>
        <div className="playlist-controls">
          <button className="default-button" onClick={() => this.props.clearList()}>Clear queue</button>
          <button className="default-button" onClick={() => this.props.replayList()}>Play again</button>
        </div>
        <ul className="list-tracks">{this.listItems()}</ul>
      </div>
    );
  }

}

function mapStateTopProps(state) {
  return {
    list: state.list
  }
}

export default connect(mapStateTopProps, {clearList, replayList, setTrack})(PlayList);
