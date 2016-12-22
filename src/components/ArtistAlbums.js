import React from 'react';
import AlbumTracks from './AlbumTracks';

const ArtistAlbums = (props) => {

  const albumList = props.albums.map(album => {
    return (
      <li key={album.id}>
        <div className="album-heading-box">
          <img src={album.image} />
          <h3 className="content-heading">{album.name}</h3>
        </div>
        <AlbumTracks tracks={album.tracks}/>
      </li>
    );
  })

  return (
    <div>
      <h3>Albums</h3>
      <hr />
      <ul className="album-list">{albumList}</ul>
    </div>
  );
}

export default ArtistAlbums;
