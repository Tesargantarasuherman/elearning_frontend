import { SET_THEME } from "../actions/types";

let _theme = localStorage.getItem('theme')

const INTIAL_STATE = {
  theme: _theme ? _theme : 'light'
};

export default (state = INTIAL_STATE, action) => {
  switch (action.type) {
    case SET_THEME:
      return { ...state,theme:action.payload};
    default:
      return state;
  }
};
