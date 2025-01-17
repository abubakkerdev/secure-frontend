import { configureStore } from "@reduxjs/toolkit";
import { userAPISlice } from "../features/user/userAPISlice";
import userReducer from "../features/user/userSlice";

export default configureStore({
  reducer: {
    userInfo: userReducer,
    [userAPISlice.reducerPath]: userAPISlice.reducer,
  },
  middleware: (getDefaultMiddlewares) =>
    getDefaultMiddlewares().concat(userAPISlice.middleware),
});
