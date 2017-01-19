import * as types from '../constants/actiontypes';

export function setTrack(track) {
  return {
    type: types.SET_TRACK,
    payload: track
  }

}

export function addTrack(track) {
  return {
    type: types.ADD_TRACK,
    payload: track
  }

}
