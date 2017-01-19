import {SET_TRACK, ADD_TRACK} from '../constants/actiontypes';

export function setTrackReducer(state= null, action) {
  switch(action.type) {
    case SET_TRACK :
      return action.payload;
  }
  return state;
}

const INITIAL_STATE = {list: []};

export function addTrackReducer(state = INITIAL_STATE, action) {
  switch(action.type) {
    case ADD_TRACK :
      return { list: [...state.list, action.payload] };
  }
  return state;
}
