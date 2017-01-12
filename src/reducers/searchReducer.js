import {SEARCH_GET_ARTISTS, SEARCH_GET_TRACKS, SEARCH_GET_ALBUMS} from '../constants/actiontypes';

export  function artistSearchReducer(state= null, action) {
  switch(action.type) {
    case SEARCH_GET_ARTISTS :
      return action.payload.data;
  }
  return state;
}

export  function trackSearchReducer(state= null, action) {
  switch(action.type) {
    case SEARCH_GET_TRACKS :
      return action.payload.data;
  }
  return state;
}

export  function albumSearchReducer(state= null, action) {
  switch(action.type) {
    case SEARCH_GET_ALBUMS :
      return action.payload.data;
  }
  return state;
}
