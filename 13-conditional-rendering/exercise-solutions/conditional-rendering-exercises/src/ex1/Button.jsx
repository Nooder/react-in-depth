import { useState } from "react";

function Button() {
  const [loading, setLoading] = useState(true);

  const buttonText = loading ? "Loading..." : "Click me!";

  console.log(loading, buttonText);

  function toggleButtonText() {
    setLoading((prev) => !prev);
  }

  return <button onClick={toggleButtonText}>{buttonText}</button>;
}

export default Button;
