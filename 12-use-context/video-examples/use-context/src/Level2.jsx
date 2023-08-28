import Level1 from "./Level1.jsx";

function Level2() {
  console.log("level 2 is re-rendering");
  return (
    <>
      <h2>Level 2</h2>
      <Level1 />
    </>
  );
}

export default Level2;
