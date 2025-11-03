import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: "Ridoy",
  email: "ridoy@gmail.com",
  userTasks: [],
};

const userSlice = createSlice({
  name: "userSlice",
  initialState,
  reducers: {},
});

export const { addToUser } = userSlice.actions;

export default userSlice.reducer;
