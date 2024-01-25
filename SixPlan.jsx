import React from "react";
import {
  Container,
  Typography,
  Box,
  Grid,
  Avatar,
  IconButton,
} from "@mui/material";
import { FacebookOutlined } from "@mui/icons-material";
import { VscMail } from "react-icons/vsc";
import { LiaFacebookF } from "react-icons/lia";
import { FaGoogle } from "react-icons/fa";
import { AiOutlineMobile } from "react-icons/ai";
function SixPlan() {
  return (
    <Container maxWidth="lg">
      <Box sx={{ paddingTop: "60px" }}>
        <Typography
          color={"#269ad6"}
          gutterBottom
          sx={{
            paddingBottom: "20px",
            fontFamily: "Poppins",
            display: "flex",
            justifyContent: "center",
          }}
        >
          Advanced Customer Service Platform
        </Typography>
        <Typography
          align="center"
          component="h2"
          sx={{
            paddingTop: "10px",
            fontWeight: 700,
            fontSize: "2rem",
            fontFamily: "Poppins",
            marginBottom: "20px",
          }}
        >
          We Drive Growth For Brands
        </Typography>
        <Typography
          align="center"
          color="#718096"
          sx={{ fontFamily: "Fira Sans", paddingTop: "15px" }}
        >
          The Yougoz platform helps brands grow by offering a unique marketing
          opportunity. Once your profile is completed, you will be able to take{" "}
          <br />
          advantage of all the marketing that Yougoz is doing on your behalf.
          Plus, in-app advertising allows you to give your profile an extra
          boost.
        </Typography>
      </Box>
      <Grid container spacing={2} sx={{ paddingTop: "60px" }}>
        <Grid
          item
          md={3}
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <IconButton
            sx={{
              backgroundColor: "#34c4f9",
              width: "64px",
              height: "64px",
              ":hover": {
                bgcolor: "#000",
                color: "white",
              },
            }}
          >
            <VscMail style={{ fontSize: "28px",  color: "white", }} />
          </IconButton>
          <Typography
            component="h2"
            sx={{
              fontSize: "1.25em",
              fontFamily: "Poppins",
              fontWeight: "bold",
              color: "#333",
              lineHeight: "31px",
              marginBottom: "20px",
              m: "14px 0px 20px",
            }}
          >
            Email Marketing
          </Typography>
        </Grid>
        <Grid
          item
          md={3}
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <IconButton
            sx={{
              backgroundColor: "#34c4f9",
              width: "64px",
              height: "64px",

              ":hover": {
                bgcolor: "#000",
                color: "white",
              },
            }}
          >
            <LiaFacebookF style={{ fontSize: "28px", color: "white" }} />
          </IconButton>
          <Typography
            component="h2"
            sx={{
              fontSize: "1.25em",
              fontFamily: "Poppins",
              fontWeight: "bold",
              color: "#333",
              lineHeight: "31px",
              marginBottom: "20px",
              m: "14px 0px 20px",
            }}
          >
            Social Media
          </Typography>
        </Grid>

        <Grid
          item
          md={3}
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <IconButton
            sx={{
              backgroundColor: "#34c4f9",
              width: "64px",
              height: "64px",
              ":hover": {
                bgcolor: "#000",
                color: "white",
              },
            }}
          >
            <FaGoogle style={{ fontSize: "28px", color: "white" }} />
          </IconButton>
          <Typography
            component="h2"
            sx={{
              fontSize: "1.25em",
              fontFamily: "Poppins",
              fontWeight: "bold",
              color: "#333",
              lineHeight: "31px",
              marginBottom: "20px",
              m: "14px 0px 20px",
            }}
          >
            Digital Advertising
          </Typography>
        </Grid>
        <Grid
          item
          md={3}
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <IconButton
            sx={{
              backgroundColor: "#34c4f9",
              width: "64px",
              height: "64px",
              ":hover": {
                bgcolor: "#000",
                color: "white",
              },
            }}
          >
            <AiOutlineMobile style={{ fontSize: "28px", color: "white" }} />
          </IconButton>

          <Typography
            component="h2"
            sx={{
              fontSize: "1.25em",
              fontFamily: "Poppins",
              fontWeight: "bold",
              color: "#333",
              lineHeight: "31px",
              marginBottom: "20px",
              m: "14px 0px 20px",
            }}
          >
            In-App Marketing
          </Typography>
        </Grid>
      </Grid>
    </Container>
  );
}

export default SixPlan;
