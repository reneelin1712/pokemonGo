import React, { useState, useEffect } from "react";
import { Grid, Button } from "@material-ui/core";
import PokemonCard from "../components/PokemonCard";
import axios from "axios";

function CatchPokemon() {
  const [wildPokemon, setWildPokemon] = useState({});
  const { name, url, index } = wildPokemon;
  const id = () => {
    return Math.floor(Math.random() * 100);
  };

  const randomID = id();

  useEffect(() => {
    axios(`https://pokeapi.co/api/v2/pokemon/${randomID}`).then(res => {
      console.log(res.data);
      setWildPokemon(res.data);
      console.log(randomID);
    });
  }, []);
  return (
    <Grid container spacing={3}>
      <Grid item xs={6}>
        random pokemon
        <PokemonCard
          name={name}
          url={`https://pokeapi.co/api/v2/pokemon/${randomID}`}
          index={randomID}
        />
        <Button variant="contained" color="primary" style={{ marginTop: 5 }}>
          Catch
        </Button>
        <Button
          variant="contained"
          color="primary"
          style={{ marginTop: 5, marginLeft: 5 }}
        >
          Skip
        </Button>
      </Grid>
      <Grid item xs={6}>
        catched pokemon
      </Grid>
    </Grid>
  );
}

export default CatchPokemon;
