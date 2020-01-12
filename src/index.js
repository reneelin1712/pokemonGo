import React from "react";
import ReactDOM from "react-dom";
import PokemonList from "./pages/PokemonList";
import CatchPokemon from "./pages/CatchPokemon";
import UserProfile from "./pages/UserProfile";
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

const client = new ApolloClient({
  uri: "https://graphqlprac.herokuapp.com/v1/graphql"
});

const theme = createMuiTheme({
  palette: {
    type: "dark"
  }
});

function App() {
  return (
    <ApolloProvider client={client}>
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
              </Switch>
            </div>
          </Router>
        </CssBaseline>
      </ThemeProvider>
    </ApolloProvider>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
