import React from 'react';

const SearchArtists = (props) => {
  if (!props.artists) {
    return <div/>;
  }
  const artistList = props.artists.results.map((artist) => {
    return (
      <li key={artist.id}>
        {artist.name}
      </li>
    );
  });

  return (
    <div>
      Artists:
      <ul>{artistList}</ul>
    </div>
  );
};


export default SearchArtists;
