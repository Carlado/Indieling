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
            <div className="artist-album-namebox">
              <p className="album-albumname">{album.name}</p>
              <span>{album.artist_name}</span>
            </div>
          </div>
        </Link>
      </li>
    );
  });

  return (
    <article className="search-category">
      <h3 className="search-category-heading">Albums:</h3>
      <ul className="albums-list">{albumList}</ul>
      <hr className="album-hr" />
    </article>
  );
};

SearchAlbums.propTypes = {
  albums: React.PropTypes.object
};


export default SearchAlbums;
