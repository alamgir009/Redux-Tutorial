import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "../src/components/rootReducer/rootReducer";
// import counterReducer from "../src/components/counter/counterSlice";

const store = configureStore({
  reducer: rootReducer,
});

export default store;
