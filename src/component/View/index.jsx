import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Box, Grid } from "@mui/material";
import data from "../CardItem/data";
import {categories} from "../CardItem/categoryData"
// import data from "./data";
// import { categories } from "./categoryData";

const service = [
  { icons: "/img/icons/Vector (1).png", title: "2 Flights" },
  { icons: "/img/icons/Vector (2).png", title: "1 Hotel" },
  { icons: "/img/icons/Vector (3).png", title: "2 Transfers" },
  { icons: "/img/icons/Vector (4).png", title: "4 Activities" },
];

export default function ViewCard() {
  console.log(categories[0].recentlyViewed);
  const recentlyData = data.filter((item) =>
    categories[0].recentlyViewed.includes(item.id)
  );
  console.log(recentlyData);

  // const arrByID = categoryData.filter(filterByID);
  return (
    <Box>
      <Typography variant="h3" fontWeight={600} sx={{ marginY: 3 }} color="#000">
        Recently viewed
      </Typography>
      <Grid container spacing={2}>
        {recentlyData.map((item) => (
          <Grid item xs={3}>
            <Card sx={{ maxWidth: 350, position: "relative" }}>
              <CardMedia
                sx={{ height: 200, m: 2 }}
                image={item.img}
                title="green iguana"
                style={{ borderRadius: "30px" }}
              />
              <img
                src={item.icon}
                style={{
                  position: "absolute",
                  top: 0,
                  right: 0,
                  margin: "30px",
                }}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {item.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {item.p}
                </Typography>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    marginY: 2,
                  }}
                >
                  {service.map((x) => (
                    <Box>
                      <img src={x.icons} style={{ height: "20px" }} />
                      <Typography sx={{ fontSize: ".8rem" }}>
                        {x.title}
                      </Typography>
                    </Box>
                  ))}
                </Box>
                <ul style={{ fontSize: ".8rem" }}>
                  <li>{item.text}</li>
                  <li>{item.text1}</li>
                  <li>{item.text2}</li>
                </ul>
                <Typography variant="h5" textAlign={"center"}>{item.price} <span style={{fontSize: ".5rem"}}>{item.person}</span></Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      <Box 
       sx={{
        backgroundImage: `url("/img/card/image 26.png")`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center center",
        // backgroundAttachment: "fixed",
        height: "530px",
        borderRadius: "20px",
        width: "350px",
        margin: "20px",
        position: "relative",
      }}  >
        {/* <img src="/img/card/image 26.png" style={{height: "90%", borderRadius: "20px", maxWidth: 350, marginBottom: "20px"}}/> */}
        <Box sx={{
                position: "absolute",
                margin: 2
            }}>
            <Typography variant="h3">Summer Bonanza!</Typography>
            <Typography  >Enjoy confortable transfers in shared coaches <br/> Choose from 5 flights per week <br/> Get a free Rapid Antigen Test at selected hotels</Typography>
        </Box>
      </Box>
      </Grid>
    </Box>
  );
}
