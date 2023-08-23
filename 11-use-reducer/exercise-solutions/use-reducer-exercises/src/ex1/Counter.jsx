import { useReducer } from "react";

function counterReducer(state, action) {
  //   console.log({ state }, { action });
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
  const [count, dispatchCounter] = useReducer(counterReducer, 0);

  function up() {
    dispatchCounter({ type: "UP", value: 1 });
  }

  function down() {
    dispatchCounter({ type: "DOWN", value: 1 });
  }

  function reset() {
    dispatchCounter({ type: "RESET" });
  }

  return (
    <>
      <h1>{count}</h1>
      <button onClick={up}>Up</button>
      <button onClick={down}>Down</button>
      <button onClick={reset}>Reset</button>
    </>
  );
}

export default Counter;
