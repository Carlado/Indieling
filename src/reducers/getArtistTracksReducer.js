import {GET_ARTIST_TRACKS} from '../constants/actiontypes';

export default function getArtistTracksReducer(state= null, action) {
  switch(action.type) {
    case GET_ARTIST_TRACKS :
      console.log(action.payload.data);
      return action.payload.data;
  }
  return state;
}
