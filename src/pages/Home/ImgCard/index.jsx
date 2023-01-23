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
        marginY: "20px"
      }}
    >
      <Typography variant="h4" color={"#000"}>Top Vacation Destinations</Typography>
      <Grid
        container
        columnSpacing={{ xs: 4 }}
        sx={{ mt: 3, position: "relative" }}
      >
        {data.map((x) => (
          <Grid xs={3}>
            <Box>
              <img src={`${x.img}`} style={{ borderRadius: 20 }} />
            </Box>

            {/* <Skeleton variant="rounded"> */}
            {/* </Skeleton> */}

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
