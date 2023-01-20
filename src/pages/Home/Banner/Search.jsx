import React from 'react';
import { Box, Button, Grid, Input, Typography } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { display } from '@mui/system';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import PersonIcon from '@mui/icons-material/Person';
const Search = () => {
    return (
        <Box
            sx={{
                backgroundColor: "rgba(255, 255, 255, 0.4)",
                // backdropFilter: "16px",
                color: "#D5D8DC",
                width: "80vw",
                height: "60px",
                borderRadius: "20px",
                display: "flex",
                justifyContent: "space-between",
                textAlign: "center",
                gap: "8px",
                p: 2,
                my: 5
            }}>
            <Box sx={{display: "flex", width: "40%", }}>

                <SearchIcon
                    sx={{ color: "#EB984E", fontSize: "2.5rem", mr:1 }}
                />
                <Input
                    size='lg'
                    placeholder='Search destinations, hotels'
                    sx={{
                        width: "100%",       
                        border: "none"
                    }}
                />
            </Box>
            <Box sx={{display: "flex"}}>
            <CalendarTodayIcon/><Typography>  Check in</Typography>
            </Box >
            <Box sx={{display: "flex"}}>
            <CalendarTodayIcon /><Typography>  Check out</Typography>
            </Box>
            <Box sx={{display: "flex"}}>
            <PersonIcon/> <Typography>  1 room, 2 aduts</Typography>
            </Box>
            <Button
            sx={{ backgroundColor: "white", px: 4, borderRadius: "30px", fontWeight: "600" }}
            >Search</Button>

        </Box>
    )
}

export default Search


