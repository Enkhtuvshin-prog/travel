import { Container, Grid, Typography, Box } from '@mui/material'
import React from 'react'
const text = ["Seslendirme ve Alt Jazz", "Media Market", "Gillie", "Size Last"];
const text1 = ["Self Betimes", "Yatırımcı İlişkileri", "Basal Himmler"];
const text2 =["Yard Market", "Is İmkanları", "Car Tercihleri" ];
const text3 = ["Hedge Karla", "Mullein Koşulları", "Mullein Koşulları"]
const Footer = () => {
    return (
        <Grid sx={{
            backgroundColor: "#141414"
        }}>
            <Container>
                <Box sx={{ display: "flex", justifyContent: "space-between", color: "#808080", paddingY: 8 }}>
                    <Typography color={"white"} variant={'h2'} fontWeight={600} > Trxvl.</Typography>
                    <Box>
                        {
                            text.map((text) => <Typography>{text}</Typography>)
                        }
                    </Box>
                    <Box>
                        {
                            text1.map((x) => <Typography>{x}</Typography>)
                        }
                    </Box>
                    <Box>
                        {
                            text2.map((x) => <Typography>{x}</Typography>)
                        }
                    </Box>
                    <Box>
                        {
                            text3.map((x) => <Typography>{x}</Typography>)
                        }
                    </Box>
                </Box>

            </Container>
        </Grid>
    )
}

export default Footer