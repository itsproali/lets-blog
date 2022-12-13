import { combineReducers } from "redux";
import blogReducer from "./blogReducer";

const rootReducer = combineReducers({
  blog: blogReducer,
});

export default rootReducer;
