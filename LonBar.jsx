import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import Grid from "@mui/material/Grid";

const pages = [
  "",
  "FAQ",
  "Onboarding Assistance",
  "Privacy Policy",
  "Terms of Use",
  "Blog",
  "Contact",
];

const settings = ["Profile", "Account", "Dashboard", "Logout"];

function LonBar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <Box>
      <AppBar position="static" sx={{ backgroundColor: "#45505b" }}>
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <Grid container alignItems="center" justifyContent="space-between">
              <Grid item xs={6} sm={3} md={2}>
                <img
                  src="https://yougoz.com/wp-content/uploads/2017/04/YGZ-WEBSITE.png"
                  alt=""
                  sx={{ fontFamily: "Quicksand" }}
                />
              </Grid>
              <Grid item xs={6} sm={6} md={6}>
                <Box display={{ xs: "block", md: "none" }} textAlign="center">
                  <Button
                    onClick={handleOpenNavMenu}
                    sx={{
                      textTransform: "capitalize",
                      my: 2,
                      color: "white",
                      height: "64px",
                      ":hover": {
                        bgcolor: "#df7541",
                      },
                    }}
                  >
                    Menu
                  </Button>
                  <Menu
                    id="menu-appbar"
                    anchorEl={anchorElNav}
                    anchorOrigin={{
                      vertical: "bottom",
                      horizontal: "left",
                    }}
                    keepMounted
                    transformOrigin={{
                      vertical: "top",
                      horizontal: "left",
                    }}
                    open={Boolean(anchorElNav)}
                    onClose={handleCloseNavMenu}
                  >
                    {pages.map((page) => (
                      <MenuItem key={page} onClick={handleCloseNavMenu}>
                        <Typography textAlign="center" display="flex">
                          {page}
                        </Typography>
                      </MenuItem>
                    ))}
                  </Menu>
                </Box>
                <Box
                  display={{ xs: "none", md: "flex" }}
                  justifyContent="space-between"
                >
                  {pages.map((page) => (
                    <Button
                      key={page}
                      onClick={handleCloseNavMenu}
                      sx={{
                        textTransform: "capitalize",
                        p: "6",
                        color: "white",
                        display: "flex",
                        color: "white",
                        fontFamily: "Quicksand",
                        fontSize: "15px",
                        "&:hover": {
                          backgroundColor: "#df7541",
                        },
                      }}
                    >
                      {page}
                    </Button>
                  ))}
                </Box>
              </Grid>
              <Grid item xs={6} sm={3} md={2}>
                <Box
                  display="flex"
                  justifyContent={{ xs: "center", md: "flex-end" }}
                >
                  <Menu
                    sx={{ mt: "45px" }}
                    id="menu-appbar"
                    anchorEl={anchorElUser}
                    anchorOrigin={{
                      vertical: "top",
                      horizontal: "right",
                    }}
                    keepMounted
                    transformOrigin={{
                      vertical: "top",
                      horizontal: "right",
                    }}
                    open={Boolean(anchorElUser)}
                    onClose={handleCloseUserMenu}
                  >
                    {settings.map((setting) => (
                      <MenuItem key={setting} onClick={handleCloseUserMenu}>
                        <Typography textAlign="center">{setting}</Typography>
                      </MenuItem>
                    ))}
                  </Menu>
                </Box>
              </Grid>
            </Grid>
          </Toolbar>
          <Box
            sx={{
              fontSize: "20px",
              color: "white",
              textAlign: "center",
              padding: "10px",
            }}
          >
            Copyright © 2022 Yougoz
          </Box>
        </Container>
      </AppBar>
    </Box>
  );
}

export default LonBar;
