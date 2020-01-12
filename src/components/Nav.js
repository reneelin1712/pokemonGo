import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import { NavLink } from "react-router-dom";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  navItem: {
    color: "white",
    textDecoration: "none",
    marginRight: 10
  }
}));

export default function DenseAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static" color="default">
        <Toolbar variant="dense">
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" color="inherit">
            <NavLink
              to="/"
              activeStyle={{ backgroundColor: "white", color: "black" }}
              exact
              className={classes.navItem}
            >
              Home
            </NavLink>
          </Typography>
          <Typography variant="h6" color="inherit">
            <NavLink
              to="/catch"
              activeStyle={{ backgroundColor: "white", color: "black" }}
              className={classes.navItem}
            >
              Catch
            </NavLink>
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}
