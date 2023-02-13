import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  { id: "0", name: "John Paulo" },
  { id: "1", name: "John1 Paulo" },
  { id: "2", name: "John Paulo2" },
];

const userSlice = createSlice({ name: "users", initialState, reducers: {} });

export const selectAllUsers = state => state.users;

export default userSlice.reducer;
