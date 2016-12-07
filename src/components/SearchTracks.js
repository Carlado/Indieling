import React from 'react';

const SearchTracks = (props) => {
  if (!props.tracks) {
    return <div/>;
  }

  const songList = props.tracks.results.map((track) => {
    return (
      <li key={track.id}>
        {track.name} - {track.artist_name}
      </li>
    );
  });

  return (
    <ul>{songList}</ul>
  );
};



export default SearchTracks;
