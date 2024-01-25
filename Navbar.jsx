import React, { useState } from "react";
import {
  AppBar,
  Box,
  Drawer,
  Grid,
  IconButton,
  Toolbar,
  Typography,
  Button,
  Menu,
  MenuItem,
  Hidden,
} from "@mui/material";
import {
  AddOutlined,
  PersonOutlineOutlined,
  Search,
  Menu as MenuIcon,
} from "@mui/icons-material";
import InputField from "./InputField";
import SecondField from "./SecondField";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const mainGrid = () => (
    <Grid container spacing={2}>
      <Grid item xs={12} sm={12} md={4} lg={5}>
        <InputField />
      </Grid>
      <Grid item xs={12} sm={12} md={3} lg={3}>
        <SecondField />
      </Grid>
      <Grid item xs={12} sm={12} md={2} lg={2}>
        <Button>
          <Search fontSize="large" style={{ color: "white" }} />
        </Button>
      </Grid>
    </Grid>
  );
  return (
    <AppBar
      sx={{ bgcolor: "#df7541", px: "5px" }}
      elevation={0}
      position="relative"
    >
      <Toolbar sx={{ px: "25px" }}>
        <Box
          sx={{ cursor: "pointer", p: "10px 35px 10px 10px" }}
          onClick={toggleMenu}
        >
          <img
            src="https://yougoz.com/wp-content/uploads/2017/04/YGZ-WEBSITE.png"
            alt="Yougoz Logo"
            width="100"
            style={{ fontSize: "150px" }}
          />
        </Box>
        <Box
          sx={{
            display: { md: "none", lg: "block", sm: "none" },
            flexGrow: { md: 0, lg: 1 },
          }}
        >
          <Hidden mdDown>{mainGrid()}</Hidden>
        </Box>
        <Box display={{ xs: "none", md: "block" }} justifyContent="flex-end">
          <Button variant="text" color="inherit" onMouseEnter={handleClick}>
            <PersonOutlineOutlined color="inherit" fontSize="small" />
            Sign Up
          </Button>
          <Menu
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onMouseLeave={handleClose}
          >
            <MenuItem onClick={handleClose}>Profile</MenuItem>
            <MenuItem onClick={handleClose}>My Account</MenuItem>
            <MenuItem onClick={handleClose}>Logout</MenuItem>
          </Menu>
          <Button
            variant="outlined"
            color="inherit"
            sx={{
              border: "1px solid #fff",
              color: "#fff",
              textTransform: "capitalize",
              fontSize: "16px",
            }}
          >
            <AddOutlined /> Submit Now
          </Button>
        </Box>
        <Box display={{ xs: "block", md: "none" }}>
          <IconButton onClick={toggleMenu} color="inherit">
            <MenuIcon />
          </IconButton>
        </Box>
      </Toolbar>
      <Toolbar sx={{ display: { md: "block", lg: "none" } }}>
        {mainGrid()}
      </Toolbar>
      <Drawer
        anchor="right"
        open={isMenuOpen}
        onClose={toggleMenu}
        PaperProps={{ sx: { width: "240px" } }}
      >
        <Box sx={{ p: "20px" }}>
          <Button
            variant="text"
            color="inherit"
            sx={{ display: "block", my: 1 }}
          >
            <PersonOutlineOutlined color="inherit" fontSize="small" />
            Sign Up
          </Button>
          <Button
            variant="outlined"
            color="inherit"
            sx={{
              border: "1px solid #333",
              display: "block",
              my: 1,
            }}
          >
            <AddOutlined /> Submit Now
          </Button>
        </Box>
      </Drawer>
    </AppBar>
  );
};

export default Navbar;
