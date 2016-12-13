import React, {Component} from 'react';
import {connect} from 'react-redux';
import {getAlbums, getArtists, getTracks} from '../actions/generateContentActions';


class TimeDropdown extends Component  {
  sendValue() {
    const duration = document.querySelector('.time-dropdown').value;
    //Pass down context as props from parent.
    const content = this.props.content;
    if (content === "artists") {
      this.props.getArtists(duration);
    }
    if (content === "tracks") {
      this.props.getTracks(duration);
    }
    if (content === "albums") {
      this.props.getAlbums(duration);
    }
  }

  render() {
    return (
      <select className="time-dropdown" onChange={this.sendValue.bind(this)}>
        <option value="week">this week</option>
        <option value="month">this month</option>
        <option value="total">all time</option>
      </select>
    );
  }

}

export default connect(null, {getArtists, getTracks, getAlbums})(TimeDropdown);
