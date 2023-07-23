import React, { useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { Rating, TextField } from "@mui/material";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function AddMovie({movies, setMovies}) {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [addPseudo, setAddPseudo] = useState("");
  const [addTitle, setAddTitle] = useState("");
  const [addDescription, setAddDescription] = useState("");
  const [addPosterurl, setAddPosterurl] = useState("");
  const [addTrailer, setAddTrailer] = useState("");
  const [addRating, setAddRating] = useState(0);

  const addMovieFunction = () => {
    if(addPseudo==="" || addTitle==="" || addDescription==="" || addPosterurl==="" || addTrailer==="" || addRating=== 0){
        alert("all fields are required")
    }
    else {
        setMovies([...movies,
            {
                id: Math.random(),
                pseudo: addPseudo, 
                title: addTitle,
                description: addDescription,
                posterURL: addPosterurl,
                Trailer: addTrailer,
                rating: addRating,
            }
        ])
        setAddPseudo("")
        setAddTitle("")
        setAddDescription("")
        setAddPosterurl("")
        setAddTrailer("")
        setAddRating(0)
        handleClose()
    }
  }

  return (
    <div>
      <Button variant="contained" onClick={handleOpen}> Add Movie </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Add a new movie
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            <TextField label="Movie pseudo" variant="filled" fullWidth  onChange={(e) => setAddPseudo(e.target.value)} />
            <br/>
            <TextField label="Movie title" variant="filled" fullWidth onChange={(e) => setAddTitle(e.target.value)} />
            <br/>
            <TextField label="Movie description" variant="filled" fullWidth onChange={(e) => setAddDescription(e.target.value)} />
            <br/>
            <TextField label="Movie PosterUrl" variant="filled" fullWidth onChange={(e) => setAddPosterurl(e.target.value)} />
            <br/>
            <TextField label="Movie Trailer Code" variant="filled" fullWidth onChange={(e) => setAddTrailer(e.target.value)} />
            <br/>
            <Rating className="center"
              name="simple-controlled"
              value={addRating}
              onChange={(event, newValue) => {
                setAddRating(newValue)}}
            />
            <br/>
            <Button variant="contained" onClick={addMovieFunction}> Add Movie </Button>
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}
