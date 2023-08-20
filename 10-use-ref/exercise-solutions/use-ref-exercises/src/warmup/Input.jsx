import { useRef } from "react";

function Input() {
  const inputRef = useRef(null);

  function focus() {
    // const input = document.querySelector("input");
    // input.focus();

    inputRef.current.focus();
  }

  return (
    <>
      <input type="text" ref={inputRef} />
      <button onClick={focus}>Focus!</button>
    </>
  );
}

export default Input;
