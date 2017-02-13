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

          <div className="artist-album-namebox">
            <p className="artist-artistname">{artist.name}</p>
          </div>

          </div>
        </Link>
      </li>
    );
  });

  return (
    <article className="search-category">
      <h3 className="search-category-heading">Artists:</h3>
      <ul className="artist-list">
        {listArtists}
      </ul>
      <hr />
    </article>
  );
};

SearchArtists.propTypes = {
  artists: React.PropTypes.object
};


export default SearchArtists;
