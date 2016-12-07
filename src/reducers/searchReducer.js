import {GET_TRACKS} from '../constants/actiontypes';

export default function searchReducer(state= null, action) {
  switch(action.type) {
    case GET_TRACKS :
      console.log(action.payload);
      return action.payload.data;
  }
  return state;
}
