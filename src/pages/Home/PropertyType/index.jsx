import React from 'react';
import { Grid, Typography, Box, ThemeProvider } from "@mui/material";


const data = [
    {title: "Hotels", img: "/img/type/image 18.png"},
    {title: "Apartments", img: "/img/type/image 18 (1).png"},
    {title: "Resort", img: "/img/type/image 18 (2).png"},
    {title: "Villas", img: "/img/type/image 18 (3).png"},
]
const PropertyType = () => {
  return (
    <Grid
    
    sx={{
      marginY: "20px",
    }}
  >
    <Typography variant="h2" fontWeight={600} sx={{color: "#000"}} >Browse by property type</Typography>
    <Grid
      container
      columnSpacing={{ xs: 2 }}
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
  )
}

export default PropertyType