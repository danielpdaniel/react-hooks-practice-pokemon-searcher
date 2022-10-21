import React from "react";
import PokemonCard from "./PokemonCard";
import { Card } from "semantic-ui-react";

function PokemonCollection({ pokemonList}) {
  return (
    <Card.Group itemsPerRow={6}>
      {pokemonList ? pokemonList.map(pokemon=> <PokemonCard key={pokemon.id} pokemon={pokemon}/>) : <h1>Loading...</h1>}
    </Card.Group>
  );
}

export default PokemonCollection;
