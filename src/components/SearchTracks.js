import React from 'react';

const SearchTracks = (props) => {
  console.log(props);
  if (!props.tracks) {
    return <div/>;
  }

  const tracksList = props.tracks.results.map((track) => {
    return (
      <li key={track.id}>
        {track.name} - {track.artist_name}
      </li>
    );
  });

  return (
    <div>
      Tracks:
      <ul>{tracksList}</ul>
    </div>
  );
};



export default SearchTracks;
