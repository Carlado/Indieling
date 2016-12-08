import {GET_ALBUMS} from '../constants/actiontypes';

export default function getAlbumsReducer(state= null, action) {
  switch(action.type) {
    case GET_ALBUMS :
      return action.payload.data;
  }
  return state;
}
