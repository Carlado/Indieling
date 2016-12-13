import React from 'react';

const ArtistTopTracks = (props) => {
  //props getting passed down from ArtistPage

  const topTracksList = props.tracks.map((track,i) => {
    if (i < 10) {
      return (
        <li key={track.id}>
          <div className="top-tracks-item">
            <img src={track.album_image} />
            {track.name}
          </div>

        </li>
      );
    }

  });

  return (
    <div className="top-tracks">
      <ul class="top-tracks-list">{topTracksList}</ul>
    </div>
  );
}

export default ArtistTopTracks;
