import createReducer from '../../../../Lib/createReducer';
import * as types from '../Actions/types';

export const SESSION_STATUS = createReducer([],{
  [types.SESSION_STATUS](state, action) {
    return {
      sessionStatus: action.sessionStatus
    }
  }
});

export const SESSION_KEY = createReducer([],{
  [types.SESSION_KEY](state, action) {
    return {
      sessionKey: action.sessionKey
    }
  }
});