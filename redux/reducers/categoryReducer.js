import { LIST_CATEGORIES } from "../constants/categoryConstants";
const INITIAL_STATE = [
  {
    name: "Shirts",
    image: "shirts.png",
  },
  {
    name: "Tshirts",
    image: "tshirt.png",
  },
  {
    name: "Jeans",
    image: "jeans.png",
  },
];

export const categoryReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case LIST_CATEGORIES:
      return state;
    default:
      return state;
  }
};
