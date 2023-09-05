import useStateWithLogger from "./useStateWithLogger.jsx";

function Home() {
  const [count, setCount] = useStateWithLogger(0);

  return (
    <>
      <h1>Counter: {count}</h1>
      <button onClick={() => setCount(count + 1)}>Go up by 1!</button>
      <button onClick={() => setCount((prev) => prev + 5)}>Go up by 5!</button>
    </>
  );
}

export default Home;
