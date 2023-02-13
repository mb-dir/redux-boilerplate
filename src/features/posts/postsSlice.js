import { createSlice, nanoid } from "@reduxjs/toolkit";
import { sub } from "date-fns";

const initialState = [
  {
    id: "1",
    title: "Learning Redux Toolkit",
    content: "I've heard good things.",
    date: sub(new Date(), { minutes: 10 }).toISOString(),
    reactions: {
      thumbsUp: 0,
      wow: 0,
      heart: 0,
      rocket: 0,
      coffee: 0,
    },
  },
  {
    id: "2",
    title: "Slices...",
    content: "The more I say slice, the more I want pizza.",
    date: sub(new Date(), { minutes: 2 }).toISOString(),
    reactions: {
      thumbsUp: 1,
      wow: 0,
      heart: 3,
      rocket: 0,
      coffee: 0,
    },
  },
];

const postSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    addPost: {
      reducer(state, action) {
        state.unshift(action.payload);
      },
      prepare(title, content, userId) {
        return {
          payload: {
            id: nanoid(),
            title,
            content,
            userId,
            date: new Date().toISOString(),
            reactions: {
              thumbsUp: 0,
              wow: 0,
              heart: 0,
              rocket: 0,
              coffee: 0,
            },
          },
        };
      },
    },
    addReaction(state, action) {
      const { postId, reaction } = action.payload;
      const existingPost = state.find(post => post.id === postId);

      if (existingPost) {
        existingPost.reactions[reaction]++;
      }
    },
  },
});

//To be more flex, imagine we use posts in more than one component and we have const post = useSelector(tate => state.posts), if the state structure change we will have to change it in each place, this approach makes that we will need to change it only here
export const selectAllPosts = state => state.posts;

export const { addPost, addReaction } = postSlice.actions;

export default postSlice.reducer;
