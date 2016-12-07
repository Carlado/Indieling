// Set up your root reducer here...
import { combineReducers } from 'redux';
import {routerReducer} from 'react-router-redux';
import searchReducer from './searchReducer';

const rootReducer = combineReducers({
  routing: routerReducer,
  search: searchReducer

});

export default rootReducer;
