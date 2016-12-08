import React from 'react';
import FontAwesome from 'react-fontawesome';
import { Link, IndexLink } from 'react-router';

const Topbar = () => {
  return (
    <div className="topbar">
      <ul className="nav-items">
        <li><IndexLink to="/" activeClassName="active"><FontAwesome className="nav-icon" name="home" size="lg"/>Indieling</IndexLink></li>
        <li><Link to="/search" activeClassName="active"><FontAwesome className="nav-icon" name="search" size="lg"/>Search</Link></li>
      </ul>

    </div>
  );
};

export default Topbar;
