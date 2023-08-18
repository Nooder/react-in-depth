import { useState, useEffect } from "react";

function Section() {
  const [time, setTime] = useState(0);

  useEffect(() => {
    console.log("Section has re-rendered!");
  });

  useEffect(() => {
    const id = setInterval(() => {
      //   console.log("running our interval!");
      setTime((prevTime) => prevTime + 1);
    }, 1000);

    return () => clearInterval(id);
  }, []);

  return <h1>Time on page: {time} second(s)</h1>;
}

export default Section;
