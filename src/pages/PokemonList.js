import React, { useState, useEffect } from "react";
import axios from "axios";
import PokemonCard from "../components/PokemonCard";
import { Grid, Button } from "@material-ui/core";

function PokemonList() {
  console.log("pokemon list");
  const [pokemonList, setPokemonList] = useState([]);
  const [nextPage, setNextPage] = useState("");
  const [prevPage, setPrevPage] = useState("");

  useEffect(() => {
    axios("https://pokeapi.co/api/v2/pokemon").then(res => {
      // console.log(res.data);
      setPokemonList(res.data.results);
      setNextPage(res.data.next);
      setPrevPage(res.data.previous);
      // console.log(res.data.next);
    });
  }, []);

  const turnPage = direction => {
    axios(direction.next).then(res => {
      console.log(res.data);
      setPokemonList(res.data.results);
      setPrevPage(res.data.previous);
      setNextPage(res.data.next);
    });
    // .then(res => console.log(pokemonList));
  };

  return (
    <>
      <h1>Pokémon List</h1>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Button
            onClick={() => turnPage({ next: prevPage })}
            varient="contained"
            color="primary"
          >
            Prev
          </Button>
          <Button
            onClick={() => turnPage({ next: nextPage })}
            varient="contained"
            color="primary"
          >
            Next
          </Button>
        </Grid>
        {pokemonList.map(pokemon => (
          <Grid item xs={3}>
            <PokemonCard url={pokemon.url} index={null} />
          </Grid>
        ))}
        }
      </Grid>
    </>
  );
}

export default PokemonList;
