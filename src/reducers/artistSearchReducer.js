import {SEARCH_GET_ARTISTS} from '../constants/actiontypes';

export default function artistSearchReducer(state= null, action) {
  switch(action.type) {
    case SEARCH_GET_ARTISTS :
      return action.payload.data;
  }
  return state;
}
