import React, {Component} from 'react';
import {connect} from 'react-redux';

import {getArtists} from '../actions/generateContentActions';

class Artists extends Component {
  componentWillMount() {
    this.props.getArtists();
  }

  listArtists() {
    return this.props.artists.results.map((artist) => {
      return (
        <li key={artist.id}>{artist.name}</li>
      );
    })
  }

  render() {
    console.log(this.props.artists);
    if (!this.props.artists) {
      return (
        <div>Artists...</div>
      );
    }
    return (
      <div>
        <h3>This months hottest artists on Indieling</h3>
        <ul>{this.listArtists()}</ul>
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
