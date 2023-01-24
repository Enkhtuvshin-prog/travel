import { Grid, Typography, Box, ThemeProvider } from "@mui/material";
import React from "react";

// const theme = {
//   borderRadius: {
//     borderRadius: "20px",
//   },
// };
const index = (props) => {
  return (
      <Grid sx={{ position: "relative" , m: 2 }}>
            <Box>
              <img
                src={`${props.img}`}
                style={{  width: "100%", height: "250px", borderRadius: 20 }}
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
              {props.title}{" "}
            </Typography>
      </Grid>
  );
};

export default index;
