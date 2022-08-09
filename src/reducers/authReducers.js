import {REGISTER, SIGN_IN, SIGN_OUT, VALIDATION } from '../actions/types';

const INTIAL_STATE = {
  isSignedIn: null,
  isError: false,
  data_user: null,
  error:null
};

export default (state = INTIAL_STATE, action) => {
  switch (action.type) {
    case REGISTER:
      return { ...state, isSignedIn: true, data_user: action.payload, errorMessage: null};
    case SIGN_IN:
      return { ...state, isSignedIn: true, data_user: action.payload, errorMessage: null};
    case VALIDATION:
      return { ...state, isSignedIn: action.payload !== null ? true : false, data_user: action.payload, errorMessage: null};
    case SIGN_OUT:
      return { ...state, isSignedIn: false, data_user: null, errorMessage: null };
    default:
      return state;
  }
};
