// import { createStore } from "redux";
import { configureStore, combineReducers } from "@reduxjs/toolkit";
import counterSlice from "./slices/counter";
import authSlice from "./slices/auth";

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

// Combine reducers into a single root reducer
// const rootReducer = combineReducers({
//   counter: counterSlice,
//   auth: AuthSlice,
// });

//for some reason combineReducers are not working, only single reducers are working
const store = configureStore({
  reducer: counterSlice, //pass the reducer here for the store.
  // reducer: combineReducers({
  //   1: counterSlice.reducer,
  //   2: authSlice.reducer,
  // }),
});

export default store;
