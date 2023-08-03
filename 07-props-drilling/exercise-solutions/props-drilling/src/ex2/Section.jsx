import Button from "./Button.jsx";
import Header from "./Header.jsx";

function Section() {
  function Boo() {
    console.log("Boo!");
    // return undefined;
  }

  return (
    <>
      <Header text="Exercise 2" />
      <Button text="Click me!" handleClick={Boo} />
    </>
  );
}

export default Section;
