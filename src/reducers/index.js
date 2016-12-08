// Set up your root reducer here...
import { combineReducers } from 'redux';
import {routerReducer} from 'react-router-redux';
import artistSearchReducer from './artistSearchReducer';
import trackSearchReducer from './trackSearchReducer';
import getArtistsReducer from './getArtistsReducer';

const rootReducer = combineReducers({
  routing: routerReducer,
  artistSearch: artistSearchReducer,
  trackSearch: trackSearchReducer,
  getArtists: getArtistsReducer

});

export default rootReducer;
