import { Button } from "@mui/material";
import React from "react";
import { Link, useParams } from "react-router-dom";

const MovieTrailer = ({movies}) => {
  const {id} = useParams();
  const movie = movies.find(el => el.id === +id)
  return (
    <div className="pos">
      <Link to="/">
        <div className="position">
          <Button variant="contained"> Go Back Home</Button>
        </div>
      </Link>
      <div className="color design">
        <img style={{width: "500px"}} src={movie.posterURL} alt="poster"></img>
        <h1>Movie Title: {movie.title}</h1>
        <p>{movie.description}</p>
        <div>
          <h3>Trailer:</h3>
          <iframe
            width="560"
            height="315"
            src={`https://www.youtube.com/embed/${movie.Trailer}`}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default MovieTrailer;
