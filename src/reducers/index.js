// Set up your root reducer here...
import { combineReducers } from 'redux';
import {routerReducer} from 'react-router-redux';
import artistSearchReducer from './artistSearchReducer';
import trackSearchReducer from './trackSearchReducer';
import getArtistsReducer from './getArtistsReducer';
import getTracksReducer from './getTracksReducer';
import getAlbumsReducer from './getAlbumsReducer';

const rootReducer = combineReducers({
  routing: routerReducer,
  artistSearch: artistSearchReducer,
  trackSearch: trackSearchReducer,
  artists: getArtistsReducer,
  tracks: getTracksReducer,
  albums: getAlbumsReducer

});

export default rootReducer;
