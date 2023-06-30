function Button() {
  function handleClick(e) {
    console.log("Hello there!");
  }

  return <button onClick={handleClick}>Click Me!</button>;
}

export default Button;
