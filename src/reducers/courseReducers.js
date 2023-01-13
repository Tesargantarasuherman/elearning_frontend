import { GET_ALL_COURSE, GET_DETAIL_COURSE, GET_DETAIL_COURSE_PLAYING } from "../actions/types";

const INTIAL_STATE = {
  courses: []
};

export default (state = INTIAL_STATE, action) => {
  switch (action.type) {
    case GET_ALL_COURSE:
      return { ...state,courses:action.payload};
    case GET_DETAIL_COURSE:
      return { ...state,courses:action.payload};
    case GET_DETAIL_COURSE_PLAYING:
      return { ...state,courses:action.payload};
    default:
      return state;
  }
};
