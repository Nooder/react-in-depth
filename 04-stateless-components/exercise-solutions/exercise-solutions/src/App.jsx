import monkeyImage from "./assets/monkey.jpg";

function App() {
  // warmup exercise:
  // return (
  //   <ul>
  //     <li>Hello</li>
  //     <li>My</li>
  //     <li>Friends!</li>
  //   </ul>
  // );

  // exercise 1:
  return (
    <>
      <h1>Awesome Monkey 🐵</h1>
      <img src={monkeyImage} />
    </>
  );
}

export default App;
