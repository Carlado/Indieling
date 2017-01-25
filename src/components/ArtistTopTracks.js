import React from 'react';
import FontAwesome from 'react-fontawesome';

const ArtistTopTracks = (props) => {
  //props getting passed down from ArtistPage
  if (!props.tracks) {
    return <div />
  }

  const topTracksList = props.tracks.map((track,i) => {

      return (
        <li key={track.id}>
          <div className="top-tracks-item">
            <img src={track.album_image} />
            <FontAwesome className="playbutton-top" name="play" size="1x"/>
            <span className="rating">{i+1}</span>
            <span>{track.name}</span>
          </div>

        </li>
      );


  });

  return (
    <div className="top-tracks">
      <h3>Popular:</h3>
      <ul className="top-tracks-list">{topTracksList}</ul>
    </div>
  );
}

export default ArtistTopTracks;
