function Switch() {
  const condition = "banana";

  switch (condition) {
    case "hi":
      return <p>Hi!</p>;
    case "apple":
      return <p>🍎</p>;
    default: {
      return <p>Error!</p>;
    }
  }
}

export default Switch;
