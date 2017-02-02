import React, {Component} from 'react';
import Loading from 'react-loading';
import {connect} from 'react-redux';
import {getArtists} from '../actions/generateContentActions';
import { Link } from 'react-router';
import Dropdown from './TimeDropdown';

class Artists extends Component {
  componentWillMount() {
    this.props.getArtists("week");
  }

  listArtists() {
    return this.props.artists.results.map((artist) => {
      return (
        <li key={artist.id}>
          <Link to={'/artist/' + artist.id} >
            <div className="artistbox">
            {artist.image ? <img src={artist.image} /> : <img src={require('../images/album.jpg')} />}

            <p className="artist-artistname">{artist.name}</p>

            </div>
          </Link>
        </li>
      );
    })
  }

  render() {
    if (!this.props.artists) {
      return (
        <div className="spinner" >
          <Loading type='spin' color='#e3e3e3' />
        </div>
      );
    }
    return (
      <div>
        <h3 className="view-heading">This hottest artists of <Dropdown content="artists"/> on Indieling.</h3>
        <ul className="artist-list">
          {this.listArtists()}
        </ul>
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
