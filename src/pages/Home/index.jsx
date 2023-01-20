import { Box, Grid } from "@mui/material";
import zIndex from "@mui/material/styles/zIndex";
import React from "react";
import MenuBar from "../../component/Navbar";
import Banner from "./Banner";
// import Paper from 'material-ui/Paper';

const index = () => {
  return (
    <Grid
      xs={12}
      sx={{
        backgroundImage: `url("/img/image 1.png")`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center center",
        backgroundAttachment: "fixed",
        height: "150vh",
        position: "relative",
        fontFamily: "Helvetica"
      }}
    >
      <Box
      >
        <MenuBar />
        <Banner  />
        

      </Box>
    </Grid>
  );
};

export default index;
