import { useContext } from "react";
import { NumberContext, StringContext } from "./Parent.jsx";

function Child() {
  const name = useContext(StringContext);
  const age = useContext(NumberContext);

  console.log(name, age);

  return (
    <>
      <p>{name}</p>
      <p>{age}</p>
    </>
  );
}

export default Child;
