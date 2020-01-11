import React from "react";
import {
  Card,
  Typography,
  CardContent,
  CardMedia,
  Fab
} from "@material-ui/core";
import Close from "@material-ui/icons/Close";

function SimpleCard({ name, imageUrl, cardID, handleDelete }) {
  const deleteCard = id => {
    console.log("delete card");
    handleDelete(id);
  };
  return (
    <Card>
      <CardContent>
        <Fab size="small" color="secondary">
          <Close onClick={() => deleteCard(cardID)} />
        </Fab>
        <Typography color="textSecondary" gutterBottom>
          {name}
        </Typography>

        <CardMedia style={{ paddingTop: "56.25%" }} image={imageUrl} />
      </CardContent>
    </Card>
  );
}

export default SimpleCard;
