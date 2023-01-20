import React from "react";
import { Box, Grid, Typography } from "@mui/material";
import SearchBtn from "./Search";
import Categoty from "./Categoty";
import ImgCard from "../ImgCard";

const Banner = () => {
  return (
    <Box
      sx={{
        position: "absolute",
        color: "white",
        top: "20%",
        left: "10%",
      }}
    >
      <Typography variant="h2" sx={{ fontWeight: "600" }}>
        The whole world <br /> awaits.
      </Typography>
      <SearchBtn />
      <Categoty />
      <ImgCard />
    </Box>
  );
};

export default Banner;
// sx={{position: "absolute", top: "50%", left: "50%" }}
