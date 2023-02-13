import { configureStore } from "@reduxjs/toolkit";
import postsReducer from "../features/posts/postsSlice";

export const store = configureStore({
  reducer: {
    posts: postsReducer,
  },
});

store.subscribe(() => console.log(store.getState()));
