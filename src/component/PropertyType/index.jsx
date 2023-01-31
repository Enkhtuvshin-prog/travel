import React from "react";
import { Grid, Typography, Box, ThemeProvider } from "@mui/material";

const data = [
  { title: "Hotels", img: "/img/type/image 18.png" },
  { title: "Apartments", img: "/img/type/image 18 (1).png" },
  { title: "Resort", img: "/img/type/image 18 (2).png" },
  { title: "Villas", img: "/img/type/image 18 (3).png" },
];
const PropertyType = () => {
  return (
    <Grid
      container
      sx={{
        marginY: "20px",
      }}
    >
      <Typography variant="h2" fontWeight={600}>
        Browse by property type
      </Typography>
      <Grid
        container
        sx={{ mt: 3 }}
        columns={14}
        justifyContent="space-between"
      >
        <Box sx={{
            display: "flex",
            marginTop: "5%",
            gap: "30px",
            overflowX: "scroll",
  border:'1px solid red',
            "&::-webkit-scrollbar": {
              display: "none",
            },
          }}>
        {data.map((x) => (
          <Grid
            item
            xs={12}
            sm={6}
            md={4}
            lg={3}
            sx={{ mx: 1, position: "relative" }}
          >
            <Box>
              <img
                src={`${x.img}`}
                style={{ borderRadius: 20, width: "100%", height: "250px" }}
              />
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
        </Box>
      </Grid>
    </Grid>
  );
};

export default PropertyType;
