import * as types from '../constants/actiontypes';
import axios from 'axios';
import * as config from '../constants/config';

const ROOT_URL = 'https://api.jamendo.com/v3.0/';
const KEY = config.KEY;
const FORMAT = 'format=json';


export function getTracks(term) {
  const request = axios.get(`${ROOT_URL}tracks/?client_id=${KEY}&${FORMAT}&limit=20&namesearch=${term}`);
  return {
    type: types.GET_TRACKS,
    payload: request
  };
}

export function getArtists(term) {
  const request = axios.get(`${ROOT_URL}artists/?client_id=${KEY}&${FORMAT}&limit=10&namesearch=${term}`);
  return {
    type: types.GET_ARTISTS,
    payload: request
  }
}
