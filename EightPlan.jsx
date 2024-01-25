import React from "react";
import {
  Container,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Box,
} from "@mui/material";
import { ExpandMore } from "@mui/icons-material";

const EightPlan = () => {
  return (
    <Container maxWidth="lg" sx={{ pb: "100px" }}>
      <Box p={2}>
        <Accordion
          sx={{
            borderRadius: "20px",
            background: "transparent",
            boxShadow: "0px 0px 35px 0px rgb(140 152 164 / 13%)",
            marginBottom: "20px",
            "&.MuiAccordion-root:before": {
              display: "none",
            },
          }}
        >
          <AccordionSummary expandIcon={<ExpandMore />} sx={{ py: 2 }}>
            <Typography
              fontFamily="Poppins"
              fontSize="17px"
              fontWeight="700"
              color="#000"
              letterSpacing="0.5px"
            >
              Why choose onboarding?
            </Typography>
          </AccordionSummary>
          <AccordionDetails sx={{ p: 2 }}>
            <Typography
              fontSize="16px"
              fontFamily="Open Sans"
              color="#7f7f7f"
              lineHeight="26px"
              sx={{ overflowWrap: "break-word" }}
            >
              Stay focused on growing your business with our onboarding
              packages. We take out all the work of setting up your complete
              profile. We’ll make sure you get all the advanced features in
              place.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion
          sx={{
            borderRadius: "20px",
            background: "transparent",
            boxShadow: "0px 0px 35px 0px rgb(140 152 164 / 13%)",
            marginBottom: "20px",
            "&.MuiAccordion-root:before": {
              display: "none",
            },
          }}
        >
          <AccordionSummary expandIcon={<ExpandMore />} sx={{ py: 2 }}>
            <Typography
              fontFamily="Poppins"
              fontSize="17px"
              fontWeight="700"
              color="#000"
              letterSpacing="0.5px"
            >
              Which package includes video?
            </Typography>
          </AccordionSummary>
          <AccordionDetails sx={{ p: 2 }}>
            <Typography
              fontSize="16px"
              fontFamily="Open Sans"
              color="#7f7f7f"
              lineHeight="26px"
              sx={{ overflowWrap: "break-word" }}
            >
              Our Elite onboarding package includes a video production service.
              We will come to your location and shoot footage for 1-hour to
              develop a 30-second brand video that you can use to drive
              customers.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion
          sx={{
            borderRadius: "20px",
            background: "transparent",
            boxShadow: "0px 0px 35px 0px rgb(140 152 164 / 13%)",
            marginBottom: "20px",
            "&.MuiAccordion-root:before": {
              display: "none",
            },
          }}
        >
          <AccordionSummary expandIcon={<ExpandMore />} sx={{ py: 2 }}>
            <Typography
              fontFamily="Poppins"
              fontSize="17px"
              fontWeight="700"
              color="#000"
              letterSpacing="0.5px"
            >
              I have photos, can I use those?
            </Typography>
          </AccordionSummary>
          <AccordionDetails sx={{ p: 2 }}>
            <Typography
              fontSize="16px"
              fontFamily="Open Sans"
              color="#7f7f7f"
              lineHeight="26px"
              sx={{ overflowWrap: "break-word" }}
            >
              Yes, if you have your own photos and video, we can use that in
              your complete profile setup.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion
          sx={{
            borderRadius: "20px",
            background: "transparent",
            boxShadow: "0px 0px 35px 0px rgb(140 152 164 / 13%)",
            marginBottom: "20px",
            "&.MuiAccordion-root:before": {
              display: "none",
            },
          }}
        >
          <AccordionSummary expandIcon={<ExpandMore />} sx={{ py: 2 }}>
            <Typography
              fontFamily="Poppins"
              fontSize="17px"
              fontWeight="700"
              color="#000"
              letterSpacing="0.5px"
            >
              Which package should I choose?
            </Typography>
          </AccordionSummary>
          <AccordionDetails sx={{ p: 2 }}>
            <Typography
              fontSize="16px"
              fontFamily="Open Sans"
              color="#7f7f7f"
              lineHeight="26px"
              sx={{ overflowWrap: "break-word" }}
            >
              If you are just looking for a basic setup, the Featured package
              will work just fine. If you are looking for advanced setup and
              features, you should choose Signature. If you want to stand apart
              from your competition, choose Elite, where we include professional
              photography and video for your profile.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion
          sx={{
            borderRadius: "20px",
            background: "transparent",
            boxShadow: "0px 0px 35px 0px rgb(140 152 164 / 13%)",
            "&.MuiAccordion-root:before": {
              display: "none",
            },
          }}
        >
          <AccordionSummary expandIcon={<ExpandMore />} sx={{ py: 2 }}>
            <Typography
              fontFamily="Poppins"
              fontSize="17px"
              fontWeight="700"
              color="#000"
              letterSpacing="0.5px"
            >
              Do I Own The Video You Develop?
            </Typography>
          </AccordionSummary>
          <AccordionDetails sx={{ p: 2 }}>
            <Typography
              fontSize="16px"
              fontFamily="Open Sans"
              color="#7f7f7f"
              lineHeight="26px"
              sx={{ overflowWrap: "break-word" }}
            >
              Yes! We will use your video in your business profile, but you own
              the video content. You can share it on your website, in your
              social media, or other marketing efforts. Same thing with the
              photo shoot, we will send you all your photos after your profile
              is complete.
            </Typography>
          </AccordionDetails>
        </Accordion>
      </Box>
    </Container>
  );
};

export default EightPlan;
