import React, {Component} from 'react';
import Sound from 'react-sound';
import {connect} from 'react-redux';
import {setTrack, incrementPosition} from '../actions/playActions';
import FontAwesome from 'react-fontawesome';
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
    this.setState({position: audio.position});
  }

  nextSong() {
    const {list} = this.props.list;

    if (list.length > this.props.list.listPosition) {
      this.props.setTrack(list[this.props.list.listPosition]);
      this.props.incrementPosition();
    }

  }

  secToMinSec(time) {
    const min = Math.floor(time / 60);
    let sec = Math.floor(time - min * 60);
    sec = (sec < 10) ? `0${sec}` : sec;
    return `${min}:${sec}`;
  }


  render() {
    if (!this.props.track) {
      return <div />;
    }

    const {track} = this.props;

    return (
      <div className="player">
        <div className="position-slider">
          <InputRange
          maxValue={Math.ceil(Number(track.duration))}
          minValue={0}
          value={this.state.position / 1000}
          onChange={this.setPosition}
           />
           <span className="song-length current-time">{this.secToMinSec(this.state.position / 1000)}</span>
           <span className="song-length duration-time">{this.secToMinSec(track.duration)}</span>
        </div>
        <div className="player-bottom-row">
          <div className="player-song-info">
            <span>{track.name}</span>
          </div>
          <div className="player-controls">
            {this.state.playStatus !== Sound.status.PLAYING ?
              <FontAwesome className="player-icon"
                onClick={this.onPlay}
                name="play"
                size="2x"
                title="Play"
              /> :
              <FontAwesome className="player-icon"
                onClick={this.onPause}
                name="pause"
                size="2x"
                title="Pause"
              />
            }
            <FontAwesome className="player-icon"
              onClick={this.nextSong}
              name="step-forward"
              size="2x"
              title="Next"
            />
          </div>
          <div className="volume-control">
            <FontAwesome className="volume-icon"
              name="volume-down"
            />
            <div className="sound-slider">
              <InputRange
              maxValue={100}
              minValue={0}
              value={this.state.volume}
              onChange={this.setVolume} />
            </div>
          </div>


        </div>


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

Player.propTypes = {
    incrementPosition: React.PropTypes.func,
    setTrack: React.PropTypes.func,
    list: React.PropTypes.obj,
    track: React.PropTypes.obj

};

function mapStateTopProps(state) {
  return {
    track: state.currentTrack,
    list: state.list
  };
}

export default connect(mapStateTopProps, {setTrack, incrementPosition})(Player);
