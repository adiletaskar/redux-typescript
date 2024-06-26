import { configureStore } from "@reduxjs/toolkit";
import { postAPI } from "../services/PostService";
import userSlice from "./reducers/userSlice";

export const store = configureStore({
  reducer: {
    user: userSlice,
    [postAPI.reducerPath]: postAPI.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(postAPI.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
