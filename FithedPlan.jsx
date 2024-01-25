import React, { useEffect, useState } from "react";
import { Container, Typography, Box, Grid, Button, Stack } from "@mui/material";
import { Circle, Padding } from "@mui/icons-material";
import LinearProgress, {
  linearProgressClasses,
} from "@mui/material/LinearProgress";
import { styled } from "@mui/material/styles";
import { useInView } from "react-intersection-observer";

const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
  height: 10,
  borderRadius: 5,
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor:
      theme.palette.grey[theme.palette.mode === "light" ? 200 : 800],
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 5,
    backgroundColor: theme.palette.mode === "light" ? "#1a90ff" : "#308fe8",
  },
  [`& .${linearProgressClasses.bar2Indeterminate}`]: {
    borderRadius: 5,
    backgroundColor: theme.palette.mode === "light" ? "#1a90ff" : "#308fe8",
  },
}));

function FithedPlan() {
  const [progress, setProgress] = useState(0);
  const [ref, inView] = useInView({
    threshold: 0.5,
  });

  useEffect(() => {
    if (inView) {
      setProgress(80);
    } else {
      setProgress(0);
    }
  }, [inView]);
  return (
    <Container maxWidth={"lg"} ref={ref} sx={{ paddingTop: "60px" }}>
      <Grid container spacing={3}>
      <Grid item md={6} xs={12}>
      <Box>
      <iframe
            width="100%"
            height="315"
            src="https://www.youtube.com/embed/mc1A7PgGBq8?si=3RwHmpLCAHOPG08O"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
      </Box>
         
        </Grid>
        <Grid item md={6} xs={12}>
          <Typography
            color={"#269ad6"}
            gutterBottom
            sx={{ marginBottom: "20px", fontFamily: "Poppins" }}
          >
            GROW YOUR BUSINESS
          </Typography>
          <Typography
            component={"h2"}
            fontWeight={700}
            fontSize={"2rem"}
            gutterBottom
            sx={{ fontFamily: "Poppins" }}
          >
            Impact of Video
          </Typography>
          <Typography
            variant="h6"
            fontSize={"1rem"}
            fontWeight={400}
            color={"#718096"}
            gutterBottom
            sx={{ fontFamily: "Fira Sans" }}
          >
            Did you know that 62% more people have an interest 
            in a service or a brand after seeing their video?
             Video can make a significant impact on your profile.
          </Typography>
          <Typography
            component={"h3"}
            fontWeight={700}
            fontSize={"20px"}
            gutterBottom
            sx={{ fontFamily: "Poppins" }}
          >
           Impressive profiles get more customers!
          </Typography>
          <Typography
            variant="h6"
            fontSize={"1rem"}
            fontWeight={400}
            color={"#718096"}
            gutterBottom
            sx={{ fontFamily: "Fira Sans",paddingTop:"20px" }}
          >
           80% of users agree that video helps increase their sales!
          </Typography>
         <Box  sx={{paddingTop:"20px",}}>
          <BorderLinearProgress variant="determinate" value={progress} />
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
}

export default FithedPlan;
