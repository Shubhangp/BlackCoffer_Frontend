import { configureStore } from "@reduxjs/toolkit";
import appSlice from "./appSlice";
import loginSlice from "./loginSlice";

const store = configureStore({
  reducer: {
    app: appSlice,
    login: loginSlice,
  },
});

export default store;