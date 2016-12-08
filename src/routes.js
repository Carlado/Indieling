import React from 'react';
import { IndexRoute, Route } from 'react-router';

import App from './components/app';
import Search from './containers/search';
import Artists from './containers/Artists';


export default (
  <Route path="/" component={App}>
    <IndexRoute component={Artists} />
    <Route path="/search" component={Search} />
  </Route>
);
