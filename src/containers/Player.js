import React, {Component} from 'react';
import Sound from 'react-sound';
import {connect} from 'react-redux';
import {setTrack} from '../actions/playActions';
import InputRange from 'react-input-range';


class Player extends Component {

  constructor() {
    super();
    this.onPlay = this.onPlay.bind(this);
    this.onPause = this.onPause.bind(this);
    this.setVolume = this.setVolume.bind(this);
    this.setPosition = this.setPosition.bind(this);
    this.handlePlaying = this.handlePlaying.bind(this);
    this.nextSong = this.nextSong.bind(this);
    this.state = {playStatus: Sound.status.PLAYING,
                  position: 0,
                  playFromPosition: 0,
                  volume: 50,
                  listPosition: 0
                };
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

  setPosition(component, value) {
    this.setState({
      playFromPosition: value * 1000,
      playStatus: Sound.status.PLAYING
    });
  }

  handlePlaying(audio) {
    this.setState({position: audio.position})
  }

  nextSong() {
    const {list} = this.props.list;

    if (list.length > this.state.listPosition) {
      this.props.setTrack(list[this.state.listPosition]);
      this.setState({listPosition: this.state.listPosition + 1});
    } 

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
        <button onClick={this.nextSong}>Next</button>
        <div className="sound-slider">
          <InputRange
          maxValue={100}
          minValue={0}
          value={this.state.volume}
          onChange={this.setVolume} />
        </div>
        <div className="position-slider">
          <InputRange
          maxValue={track.duration + 1}
          minValue={0}
          value={this.state.position / 1000}
          onChange={this.setPosition}
           />
        </div>
        <p style={{color: "black"}}>{track.name}</p>

        <Sound
        url={track.audio}
        playStatus={this.state.playStatus}
        playFromPosition={this.state.playFromPosition}
        volume={this.state.volume}
        onPlaying={this.handlePlaying}
        onFinishedPlaying={this.nextSong}
        />


      </div>
    );
  }
}

function mapStateTopProps(state) {
  return {
    track: state.currentTrack,
    list: state.list
  }
}

export default connect(mapStateTopProps, {setTrack})(Player);
