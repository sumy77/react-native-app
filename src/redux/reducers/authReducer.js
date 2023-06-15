import { LOGIN } from "../constants/authConstants";
const INITIAL_STATE = {
    loggedIn: {}
};

export const authReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case LOGIN:
      return {
        loggedIn: {
            ...state.loggedIn,
            data: action.payload
        }
    };
    default:
      return state;
  }
};
