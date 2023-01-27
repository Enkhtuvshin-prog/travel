import React from "react";
import { Box, Typography, Grid, Link, Button } from "@mui/material";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import LocationCitySharpIcon from "@mui/icons-material/LocationCitySharp";
import SliderCard from "./SliderImg";
import BasicModal from "./Modal";
import HalfRating from "../Rating";
import { flex } from "@mui/system";
import Reviews from "./Review";
import MapInfo from "./Map";
import Amenities from "./Amenities";
import ImageScroll from "./ImageScroll";

const data = [
  { img: "/img/22.webp" },
  { img: "/img/z2.webp" },
  { img: "/img/22.webp" },
  { img: "/img/22.webp" },
];

const DetailCard = () => {
  return (
    <Grid sx={{
      maxWidth: "800px", margin: "auto", backgroundColor: "#cfd8dc", borderRadius: 5, padding: 2,
      fontFamily: "sans-serif"
    }}>
      <Grid
        container
        justifyContent={"space-between"}
      >
        <Grid item xs={8}  >
          <Typography variant="h5" >W Bangkok Hotel (SHA Plus+)</Typography>
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
      <Box>
        <Box>
          <SliderCard />
        </Box>
        <Box>
          <ImageScroll />
        </Box>

      </Box>
      {/* <BasicModal/> */}
      <Grid container spacing={2}
        sx={{ backgroundColor: "#e3f2fd", borderRadius: 10, width: "100%", m: 1, }}  >
        <Grid item xs={6}>
          <Reviews />
        </Grid>
        <Grid item xs={2}>
          <MapInfo />
        </Grid>
        <Grid item xs={3}>
          <Amenities />
        </Grid>
      </Grid>
      {/* <ImageScroll /> */}

      {/* <HalfRating/> */}
    </Grid>
  );
};

export default DetailCard;
