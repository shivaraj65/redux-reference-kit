import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: "counter", //all slice needs a name, can have multiple slice.
  initialState: { number: 0, view: true },
  reducers: {
    increment(state) {
      state.number++;
    },
    increase(state, action) {
      state.number = state.number + action.payload.value;
    },
    decrement(state) {
      state.number--;
    },
    view(state) {
      state.view = !state.view;
    },
  },
});

export const counterAction = counterSlice.actions; //you have to export actions if using slices..

export default counterSlice;
