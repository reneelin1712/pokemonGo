import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import PokemonList from "./pages/PokemonList";
import CatchPokemon from "./pages/CatchPokemon";
import UserProfile from "./pages/UserProfile";
import SearchPage from "./pages/SearchPage";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Nav from "./components/Nav";
import {
  createMuiTheme,
  makeStyles,
  ThemeProvider
} from "@material-ui/core/styles";
import { CssBaseline } from "@material-ui/core";
import "./styles.css";

import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";

import { PokemonContext } from "./context";
import axios from "axios";

const client = new ApolloClient({
  uri: "https://graphqlprac.herokuapp.com/v1/graphql"
});

const theme = createMuiTheme({
  palette: {
    type: "dark"
  }
});

function App() {
  const [pokemonList, setPokemonList] = useState([{ name: "go" }]);
  useEffect(() => {
    axios("https://pokeapi.co/api/v2/pokemon?limit=900").then(res => {
      console.log(res.data);
      setPokemonList(res.data.results);
      // setNextPage(res.data.next);
      // setPrevPage(res.data.previous);
    });
  }, []);

  return (
    <ApolloProvider client={client}>
      <PokemonContext.Provider value={[pokemonList, setPokemonList]}>
        <ThemeProvider theme={theme}>
          <CssBaseline>
            <Router>
              <Nav />
              <div className="App">
                <Switch>
                  <Route path="/" exact>
                    <PokemonList />
                  </Route>
                  <Route path="/catch">
                    <CatchPokemon />
                  </Route>
                  <Route path="/profile">
                    <UserProfile />
                  </Route>
                  <Route path="/search">
                    <SearchPage />
                  </Route>
                </Switch>
              </div>
            </Router>
          </CssBaseline>
        </ThemeProvider>
      </PokemonContext.Provider>
    </ApolloProvider>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
