import { Box, Grid } from "@mui/material";
import React from "react";
import MenuBar from "../../component/Navbar";
// import Paper from 'material-ui/Paper';

const index = () => {
  return (
    <Grid
      xs={12}
      sx={{
        backgroundImage: `url("/img/image 1.png")`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center center",
        backgroundAttachment: "fixed",
        height: "150vh",
        // width: "100%",
      }}
    >
      <Box>
        <MenuBar />
      </Box>
    </Grid>
  );
};

export default index;
