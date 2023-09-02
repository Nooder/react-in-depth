import { useEffect, useState, useRef } from "react";

const cache = new Map();

function Pokemon() {
  const [pokemon, setPokemon] = useState(null);
  const [error, setError] = useState(null);
  const inputRef = useRef(null);
  const pokemonCache = useRef(new Map());

  useEffect(() => {});

  function searchPokemon() {
    const pokemonName = inputRef.current.value;
    if (pokemonCache.current.has(pokemonName)) {
      // pokemon is in the cache
      // cache HIT
      setPokemon(pokemonCache.current.get(pokemonName));
      return;
    }

    // not in the cache
    // CACHE MISS
    fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
      .then((response) => {
        if (!response.ok) {
          // error
          setError(true);
          return;
        }
        return response.json();
      })
      .then((json) => {
        setPokemon(json);
        // put it in the cache
        pokemonCache.current.set(pokemonName, json);
      });
    // does the pokemon exist in our cache?
    // if it does, return it
    // otherwise, fetch it
    // setPokemon and put it in the cache for next time
  }

  //   if (error) {
  //     return <p>Sorry, that pokemon doesn't exist!</p>;
  //   }

  return (
    <>
      <input type="text" ref={inputRef} />
      <button onClick={searchPokemon}>Search!</button>
      {error && <p>Sorry, that pokemon doesn't exist!</p>}
      {pokemon && <h2>{pokemon.name}</h2>}
      <img src={pokemon?.sprites.front_default} alt={pokemon?.name} />
      <p>{pokemon?.weight}</p>
    </>
  );
}

export default Pokemon;
