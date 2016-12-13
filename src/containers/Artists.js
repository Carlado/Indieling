import React, {Component} from 'react';
import {connect} from 'react-redux';

import {getArtists} from '../actions/generateContentActions';

import Dropdown from './TimeDropdown';

class Artists extends Component {
  componentWillMount() {
    this.props.getArtists("week");
  }

  listArtists() {
    return this.props.artists.results.map((artist) => {
      return (
        <li key={artist.id}>
          {artist.image ? <img src={artist.image} /> : <img src={require('../images/album.jpg')} />}

          <p>{artist.name}</p>
        </li>
      );
    })
  }

  render() {
    if (!this.props.artists) {
      return (
        <div>Artists...</div>
      );
    }
    return (
      <div className="artist-page">
        <h3 className="view-heading">This hottest artists of <Dropdown content="artists"/> on Indieling.</h3>
        <ul className="artist-list">{this.listArtists()}</ul>
      </div>
    );
  }
}

function mapStateTopProps(state) {
  return {
    artists: state.artists
  }
}

export default connect(mapStateTopProps, {getArtists})(Artists);
