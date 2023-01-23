import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Box, Grid } from '@mui/material';
import { height } from '@mui/system';
const service = [
    { icons: "/img/icons/Vector (1).png", title: "2 Flights" },
    { icons: "/img/icons/Vector (2).png", title: "1 Hotel" },
    { icons: "/img/icons/Vector (3).png", title: "2 Transfers" },
    { icons: "/img/icons/Vector (4).png", title: "4 Activities" }
];
const data = [
    { img: "/img/card/image 33.png", icon: "/img/Vector.png", title: "Swiss Apls", p: "3Days 4 Nights", text: "Tour combo with return airport transfer", text1: "City Tour", text2: "Curious Corner", price: "₹88,952", person: "Per person" },
    { img: "/img/card/image 34.png", icon: "/img/Vector.png", title: "Hallstatt", p: "3Days 4 Nights", text: "Tour combo with return airport transfer", text1: "City Tour", text2: "Curious Corner", price: "₹88,952", person: "Per person" },
    { img: "/img/card/image 35.png", icon: "/img/Vector.png", title: "Faroe Island", p: "3Days 4 Nights", text: "Tour combo with return airport transfer", text1: "City Tour", text2: "Curious Corner", price: "₹88,952", person: "Per person" },
    { img: "/img/card/image 36.png", icon: "/img/Vector.png", title: "Innsbruck", p: "3Days 4 Nights", text: "Tour combo with return airport transfer", text1: "City Tour", text2: "Curious Corner", price: "₹88,952", person: "Per person" }
];

export default function MediaCard() {
    return (
        <Box  sx={{position:"absolute", top: "80%"}}>
            <Typography  variant='h3' fontWeight={600} sx={{marginY: 3}}>Popular Beach Destinations</Typography>
        <Grid container spacing={2} >
            {
            data.map((item) =>
                <Grid item xs={3}>
                    <Card sx={{ maxWidth: 350, position:"relative" }}>
                        <CardMedia
                            sx={{ height: 200, m: 2  }}
                            image={item.img}
                            title="green iguana"
                            style={{borderRadius: "30px"}}
                        />
                        <img src={item.icon} style={{position: "absolute", top: 0, right: 0, margin: "30px"}} />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                {item.title}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                {item.p}
                            </Typography>
                            <Box sx={{ display: "flex", justifyContent: 'space-between', marginY: 2 }} >{
                                service.map((x) => (<Box>
                                    <img src={x.icons} style={{ height: "20px" }}

                                    />
                                    <Typography sx={{ fontSize: ".8rem" }}>{x.title}</Typography>

                                </Box>
                                )
                                )}
                            </Box>
                            <ul style={{fontSize: ".8rem"}}>
                                <li>{item.text}</li>
                                <li>{item.text1}</li>
                                <li>{item.text2}</li>
                            </ul>
                            <Typography variant='h4'>{item.price}</Typography><span>{item.person}</span>

                        </CardContent>
                    </Card>
                </Grid>
            )
        }
        </Grid>
        </Box>
    );
}