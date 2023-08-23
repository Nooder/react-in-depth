import Button from "./Button.jsx";
import { useReducer } from "react";

function counterReducer(state, action) {
  switch (action.type) {
    case "UP":
      return state + action.value;
    case "DOWN":
      return state - action.value;
    case "RESET":
      return 0;
    default:
      throw new Error("Invalid Action Type");
  }
}

function Counter() {
  const [counter, counterDispatch] = useReducer(counterReducer, 0);

  return (
    <>
      <h1>{counter}</h1>
      <Button
        text="Go Up!"
        counterDispatch={counterDispatch}
        action={{ type: "UP", value: 1 }}
      />
      <Button
        text="Go Down!"
        counterDispatch={counterDispatch}
        action={{ type: "DOWN", value: 1 }}
      />
      <Button
        text="Go to Zero!"
        counterDispatch={counterDispatch}
        action={{ type: "RESET" }}
      />
    </>
  );
}

export default Counter;
