import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea, Grid } from "@mui/material";
import HalfRating from "../Rating";
import {data} from "./data";
import { Box } from "@mui/system";


export default function CommunityCard() {
  return (
    <Grid container sx={{ marginY: " 20px" }} columns={13} gap={2}>
      <Typography variant="h3">
        Connect with other travelers in our community
      </Typography>
     
      {data.map((x) => (
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <Card >
            <CardActionArea>
              <CardMedia
                component="img"
                height="140"
                image={x.img}
                alt="green iguana"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {x.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {x.text}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {x.p}
                </Typography>
              </CardContent>
            </CardActionArea>
            <HalfRating />
          </Card>
        </Grid>
      ))}
    </Grid>
  );
}
