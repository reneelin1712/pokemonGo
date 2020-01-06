import React from "react";
import { Card, Typography, CardContent, CardMedia } from "@material-ui/core";

function SimpleCard({ name, imageUrl }) {
  return (
    <Card>
      <CardContent>
        <Typography color="textSecondary" gutterBottom>
          {name}
        </Typography>

        <CardMedia style={{ paddingTop: "56.25%" }} image={imageUrl} />
      </CardContent>
    </Card>
  );
}

export default SimpleCard;
