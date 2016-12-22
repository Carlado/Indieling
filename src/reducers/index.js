// Set up your root reducer here...
import { combineReducers } from 'redux';
import {routerReducer} from 'react-router-redux';
import artistSearchReducer from './artistSearchReducer';
import trackSearchReducer from './trackSearchReducer';
import getArtistsReducer from './getArtistsReducer';
import getTracksReducer from './getTracksReducer';
import getAlbumsReducer from './getAlbumsReducer';
import * as artistPage from './artistPageReducer';


const rootReducer = combineReducers({
  routing: routerReducer,
  artistSearch: artistSearchReducer,
  trackSearch: trackSearchReducer,
  artists: getArtistsReducer,
  tracks: getTracksReducer,
  albums: getAlbumsReducer,
  artistTracks: artistPage.getArtistTracksReducer,
  artistInfo: artistPage.getArtistInfoReducer,
  artistAlbums: artistPage.getArtistAlbumsReducer

});

export default rootReducer;
