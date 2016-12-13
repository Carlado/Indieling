import React from 'react';

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
            <span className="rating">{i+1}</span>
            <span>{track.name}</span>
          </div>

        </li>
      );


  });

  return (
    <div className="top-tracks">
      <h3>Popular:</h3>
      <ul class="top-tracks-list">{topTracksList}</ul>
    </div>
  );
}

export default ArtistTopTracks;
