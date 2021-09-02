import { SIGN_IN, SIGN_OUT } from "../actions/types";

const INIT_STATE = {
  isSignedIn: null,
  userId: null,
};

const authReducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case SIGN_IN:
      return {
        ...state,
        userId: action.payload,
        isSignedIn: true,
      };
    case SIGN_OUT:
      return {
        ...state,
        userId: null,
        isSignedIn: false,
      };
    default:
      return state;
  }
};

export default authReducer;
