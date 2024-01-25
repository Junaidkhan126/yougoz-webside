import React, { useEffect, useState, useRef } from "react";
import { Container, Typography, Box, Grid, Button, Stack } from "@mui/material";
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

function Forth() {
  const [progress, setProgress] = useState(0);
  const [ref, inView] = useInView({
    threshold: 0.5,
  });

  useEffect(() => {
    if (inView) {
      setProgress(50);
    } else {
      setProgress(0);
    }
  }, [inView]);
  return (
    <Container ref={ref} maxWidth={"lg"} sx={{ paddingTop: "60px" }}>
      <Grid container spacing={3}>
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
              fontSize={"3rem"}
            gutterBottom
            sx={{ fontFamily: "Poppins" }}
          >
            Stand out among your
            <br />
            competitors
          </Typography>
          <Typography
            variant="h6"
            fontSize={"1rem"}
            fontWeight={400}
            color={"#718096"}
            gutterBottom
            sx={{ fontFamily: "Fira Sans" }}
          >
            With a fully developed profile, you will surely impress your
            customers and stand out. Using all of Yougoz's powerful features,
            your business profile can make a real impact on your business
            growth.
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
            sx={{ fontFamily: "Fira Sans", paddingTop: "20px" }}
          >
            More than 50% more than a profile that is not completed correctly!
          </Typography>
          <Box sx={{ paddingTop: "20px" }}>
            <BorderLinearProgress variant="determinate" value={progress} />
          </Box>
        </Grid>
        <Grid item md={6} xs={12}>
          <Box>
            <img
              src="https://yougoz.com/wp-content/uploads/2021/03/Screen-Shot-2021-03-17-at-1.58.06-PM.png"
              alt=""
              width={"100%"}
            />
          </Box>
          <Box sx={{ paddingTop: "10px" }}>
            <Button
              fullWidth
              variant="contained"
              sx={{
                backgroundColor: "#f38c4a",
                color: "#fff",
                borderRadius: "50px",
                fontSize: "16px",
              }}
            >
              See a Full Profile In Action!
            </Button>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
}

export default Forth;
