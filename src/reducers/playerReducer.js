import {SET_TRACK, ADD_TRACK, CLEAR_LIST} from '../constants/actiontypes';

export function setTrackReducer(state= null, action) {
  switch(action.type) {
    case SET_TRACK :
      return action.payload;
  }
  return state;
}

const INITIAL_STATE = {list: []};

export function listReducer(state = INITIAL_STATE, action) {
  switch(action.type) {
    case ADD_TRACK :
      return { list: [...state.list, action.payload] };
    case CLEAR_LIST :
        return INITIAL_STATE;

  }
  return state;
}
