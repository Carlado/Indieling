import {GET_ARTIST_INFO, GET_ARTIST_TRACKS, GET_ARTIST_ALBUMS} from '../constants/actiontypes';

export function getArtistInfoReducer(state= null, action) {
  switch(action.type) {
    case GET_ARTIST_INFO :
      return action.payload.data;
  }
  return state;
}

export function getArtistTracksReducer(state= null, action) {
  switch(action.type) {
    case GET_ARTIST_TRACKS :
      return action.payload.data;
  }
  return state;
}

export function getArtistAlbumsReducer(state= null, action) {
  switch(action.type) {
    case GET_ARTIST_ALBUMS :
      return action.payload.data;
  }
  return state;
}
