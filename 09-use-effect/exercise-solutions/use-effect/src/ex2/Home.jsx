import { useState, useEffect } from "react";
import Section from "./Section.jsx";

function Home() {
  const [visits, setVisits] = useState(0);

  function visitsGoUp() {
    setVisits((prevVisits) => prevVisits + 1);
  }

  useEffect(() => {
    console.log("Home has re-rendered!");
  });

  return (
    <>
      <h1>Visits: {visits}</h1>
      <button onClick={visitsGoUp}>+</button>
      <Section />
    </>
  );
}

export default Home;
