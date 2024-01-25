import {
  FacebookSharp,
  Twitter,
  Instagram,
  Pinterest,
} from "@mui/icons-material";
import {
  Avatar,
  Container,
  Divider,
  Grid,
  Link,
  Box,
  Typography,
  IconButton,
  Stack,
} from "@mui/material";
import React from "react";

function FooterPlan() {
  return (
    <div style={{ backgroundColor: "#000" }}>
      <Container maxWidth="lg" sx={{ padding: "30px 0" }}>
        <Grid container spacing={2}>
          <Grid item md={2.5}>
            <Typography
              color={"white"}
              component="span"
              sx={{
                borderBottom: "1px solid white",
                mb: "20px",
                pb: "5px",
                "&:hover": { borderBottom: "2px solid orange" },
              }}
            >
              Best Yoga Studios in Boston, MA
            </Typography>
            <Typography
              color={"white"}
              component="span"
              sx={{
                borderBottom: "1px solid white",
                pb: "5px",
                "&:hover": { borderBottom: "2px solid orange" },
              }}
            >
              Best Gyms in Boston, MA
            </Typography>
          </Grid>
          <Grid item md={2.8}>
            <Typography
              color={"white"}
              component="span"
              sx={{
                borderBottom: "1px solid white",
                pt: "4px",
                mb: "20px",
                pb: "5px",
                "&:hover": { borderBottom: "2px solid orange" },
              }}
            >
              Barber Shops in Boston, MA
            </Typography>
            <Typography
              color={"white"}
              component="span"
              sx={{
                borderBottom: "1px solid white",
                pb: "5px",
                "&:hover": { borderBottom: "2px solid orange" },
              }}
            >
              Best Health Coaching in Boston, MA
            </Typography>
          </Grid>
          <Grid item md={3}>
            <Box>
              <Typography
                color={"white"}
                component="span"
                sx={{
                  borderBottom: "1px solid white",
                  mb: "20px",
                  pb: "5px",
                  "&:hover": { borderBottom: "2px solid orange" },
                }}
              >
                Best Spas in Boston, MA
              </Typography>
            </Box>
            <Box>
              <Typography
                color={"white"}
                component="span"
                sx={{
                  borderBottom: "1px solid white",
                  pb: "5px",
                  "&:hover": { borderBottom: "2px solid orange" },
                }}
              >
                Best Hair Salons in Boston, MA
              </Typography>
            </Box>
          </Grid>
          <Grid item>
            <Stack
              direction="row"
              alignItems={"center"}
              justifyContent="center"
            >
              <Box
                borderRadius={"10px"}
                sx={{ color: "white", mt: "8px", p: "2px" }}
              >
                <IconButton
                  component="a"
                  sx={{ color: "#fff" }}
                  target="_blank"
                  href={"https://www.facebook.com/yougoz/"}
                >
                  <FacebookSharp
                    sx={{
                      backgroundColor: "#df7541",
                      borderRadius: "20px",
                      padding: "6px 6px",
                    }}
                  />
                </IconButton>
              </Box>
              <IconButton
                component="a"
                sx={{ color: "#fff" }}
                target="_blank"
                href={"https://twitter.com/yougoz"}
              >
                <Box
                  borderRadius={"10px"}
                  sx={{ color: "white", mt: "8px", p: "2px" }}
                >
                  <Twitter
                    sx={{
                      backgroundColor: "#df7541",
                      borderRadius: "20px",
                      padding: "6px 6px",
                    }}
                  />
                </Box>
              </IconButton>

              <IconButton
                component="a"
                sx={{ color: "#fff" }}
                target="_blank"
                href={"https://www.instagram.com/goyougoz/"}
              >
                <Box
                  borderRadius={"10px"}
                  sx={{ color: "white", mt: "8px", p: "2px", p: "2px" }}
                >
                  <Instagram
                    sx={{
                      backgroundColor: "#df7541",
                      borderRadius: "20px",
                      padding: "6px 6px",
                    }}
                  />
                </Box>
              </IconButton>
              <IconButton
                component="a"
                sx={{ color: "#fff" }}
                target="_blank"
                href={"https://www.pinterest.com/goyougoz/"}
              >
                <Box
                  borderRadius={"10px"}
                  sx={{ color: "white", mt: "8px", p: "2px" }}
                >
                  <Pinterest
                    sx={{
                      backgroundColor: "#df7541",
                      borderRadius: "20px",
                      padding: "6px 6px",
                    }}
                  />
                </Box>
              </IconButton>
            </Stack>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default FooterPlan;
