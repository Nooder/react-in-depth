import { useState } from "react";

function App() {
  let [count, setCount] = useState(0);
  const add = () => {
    // count++; // cannot do this
    console.log(count);
    setCount(count + 1);
    console.log(count);
  };

  // console.log("rendering App");

  return (
    <>
      <button onClick={add}>Click: {count}</button>
    </>
  );
}

export default App;
