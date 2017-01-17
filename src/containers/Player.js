import React, {Component} from 'react';
import Sound from 'react-sound';
import {connect} from 'react-redux';

class Player extends Component {

  constructor() {
    super();
    this.onPlay = this.onPlay.bind(this);
    this.onPause = this.onPause.bind(this);
    this.setVolume = this.setVolume.bind(this);
    this.state = {currentSong: '',
                  playStatus: Sound.status.PAUSED,
                  position: 0,
                  volume: 100};
  }




  setCurrentTrack() {
    const {track} = this.props;
    this.setState({currentSong: track.audio});
  }

  onPlay() {
    this.setCurrentTrack();
    this.setState({playStatus: Sound.status.PLAYING});
  }

  onPause() {
    this.setState({playStatus: Sound.status.PAUSED});
  }
  setVolume(event) {
    this.setState({volume: Number(event.target.value)});
  }

  render() {
    return (
      <div className="player">
        {this.state.playStatus !== Sound.status.PLAYING ?
          <button className="player-play" onClick={this.onPlay}>Play</button> :
          <button className="player-play" onClick={this.onPause}>Pause</button>
        }
        <input type="range" name="volume" min="0" max="100" value={this.state.volume} onChange={this.setVolume}/>
        <p style={{color: "black"}}>{this.props.track ? this.props.track.name : null}</p>

        <Sound
        url={this.state.currentSong}
        playStatus={this.state.playStatus}
        playFromPosition={this.state.position}
        volume={this.state.volume}
        onFinishedPlaying={() => this.setState({playStatus: Sound.status.STOPPED})}
        />
      </div>
    );
  }
}

function mapStateTopProps(state) {
  return {
    track: state.currentTrack
  }
}

export default connect(mapStateTopProps)(Player);
