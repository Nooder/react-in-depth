import useTimer from "./useTimer.jsx";

function MyTimer() {
  const seconds = useTimer(100);
  return (
    <>
      <h2>My Timer:</h2>
      {seconds}
    </>
  );
}

export default MyTimer;
