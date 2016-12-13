import {GET_ARTIST_ALBUMS} from '../constants/actiontypes';

export default function getArtistAlbumsReducer(state= null, action) {
  switch(action.type) {
    case GET_ARTIST_ALBUMS :
      return action.payload.data;
  }
  return state;
}
