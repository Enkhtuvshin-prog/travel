import React from 'react'
import { Box, Link } from '@mui/material';
import PlaceOutlinedIcon from '@mui/icons-material/PlaceOutlined';
const MapInfo = () => {
    return (
        <Box>
            <PlaceOutlinedIcon />
            <Link underline='none' marginLeft={1} href="https://www.trip.com/hotels/bangkok-hotel-detail-703149?checkin=2023-01-26&checkout=2023-01-27&adult=2&crn=1" color="inherit">
                Map
            </Link>
        </Box>
    )
}

export default MapInfo