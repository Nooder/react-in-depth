function Button({ loading }) {
  const buttonText = loading ? "Loading..." : "Click Me!";
  return <button>{buttonText}</button>;
}

export default Button;
