import { combineReducers } from "redux";
import auth from "./authReducer";
import message from "./messageReducer";
import data from "./dataReducer";

export default combineReducers({
  auth,
  message,
  data
});