import { Margin } from "@mui/icons-material";
import { Box, Typography } from "@mui/material";
import React from "react";

const Plan = () => {
  return (
    <Box sx={{ position: "relative", my: 5 }}>
      <img src="/img/image 20.png" style={{ borderRadius: "20px" }} />
      <Box
        sx={{ position: "absolute", bottom: "20px", margin: 5, color: "#fff" }}
      >
        <Typography variant="h3" fontWeight={600}>
          Plan your trip with travel <br /> expert
        </Typography>
        <Typography>
          Our professional advisors can craft your perfect itinerary{" "}
        </Typography>
      </Box>
    </Box>
  );
};

export default Plan;
