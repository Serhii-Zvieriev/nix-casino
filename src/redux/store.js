import { configureStore } from "@reduxjs/toolkit";
// import compareDataMiddleware from "./compareDataMiddleware";
import userReducer from "./userSlice";
import gameReducer from "./gameSlice";

export const store = configureStore({
  reducer: {
    user: userReducer,
    game: gameReducer,
  },
  // middleware: [compareDataMiddleware],
});
