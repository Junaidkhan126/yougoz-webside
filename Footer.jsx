// import * as React from "react";
// import { styled } from "@mui/material/styles";
// import Box from "@mui/material/Box";
// import Paper from "@mui/material/Paper";
// import Grid from "@mui/material/Grid";
// import { Stack, Typography } from "@mui/material";

// const Item = styled(Paper)(({ theme }) => ({
//   backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
//   ...theme.typography.body2,
//   padding: theme.spacing(1),
//   textAlign: "center",
//   color: theme.palette.text.secondary,
// }));

// export default function Footer() {
//   return (
//     <Box>
//         <Grid>
//       <Stack>
//         <Typography>Best Yoga Studios in Boston, MA</Typography>
//         <Typography>Best Gyms in Boston, MA</Typography>
//       </Stack>
//       </Grid>
//       <Grid container>
//         <Grid item>
//           <Item>Best Yoga Studios in Boston, MA</Item>
//         </Grid>
//         <Grid item xs>
//           <Item>Best Gyms in Boston, MA</Item>
//         </Grid>
//         <Grid item xs>
//           <Item>Barber Shops in Boston, MA</Item>
//         </Grid>
//       </Grid>
//       <Box>
//         <Grid>
//           <Grid item>
//             <Item>Best Health Coaching in Boston, MA</Item>
//           </Grid>
//           <Grid item>
//             <Item>Best Spas in Boston, MA</Item>
//           </Grid>
//           <Grid item>
//             <Item>Best Hair Salons in Boston, MA</Item>
//           </Grid>
//         </Grid>
//       </Box>
//     </Box>

//   );
// }

import {
  Apple,
  Facebook,
  FacebookSharp,
  Instagram,
  Pinterest,
  Twitter,
} from "@mui/icons-material";
import {
  Avatar,
  Container,
  Divider,
  Grid,
  Link,
  Box,
  Typography,
} from "@mui/material";
import React from "react";

const Footer = () => {
  return (
    <div style={{ backgroundColor: "#000",}}>
      <Container maxWidth="lg" sx={{padding:"30px 0"}}>
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
                pt:"4px",
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

          <Avatar sx={{ color: "#df7541", mt: "8px" }}>
            <FacebookSharp />
          </Avatar>
          <Avatar sx={{ color: "#df7541", mt: "8px" }}>
            <Twitter />
          </Avatar>
          <Avatar sx={{ color: "#df7541", mt: "8px" }}>
            <Instagram />
          </Avatar>
          <Avatar sx={{ color: "#df7541", mt: "8px" }}>
            <Pinterest />
          </Avatar>
        </Grid>
      </Container>
      
    </div>
  );
};

export default Footer;
