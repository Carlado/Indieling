import React from 'react';
import FontAwesome from 'react-fontawesome';

const ArtistTopTracks = (props) => {
  //props getting passed down from ArtistPage
  if (!props.tracks) {
    return <div/>;
  }

  const topTracksList = props.tracks.map((track, i) => {

    return (
      <li key={track.id}>
        <div className="top-tracks-item">
          <div className="click-play" onClick={() => props.setTrack(track)}>
            <img src={track.album_image}/>
            <FontAwesome className="playbutton-top" name="play" size="lg"/>
            <span className="rating">{i + 1}</span>
            <span className="top-tracks-name">{track.name}</span>
          </div>
          <FontAwesome className="addbutton-album" onClick={() => props.addTrack(track)} name="plus" size="lg" title="Add to queue"/>
        </div>

      </li>
    );

  });

  return (
    <section className="top-tracks">
      <h3>Popular:</h3>
      <ul className="top-tracks-list">{topTracksList}</ul>
    </section>
  );
};

ArtistTopTracks.propTypes = {
  tracks: React.PropTypes.array
};

export default ArtistTopTracks;
