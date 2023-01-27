import * as React from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';

export default function SliderRating() {
  return (
    <Box width={100}>
      {/* <Slider
        size="small"
        defaultValue={70}
        aria-label="Small"
        valueLabelDisplay="auto"
      /> */}
      <Slider defaultValue={5} aria-label="Default" valueLabelDisplay="auto" />
    </Box>
  );
}