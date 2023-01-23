import * as React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import TravelExploreIcon from "@mui/icons-material/TravelExplore";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import NestedModal from "../modal";
import { NavLink } from "react-router-dom";
// import { Paper } from "@mui/material";

const drawerWidth = 240;
const navItems = ["Home", "styles", "flights", "Packages"];

function MenuBar(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        MUI
      </Typography>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton sx={{ textAlign: "center" }}>
              <NavLink to={"/"} primary={item} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        component="nav"
        sx={{ backgroundColor: "transparent", boxShadow: "none" }}
      >
        <Toolbar>
          <TravelExploreIcon sx={{ mr: 2, fontSize: "3rem" }} />
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon sx={{ mx: "auto" }} />
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
          >
            trxvl
          </Typography>
          <Box sx={{ display: { xs: "none", sm: "block" } }}>
            {navItems.map((item) => (
              <NavLink
                to={"/"}
                key={item}
                style={{
                  color: "#fff",
                  padding: "10px",
                  textDecoration: "none",
                  fontWeight: "600",
                }}
              >
                {item}
              </NavLink>
            ))}
            {/* <Button  variant='warming' sx={{color: "white" }}><AccountCircleIcon/> Sign in</Button> */}
            <Button>
              <NestedModal />
            </Button>
          </Box>
        </Toolbar>
      </AppBar>
      {/* <Box component="main" sx={{ p: 5 }}>
        <Paper
          style={{
            backgroundImage: `url(${"../../../public/img/ bg-img.jpeg"})`,
          }}
        ></Paper>
      </Box> */}
    </Box>
  );
}

export default MenuBar;
