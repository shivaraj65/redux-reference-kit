import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth", //all slice needs a name, can have multiple slice.
  initialState: { email: "", password: "" },
  reducers: {
    update(state, action) {
      state.email = action.payload.email;
      state.password = action.payload.password;
    },
    clear(state) {
      state.email = "";
      state.password = "";
    },
  },
});

export const authAction = authSlice.actions; //you have to export actions if using slices..

export default authSlice;
