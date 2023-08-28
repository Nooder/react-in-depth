import { useContext } from "react";
import { AuthContext } from "./Level3.jsx";

function Level1() {
  const [authState, setAuthState] = useContext(AuthContext);
  console.log("level 1 rendering", authState, setAuthState);

  function add() {
    setAuthState((prevState) => {
      return { ...prevState, add: 123 };
    });
    // authContext["add"] = 123;
    // console.log(authContext);
  }

  return (
    <>
      <h3>Level 1</h3>
      <button onClick={add}>Add to context!</button>
      <p>{JSON.stringify(authState, null, 2)}</p>
    </>
  );
}

export default Level1;
