import * as React from "react";
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import ButtonBase from "@mui/material/ButtonBase";
import { height } from "@mui/system";

const Img = styled("img")({
  margin: "auto",
  display: "block",
  maxWidth: "100%",
  maxHeight: "100%",
});

const data = [
  {
    p: "Domestic Flights",
    title: "Huge savings on flight with trxvl.",
    text: "Book domestic flights starting @ just ₹1459",
    btn: "Book Now",
    img: "/img/image 19.png",
  },
  {
    p: "International Hotels",
    title: "Enjoy upto 20% off on International Hotels",
    text: "Make the most of  this deal on your first booking with trxvl.",
    btn: "Book Now",
    img: "/img/image 19 (1).png",
  },
  {
    p: "Domestic Flights",
    title: "Huge savings on flight with trxvl.",
    text: "Book domestic flights starting @ just ₹1459",
    btn: "Book Now",
    img: "/img/image 19.png",
  },
];

export default function CardItem() {
  return (
    <Grid container spacing={2}>
      {data.map((x) => (
        <Paper
          sx={{
            p: 2,
            m: 3,
            maxWidth: 450,
            backgroundColor: (theme) =>
              theme.palette.mode === "dark" ? "#1A2027" : "#fff",
          }}
        >
          <Grid item xs={3}>
            <ButtonBase sx={{ width: 128, height: "100%" }}>
              <Img alt="complex" src={x.img} />
            </ButtonBase>
          </Grid>
          <Grid item xs={12} sm container>
            <Grid item xs container direction="column" spacing={2}>
              <Grid item xs>
                <Typography gutterBottom variant="subtitle1" component="div">
                  {x.p}
                </Typography>
                <Typography variant="body1" gutterBottom>
                  {x.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {x.text}
                </Typography>
              </Grid>
              <Grid item>
                <Typography sx={{ cursor: "pointer" }} variant="body2">
                  Remove
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Paper>
      ))}
    </Grid>
  );
}
