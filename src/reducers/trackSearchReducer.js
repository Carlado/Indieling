import {GET_TRACKS} from '../constants/actiontypes';

export default function trackSearchReducer(state= null, action) {
  switch(action.type) {
    case GET_TRACKS :
      return action.payload.data;
  }
  return state;
}
