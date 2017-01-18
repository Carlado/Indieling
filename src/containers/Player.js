import React, {Component} from 'react';
import Sound from 'react-sound';
import {connect} from 'react-redux';
import InputRange from 'react-input-range';


class Player extends Component {

  constructor() {
    super();
    this.onPlay = this.onPlay.bind(this);
    this.onPause = this.onPause.bind(this);
    this.setVolume = this.setVolume.bind(this);
    this.state = {playStatus: Sound.status.PLAYING,
                  position: 0,
                  volume: 50};
  }

  onPlay() {
    this.setState({playStatus: Sound.status.PLAYING});
  }

  onPause() {
    this.setState({playStatus: Sound.status.PAUSED});
  }
  setVolume(component, value) {
    this.setState({volume: value});
  }

  render() {
    if (!this.props.track) {
      return <div />
    }

    const {track} = this.props;

    return (
      <div className="player">
        {this.state.playStatus !== Sound.status.PLAYING ?
          <button className="player-play" onClick={this.onPlay}>Play</button> :
          <button className="player-play" onClick={this.onPause}>Pause</button>
        }
        <div>
          <InputRange
          maxValue={100}
          minValue={0}
          value={this.state.volume}
          onChange={this.setVolume} />
        </div>
        <div>
          <InputRange
          maxValue={track.duration}
          minValue={0}
          value={this.state.position / 1000}
           />
        </div>
        <p style={{color: "black"}}>{track.name}</p>

        <Sound
        url={track.audio}
        playStatus={this.state.playStatus}
        playFromPosition={this.state.position}
        volume={this.state.volume}
        onPlaying={({position}) => this.setState({position})}
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
