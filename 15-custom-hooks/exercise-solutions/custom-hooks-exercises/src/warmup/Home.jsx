import useRerenderLogger from "./useRerenderLogger.jsx";
import { useState } from "react";

function Home() {
  useRerenderLogger();
  //   useRerenderLogger();
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>Home</h1>
      <h2>{count}</h2>
      <button onClick={() => setCount(count + 1)}>Go Up</button>
    </>
  );
}

export default Home;
