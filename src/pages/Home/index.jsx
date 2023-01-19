import React from "react";
import MenuBar from "../../component/Navbar";
// import Paper from 'material-ui/Paper';

import { Paper } from '@mui/material';
import { Box } from "@mui/material";
const styles = {
  paperContainer: {
      backgroundImage: `url(${"https://followthetracks.courses/media/uploads/2019/12/Mobile-Tablet-Hero-SelfDrive.jpg"})`
  }
};
const index = () => {
  return <div>
    <MenuBar/>
    <Box component="main" sx={{ p: 3 }}>
        
      <Paper style={styles.paperContainer}></Paper>
    </Box>

  </div>;
};

export default index;
