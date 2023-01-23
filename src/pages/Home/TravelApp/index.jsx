import { NoEncryption } from '@mui/icons-material'
import { Container, Grid, Box, Typography, Button, Input } from '@mui/material'
import React from 'react'

const TravelApp = () => {
    return (
        <Grid sx={{
            backgroundImage: `url("/img/image 21.png")`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            // height: "calc(100vh - 100px)",
            backgroundPosition: "center center",
            background: "linear-gradient(180deg, rgba(0, 0, 0, 0.5) 0%, rgba(0, 0, 0, 0) 13.65%), linear-gradient(0deg, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url(Pexels Videos 2146396.png)",
            // backgroundAttachment: "fixed",
            position: "relative",
            height: "500px"
        }}>
            <Container>
                <Grid container spacing={3} sx={{
                    top: "10%",
                    position: "absolute"
                }}  >
                    <Grid item xs={4}>
                        <img src='/img/app/iPhone 13 Mockup label.png' />
                    </Grid>

                    <Grid item xs={6}>
                            <Typography variant='h4' fontWeight={600}> Your all-in-one travel app.</Typography>
                            <Typography>
                            Book flights, hotels, trains & rental cars anywhere in the world in just seconds. Get real-time flight updates, travel info, exclusive deals, and 30% more Trip Coins only on the app!
                            </Typography>
                            <Box sx={{ display: 'flex', justifyContent: "space-between", marginY:2  }}>
                                <Box sx={{ display: 'flex'  }}>
                                    <Button sx={{  backgroundColor: "rgba(255, 255, 255, 0.4)", color: "white",  px:4, borderRadius: "30px", fontWeight: "400" }} >Mobile</Button>
                                    <Button sx={{color: "white"}} >Email</Button>
                                </Box>
                                <Box> <img src='/img/app/image 23.png' /> </Box>
                            </Box>
                            <Typography> Enter your phone number to receive a text with a link to download the app. </Typography>
                            <Box sx={{ display: 'flex', justifyContent: "space-between", marginY:2 }}>
                                <Box sx={{
                                    display: 'flex', justifyContent: "space-between",
                                    backgroundColor: "rgba(255, 255, 255, 0.4)", border: 'none',
                                    borderRadius: "20px", p: 1, width: "60%"
                                }}>
                                    <Input type='text' placeholder=' +91 Mobile number' sx={{ border: "none", marginX: 1 }} />
                                    <Button sx={{ backgroundColor: "white", px: 4, borderRadius: "30px", fontWeight: "600" }} >Search</Button>
                                </Box>
                                <Box> <img src='/img/app/image 22.png' /> </Box>

                            </Box>
                    </Grid>
                </Grid>
            </Container>

        </Grid>
    )
}

export default TravelApp