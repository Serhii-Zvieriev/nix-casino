import { configureStore } from "@reduxjs/toolkit";
import compareDataMiddleware from "./compareDataMiddleware";
import userReducer from "./userSlice";

export const store = configureStore({
  reducer: {
    user: userReducer,
  },
  middleware: [compareDataMiddleware],
  // middleware: (getDefaultMiddleware) =>
  //   getDefaultMiddleware().concat(compareDataMiddleware),
});
