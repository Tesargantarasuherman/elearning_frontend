import { GET_ALL_COURSE } from "../actions/types";

let _theme = localStorage.getItem('theme')

const INTIAL_STATE = {
  courses: []
};

export default (state = INTIAL_STATE, action) => {
  switch (action.type) {
    case GET_ALL_COURSE:
      return { ...state,courses:action.payload};
    default:
      return state;
  }
};
