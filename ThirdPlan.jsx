// import React from "react";
// import { Container, Typography, Box, Grid, Button, Stack } from "@mui/material";

// function Third() {
//   return (
//     <Container maxWidth={"lg"}>
//       <Box
//         container
//         sx={{
//           background: "#000",
//           height: { md: "75vh", lg: "80vh", xl: "60vh"  },
//           borderRadius: "20px",
//         }}
//       >
//         <Grid item md={12}>
//           <Typography align="center" color={"#718096"} sx={{ padding: "20px" }}>
//             Get access to unlimited resources
//           </Typography>
//           <Typography
//             align="center"
//             color={"#fff"}
//             component={"h2"}
//             fontWeight={700}
//             fontSize={"3rem"}
//             gutterBottom
//           >
//             Why Choose Our Onboarding?
//           </Typography>

//           <Grid
//             Container
//             sx={{
//               display: "flex",
//               justifyContent: "flex-start",
//               alignItems: "flex-start",
//               gap: 5,
//               p: 3,
//             }}
//           >
//             <Box>
//               <img
//                 src="https://yougoz.com/wp-content/uploads/2021/03/Screenshot_36.png"
//                 alt=""
//               />
//             </Box>
//             <Box>
//               <Typography
//                 component={"h3"}
//                 fontWeight={700}
//                 fontSize={"20px"}
//                 color={"white"}
//                 gutterBottom
//               >
//                 Saves You Time
//               </Typography>
//               <Typography
//                 variant="h6"
//                 fontSize={"1rem"}
//                 fontWeight={400}
//                 color={"#718096"}
//                 gutterBottom
//               >
//                 Saves you time and effort.
//               </Typography>
//             </Box>
//             <Grid item md={4}></Grid>
//             <img
//               src="https://yougoz.com/wp-content/uploads/2021/03/Screenshot_36.png"
//               alt=""
//             />
//             <Grid item md={4}>
//               <Typography
//                 component={"h3"}
//                 fontWeight={700}
//                 fontSize={"20px"}
//                 color={"white"}
//                 gutterBottom
//               >
//                 Stand Out
//               </Typography>
//               <Typography
//                 variant="h6"
//                 fontSize={"1rem"}
//                 fontWeight={400}
//                 color={"#718096"}
//                 gutterBottom
//               >
//                 Stand out with an impressive 'fully equiped' profile.
//               </Typography>
//             </Grid>
//             <img
//               src="https://yougoz.com/wp-content/uploads/2021/03/Screenshot_36.png"
//               alt=""
//             />
//             <Grid item md={4}>
//               <Typography
//                 component={"h3"}
//                 fontWeight={700}
//                 fontSize={"20px"}
//                 color={"white"}
//                 gutterBottom
//               >
//                 Free Membership
//               </Typography>
//               <Typography
//                 variant="h6"
//                 fontSize={"1rem"}
//                 fontWeight={400}
//                 color={"#718096"}
//                 gutterBottom
//               >
//                 Reduced or free Yougoz membership with certain packages.
//               </Typography>
//             </Grid>
//           </Grid>

//         </Grid>
//         <Grid
//             Container
//             sx={{
//               display: "flex",
//               justifyContent: "flex-start",
//               alignItems: "flex-start",
//               gap: 5,
//               p: 3,
//             }}
//           >
//             <Box>
//               <img
//                 src="https://yougoz.com/wp-content/uploads/2021/03/Screenshot_36.png"
//                 alt=""
//               />
//             </Box>
//             <Box>
//               <Typography
//                 component={"h3"}
//                 fontWeight={700}
//                 fontSize={"20px"}
//                 color={"white"}
//                 gutterBottom
//               >
//                 High-Impact Video
//               </Typography>
//               <Typography
//                 variant="h6"
//                 fontSize={"1rem"}
//                 fontWeight={400}
//                 color={"#718096"}
//                 gutterBottom
//               >
//                 Professional video shoot.
//               </Typography>
//             </Box>
//             <Grid item md={4}></Grid>
//             <img
//               src="https://yougoz.com/wp-content/uploads/2021/03/Screenshot_36.png"
//               alt=""
//             />
//             <Grid item md={4}>
//               <Typography
//                 component={"h3"}
//                 fontWeight={700}
//                 fontSize={"20px"}
//                 color={"white"}
//                 gutterBottom
//               >
//                 Brand PhotoShoot
//               </Typography>
//               <Typography
//                 variant="h6"
//                 fontSize={"1rem"}
//                 fontWeight={400}
//                 color={"#718096"}
//                 gutterBottom
//               >
//                 Develop an amazing photo gallery.
//               </Typography>
//             </Grid>
//             <img
//               src="https://yougoz.com/wp-content/uploads/2021/03/Screenshot_36.png"
//               alt=""
//             />
//             <Grid item md={4}>
//               <Typography
//                 component={"h3"}
//                 fontWeight={700}
//                 fontSize={"20px"}
//                 color={"white"}
//                 gutterBottom
//               >
//                 Tell Your Story
//               </Typography>
//               <Typography
//                 variant="h6"
//                 fontSize={"1rem"}
//                 fontWeight={400}
//                 color={"#718096"}
//                 gutterBottom
//               >
//               An amazing brand story inspires customers to take action.
//               </Typography>
//             </Grid>
//           </Grid>
//       </Box>
//     </Container>
//   );
// }
// export default Third;
import React from "react";
import { Container, Typography, Grid, Box } from "@mui/material";
function ThirdPlan() {
  return (
    <Container maxWidth="lg">
      <Box
        sx={{
          background: "#000",
          height: { md: "65vh", lg: "65vh", xl: "60vh" },
          borderRadius: "20px",
          padding: "20px",
        }}
      >
        <Typography align="center" color="#718096" fontFamily={"Poppins"}>
          Get access to unlimited resources
        </Typography>
        <Typography
          align="center"
          color="#fff"
          fontFamily={"Poppins"}
          component="h2"
          sx={{
            color: "#fff",
            fontWeight: 700,
            fontSize: "3rem",
            fontFamily: "Poppins",
            marginBottom: "20px",
          }}
        >
          Why Choose Our Onboarding?
        </Typography>

        <Grid container>
          {[
            {
              imageSrc:
                "https://yougoz.com/wp-content/uploads/2021/03/Screenshot_36.png",
              title: "Saves You Time",
              description: "Saves you time and effort.",
            },
            {
              imageSrc:
                "https://yougoz.com/wp-content/uploads/2021/03/Screenshot_36.png",
              title: "Stand Out",
              description:
                "Stand out with an impressive 'fully equipped' profile.",
            },
            {
              imageSrc:
                "https://yougoz.com/wp-content/uploads/2021/03/Screenshot_36.png",
              title: "Free Membership",
              description:
                "Reduced or free Yougoz membership with certain packages.",
            },
            {
              imageSrc:
                "https://yougoz.com/wp-content/uploads/2021/03/Screenshot_36.png",
              title: "High-Impact Video",
              description: "Professional video shoot.",
            },
            {
              imageSrc:
                "https://yougoz.com/wp-content/uploads/2021/03/Screenshot_36.png",
              title: "Brand PhotoShoot",
              description: "Develop an amazing photo gallery.",
            },
            {
              imageSrc:
                "https://yougoz.com/wp-content/uploads/2021/03/Screenshot_36.png",
              title: "Tell Your Story",
              description:
                "An amazing brand story inspires customers to take action.",
            },
          ].map((feature, index) => (
            <Grid item key={index} md={4} xs={12}>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "flex-start",
                  alignItems: "flex-start",
                  gap: 5,
                  padding: "20px",
                }}
              >
                <img
                  src={
                    "https://yougoz.com/wp-content/uploads/2021/03/Screenshot_36.png"
                  }
                  alt=""
                  style={{ width: "40%", maxWidth: "50px" }}
                />
                <Box>
                  <Typography
                    component="h3"
                    fontFamily={"Poppins"}
                    sx={{
                      fontWeight: 700,
                      fontSize: "20px",
                      color: "white",
                      fontFamily: "Poppins",
                      marginBottom: "10px",
                    }}
                  >
                    {feature.title}
                  </Typography>
                  <Typography
                    variant="h6"
                    fontFamily={"Fira Sans"}
                    sx={{
                      fontSize: "1rem",
                      fontWeight: 400,
                      fontFamily: "Fira Sans",
                      color: "#718096",
                      marginBottom: "10px",
                    }}
                  >
                    {feature.description}
                  </Typography>
                </Box>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Container>
  );
}

export default ThirdPlan;
