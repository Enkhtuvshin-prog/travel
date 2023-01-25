import { Grid, Typography, Box } from "@mui/material";
import React from "react";
import { NavLink } from "react-router-dom";

const data = [
  { title: "Beaches", img: "/img/icons/image 4.png", link: "/Beaches" },
  { title: "Deserts", img: "/img/icons/image 16.png", link: "/Mountains" },
  { title: "Mountains", img: "/img/icons/image 3 (1).png", link: "/Mountains" },
  { title: "Iconic Cities", img: "/img/icons/image 13.png" },
  { title: " House boats", img: "/img/icons/image 17.png" },
  { title: "Countryside", img: "/img/icons/image 10.png" },
  { title: "Camping", img: "/img/icons/image 5.png" },
  { title: "Castles", img: "/img/icons/image 12.png" },
  { title: "Skiing", img: "/img/icons/image 15.png" },
  { title: "Tropical", img: "/img/icons/image 8.png" },
];

const Categoty = () => {
  return (
    <Grid container spacing={10} marginY={"5px"}>
      {data.map((x) => (
        <Grid item xs={1}>
          <img src={x.img} />
          <NavLink
            to={"/Second"}
            style={{
              color: "#fff",
              padding: "10px",
              textDecoration: "none",
            }}
          >
            {x.title}
          </NavLink>
        </Grid>
      ))}
    </Grid>
  );
};

export default Categoty;
