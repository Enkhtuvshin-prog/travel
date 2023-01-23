import { Box, Grid, Typography } from "@mui/material";
import { Container } from "@mui/system";
import React from "react";
import MenuBar from "../../component/Navbar";
import Banner from "../../component/Banner";
import MediaCard from "../../component/CardItem";
const Second = () => {
  return (
    <Grid sx={{ fontFamily: "Helvetica", color: "#F2F3F4 " }}>
      <Grid
        sx={{
          backgroundImage: `url("/img/image 1 (1).png")`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          // height: "calc(100vh - 100px)",
          backgroundPosition: "center center",
          // background: "linear-gradient( #9198e5)",
          // background: "linear-gradient(180deg, rgba(0, 0, 0, 0.5) 0%, rgba(0, 0, 0, 0) 13.65%), linear-gradient(0deg, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3))",
          backgroundAttachment: "fixed",
          height: "100vh",
          // width: "100%",
          position: "relative",
        }}
      >
        {" "}
      </Grid>
      <Container>
        <MenuBar />
        <Banner />
        <MediaCard />
      </Container>
    </Grid>
  );
};

export default Second;
