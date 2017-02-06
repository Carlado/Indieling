import * as types from '../constants/actiontypes';
import axios from 'axios';
import * as config from '../constants/config';

const ROOT_URL = 'https://api.jamendo.com/v3.0/';
const KEY = config.KEY;
const FORMAT = 'format=json';

export function getArtists(duration) {
  const request = axios.get(`${ROOT_URL}artists/?client_id=${KEY}&${FORMAT}&limit=18&order=popularity_${duration}`);
  return {
    type: types.GET_ARTISTS,
    payload: request
  };
}

export function getTracks(duration) {
  const request = axios.get(`${ROOT_URL}tracks/?client_id=${KEY}&${FORMAT}&limit=12&order=popularity_${duration}`);
  return {
    type: types.GET_TRACKS,
    payload: request
  };
}

export function getAlbums(duration) {
  const request = axios.get(`${ROOT_URL}albums/?client_id=${KEY}&${FORMAT}&limit=12&imagesize=200&order=popularity_${duration}`);
  return {
    type: types.GET_ALBUMS,
    payload: request
  };
}

export function getArtistTracks(id) {
  const request = axios.get(`${ROOT_URL}tracks/?client_id=${KEY}&${FORMAT}&limit=5&artist_id=${id}&order=popularity_total`);
  return {
    type: types.GET_ARTIST_TRACKS,
    payload: request
  };
}



export function getArtistInfo(id) {
  const request = axios.get(`${ROOT_URL}artists/locations/?client_id=${KEY}&${FORMAT}&id=${id}`);
  return {
    type: types.GET_ARTIST_INFO,
    payload: request
  };
}

export function getArtistAlbums(id) {
  const request = axios.get(`${ROOT_URL}albums/tracks/?client_id=${KEY}&${FORMAT}&imagesize=100&artist_id=${id}`);
  return {
    type: types.GET_ARTIST_ALBUMS,
    payload: request
  };
}

export function fetchAlbum(id) {
  const request = axios.get(`${ROOT_URL}albums/tracks/?client_id=${KEY}&${FORMAT}&imagesize=150&limit=5&id=${id}`);
  return {
    type: types.FETCH_ALBUM,
    payload: request
  };
}
