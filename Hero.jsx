import React from "react";
import { Container, Typography, Box, Grid, Button, Stack } from "@mui/material";
import { Padding } from "@mui/icons-material";
function Hero() {
  return (
    <Container
      maxWidth={"lg"}
      sx={{
        height: "50vh",
        p: "50px 0px 70px 0px",
        marginBottom: "20%",
        position: "relative",
      }}
    >
      <Grid
        container
        sx={{
          background:
            "url(https://yougoz.com/wp-content/uploads/2021/03/Depositphotos_457664992_s-2019.jpg)",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "cover",
          height: { md: "70vh", lg: "60vh", xl: "30vh" },
          borderRadius: "20px",
          p: 8,
        }}
      >
        <Grid item md={6}>
          <Typography
            component={"h2"}
            fontWeight={700}
            fontSize={"3rem"}
            gutterBottom
          >
            Let Us Help You Get Started!
          </Typography>
          <Typography variant="h6" color="#2d3748" gutterBottom>
            Sit back, relax and let one of our specialists help you with
            onboarding to help grow your business!
          </Typography>
          <Button
            sx={{
              bgcolor: "black",
              color: "white",
              px: 4,
              py: 1,
              borderRadius: 5,
              textTransform: "capitalize",
              my: 3,
            }}
          >
            Get Started
          </Button>
        </Grid>
        <Grid item md={6}>
          <Box
            sx={{
              position: "absolute",
              top: 0,
              right: { md: 25, lg: 150, xl: 750 },
            }}
          >
            <img
              src="https://yougoz.com/wp-content/uploads/2021/03/hero.png"
              alt=""
              style={{ maxWidth: "366px",  }}
              height={"100%"}
            />
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
}

export default Hero;
