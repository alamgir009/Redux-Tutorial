import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../src/components/counter/counterSlice";

const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});

export default store;
