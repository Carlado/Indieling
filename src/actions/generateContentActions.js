import * as types from '../constants/actiontypes';
import axios from 'axios';
import * as config from '../constants/config';

const ROOT_URL = 'https://api.jamendo.com/v3.0/';
const KEY = config.KEY;
const FORMAT = 'format=json';

export function getArtists(duration) {
  const request = axios.get(`${ROOT_URL}artists/?client_id=${KEY}&${FORMAT}&limit=20&order=popularity_${duration}`);
  return {
    type: types.GET_ARTISTS,
    payload: request
  }
}

export function getTracks(duration) {
  const request = axios.get(`${ROOT_URL}tracks/?client_id=${KEY}&${FORMAT}&limit=10&order=popularity_month`);
  return {
    type: types.GET_TRACKS,
    payload: request
  }
}

export function getAlbums(duration) {
  const request = axios.get(`${ROOT_URL}albums/?client_id=${KEY}&${FORMAT}&limit=10&order=popularity_month`);
  return {
    type: types.GET_ALBUMS,
    payload: request
  }
}
