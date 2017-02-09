import React from 'react';
import FontAwesome from 'react-fontawesome';
import { Link, IndexLink } from 'react-router';

const Topbar = () => {
  return (
    <div className="topbar">
      <ul className="nav-items">
        <li><IndexLink to="/" activeClassName="active"><FontAwesome className="nav-icon" name="music" size="lg"/><span className="nav-item-text">Tracks</span></IndexLink></li>
        <li><Link to="/artists" activeClassName="active"><FontAwesome className="nav-icon" name="leaf" size="lg"/><span className="nav-item-text">Artists</span></Link></li>
        <li><Link to="/albums" activeClassName="active"><FontAwesome className="nav-icon" name="circle-o" size="lg"/><span className="nav-item-text">Albums</span></Link></li>
        <li><Link to="/search" activeClassName="active"><FontAwesome className="nav-icon" name="search" size="lg"/><span className="nav-item-text">Search</span></Link></li>
        <li><Link to="/playlist" activeClassName="active"><FontAwesome className="nav-icon" name="list" size="lg"/><span className="nav-item-text">Queue</span></Link></li>
      </ul>
    </div>
  );
};

export default Topbar;
