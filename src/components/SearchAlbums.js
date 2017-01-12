import React from 'react';
import { Link } from 'react-router';

const SearchAlbums = (props) => {
  if (!props.albums) {
    return <div/>;
  }
  const albumList = props.albums.results.map((album) => {
    return (
      <li key={album.id}>
        <Link to={'/album/' + album.id}>
          <div className="artistbox">
            {album.image ? <img src={album.image} /> : <img src={require('../images/album.jpg')} />}
          <p className="album-albumname">{album.name}</p>
          <span>{album.artist_name}</span>
          </div>
        </Link>
      </li>
    );
  });

  return (
    <div>
      Albums:
      <ul className="albums-list">{albumList}</ul>
    </div>
  );
};


export default SearchAlbums;
