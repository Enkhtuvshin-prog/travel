import React from "react";
import { Box, Typography, Grid, Link, Button } from "@mui/material";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import LocationCitySharpIcon from "@mui/icons-material/LocationCitySharp";
import SliderCard from "./SliderImg";
const data = [
  { img: "/img/22.webp" },
  { img: "/img/z2.webp" },
  { img: "/img/22.webp" },
  { img: "/img/22.webp" },
];

const DetailCard = () => {
  return (
    <Grid sx={{ width: "800px", height: "500px", margin: "auto" }}>
      <Grid
        container
        // sx={{ backgroundColor: "gray", borderRadius: 10 }}
      >
        <Grid item xs={8}>
          <Typography>W Bangkok Hotel (SHA Plus+)</Typography>
          <Box>
            <Box>
              <LocationOnIcon />
              <span>
                106 North Sathorn Road, Silom, Bangrak, Bang Rak, Bangkok,
                10500, Thailand
              </span>
              <Link href="#" underline="none" sx={{ color: "blue", mx: 2 }}>
                Show on map{" "}
              </Link>
            </Box>
            <Box>
              <LocationCitySharpIcon />
              <span>
                In the city’s prestigious Embassy Row and pulsating commercial
                district is t
              </span>
              <Link href="#" underline="none" sx={{ color: "blue", mx: 2 }}>
                Show on map{" "}
              </Link>
            </Box>
          </Box>
        </Grid>
        <Grid item={3} sx={{ my: 4 }}>
          <Box>
            <Button variant="contained">Select Room</Button>
          </Box>
        </Grid>
      </Grid>
      <SliderCard />
    </Grid>
  );
};

export default DetailCard;
