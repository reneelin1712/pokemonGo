import React, { useState, useEffect } from "react";
import { Grid, Button } from "@material-ui/core";
import PokemonCard from "../components/PokemonCard";
import axios from "axios";
import SimpleCard from "../components/SimpleCard";

function CatchPokemon() {
  console.log("catchPokemon");
  const [wildPokemon, setWildPokemon] = useState();
  const [catchedList, setCatchedList] = useState([]);
  const [randomID, setRandomID] = useState(Math.floor(Math.random() * 100));
  // useEffect(() => {
  //   axios(`https://pokeapi.co/api/v2/pokemon/${randomID}`).then(res => {
  //     console.log(res.data);
  //     setWildPokemon(res.data);
  //     console.log(randomID);
  //   });
  // }, []);

  const catchPokemon = () => {
    axios(`https://pokeapi.co/api/v2/pokemon/${randomID}`).then(res => {
      console.log(res.data.id);
      setWildPokemon({
        name: res.data.name,
        imageUrl: res.data.sprites.front_default,
        id: res.data.id
      });
      setRandomID(Math.floor(Math.random() * 100));
    });
    //.then(res=>setCatchedList([...catchedList,wildPokemon]))
  };

  useEffect(() => {
    wildPokemon ? setCatchedList([...catchedList, wildPokemon]) : null;
  }, [wildPokemon]);

  const handleDelete = id => {
    console.log(typeof id + "put in id" + id);

    console.log(
      catchedList.map(catched =>
        console.log(typeof catched.id + "list id" + catched.id)
      )
    );
    setCatchedList(catchedList.filter(catched => catched.id !== id));
  };

  return (
    <Grid container spacing={3}>
      <Grid item xs={6}>
        random pokemon
        <PokemonCard
          url={`https://pokeapi.co/api/v2/pokemon/${randomID}`}
          index={randomID}
        />
        <Button
          variant="contained"
          color="primary"
          style={{ marginTop: 5 }}
          onClick={() => catchPokemon()}
        >
          Catch
        </Button>
        <Button
          variant="contained"
          color="primary"
          style={{ marginTop: 5, marginLeft: 5 }}
          onClick={() => setRandomID(Math.floor(Math.random() * 100))}
        >
          Skip
        </Button>
      </Grid>
      <Grid item xs={6}>
        catched pokemon
        <Grid container spacing={3}>
          {/* {catchedList?catchedList.map(pokemon=>
        <Grid item xs={3}>
          <SimpleCard name={pokemon.name}
          imageUrl={pokemon.imageUrl}/>
          </Grid>
          )
        :null} */}
          {catchedList.map(pokemon =>
            pokemon ? (
              <Grid item xs={3}>
                <SimpleCard
                  name={pokemon.name}
                  imageUrl={pokemon.imageUrl}
                  cardID={pokemon.id}
                  handleDelete={handleDelete}
                />
              </Grid>
            ) : null
          )}
        </Grid>
      </Grid>
    </Grid>
  );
}

export default React.memo(CatchPokemon);
// export default CatchPokemon;
