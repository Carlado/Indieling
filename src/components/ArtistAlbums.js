import React from 'react';
import AlbumTracks from '../containers/AlbumTracks';

const ArtistAlbums = (props) => {

  const albumList = props.albums.map(album => {
    return (
      <li key={album.id} className="album-item">
        <div className="album-heading-box">
          <img src={album.image}/>
          <h3 className="content-heading">{album.name}</h3>
        </div>
        <button className="default-button" onClick={() => props.addAlbum(album.tracks)}>Add to queue</button>
        <AlbumTracks tracks={album.tracks}/>
      </li>
    );
  });

  return (
    <section>
      <h3>Albums</h3>
      <hr/>
      <ul className="album-list">{albumList}</ul>
    </section>
  );
};

ArtistAlbums.propTypes = {
  albums: React.PropTypes.array
};

export default ArtistAlbums;
