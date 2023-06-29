function App() {
  function handleClick(e, string) {
    console.log(e);
    console.log(string);
  }

  return <p onClick={(e) => handleClick(e, "uniqueP")}>Hello React!</p>;
}

export default App;
