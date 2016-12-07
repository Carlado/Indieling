// Set up your root reducer here...
import { combineReducers } from 'redux';
import {routerReducer} from 'react-router-redux';
import artistSearchReducer from './artistSearchReducer';
import trackSearchReducer from './trackSearchReducer'

const rootReducer = combineReducers({
  routing: routerReducer,
  artistSearch: artistSearchReducer,
  trackSearch: trackSearchReducer

});

export default rootReducer;
