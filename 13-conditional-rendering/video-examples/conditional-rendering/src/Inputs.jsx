import { useState } from "react";

function Inputs() {
  const [inputState, setInputState] = useState("");

  function handleClick(e) {
    console.log(e.target.value);
    setInputState(e.target.value);
  }

  function renderPopup() {
    // Meow, Woof, Rawr
    switch (inputState) {
      case "Meow":
        return <h1>😸</h1>;
      case "Woof":
        return <h1>🐶</h1>;
      case "Rawr":
        return <h1>🐯</h1>;
      default:
        return null;
    }
  }

  return (
    <>
      <label htmlFor="inputMeow">
        Meow
        <input
          id="inputMeow"
          type="radio"
          name="demo"
          value="Meow"
          onClick={handleClick}
        />
      </label>
      <label htmlFor="inputWoof">Woof</label>
      <input
        id="inputWoof"
        type="radio"
        name="demo"
        value="Woof"
        onClick={handleClick}
      />
      <label htmlFor="inputRawr">Rawr</label>
      <input
        id="inputRawr"
        type="radio"
        name="demo"
        value={"Rawr"}
        onClick={handleClick}
      />
      {renderPopup()}
    </>
  );
}

export default Inputs;
