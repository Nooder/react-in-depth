import { useReducer } from "react";

function reducer(prevState, action) {
  console.log({ prevState }, { action });
  // return action; // setCounter(1)
  // return prevState + action;
  switch (action.type) {
    case "up":
      return prevState + action.value;
    case "down":
      return prevState - action.value;
    case "reset":
      return 0;
    default:
      throw new Error("Invalid action type!");
  }
  // if (action.type === "up") return prevState + action.value;
  // if (action.type === "down") return prevState - action.value;
  // if (action.type === "reset") return 0;
  // else throw new Error("Invalid action type!");
}

function App() {
  const [counter, dispatch] = useReducer(reducer, 0);

  function handleUp() {
    // setCounter(counter + 1); // 0 + 1 => 1
    // setCounter((prevState) => prevState + 1)
    // setCounter(1);
    dispatch({ type: "up", value: 1 });
  }

  function handleDown() {
    dispatch({ type: "down", value: 1 });
  }

  function handleReset() {
    dispatch({ type: "reset" });
  }

  return (
    <>
      <h1>App</h1>
      <h2>Count: {counter}</h2>
      <button onClick={handleDown}>-</button>
      <button onClick={handleUp}>+</button>
      <button onClick={handleReset}>Reset</button>
    </>
  );
}

export default App;
