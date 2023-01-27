import React from 'react';
import LocalTaxiIcon from '@mui/icons-material/LocalTaxi';
import RestaurantIcon from '@mui/icons-material/Restaurant';
import LocalCafeIcon from '@mui/icons-material/LocalCafe';
import LocalBarIcon from '@mui/icons-material/LocalBar';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { Box } from '@mui/material';
import Link from '@mui/material/Link';

export default function Amenities() {
  return (
    <Box paddingBottom={2}>
      <List
        aria-label="contacts"
      >
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <LocalTaxiIcon />
            </ListItemIcon>
            <ListItemText primary="Airport pick-up service" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <RestaurantIcon />
            </ListItemIcon>
            <ListItemText primary="Restaurant" />
          </ListItemButton>
        </ListItem>
      </List>
      <Link href="https://www.trip.com/hotels/bangkok-hotel-detail-1027224?checkIn=2023-01-27&checkOut=2023-01-28" underline="none" marginLeft="15px" >
        Show all Amenities
      </Link>
    </Box>
  );
}

