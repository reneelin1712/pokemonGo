import React from "react";
import ReactDOM from "react-dom";
import PokemonList from "./pages/PokemonList";
import CatchPokemon from "./pages/CatchPokemon";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Nav from "./components/Nav";
import {
  createMuiTheme,
  makeStyles,
  ThemeProvider
} from "@material-ui/core/styles";
import { CssBaseline } from "@material-ui/core";
import "./styles.css";

const theme = createMuiTheme({
  palette: {
    type: "dark"
  }
});

function App() {
  return (
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
            </Switch>
          </div>
        </Router>
      </CssBaseline>
    </ThemeProvider>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
