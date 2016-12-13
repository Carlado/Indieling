import React, {Component} from 'react';
import {getArtistTracks} from '../actions/generateContentActions';
import {connect} from 'react-redux';
import ArtistTopTracks from '../components/ArtistTopTracks';


class ArtistPage extends Component {

  componentDidMount() {
    this.props.getArtistTracks(this.props.params.id);
  }

  render() {
    if (!this.props.tracks) {
      return (
        <div>...</div>
      );
    }
    const result = this.props.tracks.results[0]

    return (
      <div>
        <div className="content-top-box">
          <img className="content-image" src={result.image} />
          <h2 className="content-heading">{result.name}</h2>
        </div>
        <ArtistTopTracks tracks={result.tracks}/>
      </div>
    );

  }
}

function mapStateTopProps(state) {
  return {
    tracks: state.artistTracks
  }
}

export default connect(mapStateTopProps, {getArtistTracks})(ArtistPage);
