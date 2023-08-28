import { useContext } from "react";
import { CounterContext } from "./Parent.jsx";

function Child() {
  const dispatchCounter = useContext(CounterContext);

  console.log("rendering Child");

  function dispatchUpToCounter() {
    dispatchCounter({ type: "UP", value: 1 });
  }

  return <button onClick={dispatchUpToCounter}>Go Up!</button>;
}

export default Child;
