import React from 'react';
import { IndexRoute, Route } from 'react-router';

import App from './components/app';
import Search from './components/Search';
import Artists from './containers/Artists';
import Tracks from './containers/Tracks';
import Albums from './containers/Albums';
import ArtistPage from './containers/ArtistPage';
import AlbumPage from './containers/AlbumPage';
import PlayList from './containers/PlayList';


export default (
  <Route path="/" component={App}>
    <IndexRoute component={Tracks} />
    <Route path="/artists" component={Artists} />
    <Route path="/albums" component={Albums} />
    <Route path="/search" component={Search} />
    <Route path="/playlist" component={PlayList} />
    <Route path="/artist/:id" component={ArtistPage} />
    <Route path="/album/:id" component={AlbumPage} />
  </Route>
);
