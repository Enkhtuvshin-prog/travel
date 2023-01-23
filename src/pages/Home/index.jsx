import { Box, Grid, Typography } from "@mui/material";
import { Container } from "@mui/system";
import React from "react";
import MenuBar from "../../component/Navbar";
import Banner from "../../component/Banner";
import ImgCard from "../../component/ImgCard";
import Offers from "../../component/Offrers";
import PropertyType from "../../component/PropertyType";
import Plan from "../../component/Plan";
import CommunityCard from "../../component/Community";
// import Paper from 'material-ui/Paper';
import TravelApp from "../../component/TravelApp";
import Footer from "../../component/Footer";

const index = () => {
  return (
    <Grid sx={{ fontFamily: "Helvetica", color: "#F2F3F4 " }}>
      <Grid
        sx={{
          backgroundImage: `url("/img/image 1.png")`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          // height: "calc(100vh - 100px)",
          backgroundPosition: "center center",
          background:
            "linear-gradient(180deg, rgba(0, 0, 0, 0.5) 0%, rgba(0, 0, 0, 0) 13.65%), linear-gradient(0deg, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url(Pexels Videos 2146396.png)",
          backgroundAttachment: "fixed",
          height: "90vh",
        }}
      ></Grid>
      <Container>
        <MenuBar />
        <Banner />

        <ImgCard />

        <Offers />
        <PropertyType />
        <Plan />
        <CommunityCard />
      </Container>
      <Box>
        <TravelApp />
        <Footer />
      </Box>
    </Grid>
  );
};

export default index;
