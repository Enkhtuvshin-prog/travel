import { Grid, Typography, Box, ThemeProvider } from "@mui/material";
import React from "react";

const data = [
  { title: "Bali, Indonesia", img: "/img/image 18.png" },
  { title: "Kerry, Ireland", img: "/img/image 18 (1).png" },
  { title: "Sydney, Australia", img: "/img/image 18 (2).png " },
  { title: "Paris, France", img: "/img/image 18 (3).png " },
];
// const theme = {
//   borderRadius: {
//     borderRadius: "20px",
//   },
// };
const index = () => {
  return (
    <Grid
      sx={{
        // position: "absolute",
        marginTop: -20,
        color: "white",
        top: "80%",
        left: "10%",
      }}
    >
      <Typography variant="h4" fontWeight="600">
        Top Vacation Destinations
      </Typography>
      <Grid container columns={12} spacing={2} sx={{ marginY: 3 }}>
        {data.map((x) => (
          <Grid item xs={3} sx={{ position: "relative" }}>
            <Box>
              <img
                src={`${x.img}`}
                style={{ borderRadius: 20, width: "100%", height: "250px" }}
              />
            </Box>
            <Typography
              variant="h5"
              sx={{
                // color: "#000",
                position: "absolute",
                bottom: "20px",
                textAlign: "center",
                ml: 5,
              }}
            >
              {x.title}{" "}
            </Typography>
          </Grid>
        ))}
      </Grid>
    </Grid>
  );
};

export default index;
