import {REGISTER, SIGN_IN, SIGN_OUT } from '../actions/types';

const INTIAL_STATE = {
  isSignedIn: null,
  isError: false,
  userId: null,
  error:null
};

export default (state = INTIAL_STATE, action) => {
  switch (action.type) {
    case REGISTER:
      return { ...state, isSignedIn: true, userId: action.payload, errorMessage: null};
    case SIGN_IN:
      return { ...state, isSignedIn: true, userId: action.payload, errorMessage: null};
    case SIGN_OUT:
      return { ...state, isSignedIn: false, userId: null, errorMessage: null };
    default:
      return state;
  }
};
