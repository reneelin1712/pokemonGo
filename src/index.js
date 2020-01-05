import React from "react";
import ReactDOM from "react-dom";
import PokemonList from "./pages/PokemonList";
import CatchPokemon from "./pages/CatchPokemon";

import "./styles.css";

function App() {
  return (
    <div className="App">
      {/* <PokemonList /> */}
      <CatchPokemon />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
