/*
    Squirtle
        - name
       - image (any)
       - weight
*/

import { useEffect, useState } from "react";

function Pokemon() {
  const [pokemon, setPokemon] = useState(null);

  useEffect(() => {
    const url = "https://pokeapi.co/api/v2/pokemon/squirtle";
    fetch(url)
      .then((response) => response.json())
      .then((json) => setPokemon(json));
  }, []);

  console.log(pokemon);

  return (
    <>
      {pokemon && <h2>{pokemon.name}</h2>}
      <img src={pokemon?.sprites.front_default} alt={pokemon?.name} />
      <p>{pokemon?.weight}</p>
    </>
  );
}

export default Pokemon;
