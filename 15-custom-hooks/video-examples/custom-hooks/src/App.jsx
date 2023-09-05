import useLogOnMount from "./useLogOnMount.jsx";
import useTimer from "./useTimer.jsx";
import MyTimer from "./MyTimer.jsx";

function App() {
  useLogOnMount("App"); // c/p useEffect();
  useLogOnMount(); // c/p useEffect();

  const timer = useTimer(); // useState, useEffect

  return (
    <>
      <h1>App</h1>
      <p>{timer}</p>
      <MyTimer />
    </>
  );
}

export default App;
