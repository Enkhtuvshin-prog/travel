import { Grid, Typography, Box } from "@mui/material";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CardItem from "./CardItem";
import { data } from "./data";

const Offers = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 2,
  };
  return (
    <Box my={7}>
      <Typography variant="h4" fontWeight="600">
        Offers
      </Typography>
      <Grid container>
        <Slider {...settings}>
          {data.map((x) => (
            <CardItem title={x.title} img={x.img} p={x.p} text={x.text} />
          ))}
        </Slider>
      </Grid>
    </Box>
  );
};

export default Offers;
