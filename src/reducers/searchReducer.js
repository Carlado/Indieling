import {GET_AUTOCOMPLETE} from '../constants/actiontypes';

export default function searchReducer(state= null, action) {
  switch(action.type) {
    case GET_AUTOCOMPLETE :
      console.log(action.payload);
      return action.payload;
  }
  return state;
}
