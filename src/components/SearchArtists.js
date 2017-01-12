import React from 'react';
import { Link } from 'react-router';

const SearchArtists = (props) => {
  if (!props.artists) {
    return <div/>;
  }
  const listArtists = props.artists.results.map((artist) => {
    return (
      <li key={artist.id}>
        <Link to={'/artist/' + artist.id} >
          <div className="artistbox">
          {artist.image ? <img src={artist.image} /> : <img src={require('../images/album.jpg')} />}

          <p>{artist.name}</p>

          </div>
        </Link>
      </li>
    );
  });

  return (
    <div>
      Artists:
      <ul className="artist-list">{listArtists}</ul>
    </div>
  );
};


export default SearchArtists;
