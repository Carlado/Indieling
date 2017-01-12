import React from 'react';
import { Link } from 'react-router';
import FontAwesome from 'react-fontawesome';

const SearchTracks = (props) => {
  console.log(props);
  if (!props.tracks) {
    return <div/>;
  }

  const tracksList = props.tracks.results.map((track) => {
    return (
      <li key={track.id} className="track">
        <img src={track.album_image} />
        <FontAwesome className="nav-icon" name="play" size="2x"/>
        <div>
          <p className="trackname">{track.name}</p>
          <Link className="trackartist" to={'/artist/' + track.artist_id}>{track.artist_name}</Link>
        </div>

      </li>
    );
  });

  return (
    <div className="search-category">
      <h3 className="search-category-heading">Tracks:</h3>
      <ul className="tracks-list">{tracksList}</ul>
    </div>
  );
};



export default SearchTracks;
