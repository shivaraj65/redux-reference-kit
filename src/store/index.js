import { createStore } from "redux";
import { configureStore, createSlice } from "@reduxjs/toolkit";

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

//way of declaring reducers without toolkit.
// const counterReducer = (state = { number: 0, view: true }, action) => {
//   if (action.type === "increment") {
//     return {
//       ...state,
//       number: state.number + 1,
//     };
//   }

//   if (action.type === "increase") {
//     return {
//       ...state,
//       number: state.number + action.value,
//     };
//   }

//   if (action.type === "decrement") {
//     return {
//       ...state,
//       number: state.number - 1,
//     };
//   }

//   if (action.type === "view") {
//     return {
//       ...state,
//       view: !state.view,
//     };
//   }
//   return state;
// };

// const store = createStore(counterSlice.reducer); //createStore only aloows one reducer as argument for more reducers follow below statement

const store = configureStore({
  reducer:counterSlice.reducer    //this is one method if, only one slice
  // reducer: { counter: counterSlice.reducer }, //for multiple slice create a obj any ky name and reducers
});

export const counterAction = counterSlice.actions; //you have to export actions if using slices..

export default store;
