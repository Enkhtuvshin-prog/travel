import { Grid, Typography } from "@mui/material";
import React from "react";
import CardItem from "./CardItem";

const Offers = () => {
  return (
    <Grid sx={{ marginY: 5 }}>
      <Typography variant="h3" color={"#000"}>
        Offers
      </Typography>
      <CardItem />
    </Grid>
  );
};

export default Offers;
