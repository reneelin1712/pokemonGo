import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import axios from "axios";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ShareIcon from "@material-ui/icons/Share";

const useStyles = makeStyles(theme => ({
  card: {
    maxWidth: 345,
    marginLeft: "22.5%"
  },
  media: {
    height: 0,
    paddingTop: "56.25%" // 16:9
  }
}));

export default function PokemonCard({ url, index }) {
  const classes = useStyles();
  const [name, setName] = useState();
  const [imageUrl, setImageUrl] = useState();
  const [description, setDescription] = useState("Description missing");
  const [descriptionEN, setDescriptionEN] = useState("Description missing");

  if (!index) {
    const urlsplit = url.split("/");
    index = urlsplit[urlsplit.length - 2];
  }
  useEffect(() => {
    axios(url).then(res => setImageUrl(res.data.sprites.front_default));
  }, [url]);

  useEffect(() => {
    axios(`https://pokeapi.co/api/v2/pokemon-species/${index}`).then(res => {
      const text = res.data.flavor_text_entries.filter(
        text => text.language.name === "ja"
      )[0].flavor_text;
      const text_en = res.data.flavor_text_entries.filter(
        text => text.language.name === "en"
      )[0].flavor_text;
      setDescription(text);
      setDescriptionEN(text_en);
      setName(res.data.name);
      // console.log(res.data.name);
    });
  }, [index]);

  return (
    <Card className={classes.card}>
      <CardHeader title={name} />
      <CardMedia className={classes.media} image={imageUrl} />

      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          {descriptionEN}
        </Typography>
        {/* <Typography variant="body2" color="textSecondary" component="p">
          {descriptionEN}
        </Typography> */}
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
}
