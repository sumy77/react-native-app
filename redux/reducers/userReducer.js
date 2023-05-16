import { LIST_USERS } from "../constants/userConstants";
const INITIAL_STATE = [
  {
    firstName: "Harinder",
    lastName: "Singh",
    phone: "+91954647778",
  },
  {
    firstName: "Raman",
    lastName: "Singh",
    phone: "+91974568898",
  },
  {
    firstName: "Sumit",
    lastName: "Sharma",
    phone: "+919779989898",
  },
];

export const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case LIST_USERS:
      return state;
    default:
      return state;
  }
};
