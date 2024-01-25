import React, { useState } from "react";
import {
  Container,
  Typography,
  Box,
  Grid,
  Avatar,
  Card,
  CardContent,
  Button,
  Divider,
  Stack,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { FiSquare } from "react-icons/fi";
import { TiTick } from "react-icons/ti";
import { Check } from "@mui/icons-material";
import FomePlan from "./FomePlan";

function Seven() {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
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
          Advanced Onboarding Options
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
          Choose Which Plan Is Right For You!
        </Typography>
        <Typography
          align="center"
          color="#718096"
          sx={{
            fontFamily: "Fira Sans",
            paddingTop: "15px",
            paddingBottom: "15px",
          }}
        >
          Choose from three options of onboarding to meet your needs and get
          your Yougoz profile up and running.
        </Typography>
      </Box>
      <br />
      <Grid container spacing={4} bgcolor={"#fff"} borderRadius={"10px"}>
        <Grid item sm={12} md={6} lg={4}>
          <Box
            bgcolor={"#fff"}
            boxShadow={"0px 0px 35px 0px rgb(140 152 164 / 13%)"}
            borderRadius={"10px"}
            paddingBottom={"50px"}
          >
            <Stack
              direction={"row"}
              alignItems={"center"}
              mb={"20px"}
              p={"30px"}
            >
              <IconButton
                sx={{
                  bgcolor: "#edf2f7",
                  p: 3,
                  borderRadius: "20px",
                  color: "#718096",
                  mr: "15px",
                }}
              >
                <FiSquare style={{ fontSize: "28px" }} />
              </IconButton>
              <Box>
                <Typography
                  component={"h6"}
                  fontSize={"1.25rem"}
                  fontWeight={"bold"}
                  fontFamily={"Poppins"}
                >
                  Featured
                </Typography>
                <Typography
                  component={"h6"}
                  fontSize={"30px"}
                  fontWeight={"bold"}
                  fontFamily={"Open Sans"}
                  lineHeight={"1.8em"}
                  color={"#2D3748"}
                >
                  $100
                  <sub
                    style={{
                      color: "#718096",
                      fontFamily: "Poppins",
                      fontSize: "14px",
                      fontWeight: 400,
                    }}
                  >
                    /fee
                  </sub>
                </Typography>
              </Box>
            </Stack>
            <Divider variant="middle" sx={{ py: "15px", mb: "20px" }} />
            <Typography
              component={"p"}
              fontSize={"14px"}
              fontFamily={"Fira Sans"}
              lineHeight={"1.8em"}
              display={"flex"}
              justifyContent={"center"}
              color={"#718096"}
              mb={"8px"}
              sx={{ overflowWrap: "break-word" }}
            >
              Basic setup to get you started
            </Typography>
            <List>
              <Stack>
                <ListItem>
                  <ListItemIcon>
                    <TiTick
                      style={{
                        color: "#a0aec0",
                      }}
                    />
                  </ListItemIcon>
                  <ListItemText
                    primary={
                      <Typography
                        sx={{
                          fontFamily: "Poppins",
                          fontSize: "14px",
                          fontWeight: "700",
                          lineHeight: "1.8em",
                        }}
                      >
                        Full Profile Integration
                      </Typography>
                    }
                  />
                </ListItem>
              </Stack>
              <ListItem>
                <ListItemIcon>
                  <TiTick
                    style={{
                      color: "#a0aec0",
                    }}
                  />
                </ListItemIcon>
                <ListItemText
                  primary={
                    <Typography
                      sx={{
                        fontFamily: "Poppins",
                        fontSize: "14px",
                        fontWeight: "700",
                        lineHeight: "1.8em",
                      }}
                    >
                      Frequently Asked Questions
                    </Typography>
                  }
                />
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <TiTick
                    style={{
                      color: "#a0aec0",
                    }}
                  />
                </ListItemIcon>
                <ListItemText
                  primary={
                    <Typography
                      sx={{
                        fontFamily: "Poppins",
                        fontSize: "14px",
                        fontWeight: "700",
                        lineHeight: "1.8em",
                      }}
                    >
                      Few Services Listed
                    </Typography>
                  }
                />
              </ListItem>
            </List>
            <Box
              sx={{
                paddingTop: "10px",
                display: "flex",
                justifyContent: "center",
                paddingBottom: "10px",
              }}
            >
              <Dialog
                open={open}
                onClose={handleClose}
                fullWidth
                maxWidth={"lg"}
                sx={{ p: 3 }}
              >
                <FomePlan />
              </Dialog>
              <Button
                variant="contained"
                paddingBottom="25px"
                sx={{
                  backgroundColor: "black",
                  color: "#fff",
                  borderRadius: "20px",
                  fontSize: "16px",
                  padding: "2% 25%",
                  textTransform: "capitalize",
                }}
                onClick={handleClickOpen}
              >
                Choose Featured
              </Button>
            </Box>
          </Box>
        </Grid>
        <Grid item sm={12} md={6} lg={4}>
          <Box
            bgcolor={"#000"}
            boxShadow={"0px 0px 35px 0px rgb(140 152 164 / 13%)"}
            borderRadius={"10px"}
            paddingBottom={"30px"}
          >
            <Stack
              direction={"row"}
              alignItems={"center"}
              mb={"20px"}
              p={"30px"}
            >
              <IconButton
                sx={{
                  bgcolor: "#34c4f9",
                  p: 3,
                  borderRadius: "20px",
                  color: "#718096",
                  mr: "15px",
                }}
              >
                <FiSquare style={{ fontSize: "28px", color: "white" }} />
              </IconButton>
              <Box>
                <Typography
                  component={"h6"}
                  fontSize={"1.25rem"}
                  fontWeight={"bold"}
                  fontFamily={"Poppins"}
                  color={"#fff"}
                >
                  Signature
                </Typography>
                <Typography
                  component={"h6"}
                  fontSize={"30px"}
                  fontWeight={"bold"}
                  fontFamily={"Open Sans"}
                  lineHeight={"1.8em"}
                  color={"#fff"}
                >
                  $350
                  <sub
                    style={{
                      color: "#718096",
                      fontFamily: "Poppins",
                      fontSize: "14px",
                      fontWeight: 400,
                      color: "#fff",
                    }}
                  >
                    /fee
                  </sub>
                </Typography>
              </Box>
            </Stack>
            <Divider variant="middle" color={"white"} sx={{ mb: "20px" }} />
            <Typography
              component={"p"}
              fontSize={"14px"}
              fontFamily={"Fira Sans"}
              display={"flex"}
              justifyContent={"center"}
              lineHeight={"1.8em"}
              color={"#718096"}
              mb={"8px"}
              sx={{ overflowWrap: "break-word" }}
            >
              Advanced setup to get you moving
            </Typography>
            <List>
              <ListItem>
                <ListItemIcon>
                  <TiTick
                    style={{
                      color: "#a0aec0",
                    }}
                  />
                </ListItemIcon>
                <ListItemText
                  primary={
                    <Typography
                      sx={{
                        fontFamily: "Poppins",
                        fontSize: "14px",
                        fontWeight: "700",
                        lineHeight: "1.8em",
                        color: "#fff",
                      }}
                    >
                      Advanced Profile Integration
                    </Typography>
                  }
                />
              </ListItem>

              <ListItem>
                <ListItemIcon>
                  <TiTick
                    style={{
                      color: "#a0aec0",
                    }}
                  />
                </ListItemIcon>
                <ListItemText
                  primary={
                    <Typography
                      sx={{
                        fontFamily: "Poppins",
                        fontSize: "14px",
                        fontWeight: "700",
                        lineHeight: "1.8em",
                        color: "#fff",
                      }}
                    >
                      Frequently Asked Questions
                    </Typography>
                  }
                />
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <TiTick
                    style={{
                      color: "#a0aec0",
                    }}
                  />
                </ListItemIcon>
                <ListItemText
                  primary={
                    <Typography
                      sx={{
                        fontFamily: "Poppins",
                        fontSize: "14px",
                        fontWeight: "700",
                        lineHeight: "1.8em",
                        color: "#fff",
                      }}
                    >
                      Few Services Listed
                    </Typography>
                  }
                />
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <TiTick
                    style={{
                      color: "#a0aec0",
                    }}
                  />
                </ListItemIcon>
                <ListItemText
                  primary={
                    <Typography
                      sx={{
                        fontFamily: "Poppins",
                        fontSize: "14px",
                        fontWeight: "700",
                        lineHeight: "1.8em",
                        color: "#fff",
                      }}
                    >
                      1-Hour Photoshoot
                    </Typography>
                  }
                />
              </ListItem>
            </List>
            <Box
              sx={{
                paddingTop: "10px",
                display: "flex",
                justifyContent: "center",
                paddingBottom: "10px",
              }}
            >
              <Button
                variant="contained"
                paddingBottom="25px"
                sx={{
                  backgroundColor: "#34c4f9",
                  color: "#fff",
                  borderRadius: "20px",
                  fontSize: "16px",
                  padding: "2% 25%",
                  textTransform: "capitalize",
                }}
                onClick={handleClickOpen}
              >
                Choose Signature
              </Button>
            </Box>
          </Box>
        </Grid>
        <Grid item sm={12} md={6} lg={4}>
          <Box
            bgcolor={"#fff"}
            boxShadow={"0px 0px 35px 0px rgb(140 152 164 / 13%)"}
            borderRadius={"10px"}
          >
            <Stack
              direction={"row"}
              alignItems={"center"}
              mb={"10px"}
              p={"30px"}
            >
              <IconButton
                sx={{
                  bgcolor: "#edf2f7",
                  p: 3,
                  borderRadius: "20px",
                  color: "#718096",
                  mr: "15px",
                }}
              >
                <FiSquare style={{ fontSize: "28px" }} />
              </IconButton>
              <Box>
                <Typography
                  component={"h6"}
                  fontSize={"1.25rem"}
                  fontWeight={"bold"}
                  fontFamily={"Poppins"}
                >
                  Elite
                </Typography>
                <Typography
                  component={"h6"}
                  fontSize={"30px"}
                  fontWeight={"bold"}
                  fontFamily={"Open Sans"}
                  lineHeight={"1.8em"}
                  color={"#2D3748"}
                >
                  $750
                  <sub
                    style={{
                      color: "#718096",
                      fontFamily: "Poppins",
                      fontSize: "14px",
                      fontWeight: 400,
                    }}
                  >
                    /fee
                  </sub>
                </Typography>
              </Box>
            </Stack>
            <Divider variant="middle" sx={{ mb: "10px" }} />
            <Typography
              component={"p"}
              fontSize={"14px"}
              fontFamily={"Fira Sans"}
              display={"flex"}
              justifyContent={"center"}
              lineHeight={"1.6em"}
              color={"#718096"}
              mb={"8px"}
              sx={{ overflowWrap: "break-word" }}
            >
              Most advanced package puts you ahead
            </Typography>
            <List>
              <Stack>
                <ListItem>
                  <ListItemIcon>
                    <TiTick
                      style={{
                        color: "#a0aec0",
                      }}
                    />
                  </ListItemIcon>
                  <ListItemText
                    primary={
                      <Typography
                        sx={{
                          fontFamily: "Poppins",
                          fontSize: "14px",
                          fontWeight: "700",
                          lineHeight: "1.2em",
                        }}
                      >
                        Complete Profile Integration
                      </Typography>
                    }
                  />
                </ListItem>
              </Stack>
              <ListItem>
                <ListItemIcon>
                  <TiTick
                    style={{
                      color: "#a0aec0",
                    }}
                  />
                </ListItemIcon>
                <ListItemText
                  primary={
                    <Typography
                      sx={{
                        fontFamily: "Poppins",
                        fontSize: "14px",
                        fontWeight: "700",
                        lineHeight: "1.2em",
                      }}
                    >
                      Frequently Asked Questions
                    </Typography>
                  }
                />
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <TiTick
                    style={{
                      color: "#a0aec0",
                    }}
                  />
                </ListItemIcon>
                <ListItemText
                  primary={
                    <Typography
                      sx={{
                        fontFamily: "Poppins",
                        fontSize: "14px",
                        fontWeight: "700",
                        lineHeight: "1.2em",
                      }}
                    >
                      Full Services Listing
                    </Typography>
                  }
                />
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <TiTick
                    style={{
                      color: "#a0aec0",
                    }}
                  />
                </ListItemIcon>
                <ListItemText
                  primary={
                    <Typography
                      sx={{
                        fontFamily: "Poppins",
                        fontSize: "14px",
                        fontWeight: "700",
                        lineHeight: "1.2em",
                      }}
                    >
                      1-Hour Photoshoot
                    </Typography>
                  }
                />
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <TiTick
                    style={{
                      color: "#a0aec0",
                    }}
                  />
                </ListItemIcon>
                <ListItemText
                  primary={
                    <Typography
                      sx={{
                        fontFamily: "Poppins",
                        fontSize: "14px",
                        fontWeight: "700",
                        lineHeight: "1.6em",
                      }}
                    >
                      Professional 30-second Brand Video
                    </Typography>
                  }
                />
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <TiTick
                    style={{
                      color: "#a0aec0",
                    }}
                  />
                </ListItemIcon>
                <ListItemText
                  primary={
                    <Typography
                      sx={{
                        fontFamily: "Poppins",
                        fontSize: "14px",
                        fontWeight: "700",
                        lineHeight: "1.2em",
                      }}
                    >
                      6-Month Free Yougoz Membership
                    </Typography>
                  }
                />
              </ListItem>
            </List>
            <Box
              sx={{
                paddingTop: "10px",
                display: "flex",
                justifyContent: "center",
                paddingBottom: "10px",
              }}
            >
              <Button
                variant="contained"
                paddingBottom="15px"
                sx={{
                  backgroundColor: "black",
                  color: "#fff",
                  padding: "2% 30%",
                  borderRadius: "20px",
                  textTransform: "capitalize",
                  fontSize: "16px",
                }}
                onClick={handleClickOpen}
              >
                Choose Elite
              </Button>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
}

export default Seven;
