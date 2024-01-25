import React from "react";
import { Container, Typography, Box, Grid, Paper } from "@mui/material";
import { Circle } from "@mui/icons-material";

function SecondPlan() {
  return (
    <Container maxWidth={"lg"}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
       
            <img
              src="https://yougoz.com/wp-content/uploads/2021/03/feature-one.png"
              alt=""
              width={"100%"}
            />
         
        </Grid>
        <Grid item xs={12} md={6}>
          <Typography
            color={"#269ad6"}
            fontFamily={"Poppins"}
            variant="h6"
            gutterBottom
          >
            Onboarding Made Easy
          </Typography>
          <Typography
            component={"h2"}
            fontWeight={700}
            fontFamily={"Poppins"}
            fontSize={"2rem"}
            gutterBottom
          >
            Advanced Options To Launch Your Yougoz Profile!
          </Typography>
          <Typography
            variant="h6"
            fontSize={"1rem"}
            fontFamily={"Fira Sans"}
            fontWeight={400}
            color={"#718096"}
            paragraph
          >
            We take the time and guesswork out of setting up your full profile
            on Yougoz. One of our specialists will do all the work for you. Some
            of our onboarding packages include:
          </Typography>
          <Box
            sx={{
              display: "flex",
              alignItems: "flex-start",
              gap: 3,
              p: 3,
            }}
          >
            <Circle sx={{ fontSize: 50 }} />
            <Box>
              <Typography
                component={"h3"}
                fontWeight={700}
                fontSize={"1.5rem"}
                fontFamily={"Poppins"}
                gutterBottom
              >
                High-Impact Brand Video
              </Typography>
              <Typography
                variant="body1"
                fontSize={"1rem"}
                fontFamily={"Fira Sans"}
                fontWeight={400}
                color={"#718096"}
                paragraph
              >
                We'll come out and shoot a professional video of your brand.
                These videos allow you to tell your brand story.
              </Typography>
            </Box>
          </Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "flex-start",
              gap: 3,
              p: 3,
            }}
          >
            <Circle sx={{ fontSize: 50 }} />
            <Box>
              <Typography
                component={"h3"}
                fontWeight={700}
                fontSize={"1.5rem"}
                fontFamily={"Poppins"}
                gutterBottom
              >
                Professional Photo Shoot
              </Typography>
              <Typography
                variant="body1"
                fontSize={"1rem"}
                fontWeight={400}
                color={"#718096"}
                fontFamily={"Fira Sans"}
                paragraph
              >
                High-quality photography to bring your brand's unique features
                to life. Photos can make an impact on your business's success.
              </Typography>
            </Box>
          </Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "flex-start",
              gap: 3,
              p: 3,
            }}
          >
            <Circle sx={{ fontSize: 50 }} />
            <Box>
              <Typography
                component={"h3"}
                fontWeight={700}
                fontSize={"1.5rem"}
                fontFamily={"Poppins"}
                gutterBottom
              >
                Complete Profile Setup
              </Typography>
              <Typography
                variant="body1"
                fontSize={"1rem"}
                fontWeight={400}
                fontFamily={"Fira Sans"}
                color={"#718096"}
                paragraph
              >
                Make your profile impactful with a complete and professional
                setup of your business services, offers, and description.
              </Typography>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
}

export default SecondPlan;
