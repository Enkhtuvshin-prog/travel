import { Grid, Typography, Box, Button } from "@mui/material";
import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import categoryData from "../CardItem/data";
import MediaCard from "../CardItem";
const data = [
  { title: "Beaches", img: "/img/icons/image 4.png", category: "Beaches" },
  { title: "Deserts", img: "/img/icons/image 16.png", category: "Mountains" },
  { title: "Mountains", img: "/img/icons/image 3 (1).png", category: "Mountains" },
  { title: "Iconic Cities", img: "/img/icons/image 13.png", category: "Iconic Cities" },
  { title: " House boats", img: "/img/icons/image 17.png", category: " House boats" },
  { title: "Countryside", img: "/img/icons/image 10.png", category: "Countryside" },
  { title: "Camping", img: "/img/icons/image 5.png", category: "Camping" },
  { title: "Castles", img: "/img/icons/image 12.png", category: "Castles" },
  { title: "Skiing", img: "/img/icons/image 15.png", category: "Skiing" },
  { title: "Tropical", img: "/img/icons/image 8.png", category: "Tropical" },
];

const Categoty = () => {
  const [news, setNews] = useState(categoryData);
  const handleClick = (category) => {
    console.log("c:", category)
    const cate = categoryData.filter((item) => item.category == category);
    console.log("filter: ", cate);
    setNews(cate);
  };
  return (
    <Box>
      <Grid container spacing={10} marginY={"5px"}>
        {data.map((x) => (
          <Grid item xs={4} sm={3} md={2} lg={1}>
            <img src={x.img} />
            <Button
              handleClick={handleClick}
              // to={"/Second"}
              style={{
                color: "#fff",
                padding: "10px",
                textDecoration: "none",

              }}
            >
              {x.title}
            </Button>
          </Grid>
        ))}
      </Grid>

      <Grid container spacing={2}>

        {
          news.map((card) => <MediaCard  cardList={card} />)

        }

      </Grid>
    </Box>
  );
};

export default Categoty;
