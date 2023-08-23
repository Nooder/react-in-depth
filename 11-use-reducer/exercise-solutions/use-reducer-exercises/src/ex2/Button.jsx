function Button({ text, counterDispatch, action }) {
  function handleClick() {
    counterDispatch(action);
  }
  return <button onClick={handleClick}>{text}</button>;
}

export default Button;
