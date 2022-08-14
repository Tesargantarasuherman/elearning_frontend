import { TOGLE_SIDEBAR } from "../actions/types";


const INTIAL_STATE = {
  sidebar: false
};

export default (state = INTIAL_STATE, action) => {
  switch (action.type) {
    case TOGLE_SIDEBAR:
      return { ...state,sidebar:action.payload};
    default:
      return state;
  }
};
