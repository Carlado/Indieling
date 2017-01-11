import React from 'react';
import FontAwesome from 'react-fontawesome';

const AlbumTracks = (props) => {

  const tracksList = props.tracks.map(track => {
    console.log(track);
    return (
      <li key={track.id} className="album-track-item">
        <FontAwesome className="nav-icon album-track-play" name="play" size="1x"/>
        <span className="album-position">{track.position}</span>
        <span>{track.name}</span>
      </li>
    );
  })

  return (
    <ul className="album-tracks-list">{tracksList}</ul>
  );

}

export default AlbumTracks;
