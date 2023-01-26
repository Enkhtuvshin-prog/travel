import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Box, Grid } from "@mui/material";
import { height } from "@mui/system";
import StarIcon from "@mui/icons-material/Star";

const service = [
  { icons: "/img/icons/Vector (1).png", title: "2 Flights" },
  { icons: "/img/icons/Vector (2).png", title: "1 Hotel" },
  { icons: "/img/icons/Vector (3).png", title: "2 Transfers" },
  { icons: "/img/icons/Vector (4).png", title: "4 Activities" },
];

export default function MediaCard(props) {
  return (
    <Grid item xs={12} sm={6} md={4} lg={3}>
      <Card
        sx={{
          maxWidth: 350,
          position: "relative",
          height: 550,
          margin: "auto",
        }}
      >
        <CardMedia
          sx={{ height: 200, m: 2 }}
          image={props.img}
          title="green iguana"
          style={{ borderRadius: "30px" }}
        />
        <img
          src={props.icon}
          style={{
            position: "absolute",
            top: 0,
            right: 0,
            margin: "30px",
          }}
        />
        <CardContent>
          <Box display={"flex"} justifyContent="space-between">
            <Typography gutterBottom variant="h5" component="div">
              {props.title}
            </Typography>
            <Box>
              <Typography variant="h5">
                {" "}
                <StarIcon /> 4.7
              </Typography>
            </Box>
          </Box>
          <Typography variant="body2" color="text.secondary">
            {props.p}
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
                <Typography sx={{ fontSize: ".8rem" }}>{x.title}</Typography>
              </Box>
            ))}
          </Box>
          <ul style={{ fontSize: ".8rem" }}>
            <li>Tour combo with return airport transfer</li>
            <li>City Tour</li>
            <li>Curious Corner</li>
          </ul>
          <Typography variant="h5" textAlign={"center"}>
            {props.price}{" "}
            <span style={{ fontSize: ".5rem" }}>{props.person}</span>
          </Typography>
        </CardContent>
      </Card>
    </Grid>
  );
}
