import { useRef, useEffect } from "react";

function App() {
  const ref = useRef(0);
  const domRef = useRef(null);

  console.log(ref);
  console.log(domRef);

  ref.hello = "hello";
  ref.animal = "monkey";

  function handleClick() {
    ref.current++;
    console.log(ref);
  }

  useEffect(() => {
    console.log("ref changed!", ref);
    console.log(domRef);
  });

  // useEffect(() => {
  //   domRef.current.textContent = "Boo!";
  // }, []);

  return (
    <>
      <h1 ref={domRef}>App</h1>
      {/* <p>{ref.current}</p> */}
      <button onClick={handleClick}>Click me!</button>
    </>
  );
}

export default App;
