// Set up your root reducer here...
import { combineReducers } from 'redux';
import {routerReducer} from 'react-router-redux';
import * as searching from './searchReducer';
import getArtistsReducer from './getArtistsReducer';
import getTracksReducer from './getTracksReducer';
import getAlbumsReducer from './getAlbumsReducer';
import * as artistPage from './artistPageReducer';
import fetchAlbumReducer from './albumPageReducer';
import setTrackReducer from './playerReducer';


const rootReducer = combineReducers({
  routing: routerReducer,
  artistSearch: searching.artistSearchReducer,
  trackSearch: searching.trackSearchReducer,
  albumSearch: searching.albumSearchReducer,
  artists: getArtistsReducer,
  tracks: getTracksReducer,
  albums: getAlbumsReducer,
  artistTracks: artistPage.getArtistTracksReducer,
  artistInfo: artistPage.getArtistInfoReducer,
  artistAlbums: artistPage.getArtistAlbumsReducer,
  album: fetchAlbumReducer,
  currentTrack: setTrackReducer

});

export default rootReducer;
