import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    currentUser: null,
    isFetching: false,
    error: false,
  },
  reducers: {
    authActionStart: (state) => {
      state.isFetching = true;
      state.error = false;
    },
    authActionFail: (state) => {
      state.isFetching = false;
      state.error = true;
    },
    authActionSuccess: (state, action) => {
      state.isFetching = false;
      state.error = false;
      state.currentUser = action.payload;
    },
  },
});

export const { authActionFail, authActionStart, authActionSuccess } =
  userSlice.actions;
export default userSlice.reducer;
