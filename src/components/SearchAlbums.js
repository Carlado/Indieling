import React from 'react';

const SearchAlbums = (props) => {
  if (!props.artists) {
    return <div/>;
  }
  const albumList = props.artists.results.map((album) => {
    return (
      <li key={album.id}>
        {album.name}
      </li>
    );
  });

  return (
    <div>
      Artists:
      <ul>{albumList}</ul>
    </div>
  );
};


export default SearchAlbums;
