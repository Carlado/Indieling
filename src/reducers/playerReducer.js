import {SET_TRACK, ADD_TRACK, CLEAR_LIST, INCREMENT_POSITION, REPLAY_LIST} from '../constants/actiontypes';

export function setTrackReducer(state= null, action) {
  switch(action.type) {
    case SET_TRACK :
      return action.payload;
  }
  return state;
}

const INITIAL_STATE = {list: [], listPosition: 0};

export function listReducer(state = INITIAL_STATE, action) {
  switch(action.type) {
    case ADD_TRACK :
      return { ...state, list: [...state.list, action.payload] };
    case CLEAR_LIST :
      return INITIAL_STATE;
    case INCREMENT_POSITION :
      return { ...state, listPosition: state.listPosition + 1};
    case REPLAY_LIST :
      return {...state, listPosition: 0};

  }
  return state;
}
