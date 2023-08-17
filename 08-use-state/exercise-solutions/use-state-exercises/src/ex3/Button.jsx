function Button({ setLoggedInText, loggedInText }) {
  function handleClick() {
    if (loggedInText === "Logged In") {
      setLoggedInText("Logged Out");
    } else {
      setLoggedInText("Logged In");
    }
  }

  return <button onClick={handleClick}>Toggle Login</button>;
}

export default Button;
