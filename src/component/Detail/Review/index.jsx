import { Typography, Grid } from '@mui/material'
import React from 'react';
import SliderRating from '../SliderRating'

const Reviews = () => {
    return (
        <>
            <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                <Grid item xs={6}>
                    <Typography>Quite Clean</Typography>
                    <SliderRating />
                </Grid>
                <Grid item xs={6}>
                    <Typography>Great Amenities</Typography>
                    <SliderRating />
                </Grid>
                <Grid item xs={6}>
                    <Typography>Great Location</Typography>
                    <SliderRating />
                </Grid>
                <Grid item xs={6}>
                    <Typography>Great Service</Typography>
                    <SliderRating />
                </Grid>
            </Grid>
        </>
    )
}

export default Reviews