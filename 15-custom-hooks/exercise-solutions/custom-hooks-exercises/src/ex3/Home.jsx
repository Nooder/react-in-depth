import { useState } from "react";
import useQuery from "./useQuery.jsx";

function Home() {
  const URL = "https://pokeapi.co/api/v2/pokemon/ditto";
  const { data, fetcher } = useQuery(URL);
  const [pokemonName, setPokemonName] = useState("");

  function fetchPokemon() {
    fetcher(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);
    setPokemonName("");
  }

  return (
    <>
      <h1>Pokemon App</h1>
      <p>
        Name: {data?.name}, Height: {data?.height}
      </p>
      <input
        type="text"
        placeholder="pokemon name"
        value={pokemonName}
        onChange={(e) => setPokemonName(e.target.value)}
      />
      <button onClick={fetchPokemon}>Search Pokemon!</button>
    </>
  );
}

export default Home;
