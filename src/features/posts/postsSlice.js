import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = [
  {
    id: "1",
    title: "Learning Redux Toolkit",
    content: "I've heard good things.",
  },
  {
    id: "2",
    title: "Slices...",
    content: "The more I say slice, the more I want pizza.",
  },
];

const postSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    addPost: {
      reducer(state, action) {
        state.push(action.payload);
      },
      prepare(title, content) {
        return {
          payload: {
            id: nanoid(),
            title,
            content,
          },
        };
      },
    },
  },
});

//To be more flex, imagine we use posts in more than one component and we have const post = useSelector(tate => state.posts), if the state structure change we will have to change it in each place, this approach makes that we will need to change it only here
export const selectAllPosts = state => state.posts;

export const { addPost } = postSlice.actions;

export default postSlice.reducer;
