import React, {Component} from 'react';
import {connect} from 'react-redux';
import {getAlbums, getArtists, getTracks} from '../actions/generateContentActions';


class TimeDropdown extends Component  {


  sendValue() {
    const duration = document.querySelector('.time-dropdown').value;
    const context = this.props.content;
    if (context === "artists") {
      this.props.getArtists(duration);
    }
    if (context === "tracks") {
      this.props.getTracks(duration);
    }
    if (context === "albums") {
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
