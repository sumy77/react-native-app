import { LIST_USERS } from "../constants/userConstants";
export const listUsers = () => {
  return {
    type: LIST_USERS,
  };
};
