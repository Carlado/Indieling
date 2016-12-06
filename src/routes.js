import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/app';
import Search from './containers/search';


export default (
  <Route path="/" component={App}>
    <Route path="/search" component={Search} />
  </Route>
);
