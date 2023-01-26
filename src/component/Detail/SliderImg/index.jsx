import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Box, Typography, Grid } from "@mui/material";

const data = [
  { title: "Bali, Indonesia", img: "/img/image 18.png" },
  { title: "Kerry, Ireland", img: "/img/image 18 (1).png" },
  { title: "Sydney, Australia", img: "/img/image 18 (2).png " },
  { title: "Paris, France", img: "/img/image 18 (3).png " },
  { title: "Bali, Indonesia", img: "/img/image 18.png" },
  { title: "Kerry, Ireland", img: "/img/image 18 (1).png" },
  { title: "Sydney, Australia", img: "/img/image 18 (2).png " },
];

export default class SliderCard extends Component {
  render() {
    const settings = {
      // dots: true,
      infinite: true,
      speed: 300,
      slidesToShow: 1,
      slidesToScroll: 1,
    };
    return (
      <Box>
        <Slider {...settings}>
          {data.map((x) => (
            <img src={x.img} height="550px" />
          ))}
        </Slider>
      </Box>
    );
  }
}
