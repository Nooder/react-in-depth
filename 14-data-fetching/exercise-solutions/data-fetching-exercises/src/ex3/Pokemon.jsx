import { useEffect, useState } from "react";

function Pokemon() {
  const [pokemonPage, setPokemonPage] = useState(null);

  useEffect(() => {
    const url = "https://pokeapi.co/api/v2/pokemon/?limit=5&offset=0";
    fetch(url)
      .then((response) => response.json())
      .then((json) => setPokemonPage(json));
  }, []);

  console.log(pokemonPage);

  function prev() {
    fetch(pokemonPage.previous)
      .then((response) => response.json())
      .then((json) => setPokemonPage(json));
  }

  function next() {
    fetch(pokemonPage.next)
      .then((response) => response.json())
      .then((json) => setPokemonPage(json));
  }

  return (
    <>
      <h1>Pokemon List</h1>
      {pokemonPage?.results.map((pokemon) => (
        <p key={pokemon.name}>{pokemon.name}</p>
      ))}
      {pokemonPage?.previous && <button onClick={prev}>Previous</button>}
      {pokemonPage?.next && <button onClick={next}>Next</button>}
    </>
  );
}

export default Pokemon;
