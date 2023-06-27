import React from "react";

function App() {
  const str = "monkey";
  const num = 1337;
  const p = <p>This is awesome! 🔥</p>;
  const arr = ["one", "two", "three"];

  const random = Math.random();

  if (random < 0.5) return <p>Boo!</p>;

  return <span>You lose!</span>;
}

export default App;
