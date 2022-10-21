import React from "react";
import PokemonPage from "./PokemonPage";

/* 
App
|-PokemonPage
  |-PokemonForm
  |-Search
  |-PokemonCollection
    |-PokemonCard

*/
function App() {
  return (
    <div className="App">
      <PokemonPage />
    </div>
  );
}

export default App;
