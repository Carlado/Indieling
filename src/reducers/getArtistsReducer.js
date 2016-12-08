import {GET_ARTISTS} from '../constants/actiontypes';

export default function getArtistsReducer(state= null, action) {
  switch(action.type) {
    case GET_ARTISTS :
      return action.payload.data;
  }
  return state;
}
