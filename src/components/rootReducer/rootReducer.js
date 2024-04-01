import { combineReducers } from "@reduxjs/toolkit";
import counterReducer from "../counter/counterSlice";
import userReducer from "../features/todoSlice";

const rootReducer = combineReducers({
  counter: counterReducer,
  user: userReducer,
});

export default rootReducer;
