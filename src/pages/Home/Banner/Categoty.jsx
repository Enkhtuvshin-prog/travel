import { Grid, Typography, Box } from '@mui/material';
import React from 'react';

const data = [
    { title: "Beaches", img: "/img/icons/image 4.png"},
    { title: "Deserts", img: "/img/icons/image 16.png"},
    { title: "Mountains", img: "/img/icons/image 3 (1).png"},
    { title: "Iconic Cities", img: "/img/icons/image 13.png"},
    { title: " House boats", img: "/img/icons/image 17.png"},
    { title: "Countryside", img: "/img/icons/image 10.png"},
    { title: "Camping", img: "/img/icons/image 5.png"},
    { title: "Castles", img: "/img/icons/image 12.png"},
    { title: "Skiing", img: "/img/icons/image 15.png"},
    { title: "Tropical", img: "/img/icons/image 8.png"}
]

const Categoty = () => {
  return (
    <Grid container spacing={10} marginY={"5px"}ç >
      {
        data.map((x) => <Grid item xs={1}>
          <img src={x.img} />
          <Typography
          sx={{fontSize: ".8rem" }}>{x.title}</Typography>
        </Grid>  )
      }
    </Grid>
  )
}

export default Categoty