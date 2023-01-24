import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Grid } from '@mui/material';
import { Box } from '@mui/system';



export default function CardItem(props) {
  return (
    <Grid container gap={1} columns={12} justifyContent="space-between">
     
        <Card sx={{ maxWidth: 370, height: "200px", display: "flex" }}>
            {/* <CardMedia
              sx={{ width: "180px", p:2, m:2 }}
              image={x.img}
              title="green iguana"
            /> */}
            <img src={props.img} style={{width: "150px", padding:"10px", borderRadius: "20px" }} />
            <CardContent  >
              <Typography variant="h5"  color="text.secondary" fontSize={".5rem"} >
                {props.p}
              </Typography>
              <Typography variant="h3" fontSize={"1rem"} sx={{my:2, fontWeight: "600"}} >
                {props.title}
              </Typography>
              <Typography variant='body2'>{props.text}</Typography>
              <Button variant='contained' sx={{m:1}} >Book now</Button>
            </CardContent>
        </Card>
    </Grid>
  );
}

