import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ImgCard from "../ImgCard";
import { Box, Typography } from "@mui/material";

const data = [
    { title: "Bali, Indonesia", img: "/img/image 18.png" },
    { title: "Kerry, Ireland", img: "/img/image 18 (1).png" },
    { title: "Sydney, Australia", img: "/img/image 18 (2).png " },
    { title: "Paris, France", img: "/img/image 18 (3).png " },
    { title: "Bali, Indonesia", img: "/img/image 18.png" },
    { title: "Kerry, Ireland", img: "/img/image 18 (1).png" },
    { title: "Sydney, Australia", img: "/img/image 18 (2).png " },

  ];
  
export default class SimpleSlider extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 3
    };
    return (
      <Box
      sx={{ marginTop: -15}}
      >
         <Typography variant="h4" fontWeight="600">
        Top Vacation Destinations
      </Typography>
        <Slider {...settings}>{
            data.map((x)=><ImgCard title= {x.title} img={x.img} /> )
        }
          
        </Slider>
      </Box>
    );
  }
}
