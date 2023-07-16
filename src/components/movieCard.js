import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Rating } from "@mui/material";

export default function movieCard({ movie }) {
  return (
    <div>
      <Card sx={{ width: 350 }}>
        <CardMedia
          sx={{ height: 600 }}
          image={movie.posterURL}
          title={movie.pseudo}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div" style={{textAlign: "center"}}>
            {movie.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {movie.description}
          </Typography>
        </CardContent>
        <CardActions>
        <Rating value={movie.rating} readOnly />
        </CardActions>
      </Card>
    </div>
  );
}
