import React, { useState } from "react";
import axios from "axios";

export const PokemonContext = React.createContext([]);

export const PokemonListProvider = props => {
  const [pokemonList, setPokemonList] = useState([{ name: "go" }]);
  axios("https://pokeapi.co/api/v2/pokemon").then(res => {
    // console.log(res.data);
    setPokemonList(res.data.results);
    // setNextPage(res.data.next);
    // setPrevPage(res.data.previous);
    console.log(res.data.next);
  });

  return (
    <PokemonContext.provider
      // value={[pokemonList, setPokemonList]}
      value={[{ name: "go" }]}
    >
      {props.children}
    </PokemonContext.provider>
  );
};
