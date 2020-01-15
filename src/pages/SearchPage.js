import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Grid,
  TextField,
  FormControl,
  MenuItem,
  InputLabel,
  Select,
  Button
} from "@material-ui/core";
import PokemonCard from "../components/PokemonCard";

const useStyles = makeStyles(theme => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: 200
    }
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120
  },
  selectEmpty: {
    marginTop: theme.spacing(2)
  }
}));

function SearchPage() {
  const classes = useStyles();
  const [type, setType] = React.useState("");
  const [searchName,setSearchName] = React.useState("");

  const inputLabel = React.useRef(null);
  const [labelWidth, setLabelWidth] = React.useState(0);
  React.useEffect(() => {
    setLabelWidth(inputLabel.current.offsetWidth);
  }, []);

  const handleChange = event => {
    setType(event.target.value);
  };

  const handleUpdateName = (value)=>{
    setSearchName(value)
    console.log(value)
  }

  return (
    <Grid container spacing={3}>
      <Grid item xs={6}>
        search criteria
        <form className={classes.root} noValidate autoComplete="off">
          <TextField id="outlined-basic" label="Name" variant="outlined" value={searchName}
          onChange={(e)=>handleUpdateName(e.target.value)}/>
           <FormControl variant="outlined" className={classes.formControl}>
          <InputLabel ref={inputLabel} id="demo-simple-select-outlined-label">
            Type
          </InputLabel>
          <Select
            labelId="demo-simple-select-outlined-label"
            id="demo-simple-select-outlined"
            value={type}
            onChange={handleChange}
            labelWidth={labelWidth}
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>
          </FormControl>
       
      
     
        </form>
        <Button variant="outlined" color="primary">
        Speak to Input
      </Button>
        <Button variant="contained" color="primary">
        Search
      </Button>
      </Grid>
      <Grid item xs={6}>
        result
        <PokemonCard url={"https://pokeapi.co/api/v2/pokemon/12"} index={12} />
      </Grid>
    </Grid>
  );
}

export default SearchPage;
