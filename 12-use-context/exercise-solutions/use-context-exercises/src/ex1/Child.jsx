import { useContext } from "react";
import { StringContext } from "./Parent.jsx";

function Child() {
  const [stringState, setStringState] = useContext(StringContext);
  return (
    <>
      <h1>{stringState}</h1>
      <button onClick={() => setStringState("Finish!")}>Change text!</button>
    </>
  );
}

export default Child;
