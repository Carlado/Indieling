import {SET_TRACK} from '../constants/actiontypes';

export default function setTrackReducer(state= null, action) {
  console.log(action);
  switch(action.type) {
    case SET_TRACK :
      return action.payload;
  }
  return state;
}
