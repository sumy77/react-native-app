import { combineReducers } from "redux";
import { userReducer } from "./userReducer";
import { categoryReducer } from "./categoryReducer";
import { authReducer } from "./authReducer";
export default combineReducers({
  user: userReducer,
  category: categoryReducer,
  auth: authReducer
});
