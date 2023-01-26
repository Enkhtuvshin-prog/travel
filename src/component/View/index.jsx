import * as React from "react";
import Typography from "@mui/material/Typography";
import { Box, Grid } from "@mui/material";
import data from "../CardItem/data";
import { categories } from "../CardItem/categoryData";
import MediaCard from "../CardItem";
import { borderRadius } from "@mui/system";
// import data from "./data";
// import { categories } from "./categoryData";

export default function ViewCard() {
  console.log(categories[0].recentlyViewed);
  const recentlyData = data.filter((item) =>
    categories[0].recentlyViewed.includes(item.id)
  );
  console.log(recentlyData);

  return (
    <Box>
      <Typography
        variant="h3"
        fontWeight={600}
        color={"#000"}
        sx={{ marginY: 3 }}
      >
        Recently Viewed
      </Typography>
      <Grid container spacing={2} sx={{ justifyContent: "center" }}>
        {recentlyData.map((x) => (
          <MediaCard
            img={x.img}
            icon={x.icon}
            title={x.title}
            p={x.p}
            price={x.price}
            person={x.person}
          />
        ))}
        <Box
          sx={{
            backgroundImage: `url("/img/card/image 26.png")`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            height: 550,
            width: 350,
            margin: 2,
            borderRadius: "20px",
            // position: "relative",
          }}
        >
          <Box sx={{ m: 3 }}>
            <Typography variant="h2"> Summer Bonanza!</Typography>
            <Typography>
              Enjoy confortable transfers in shared coaches <br /> Enjoy
              confortable transfers in shared coaches{" "}
            </Typography>
          </Box>
        </Box>
      </Grid>
    </Box>
  );
}
