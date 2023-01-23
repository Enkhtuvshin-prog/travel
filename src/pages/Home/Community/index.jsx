import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea, Grid } from '@mui/material';

const data = [
    { title: "India", text: "Travel community", p: "155,073 travelers", img: "/img/community/Frame 31.png" },
    { title: "Travel Talk", text: "Travel community", p: "155,073 travelers", img: "/img/community/Frame 31 (1).png" },
    { title: "Beach", text: "Travel community", p: "155,073 travelers", img: "/img/community/Frame 31 (2).png" },
    { title: "Moutains", text: "Travel community", p: "155,073 travelers", img: "/img/community/Frame 31 (3).png" },
]
export default function CommunityCard() {
    return (
        <Grid container sx={{marginY: " 20px"}} columns={13} gap={2} >
            <Typography variant='h3' color={"#000"} >Connect with other travelers in our community</Typography>
            {data.map((x) =>
            <Grid xs={3} >
                <Card >
                    <CardActionArea>
                        <CardMedia
                            component="img"
                            height="140"
                            image={x.img}
                            alt="green iguana"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                {x.title}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                {x.text}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                {x.p}
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
                </Grid>
            )}
        </Grid>
    );
}