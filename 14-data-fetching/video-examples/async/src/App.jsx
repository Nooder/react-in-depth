import { useEffect, useState } from "react";

function App() {
  let [data, setData] = useState({});

  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon/ditto")
      .then((response) => {
        console.log(response);
        return response.json();
      })
      .then((json) => {
        console.log(json);
        setData(json);
      });
  }, []);
  // null.name
  return (
    <p>
      {data && data.name} , {data && data.height}
      {data?.name}, {data?.weight}
      {/* {data.name}, {data.weight} */}
    </p>
  );
  // return <p>{undefined}</p>
  // return <p>name: "ditto"</p>;
}

export default App;
