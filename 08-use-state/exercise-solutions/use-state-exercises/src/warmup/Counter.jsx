import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  function increaseCount() {
    setCount(count + 1);
  }

  function decreaseCount() {
    setCount(count - 1);
  }

  return (
    <>
      <h1>Counter: {count}</h1>
      <button onClick={decreaseCount}>-</button>
      <button onClick={increaseCount}>+</button>
    </>
  );
}

export default Counter;
