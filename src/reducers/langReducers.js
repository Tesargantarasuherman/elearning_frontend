import { GET_LANGUAGE, SET_LANGUAGE } from "../actions/types";

let _language = localStorage.getItem('language')

const INTIAL_STATE = {
  language: _language ? _language : 'id'
};

export default (state = INTIAL_STATE, action) => {
  switch (action.type) {
    case SET_LANGUAGE:
      return { ...state,language:action.payload};
    default:
      return state;
  }
};
