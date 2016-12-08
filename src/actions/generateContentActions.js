import * as types from '../constants/actiontypes';
import axios from 'axios';
import * as config from '../constants/config';

const ROOT_URL = 'https://api.jamendo.com/v3.0/';
const KEY = config.KEY;
const FORMAT = 'format=json';

export function getArtists() {
  const request = axios.get(`${ROOT_URL}artists/?client_id=${KEY}&${FORMAT}&limit=10`);
  return {
    type: types.GET_ARTISTS,
    payload: request
  }
}
