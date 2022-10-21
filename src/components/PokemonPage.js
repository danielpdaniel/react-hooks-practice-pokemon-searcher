import React, { useEffect, useState } from "react";
import PokemonCollection from "./PokemonCollection";
import PokemonForm from "./PokemonForm";
import Search from "./Search";
import { Container } from "semantic-ui-react";

function PokemonPage() {
  const [pokemonList, setPokemonList] = useState(false)
  const [allPokemon, setAllPokemon] = useState(false)

  useEffect(()=>{
    fetch("http://localhost:3001/pokemon")
    .then(resp=>resp.json())
    .then(data=>{setPokemonList(data); setAllPokemon(data)})
  },[])

  function handleSubmit(newPokemonObj){
    // console.log(newPokemonObj)
    fetch("http://localhost:3001/pokemon", {
      method: "POST",
      headers: 
      {"Content-Type": "application/json"},
      body: JSON.stringify(newPokemonObj)
    })
    .then(resp=>resp.json())
    .then(data=>setPokemonList([...allPokemon,]))
  }

  function handleSearchChange(searchTerm){
    const newPokemonList = allPokemon.filter(pokemon => pokemon.name.toUpperCase().includes(searchTerm.toUpperCase()))
    
    setPokemonList(newPokemonList)
  }

  return (
    <Container>
      <h1>Pokemon Searcher</h1>
      <br />
      <PokemonForm onSubmit={handleSubmit}/>
      <br />
      <Search onSearchChange={handleSearchChange}/>
      <br />
      <PokemonCollection pokemonList={pokemonList}/>
    </Container>
  );
}

export default PokemonPage;
