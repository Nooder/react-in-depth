import { useReducer } from "react";

function arrReducer(prevState, action) {
  // Object.is(obj1, obj2)
  //   prevState.push(action.value);
  //   return prevState;
  return [...prevState, action.value];
}

function Arrays() {
  const [state, dispatch] = useReducer(arrReducer, [20]);

  function add() {
    dispatch({ type: "add", value: 1337 });
    console.log(state);
  }

  return (
    <>
      <h1>Arrays</h1>
      <p>{JSON.stringify(state, null, 2)}</p>
      <button onClick={add}>Add to array</button>
    </>
  );
}

export default Arrays;
