import * as React from "react";
import Typography from "@mui/material/Typography";
import { Box, Grid } from "@mui/material";
import data from "../CardItem/data";
import {categories} from "../CardItem/categoryData"
import MediaCard from "../CardItem";



export default function SpecialCard() {
  console.log(categories[0].special);
  const specialData = data.filter((item) =>
    categories[0].special.includes(item.id)
  );
  return (
    <Box marginY={ 5 }>
      <Typography variant="h3" fontWeight={600} color={"#000"} sx={{ marginY: 3 }}>
      Honeymoon Freebies Special
      </Typography>
      <Grid container spacing={2}>
      {
        specialData.map((x) => <MediaCard img={x.img} icon={x.icon} title={x.title} p={x.p} price={x.price} person={x.person} /> )
      }
     </Grid>
    </Box>
  );
}