import React, { useState, useEffect } from "react";
import axios from "axios";
import PokemonCard from "../components/PokemonCard";
import Grid from "@material-ui/core/Grid";

function PokemonList() {
  const [pokemonList, setPokemonList] = useState([]);

  useEffect(() => {
    axios("https://pokeapi.co/api/v2/pokemon").then(res => {
      console.log(res.data.results);
      setPokemonList(res.data.results);
    });
  }, []);
  return (
    <>
      <h1>Pokémon List</h1>
      <Grid container spacing={3}>
        {pokemonList.map((pokemon, index) => (
          <Grid item xs={3}>
            <PokemonCard name={pokemon.name} url={pokemon.url} index={index} />
          </Grid>
        ))}
      </Grid>
    </>
  );
}

export default PokemonList;
