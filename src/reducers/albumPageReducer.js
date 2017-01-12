import {FETCH_ALBUM} from '../constants/actiontypes';

export default function fetchAlbumReducer(state= null, action) {
  switch(action.type) {
    case FETCH_ALBUM :
      return action.payload.data;
  }
  return state;
}
