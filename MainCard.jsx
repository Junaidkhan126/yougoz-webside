import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import ButtonBase from "@mui/material/ButtonBase";
import Typography from "@mui/material/Typography";
import { CancelOutlined, TaskAlt } from "@mui/icons-material";
import { Button } from "@mui/material";
import LonBar from "./LonBar";

const images = [
  {
    url: "https://yougoz.com/wp-content/uploads/2017/03/determined-girl-standing-in-ready-to-run-position-FNSETPC-300x200.jpg",
    title: "BUSINESS",
    width: "40%",
  },
  {
    url: "https://yougoz.com/wp-content/uploads/2019/09/1708.jpg",
    title: "PROFESSIONAL",
    width: "30%",
  },
  {
    url: "https://yougoz.com/wp-content/uploads/2016/02/closeup-of-healthy-diet-and-weight-loss-concept-PALSW2Z-300x209.jpg",
    title: "BASIC FREE",
    width: "30%",
  },
];

const ImageButton = styled(ButtonBase)(({ theme }) => ({
  position: "relative",
  height: 200,
  [theme.breakpoints.down("sm")]: {
    width: "100% !important", // Overrides inline-style
    height: 100,
  },
  "&:hover, &.Mui-focusVisible": {
    zIndex: 1,
    "& .MuiImageBackdrop-root": {
      opacity: 0.15,
    },
    "& .MuiImageMarked-root": {
      opacity: 0,
    },
    "& .MuiTypography-root": {
      border: "4px solid currentColor",
    },
  },
}));

const ImageSrc = styled("span")({
  position: "absolute",
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  backgroundSize: "cover",
  backgroundPosition: "center 40%",
});

const Image = styled("span")(({ theme }) => ({
  position: "absolute",
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  color: theme.palette.common.white,
}));

const ImageBackdrop = styled("span")(({ theme }) => ({
  position: "absolute",
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  backgroundColor: theme.palette.common.black,
  opacity: 0.4,
  transition: theme.transitions.create("opacity"),
}));

const ImageMarked = styled("span")(({ theme }) => ({
  height: 3,
  width: 18,
  backgroundColor: theme.palette.common.white,
  position: "absolute",
  bottom: -2,
  left: "calc(50% - 9px)",
  transition: theme.transitions.create("opacity"),
}));

export default function MainCard() {
  return (
    <Box>
      <Box sx={{display:"flex",alignItems:"center"}}>
        <TaskAlt sx={{ color: "#a9e2f4", width: "18px" }} />
        <Typography>Duration : 30 days</Typography>
      </Box>
      <Box sx={{display:"flex",alignItems:"center"}}>
      <TaskAlt sx={{ color: "#a9e2f4", width: "18px" }} />
      <Typography>
         Map Display{" "}
      </Typography>
      </Box>
      <Box sx={{display:"flex",alignItems:"center"}}>
      <TaskAlt sx={{ color: "#a9e2f4", width: "18px" }} />
      <Typography>
        Contact Display
      </Typography>
      </Box>
      <Box sx={{display:"flex",alignItems:"center"}}>
      <TaskAlt sx={{ color: "#a9e2f4", width: "18px" }} />
      <Typography>
        Image Gallery
      </Typography>
      </Box>
      <Box sx={{display:"flex",alignItems:"center"}}>
     <CancelOutlined sx={{ color: "red", width: "18px" }} />
      <Typography>
        video
      </Typography>
      </Box>
      <Box sx={{display:"flex",alignItems:"center"}}>
      <TaskAlt sx={{ color: "#a9e2f4", width: "18px" }} />
      <Typography>
         Business Tagline
      </Typography>
      </Box>
      <Box sx={{display:"flex",alignItems:"center"}}>
      <TaskAlt sx={{ color: "#a9e2f4", width: "18px" }} />
      <Typography>
         Location
      </Typography>
         </Box>
         <Box sx={{display:"flex",alignItems:"center"}}>
         <CancelOutlined sx={{ color: "red", width: "18px" }} />
      <Typography>
        Website
      </Typography>
      </Box>
      <Box sx={{display:"flex",alignItems:"center"}}>
      <CancelOutlined sx={{ color: "red", width: "18px" }} />
      <Typography>
        Social Links
      </Typography>
      </Box>
      <Box sx={{display:"flex",alignItems:"center"}}>
      <TaskAlt sx={{ color: "#a9e2f4", width: "18px" }} />
      <Typography>
        FAQ
      </Typography>
      </Box>
      <Box sx={{display:"flex",alignItems:"center"}}>
      <TaskAlt sx={{ color: "#a9e2f4", width: "18px" }} /> 
      <Typography>
       Price Range
      </Typography>
      </Box>
      <Box sx={{display:"flex",alignItems:"center"}}>
      <CancelOutlined sx={{ color: "red", width: "18px" }} />
      <Typography>
        Tags/Keywords
      </Typography>
      </Box>
      <Box sx={{display:"flex",alignItems:"center"}}>
      <TaskAlt sx={{ color: "#a9e2f4", width: "18px" }} /> 
      <Typography>
      Business Hours
      </Typography>
      </Box>
      <Box sx={{display:"flex",alignItems:"center"}}>
      <TaskAlt sx={{ color: "#a9e2f4", width: "18px" }} />
      <Typography>
        Service
      </Typography>
      </Box>
      <Box sx={{display:"flex",alignItems:"center"}}>
      <CancelOutlined sx={{ color: "red", width: "18px" }} />
      <Typography>
        Announcement
      </Typography>
       </Box>
       <Box sx={{display:"flex",alignItems:"center"}}>
       <CancelOutlined sx={{ color: "red", width: "18px" }} />{" "}
      <Typography>
        Deals-Offers-Discounts
      </Typography>
      </Box>
      <Box sx={{display:"flex",alignItems:"center"}}>
      <CancelOutlined sx={{ color: "red", width: "18px" }} />
      <Typography>
         Hide competitors
        Ads
      </Typography>
      </Box>
      <Box sx={{display:"flex",alignItems:"center"}}>
      <CancelOutlined sx={{ color: "red", width: "18px" }} />
      <Typography>
       Events
      </Typography>
      </Box>
      <Box sx={{display:"flex",alignItems:"center"}}>
      <CancelOutlined sx={{ color: "red", width: "18px" }} />
      <Typography>
        Bookings
      </Typography>
      </Box>
      <Box sx={{display:"flex",alignItems:"center"}}>
      <CancelOutlined sx={{ color: "red", width: "18px" }} />
      <Typography>
         Lead Form
      </Typography>
      </Box>
      <Box sx={{display:"flex",alignItems:"center"}}>
      <CancelOutlined sx={{ color: "red", width: "18px" }} />
      <Typography>
        Hide Google Ads
      </Typography>
      </Box>
      
      <Button color="error">Contained</Button>
     <Button variant="outlined">Outlined</Button>
     <LonBar />
    </Box>
    
  );
}

