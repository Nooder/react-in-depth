import { useState, useEffect } from "react";

function Interval() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      console.log("Interval says hello!");
    }, 1000);

    return () => clearInterval(id);
  }, []);

  return (
    <>
      <h1>{count}</h1>
      <button onClick={() => setCount(count + 1)}>Go up!</button>
    </>
  );
}

export default Interval;
