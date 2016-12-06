import * as types from '../constants/actiontypes';
import axios from 'axios';
import * as config from '../constants/config';

const ROOT_URL = 'https://api.jamendo.com/v3.0/';
const KEY = config.KEY;
const FORMAT = 'format=json';


export function getAutoComplete(term) {
  const request = axios.get(`${ROOT_URL}autocomplete/?client_id=${KEY}&${FORMAT}&limit=5&prefix=${term}`);
  return {
    type: types.GET_AUTOCOMPLETE,
    payload: request
  };
}
