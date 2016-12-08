import {GET_TRACKS} from '../constants/actiontypes';

export default function getTracksReducer(state= null, action) {
  switch(action.type) {
    case GET_TRACKS :
      return action.payload.data;
  }
  return state;
}
