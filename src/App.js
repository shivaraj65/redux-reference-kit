import React, { useState } from "react";
import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { counterAction } from "./store/slices/counter";
import Login from "./components/login";

function App() {
  const dispatch = useDispatch();
  const number = useSelector((state) => state.number);
  const view = useSelector((state) => state.view);

  // const [number, setNumber] = useState(0);

  const increment = () => {
    //legacy redux way
    // dispatch({ type: "increment" });

    //new toolkit way
    dispatch(counterAction.increment());
  };

  const decrement = () => {
    // dispatch({ type: "decrement" });

    dispatch(counterAction.decrement());
  };

  const increase = () => {
    // dispatch({ type: "increase", value: 10 });

    dispatch(counterAction.increase({ value: 10 }));
  };

  const vieworhide = () => {
    // dispatch({ type: "view" });

    dispatch(counterAction.view());
  };

  return (
    <div className="App">
      {view ? <span>count :{number}</span> : null}

      <button
        onClick={() => {
          increment();
        }}
      >
        increment
      </button>
      <button
        onClick={() => {
          decrement();
        }}
      >
        decrement
      </button>
      <button
        onClick={() => {
          increase();
        }}
      >
        increase by 10
      </button>
      <button
        onClick={() => {
          vieworhide();
        }}
      >
        show or hide
      </button>
      <Login />
    </div>
  );
}

export default App;
