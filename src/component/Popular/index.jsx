import React from 'react'
import { Box, Typography , Grid} from "@mui/material";
import data from '../CardItem/data';
import { categories } from "../CardItem/categoryData";
import MediaCard from '../CardItem';


const PopularCard = () => {
    console.log(categories[0].popularlist);
    const popData = data.filter((item) =>
      categories[0].popularlist.includes(item.id)
    );
  return (
    <Box
      sx={{
        marginTop: -30,
      }}
    >
      <Typography variant="h3" fontWeight={600} sx={{ marginY: 3 }}>
        Popular Beach Destinations
      </Typography>
      <Grid container spacing={2}>

      {
        popData.map((x) => <MediaCard img={x.img} icon={x.icon} title={x.title} p={x.p} price={x.price} person={x.person} /> )

      }
     </Grid>
    </Box>
  )
}

export default PopularCard;