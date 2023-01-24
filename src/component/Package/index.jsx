import * as React from "react";
import Typography from "@mui/material/Typography";
import { Box, Grid } from "@mui/material";
import data from "../CardItem/data";
import {categories} from "../CardItem/categoryData"
import MediaCard from "../CardItem";



export default function AllCard() {
  console.log(categories[0].inclusive);
  const inclusiveData = data.filter((item) =>
    categories[0].inclusive.includes(item.id)
  );
  return (
    <Box>
      <Typography variant="h3" fontWeight={600} color={"#000"} sx={{ marginY: 3 }}>
      All Inclusive Packages!
      </Typography>
      <Grid container spacing={2}>
      {
        inclusiveData.map((x) => <MediaCard img={x.img} icon={x.icon} title={x.title} p={x.p} price={x.price} person={x.person} /> )
      }
     </Grid>
    </Box>
  );
}