import React from 'react';

const AlbumTracks = (props) => {

  const tracksList = props.tracks.map(track => {
    return (
      <li>
        {track.name}
      </li>
    );
  })

  return (
    <ul>{tracksList}</ul>
  );

}

export default AlbumTracks;
