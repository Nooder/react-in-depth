import { useState } from "react";

function Names() {
  const [names, setNames] = useState([]);
  const [inputText, setInputText] = useState("");

  console.log(names);

  function addName() {
    setNames((prevNames) => [...prevNames, inputText]);
    setInputText("");
  }

  function handleInput(e) {
    setInputText(e.target.value);
  }

  const filteredNames = names
    .filter((name) => name.startsWith("A"))
    .map((name) => <p key={name}>{name}</p>);

  function generateFilteredNames() {
    return names
      .filter((name) => name.startsWith("A"))
      .map((name) => <p>{name}</p>);
  }

  return (
    <>
      <input type="text" value={inputText} onChange={handleInput} />
      <button onClick={addName}>Add name!</button>
      {filteredNames}
      {generateFilteredNames()}
    </>
  );
}

export default Names;
