import React, {Component} from 'react';
import {connect} from 'react-redux';

import {getArtists} from '../actions/generateContentActions';

class Artists extends Component {

  componentDidMount() {
    this.props.getArtists();
  }

  render() {
    return (
      <div>Artists..</div>
    );
  }
}

function mapStateTopProps(state) {
  return {
    artists: state.artists
  }
}

export default connect(mapStateTopProps, {getArtists})(Artists);
