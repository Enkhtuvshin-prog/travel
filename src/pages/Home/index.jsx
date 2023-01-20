import { Box, Grid, Typography } from "@mui/material";
import zIndex from "@mui/material/styles/zIndex";
import React from "react";
import MenuBar from "../../component/Navbar";
import Banner from "./Banner";
import ImgCard from "./ImgCard";

// import Paper from 'material-ui/Paper';

const index = () => {
  return (
    <Grid sx={{ fontFamily: "Helvetica", color: "#F2F3F4 " }}>
      <Grid
        xs={12}
        sx={{
          backgroundImage: `url("/img/image 1.png")`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          // height: "calc(100vh - 100px)",
          backgroundPosition: "center center",
          // backgroundAttachment: "fixed",
          height: "95vh",
          position: "relative",
        }}
      >
        {" "}
      </Grid>

      <Box>
        <MenuBar />
        <Banner />
        {/* <ImgCard /> */}
      </Box>
    </Grid>
  );
};

export default index;
