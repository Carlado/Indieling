import * as types from '../constants/actiontypes';

export function setTrack(track) {
  return {
    type: types.SET_TRACK,
    payload: track
  }

}
