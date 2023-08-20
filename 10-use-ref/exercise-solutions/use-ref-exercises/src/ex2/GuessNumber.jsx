import { useEffect, useRef, useState } from "react";

function GuessNumber() {
  const randomNumber = useRef(null);
  const inputRef = useRef(null);
  const [pText, setPText] = useState("");

  function handleGuess() {
    // checked to see if guess === randomNumber
    let { value: inputGuess } = inputRef.current;
    inputGuess = Number(inputGuess);
    const random = randomNumber.current;

    if (inputGuess === random) {
      console.log("you win!");
      setPText("you win!");
    } else if (inputGuess < random) {
      console.log("you guessed too low!");
      setPText("you guessed too low!");
    } else {
      console.log("you guessed too high!");
      setPText("you guessed too high!");
    }
  }

  useEffect(() => {
    // on mount generate random # 1-10
    randomNumber.current = Math.floor(Math.random() * 10);
    console.log(randomNumber);
  }, []);

  return (
    <>
      <input type="text" ref={inputRef} />
      <button onClick={handleGuess}>Guess!</button>
      <p>{pText}</p>
    </>
  );
}

export default GuessNumber;
