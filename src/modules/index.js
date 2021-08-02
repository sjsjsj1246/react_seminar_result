import { combineReducers } from "redux";
import auth from "./auth";
import todos from "./todos";

const rootStore = combineReducers({
  todos,
  auth,
});

export default rootStore;
