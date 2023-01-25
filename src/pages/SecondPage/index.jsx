import { Box, Grid, Typography } from "@mui/material";
import { Container } from "@mui/system";
import React from "react";
import MenuBar from "../../component/Navbar";
import Banner from "../../component/Banner";
import Footer from "../../component/Footer";
import PopularCard from "../../component/Popular";
import ViewCard from "../../component/View";
import AllCard from "../../component/Package"
import SpecialCard from "../../component/Special";
import ToggleColorMode from "../../component/Switch";
const Second = () => {
  return (
    <Grid sx={{ fontFamily: "Helvetica", color: "#F2F3F4 " }}>
      <Grid
        sx={{
          backgroundImage: `url("/img/image 1 (1).png")`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center center",
          backgroundAttachment: "fixed",
          height: "100vh",
          position: "relative",
        }}
      >
        {" "}
      </Grid>
      <Container>
        <MenuBar />
        <Banner />
        <PopularCard/>
        <ViewCard/>
        <AllCard/>
        <SpecialCard/>
        <ToggleColorMode/>
      </Container>
      <Box>
        <Footer />
      </Box>

    </Grid>
  );
};

export default Second;
