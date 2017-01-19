import React from 'react';
import FontAwesome from 'react-fontawesome';
import { Link, IndexLink } from 'react-router';

const Topbar = () => {
  return (
    <div className="topbar">
      <ul className="nav-items">
        <li><IndexLink to="/" activeClassName="active"><FontAwesome className="nav-icon" name="leaf" size="lg"/>Artists</IndexLink></li>
        <li><Link to="/tracks" activeClassName="active"><FontAwesome className="nav-icon" name="music" size="lg"/>Tracks</Link></li>
        <li><Link to="/albums" activeClassName="active"><FontAwesome className="nav-icon" name="circle-o" size="lg"/>Albums</Link></li>
        <li><Link to="/search" activeClassName="active"><FontAwesome className="nav-icon" name="search" size="lg"/>Search</Link></li>
        <li><Link to="/playlist" activeClassName="active"><FontAwesome className="nav-icon" name="search" size="lg"/>Playlist</Link></li>

      </ul>

    </div>
  );
};

export default Topbar;
