import { LOGIN } from "../constants/authConstants";
export const login = () => {
  return {
    type: LOGIN,
    payload: {
      id: 1,
      firstName: "Sumit",
      lastName: "Sharma",
      token: "abcdefghijkl"
    }
  };
};
